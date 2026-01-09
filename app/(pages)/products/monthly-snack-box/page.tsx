import type { Metadata } from "next"
import ProductPlanSelector from "./ProductPlanSelector"
import { MONTHLY_SNACK_BOX_IMAGES } from "@/app/lib/monthlySnackBox"
import ProductImageGallery from "./ProductImageGallery"
import MasonryGallery from "@/app/components/MasonryGallery"

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
    searchParams?: Promise<{
        selling_plan?: string
        plan?: string
    }>
}

export default async function MonthlySnackBoxPage({
    searchParams
}: MonthlySnackBoxPageProps) {
    const resolvedSearchParams = await searchParams
    const sellingPlanId =
        typeof resolvedSearchParams?.selling_plan === "string"
            ? resolvedSearchParams.selling_plan
            : undefined
    const planKey =
        typeof resolvedSearchParams?.plan === "string"
            ? resolvedSearchParams.plan
            : undefined

    return (
        <main className="w-full bg-background-white">
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-10 pt-32 lg:grid-cols-2 lg:items-start lg:pb-16 lg:pt-32">
                <div className="self-start">
                    <ProductImageGallery images={MONTHLY_SNACK_BOX_IMAGES} />
                </div>
                <div className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
                    <div className="border-b border-borders-border2 pb-6">
                        <h1 className="mt-2 text-h2 font-bold text-text-dark">
                            Panda Treats Box December
                        </h1>
                        <p className="mt-3 text-body1 text-text-dark3">
                            Monthly cultural box filled with unique Chinese
                            snacks and a carefully picked cultural surprise
                            items to make every delivery extra fun.
                        </p>
                    </div>
                    <section id="subscribe">
                        <ProductPlanSelector
                            initialSellingPlanId={sellingPlanId}
                            initialPlanKey={planKey}
                        />
                    </section>
                    <div className="rounded-2xl border border-borders-border2 bg-background-white p-6 shadow-sm">
                        <p className="text-body2 text-text-dark3">
                            No automatic renewal.
                        </p>
                        <p className="mt-2 text-body2 text-text-dark3">
                            Shipping only available for certain countries, check
                            shipping FAQ for more information.
                        </p>
                    </div>
                </div>
            </section>
            <MasonryGallery />
        </main>
    )
}
