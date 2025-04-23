import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const IntroPhotography = () => {
    return (
        <div className="relative mt-[82px] flex h-[calc(100vh-var(--navbar-height))] w-full flex-col bg-primary-red md:flex-row">
            <HeroTextOverlay />
            <div className="relative h-full w-full md:w-1/2">
                <Image
                    src="/product_images/bg_removed/whatis_inside_cropped.png"
                    alt="chinese snacks"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default IntroPhotography
