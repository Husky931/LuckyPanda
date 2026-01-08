import { NextResponse } from "next/server"
import { headers } from "next/headers"
import {
    SHIPPING_COUNTRIES,
    SHIPPING_COUNTRY_CODES,
    getRegionForCountry
} from "@/app/lib/shipping"

type CheckoutRequest = {
    plan?: string
    country?: string
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => ({}))) as CheckoutRequest
    const plan = typeof body.plan === "string" ? body.plan : "single"
    const country =
        typeof body.country === "string" ? body.country.toUpperCase() : ""

    const secretKey =
        process.env.STRIPE_SECRET_KEY ?? process.env.STRIPE_SECRET_KEY_TEST
    const isLiveKey = Boolean(secretKey?.startsWith("sk_live_"))
    const shippingRateEurope = isLiveKey
        ? process.env.STRIPE_EUROPE_SHIPPING_ID
        : process.env.STRIPE_EUROPE_SHIPPING_TEST_ID
    const shippingRateAsia = isLiveKey
        ? process.env.STRIPE_ASIA_SHIPPING_ID
        : process.env.STRIPE_ASIA_SHIPPING_TEST_ID
    const priceId =
        plan === "plan-3"
            ? isLiveKey
                ? process.env.STRIPE_PRICE_3_MONTS_BOX_ID
                : process.env.STRIPE_PRICE_3_MONTS_BOX_ID_TEST
            : plan === "plan-6"
              ? isLiveKey
                  ? process.env.STRIPE_PRICE_6_MONTS_BOX_ID
                  : process.env.STRIPE_PRICE_6_MONTS_BOX_ID_TEST
              : plan === "plan-12"
                ? isLiveKey
                    ? process.env.STRIPE_PRICE_12_MONTS_BOX_ID
                    : process.env.STRIPE_PRICE_12_MONTS_BOX_ID_TEST
                : isLiveKey
                  ? process.env.STRIPE_PRICE_SINGLE_BOX_ID
                  : process.env.STRIPE_PRICE_SINGLE_BOX_ID_TEST
    const missing: string[] = []
    if (!secretKey) missing.push("STRIPE_SECRET_KEY or STRIPE_SECRET_KEY_TEST")
    if (!priceId) {
        missing.push(
            plan === "plan-3"
                ? isLiveKey
                    ? "STRIPE_PRICE_3_MONTS_BOX_ID"
                    : "STRIPE_PRICE_3_MONTS_BOX_ID_TEST"
                : plan === "plan-6"
                  ? isLiveKey
                      ? "STRIPE_PRICE_6_MONTS_BOX_ID"
                      : "STRIPE_PRICE_6_MONTS_BOX_ID_TEST"
                  : plan === "plan-12"
                    ? isLiveKey
                        ? "STRIPE_PRICE_12_MONTS_BOX_ID"
                        : "STRIPE_PRICE_12_MONTS_BOX_ID_TEST"
                    : isLiveKey
                      ? "STRIPE_PRICE_SINGLE_BOX_ID"
                      : "STRIPE_PRICE_SINGLE_BOX_ID_TEST"
        )
    }

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

    const origin =
        (await headers()).get("origin") ?? "https://luckypandatreats.com"
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
    const shippingRateId =
        region === "europe" ? shippingRateEurope : shippingRateAsia
    params.append(
        "shipping_options[0][shipping_rate]",
        shippingRateId as string
    )
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

    const data = await response.json()
    if (!response.ok) {
        return NextResponse.json(
            { error: data?.error?.message ?? "Stripe request failed." },
            { status: 500 }
        )
    }

    return NextResponse.json({ url: data.url })
}
