import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/app/components/NavBar"
import StickyContact from "@/app/components/StickyContact"
import GoogleAnalytics from "./components/GoogleAnalytics"

export const metadata: Metadata = {
    title: "Lucky Panda Treats",
    description: "Snacks subscription box"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const gaTrackingId = process.env.GA_TRACKING_ID as string

    return (
        <html lang="en">
            <GoogleAnalytics gaTrackingId={gaTrackingId} />
            <body>
                <NavBar />
                {children}
                <StickyContact />
            </body>
        </html>
    )
}
