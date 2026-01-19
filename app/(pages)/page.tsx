import Hero from "@/app/landingPageSections/Hero"
// import WhatIs from "./landingPageSections/WhatIs"
import BusinessModes from "@/app/landingPageSections/BusinessModes"
import ExportEdge from "@/app/landingPageSections/ExportEdge"
import HowItWorks from "@/app/landingPageSections/HowItWorks"
import WhatsInside from "@/app/landingPageSections/WhatsInside"
import TrySomethingDifferent from "@/app/landingPageSections/TrySomethingDifferent"
import BoxCarouselSection from "@/app/landingPageSections/BoxCarousel/BoxCarouselSection"
import ParalaxSection from "@/app/landingPageSections/ParalaxSection"
import SocialProof from "@/app/landingPageSections/SocialProof"
import ChooseYourPlan from "@/app/landingPageSections/ChoosePlan"
import WhatsIncluded from "@/app/landingPageSections/WhatsIncluded"
// import NewsLetter from "./landingPageSections/NewsLetter"
import WhyNotSection from "@/app/landingPageSections/WhyNotSection"
import MasonryGallery from "@/app/components/MasonryGallery"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

// Dynamically import below-the-fold components to reduce initial bundle size
const Faq = dynamic(() => import("@/app/landingPageSections/FAQ"), {
    loading: () => <div className="min-h-[400px]" />
})
const MonthlyBoxCountdown = dynamic(
    () => import("@/app/landingPageSections/MonthlyBoxCountdown"),
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
                <BusinessModes />
                <ExportEdge />
                
               
                
                <TrySomethingDifferent />
                <ParalaxSection />
               
                {/* <WhatIs /> */}
                <WhyNotSection />
                {/* <SocialProof /> */}
                <ChooseYourPlan />
                {/* <NewsLetter /> */}
                <MonthlyBoxCountdown />
                <Faq />
                
            </main>
        </div>
    )
}
