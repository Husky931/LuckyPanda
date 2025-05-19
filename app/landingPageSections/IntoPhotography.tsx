import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const IntroPhotography = () => {
    return (
        <div
            id="intro-hero"
            className="relative mt-[82px] flex h-[calc(100vh-var(--navbar-height))] max-h-[1000px] w-full flex-col md:flex-row"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/intro_photography/desktop.webp"
                    alt="red background texture"
                    fill
                    priority
                    className="hidden object-cover md:block"
                />
                <Image
                    src="/intro_photography/mob.webp"
                    alt="red background texture"
                    fill
                    priority
                    className="object-cover md:hidden"
                />
            </div>
            <HeroTextOverlay />
            <div className="relative mb-4 h-full w-full md:w-1/2">
                <Image
                    src="/intro_photography/boxes.webp"
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
