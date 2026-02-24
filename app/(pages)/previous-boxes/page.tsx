import type { Metadata } from "next"
import PreviousBoxes from "@/app/components/PreviousBoxes"

export const metadata: Metadata = {
    title: "Previous Boxes | Lucky Panda",
    description:
        "Browse our past monthly snack boxes and the flavors that made them memorable."
}

export default function PreviousBoxesPage() {
    return <PreviousBoxes />
}
