import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/app/components/NavBar"
import StickyContact from "@/app/components/StickyContact"
import GoogleAnalytics from "./components/GoogleAnalytics"
import AlertBanner from "./components/AlertBanner"
import { AlertProvider } from "@/app/providers/AlertBannerProvider/AlertBannerContext"

export const metadata: Metadata = {
    title: "Lucky Panda Treats",
    description: "Snacks subscription box"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const gaTrackingId = process.env.GOOGLE_ANALYTICS_ID as string

    return (
        <html lang="en">
            <GoogleAnalytics gaTrackingId={gaTrackingId} />
            <body>
                <AlertProvider>
                    <AlertBanner />
                    <NavBar />
                    {children}
                    <StickyContact />
                </AlertProvider>
            </body>
        </html>
    )
}
