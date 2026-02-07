import Link from "next/link"
import type { Metadata } from "next"
import HowItWorks from "@/app/landingPageSections/HowItWorks"
import WhatsIncluded from "@/app/landingPageSections/WhatsIncluded"
import WhatsInside from "@/app/landingPageSections/WhatsInside"
import BoxCarouselSection from "@/app/landingPageSections/BoxCarousel/BoxCarouselSection"
import ChooseYourPlan from "@/app/landingPageSections/ChoosePlan"
import PreviousBoxes from "@/app/components/PreviousBoxes"
import MonthlyBoxCountdown from "@/app/landingPageSections/MonthlyBoxCountdown"

export const metadata: Metadata = {
    title: "Monthly Snack Box | Lucky Panda",
    description:
        "A monthly Chinese snack subscription box filled with curated treats and cultural surprises."
}

export default function MonthlyBoxPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-grey1">
            <section className="relative w-full  pb-16 pt-32 ">
                <div className="mx-auto flex w-full flex-col gap-6">
                    <HowItWorks />
                    <PreviousBoxes />
                    <WhatsInside />
                    <BoxCarouselSection />
                    <WhatsIncluded />
                    <MonthlyBoxCountdown />
                    <ChooseYourPlan />
                </div>
            </section>

            <section className="w-full px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Curated every month
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Each box features new themes, regions, and flavor
                            profiles to explore.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Cultural add-ons
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Enjoy stories, traditions, and special items beyond
                            the snacks themselves.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Limited delivery
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Please check FAQ if your country is supported for delivery.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
