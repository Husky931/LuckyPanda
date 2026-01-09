import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import CTAButton from "@/app/components/CTAButton"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Order Confirmation | Lucky Panda",
    description: "Thanks for your order from Lucky Panda Treats.",
    alternates: {
        canonical: "/order-confirmation"
    }
}

type OrderConfirmationSearchParams = {
    session_id?: string
}

type StripeLineItem = {
    description?: string
    quantity?: number
    amount_total?: number
    currency?: string
}

type StripeCheckoutSession = {
    customer_details?: {
        email?: string
    }
    shipping_details?: {
        name?: string
        phone?: string
        address?: {
            line1?: string
            line2?: string
            city?: string
            postal_code?: string
            country?: string
        }
    }
    amount_total?: number
    currency?: string
    line_items?: {
        data?: StripeLineItem[]
    }
}

const formatMoney = (amount?: number, currency?: string) => {
    if (typeof amount !== "number") return ""
    const safeCurrency = currency ? currency.toUpperCase() : "USD"
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: safeCurrency
    }).format(amount / 100)
}

export default async function OrderConfirmationPage({
    searchParams
}: {
    searchParams?: Promise<OrderConfirmationSearchParams>
}) {
    const resolvedSearchParams = await Promise.resolve(searchParams)
    const sessionId =
        typeof resolvedSearchParams?.session_id === "string"
            ? resolvedSearchParams.session_id
            : ""

    let session: StripeCheckoutSession | null = null
    if (sessionId && process.env.STRIPE_SECRET_KEY) {
        const response = await fetch(
            `https://api.stripe.com/v1/checkout/sessions/${sessionId}?expand[]=line_items`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: "no-store"
            }
        )
        if (response.ok) {
            session = (await response.json()) as StripeCheckoutSession
        }
    }

    const email = session?.customer_details?.email
    const shipping = session?.shipping_details
    const lineItem = session?.line_items?.data?.[0]
    const total = formatMoney(
        session?.amount_total ?? lineItem?.amount_total,
        session?.currency ?? lineItem?.currency
    )

    return (
        <main className="w-full bg-background-white">
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-12 pt-32 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-text-dark4">
                        Order Confirmed
                    </p>
                    <h1 className="text-h2 font-bold text-text-dark">
                        Thank you for your order!
                    </h1>
                    <p className="text-body1 text-text-dark3">
                        You will receive a tracking number once your order is
                        fulfilled and shipped.
                    </p>
                    {email && (
                        <p className="text-body2 text-text-dark3">
                            A receipt was sent to {email}.
                        </p>
                    )}
                    {session && (
                        <div className="rounded-2xl border border-borders-border2 bg-background-grey2 p-5 shadow-sm">
                            <h2 className="text-h5 font-bold text-text-dark">
                                Order Summary
                            </h2>
                            <div className="mt-4 flex items-center justify-between text-body2 text-text-dark3">
                                <span>
                                    {lineItem?.description ??
                                        "Monthly Snack Box"}
                                </span>
                                <span className="font-semibold text-primary-red">
                                    {total}
                                </span>
                            </div>
                            {shipping?.address && (
                                <div className="mt-4 text-body2 text-text-dark3">
                                    <p className="font-semibold text-text-dark">
                                        Customer shipping address
                                    </p>
                                    <p>{shipping?.name}</p>
                                    <p>{shipping?.address?.line1}</p>
                                    {shipping?.address?.line2 && (
                                        <p>{shipping?.address?.line2}</p>
                                    )}
                                    <p>
                                        {shipping?.address?.postal_code}{" "}
                                        {shipping?.address?.city}
                                    </p>
                                    <p>{shipping?.address?.country}</p>
                                    {shipping?.phone && (
                                        <p>{shipping?.phone}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    <div>
                        <CTAButton href="/" label="Back to Homepage" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="/new_product_images/full.webp"
                            alt="Lucky Panda Treats box"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 40vw, 80vw"
                        />
                    </div>
                    <Link
                        href="/"
                        className="text-sm font-semibold text-primary-red underline-offset-4 hover:underline"
                    >
                        Continue browsing
                    </Link>
                </div>
            </section>
        </main>
    )
}
