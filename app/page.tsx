import IntroPhotography from "./landingPageSections/IntoPhotography"
// import WhatIs from "./landingPageSections/WhatIs"
import HowItWorks from "./landingPageSections/HowItWorks"
import WhatsInside from "./landingPageSections/WhatsInside"
import ItemsDescription from "./landingPageSections/ItemsDescription"
import BoxCarouselSection from "./landingPageSections/BoxCarousel/BoxCarouselSection"
import ProductPhotography from "./landingPageSections/ProductPhotography"
import SocialProof from "./landingPageSections/SocialProof"
import ChooseYourPlan from "./landingPageSections/ChoosePlan"
import Faq from "./landingPageSections/FAQ"
import { Footer } from "./landingPageSections/footer"
// import Silhouette from "./landingPageSections/Silhouette"
import MonthlyBoxCountdown from "./landingPageSections/MonthlyBoxCountdown"
import WhatsIncluded from "./landingPageSections/WhatsIncluded"
// import IntroVideo from "./components/IntroVideo"
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
                <ItemsDescription />
                <ProductPhotography />
                <WhatsIncluded />
                {/* // don't use WhatIs */}
                {/* <WhatIs /> */}
                <WhyNotSection />
                <SocialProof />
                <ChooseYourPlan />
                {/* <NewsLetter /> */}
                {/* <IntroVideo url="https://www.youtube.com/watch?v=xqDlCKrTOFU" /> */}
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
