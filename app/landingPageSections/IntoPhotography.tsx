"use client"

import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const IntroPhotography = () => {
    return (
        <div
            id="intro-hero"
            className="relative flex h-screen max-h-[1500px] w-full flex-col overflow-hidden xl:flex-row"
        >
            {/* Background Images */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/intro_photography/desktop.webp"
                    alt="Background desktop"
                    fill
                    priority
                    className="hidden object-cover xl:block"
                />
                <Image
                    src="/intro_photography/mob.webp"
                    alt="Background mobile"
                    fill
                    priority
                    className="object-cover xl:hidden"
                />
            </div>

            {/* Overlay Text */}
            <HeroTextOverlay />

            {/* Paired Foreground Image */}
            <div className="relative mb-4 h-full w-full md:w-1/2">
                <Image
                    src="/intro_photography/bg_1_pair.webp"
                    alt="Foreground pair"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default IntroPhotography
