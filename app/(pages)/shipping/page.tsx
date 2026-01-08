import type { Metadata } from "next"
import ShippingSelector from "./shipping-selector"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Shipping Availability | Lucky Panda",
    description:
        "Confirm your shipping country to continue with checkout for Lucky Panda Treats.",
    alternates: {
        canonical: "/shipping"
    }
}

type ShippingSearchParams = {
    plan?: string
}

export default async function ShippingPage({
    searchParams
}: {
    searchParams?: Promise<ShippingSearchParams>
}) {
    const resolvedSearchParams = await Promise.resolve(searchParams)
    const plan =
        typeof resolvedSearchParams?.plan === "string"
            ? resolvedSearchParams.plan
            : "single"

    return (
        <main className="w-full bg-background-white">
            <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-12 text-center">
                <div className="w-full rounded-3xl border border-borders-border2 bg-background-grey2 p-8 shadow-lg md:p-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-text-dark4">
                        Shipping Notice
                    </p>
                    <h1 className="mt-3 text-h2 font-bold text-text-dark">
                        We currently ship only to selected countries
                    </h1>
                    <p className="mt-4 text-body1 text-text-dark3">
                        Please confirm your country below to continue to
                        checkout. If your country is not listed, we are unable
                        to ship there yet.
                    </p>
                    <div className="mt-8">
                        <ShippingSelector plan={plan} />
                    </div>
                </div>
            </section>
        </main>
    )
}
