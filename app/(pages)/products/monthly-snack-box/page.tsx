import type { Metadata } from "next"
import ProductImageCarousel from "@/app/landingPageSections/BoxCarousel/ProductImageCarousel"
import ProductPlanSelector from "./ProductPlanSelector"
import { MONTHLY_SNACK_BOX_IMAGES } from "@/app/lib/monthlySnackBox"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Monthly Snack Box | Lucky Panda",
    description:
        "A fresh curation of bold Chinese snacks combined with cultural items. New arrivals every month.",
    alternates: {
        canonical: "/products/monthly-snack-box"
    }
}

interface MonthlySnackBoxPageProps {
    searchParams?: {
        selling_plan?: string
        plan?: string
    }
}

export default function MonthlySnackBoxPage({
    searchParams
}: MonthlySnackBoxPageProps) {
    const sellingPlanId =
        typeof searchParams?.selling_plan === "string"
            ? searchParams.selling_plan
            : undefined
    const planKey =
        typeof searchParams?.plan === "string" ? searchParams.plan : undefined

    return (
        <main className="w-full bg-background-white">
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-12 lg:items-start lg:py-16">
                <div className="lg:col-span-6">
                    <ProductImageCarousel images={MONTHLY_SNACK_BOX_IMAGES} />
                </div>
                <div className="flex flex-col gap-6 lg:col-span-6">
                    <div>
                        <h1 className="text-h2 font-bold text-text-dark">
                            Monthly Snack Box
                        </h1>
                        <p className="mt-3 text-body1 text-text-dark3">
                            A fresh curation of bold Chinese snacks combined
                            with cultural items. New arrivals every month.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-background-grey2 p-6 shadow-lg">
                        <h2 className="text-h5 font-bold text-text-dark">
                            Each Box Includes
                        </h2>
                        <ul className="mt-4 list-inside list-disc space-y-2 text-body1 text-text-dark3 marker:text-primary-red">
                            <li>18-22 products</li>
                            <li>15-18 authentic Chinese snacks</li>
                            <li>3-5 cultural surprises items</li>
                            <li>Full ingredient list included</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-borders-border2 bg-background-white p-6 shadow-sm">
                        <p className="text-body2 text-text-dark3">
                            No automatic renewal.
                        </p>
                        <p className="mt-2 text-body2 text-text-dark3">
                            Shipping only available for certain countries,
                            check shipping FAQ for more information.
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="subscribe"
                className="mx-auto max-w-6xl px-6 pb-16"
            >
                <ProductPlanSelector
                    initialSellingPlanId={sellingPlanId}
                    initialPlanKey={planKey}
                />
            </section>
        </main>
    )
}
