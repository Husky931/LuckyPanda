import { NextResponse } from "next/server"
import { headers } from "next/headers"
import {
    SHIPPING_COUNTRIES,
    SHIPPING_COUNTRY_CODES,
    getRegionForCountry
} from "@/app/lib/shipping"
import {
    getStripePriceId,
    getStripePriceIdEnvName
} from "@/app/lib/stripe-config"
import { limiter } from "@/app/lib/rate-limit"
import { getValidOrigin, getClientIp } from "@/app/lib/request-utils"

type CheckoutRequest = {
    plan?: string
    country?: string
}

export async function POST(request: Request) {
    let body: CheckoutRequest
    try {
        body = await request.json()
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        )
    }
    const plan = typeof body.plan === "string" ? body.plan : "single"
    const country =
        typeof body.country === "string" ? body.country.toUpperCase() : ""

    const secretKey =
        process.env.STRIPE_SECRET_KEY ?? process.env.STRIPE_SECRET_KEY_TEST
    const isLiveKey = Boolean(secretKey?.startsWith("sk_live_"))
    const missing: string[] = []
    if (!secretKey) missing.push("STRIPE_SECRET_KEY or STRIPE_SECRET_KEY_TEST")

    if (missing.length) {
        return NextResponse.json(
            {
                error: `Stripe configuration is missing: ${missing.join(", ")}`
            },
            { status: 500 }
        )
    }
    if (
        plan !== "single" &&
        plan !== "plan-3" &&
        plan !== "plan-6" &&
        plan !== "plan-12"
    ) {
        return NextResponse.json(
            { error: "This plan is not available yet." },
            { status: 400 }
        )
    }
    if (!country || !SHIPPING_COUNTRY_CODES.has(country)) {
        return NextResponse.json(
            { error: "Please select a supported shipping country." },
            { status: 400 }
        )
    }

    const headersList = await headers()
    const origin = getValidOrigin(headersList.get("origin"))

    try {
        const ip = getClientIp(headersList)
        await limiter.check(ip, 10) // 10 checkout attempts per minute
    } catch (error) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        )
    }
    const params = new URLSearchParams()
    params.set("mode", "payment")
    params.set(
        "success_url",
        `${origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`
    )
    params.set("cancel_url", `${origin}/products/monthly-snack-box`)
    SHIPPING_COUNTRIES.forEach((item) => {
        params.append(
            "shipping_address_collection[allowed_countries][]",
            item.code
        )
    })
    params.set("phone_number_collection[enabled]", "true")
    const region = getRegionForCountry(country)
    if (!region) {
        return NextResponse.json(
            { error: "Invalid shipping country region." },
            { status: 400 }
        )
    }
    const isEurope = region === "europe"
    const planKey = plan as "plan-3" | "plan-6" | "plan-12" | "single"
    const priceId = getStripePriceId(planKey, region, isLiveKey)
    if (!priceId) {
        missing.push(getStripePriceIdEnvName(planKey, region, isLiveKey))
    }
    if (missing.length) {
        return NextResponse.json(
            {
                error: `Stripe configuration is missing: ${missing.join(", ")}`
            },
            { status: 500 }
        )
    }
    if (plan === "single") {
        const shippingRateEurope = isLiveKey
            ? process.env.STRIPE_EUROPE_SHIPPING_ID
            : process.env.STRIPE_EUROPE_SHIPPING_TEST_ID
        const shippingRateAsia = isLiveKey
            ? process.env.STRIPE_ASIA_SHIPPING_ID
            : process.env.STRIPE_ASIA_SHIPPING_TEST_ID
        if (!shippingRateEurope || !shippingRateAsia) {
            return NextResponse.json(
                {
                    error:
                        "Stripe shipping configuration is missing: " +
                        [
                            !shippingRateEurope
                                ? isLiveKey
                                    ? "STRIPE_EUROPE_SHIPPING_ID"
                                    : "STRIPE_EUROPE_SHIPPING_TEST_ID"
                                : null,
                            !shippingRateAsia
                                ? isLiveKey
                                    ? "STRIPE_ASIA_SHIPPING_ID"
                                    : "STRIPE_ASIA_SHIPPING_TEST_ID"
                                : null
                        ]
                            .filter(Boolean)
                            .join(", ")
                },
                { status: 500 }
            )
        }
        const shippingRateId =
            region === "europe" ? shippingRateEurope : shippingRateAsia
        params.append(
            "shipping_options[0][shipping_rate]",
            shippingRateId as string
        )
    }
    const safePriceId = priceId as string
    params.set("line_items[0][price]", safePriceId)
    params.set("line_items[0][quantity]", "1")
    params.set("metadata[plan]", plan)

    const response = await fetch(
        "https://api.stripe.com/v1/checkout/sessions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${secretKey}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        }
    )

    let data
    try {
        data = await response.json()
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid response from Stripe API." },
            { status: 500 }
        )
    }

    if (!response.ok) {
        return NextResponse.json(
            { error: data?.error?.message ?? "Stripe request failed." },
            { status: 500 }
        )
    }

    if (!data?.url) {
        return NextResponse.json(
            { error: "Missing checkout URL from Stripe." },
            { status: 500 }
        )
    }

    return NextResponse.json({ url: data.url })
}
