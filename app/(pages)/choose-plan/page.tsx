import type { Metadata } from "next"
import ChooseYourPlan from "@/app/landingPageSections/ChoosePlan"
import MasonryGallery from "@/app/components/MasonryGallery"

export const metadata: Metadata = {
    title: "Choose a Plan | Lucky Panda Treats",
    description:
        "Select the Lucky Panda snack subscription plan that fits you best."
}

export default function ChoosePlanPage() {
    return (
        <main className="flex h-full flex-col items-start justify-start">
            <ChooseYourPlan />
            <MasonryGallery />
        </main>
    )
}
