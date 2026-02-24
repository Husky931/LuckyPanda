import Hero from "@/app/components/landingPageSections/Hero"
import HowItWorks from "@/app/components/landingPageSections/HowItWorks"
import WhatsInside from "@/app/components/landingPageSections/WhatsInside"
import TrySomethingDifferent from "@/app/components/landingPageSections/TrySomethingDifferent"
import BoxCarouselSection from "@/app/components/landingPageSections/BoxCarousel/BoxCarouselSection"
import ParalaxSection from "@/app/components/landingPageSections/ParalaxSection"
import SocialProof from "@/app/components/landingPageSections/SocialProof"
import WhatsIncluded from "@/app/components/landingPageSections/WhatsIncluded"
import WhyNotSection from "@/app/components/landingPageSections/WhyNotSection"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import NewsLetter from "../components/landingPageSections/NewsLetter"
import WhatIs from "../components/landingPageSections/WhatIs"

// Dynamically import below-the-fold components to reduce initial bundle size
const Faq = dynamic(() => import("@/app/components/landingPageSections/FAQ"), {
    loading: () => <div className="min-h-[400px]" />
})
const MonthlyBoxCountdown = dynamic(
    () => import("@/app/components/landingPageSections/MonthlyBoxCountdown"),
    {
        loading: () => <div className="min-h-[200px]" />
    }
)
const CandyShot = dynamic(() => import("@/app/components/CandyShot"), {
    loading: () => <div className="min-h-[300px]" />
})

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Lucky Panda | Export Chinese Snacks, Gifts, and Monthly Boxes",
    description:
        "Lucky Panda delivers export-ready Chinese snack assortments, corporate gifting, and monthly boxes worldwide. Consolidated sourcing, curated flavors, and cultural surprises from China.",
    alternates: {
        canonical: "/"
    }
}

export default function Home() {
    return (
        <div className="">
            <main className="flex h-full flex-col items-start justify-start">
                <Hero />
                <HowItWorks />
                <BoxCarouselSection />
                <WhatsInside />
                <TrySomethingDifferent />
                <ParalaxSection />
                <WhatIs />
                <WhyNotSection />
                <WhatsIncluded />
                {/* <SocialProof /> */}
                <Faq />
                <NewsLetter />
            </main>
        </div>
    )
}
