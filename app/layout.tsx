import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/app/components/NavBar"
import StickyContact from "@/app/components/StickyContact"
import GoogleAnalytics from "@/app/components/GoogleAnalytics"
import AlertBanner from "@/app/components/AlertBanner"
import { AlertProvider } from "@/app/providers/AlertBannerProvider/AlertBannerContext"
import EmailBanner from "@/app/components/EmailBanner"

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
                    <EmailBanner />
                    {children}
                    <StickyContact />
                </AlertProvider>
            </body>
        </html>
    )
}
