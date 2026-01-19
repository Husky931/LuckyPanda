"use client"

import Image from "next/image"
import ExportHeroTextOverlay from "./ExportHeroTextOverlay"

const ExportHero = () => {
    return (
        <div
            id="intro-hero"
            className="relative flex h-screen max-h-[1500px] w-full flex-col overflow-hidden xl:flex-row bg-primary-red"
        >
            {/* Background Images */}
            <div className="absolute inset-0 -z-10">
                {/* <Image
                    src="/hero/hero_export.webp"
                    alt="Background desktop"
                    fill
                    priority
                    className="hidden object-cover xl:block"
                /> */}
                <Image
                    src="/hero/mob.webp"
                    alt="Background mobile"
                    fill
                    priority
                    className="object-cover xl:hidden"
                />
            </div>

            {/* Overlay Text */}
            <ExportHeroTextOverlay />

            {/* Paired Foreground Image */}
            <div className="relative mb-4 h-full w-full md:flex md:w-1/2 md:items-center md:justify-center">
                <Image
                    src="/hero/truck.webp"
                    alt="Foreground pair"
                    fill
                    priority
                    className="object-contain md:!left-1/2 md:!top-1/2 md:!-translate-y-1/2 md:scale-[1.4] lg:!left-0 lg:!top-0 lg:!translate-x-0 lg:!translate-y-0 lg:scale-[1.1]"
                />
            </div>
        </div>
    )
}

export default ExportHero
