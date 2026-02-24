import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MONTHLY_SNACK_BOX_IMAGES } from "@/app/lib/monthlySnackBox"
import ProductImageGallery from "@/app/(pages)/products/monthly-snack-box/ProductImageGallery"
import MasonryGallery from "@/app/components/MasonryGallery"
import Faq from "@/app/landingPageSections/FAQ"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "This Month's Box | Lucky Panda",
    description:
        "Discover this month's curated Chinese snack box. Unique treats and cultural surprises delivered to your door.",
    alternates: {
        canonical: "/this-months-box"
    }
}

const FEATURES = [
    {
        title: "CURATED SELECTION",
        text: "Hand-picked Chinese snacks and cultural items you won't find in regular stores."
    },
    {
        title: "FRESH EVERY MONTH",
        text: "New arrivals every month so there's always something new to try."
    },
    {
        title: "CULTURAL SURPRISE",
        text: "Each box includes a carefully picked cultural item to make every delivery extra fun."
    },
    {
        title: "NO COMMITMENT",
        text: "Choose a single box or subscribe—no automatic renewal required."
    },
    {
        title: "SHIPPING INCLUDED",
        text: "Shipping and VAT included for EU. Check FAQ for other regions."
    }
]

export default function ThisMonthsBoxPage() {
    return (
        <main className="min-h-screen bg-background-white">
            {/* Product section - Shopify-style two columns */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-10 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-6 lg:pb-16  pt-32">
                {/* Left: Image carousel */}
                <div className="self-start">
                    <ProductImageGallery images={MONTHLY_SNACK_BOX_IMAGES} />
                </div>

                {/* Right: Product info */}
                <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
                    <h1 className="text-h2 font-bold tracking-tight text-text-redPrimary">
                        This Month&apos;s Box
                    </h1>
                    <p className="text-body1 text-text-dark3">
                        A fresh curation of bold Chinese snacks combined with
                        cultural items. New arrivals every month.
                    </p>

                    {/* Rating placeholder */}
                    {/* <div className="flex items-center gap-2 text-text-dark3">
                        <span className="flex text-[1rem]" aria-hidden>
                            ★★★★★
                        </span>
                        <span className="text-body2">(88 reviews)</span>
                    </div> */}

                    {/* Price */}
                    <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-body1 text-text-dark3 line-through">
                            $27.99
                        </span>
                        <span className="text-2xl font-bold text-primary-red">
                            $25.99
                        </span>
                    </div>

                    {/* Availability */}
                    <p className="text-body2 text-text-dark3">
                        Ready stock, Tax Inclusive
                    </p>
                    <p className="text-body2 text-text-dark3">
                        Delivery between 5–10 business days
                    </p>

                    {/* Add to cart */}
                    <Link
                        href="/choose-plan"
                        className="inline-flex w-full bg-primary-red items-center justify-center rounded-lg px-6 py-4 text-body1 font-semibold uppercase tracking-wide text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2"
                    >
                        Add to Cart
                    </Link>

                    {/* Safe checkout */}
                    <p className="flex items-center gap-2 text-body3 text-text-dark3">
                        <svg
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Guaranteed safe checkout
                    </p>

                    {/* Payment icons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-body3 text-text-dark4">
                            We accept
                        </span>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo/logo.png"
                                alt=""
                                width={32}
                                height={32}
                                className="h-6 w-auto opacity-70"
                            />
                            <span className="text-body3 text-text-dark4">
                                PayPal · Visa · Mastercard
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Faq />

            <MasonryGallery />
        </main>
    )
}
