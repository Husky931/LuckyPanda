import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const IntroPhotography = () => {
    return (
        <div className="relative flex h-[500px] max-h-screen w-full bg-primary-red md:h-[952]">
            <Image
                src="/product_images/1.webp"
                alt="chinese snacks"
                fill
                className="object-fill"
            />
            <HeroTextOverlay />
        </div>
    )
}

export default IntroPhotography
