import type { Metadata } from "next"
import ChooseYourPlan from "@/app/components/landingPageSections/ChoosePlan"

export const metadata: Metadata = {
    title: "Choose a Plan | Lucky Panda",
    description:
        "Pick your monthly snack box plan: single box or subscribe and save with 3, 6, or 12 month plans."
}

export default function ChoosePlanPage() {
    return (
        <div className="min-h-screen bg-background-grey1 pt-24">
            <ChooseYourPlan />
        </div>
    )
}
