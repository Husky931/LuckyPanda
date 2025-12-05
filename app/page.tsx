import Hero from "./landingPageSections/Hero"
// import WhatIs from "./landingPageSections/WhatIs"
import HowItWorks from "./landingPageSections/HowItWorks"
import WhatsInside from "./landingPageSections/WhatsInside"
import TrySomethingDifferent from "./landingPageSections/TrySomethingDifferent"
import BoxCarouselSection from "./landingPageSections/BoxCarousel/BoxCarouselSection"
import ParalaxSection from "./landingPageSections/ParalaxSection"
import SocialProof from "./landingPageSections/SocialProof"
import ChooseYourPlan from "./landingPageSections/ChoosePlan"
import Faq from "./landingPageSections/FAQ"
import { Footer } from "./landingPageSections/footer"
import MonthlyBoxCountdown from "./landingPageSections/MonthlyBoxCountdown"
import WhatsIncluded from "./landingPageSections/WhatsIncluded"
// import NewsLetter from "./landingPageSections/NewsLetter"
import WhyNotSection from "./landingPageSections/WhyNotSection"
import MasonryGallery from "./components/MasonryGallery"
import CandyShot from "./components/CandyShot"
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://luckypandatreats.com"),
    title: "Lucky Panda Treats",
    description:
        "Lucky Panda Treats is a monthly Chinese snack and cultural subscription box shipped worldwide. Curated local treats and cultural surprises from China, delivered right to your door.",
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
            <Footer />
        </div>
    )
}
