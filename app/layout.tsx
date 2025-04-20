import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/app/components/NavBar"
import StickyContact from "@/app/components/StickyContact"

export const metadata: Metadata = {
    title: "Lucky Panda Treats",
    description: "Snacks subscription box"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
                <StickyContact />
            </body>
        </html>
    )
}
