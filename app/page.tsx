import NavBar from "./components/NavBar"
import IntroPhotography from "./components/IntoPhotography"
import WhatIs from "./components/WhatIs"
import HowItWorks from "./components/HowItWorks"
import WhatsInside from "./components/WhatsInside"
import ItemsDescription from "./components/ItemsDescription"
import BoxCarouselSection from "./components/BoxCarouselSection"
import ProductPhotography2 from "./components/ProductPhotography2"
import SocialProof from "./components/SocialProof"
import ChooseYourPlan from "./components/ChoosePlan"
import LatestUpdatesSubscribe from "./components/LatestUpdatesSubscribe"
import Faq from "./components/FAQ"
import { Footer } from "./components/footer"
import Silhouette from "./components/Silhouette"

// import { fetchProduct } from './graphql/functions/fetchProducts';

export default function Home() {
    // const product = await fetchProduct('sample-product');

    return (
        <div className="">
            <main className="flex h-full flex-col items-start justify-start">
                <NavBar />
                <IntroPhotography />
                <WhatIs />
                <HowItWorks />
                <WhatsInside />
                <ItemsDescription />
                <BoxCarouselSection />
                <ProductPhotography2 />
                <SocialProof />
                <ChooseYourPlan />
                <LatestUpdatesSubscribe />
                <Faq />
                <Silhouette />
            </main>
            <Footer />
        </div>
    )
}
