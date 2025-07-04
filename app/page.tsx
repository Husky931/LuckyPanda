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
import Silhouette from "./landingPageSections/Silhouette"
import LatestUpdatesCopy from "./landingPageSections/LatestUpdatesCopy"
import WhatsIncluded from "./landingPageSections/WhatsIncluded"
// import IntroVideo from "./components/IntroVideo"
import LatestUpdatesSubscribe from "./landingPageSections/LatestUpdatesSubscribe"
import WhyNotSection from "./landingPageSections/WhyNotSection"

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
                {/* <WhatIs /> */}
                <WhyNotSection />
                <SocialProof />
                <ChooseYourPlan />
                <LatestUpdatesSubscribe />
                {/* <IntroVideo url="https://www.youtube.com/watch?v=xqDlCKrTOFU" /> */}
                <LatestUpdatesCopy />
                <Faq />
                <Silhouette />
            </main>
            <Footer />
        </div>
    )
}
