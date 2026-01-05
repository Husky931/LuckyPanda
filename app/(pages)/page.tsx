import Hero from "@/app/landingPageSections/Hero"
// import WhatIs from "./landingPageSections/WhatIs"
import HowItWorks from "@/app/landingPageSections/HowItWorks"
import WhatsInside from "@/app/landingPageSections/WhatsInside"
import TrySomethingDifferent from "@/app/landingPageSections/TrySomethingDifferent"
import BoxCarouselSection from "@/app/landingPageSections/BoxCarousel/BoxCarouselSection"
import ParalaxSection from "@/app/landingPageSections/ParalaxSection"
import SocialProof from "@/app/landingPageSections/SocialProof"
import ChooseYourPlan from "@/app/landingPageSections/ChoosePlan"
import Faq from "@/app/landingPageSections/FAQ"
import MonthlyBoxCountdown from "@/app/landingPageSections/MonthlyBoxCountdown"
import WhatsIncluded from "@/app/landingPageSections/WhatsIncluded"
// import NewsLetter from "./landingPageSections/NewsLetter"
import WhyNotSection from "@/app/landingPageSections/WhyNotSection"
import MasonryGallery from "@/app/components/MasonryGallery"
import CandyShot from "@/app/components/CandyShot"
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Lucky Panda | Chinese Snacks & Cultural Subscription Box",
    description:
        "Lucky Panda is a monthly Chinese snack and cultural subscription box shipped worldwide. Curated local treats and cultural surprises from China, delivered right to your door.",
    alternates: {
        canonical: "/"
    }
}

export default function Home() {
    return (
        <div className="">
            <main className="flex h-full flex-col items-start justify-start">
                <Hero />
                {/* <Hero /> */}
                <HowItWorks />
                <BoxCarouselSection />
                <WhatsInside />
                <TrySomethingDifferent />
                <ParalaxSection />
                <WhatsIncluded />
                {/* <WhatIs /> */}
                <WhyNotSection />
                {/* <SocialProof /> */}
                <ChooseYourPlan />
                {/* <NewsLetter /> */}
                <MonthlyBoxCountdown />
                <MasonryGallery />
                <Faq />
                <CandyShot />
            </main>
        </div>
    )
}
