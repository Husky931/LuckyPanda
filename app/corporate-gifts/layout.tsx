import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Corporate Gifts | Lucky Panda Treats",
    description:
        "Surprise your team, clients, or partners with authentic Chinese snacks and cultural treasures. Perfect for employee appreciation, client gifts, or special occasions. Request a custom quote today.",
    alternates: {
        canonical: "/corporate-gifts"
    }
}

export default function CorporateGiftsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
