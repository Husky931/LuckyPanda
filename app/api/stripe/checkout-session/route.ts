import { NextResponse } from "next/server"
import { headers } from "next/headers"

type CheckoutRequest = {
    plan?: string
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => ({}))) as CheckoutRequest
    const plan = typeof body.plan === "string" ? body.plan : "single"

    if (plan !== "single") {
        return NextResponse.json(
            { error: "This plan is not available yet." },
            { status: 400 }
        )
    }

    const secretKey = process.env.STRIPE_SECRET_KEY_TEST
    const priceId = process.env.STRIPE_PRICE_SINGLE_BOX_ID
    const missing: string[] = []
    if (!secretKey) missing.push("STRIPE_SECRET_KEY_TEST")
    if (!priceId) missing.push("STRIPE_PRICE_SINGLE_BOX_ID")

    if (missing.length) {
        return NextResponse.json(
            {
                error: `Stripe configuration is missing: ${missing.join(", ")}`
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
    params.append("shipping_address_collection[allowed_countries][]", "DK")
    params.append("shipping_address_collection[allowed_countries][]", "FR")
    params.append("shipping_address_collection[allowed_countries][]", "DE")
    params.append("shipping_address_collection[allowed_countries][]", "GR")
    params.append("shipping_address_collection[allowed_countries][]", "IT")
    params.append("shipping_address_collection[allowed_countries][]", "NL")
    params.append("shipping_address_collection[allowed_countries][]", "PL")
    params.append("shipping_address_collection[allowed_countries][]", "PT")
    params.append("shipping_address_collection[allowed_countries][]", "ES")
    params.append("shipping_address_collection[allowed_countries][]", "SE")
    params.append("shipping_address_collection[allowed_countries][]", "GB")
    params.append("shipping_address_collection[allowed_countries][]", "AU")
    params.append("shipping_address_collection[allowed_countries][]", "IL")
    params.append("shipping_address_collection[allowed_countries][]", "JP")
    params.append("shipping_address_collection[allowed_countries][]", "MY")
    params.append("shipping_address_collection[allowed_countries][]", "NZ")
    params.append("shipping_address_collection[allowed_countries][]", "RU")
    params.append("shipping_address_collection[allowed_countries][]", "SA")
    params.append("shipping_address_collection[allowed_countries][]", "SG")
    params.append("shipping_address_collection[allowed_countries][]", "KR")
    params.append("shipping_address_collection[allowed_countries][]", "VN")
    params.set("phone_number_collection[enabled]", "true")
    const safePriceId = priceId as string
    params.set("line_items[0][price]", safePriceId)
    params.set("line_items[0][quantity]", "1")
    params.set("metadata[plan]", "single")

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
