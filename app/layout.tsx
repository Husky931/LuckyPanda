import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/app/landingPageSections/NavBar"

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
            </body>
        </html>
    )
}
