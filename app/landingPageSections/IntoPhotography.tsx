import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const IntroPhotography = () => {
    return (
        <div
            id="intro-hero"
            className="relative mt-[82px] flex h-[calc(100vh-var(--navbar-height))] w-full flex-col bg-primary-red md:flex-row"
        >
            <HeroTextOverlay />
            <div className="relative h-full w-full md:w-1/2">
                <Image
                    src="/product_images/bg_removed/whatis_inside_cropped_1.webp"
                    alt="chinese snacks"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default IntroPhotography
