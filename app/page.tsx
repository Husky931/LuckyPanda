import IntroPhotography from "./landingPageSections/IntoPhotography"
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
// import Silhouette from "./landingPageSections/Silhouette"
import MonthlyBoxCountdown from "./landingPageSections/MonthlyBoxCountdown"
import WhatsIncluded from "./landingPageSections/WhatsIncluded"
// import NewsLetter from "./landingPageSections/NewsLetter"
import WhyNotSection from "./landingPageSections/WhyNotSection"
import MasonryGallery from "./components/MasonryGallery"
import CandyShot from "./components/CandyShot"

export default function Home() {
    return (
        <div className="">
            <main className="flex h-full flex-col items-start justify-start">
                <IntroPhotography />
                <HowItWorks />
                <BoxCarouselSection />
                <WhatsInside />
                <TrySomethingDifferent />
                <ParalaxSection />
                <WhatsIncluded />
                {/* <WhatIs /> */}
                <WhyNotSection />
                <SocialProof />
                <ChooseYourPlan />
                {/* <NewsLetter /> */}
                <MonthlyBoxCountdown />
                <MasonryGallery />
                {/* <CandyShot /> */}
                <Faq />
                <CandyShot />
                {/* <Silhouette /> */}
            </main>
            <Footer />
        </div>
    )
}
