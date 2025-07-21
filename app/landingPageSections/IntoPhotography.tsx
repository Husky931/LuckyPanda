"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import HeroTextOverlay from "@/app/components/HeroOverlay"

const slides = [
    {
        desktopBg: "/intro_photography/bg_1.jpeg",
        mobileBg: "/intro_photography/bg_1.jpeg", // fallback, or separate if needed
        pairImage: "/intro_photography/bg_1_pair.webp"
    },
    {
        desktopBg: "/intro_photography/bg_3.jpeg",
        mobileBg: "/intro_photography/bg_3.jpeg",
        pairImage: "/intro_photography/bg_1_pair.webp"
    },
    {
        desktopBg: "/intro_photography/bla.webp",
        mobileBg: "/intro_photography/bla.webp",
        pairImage: "/intro_photography/bg_2_pair.webp"
    },
    {
        desktopBg: "/intro_photography/desktop.webp",
        mobileBg: "/intro_photography/mob.webp",
        pairImage: "/intro_photography/bg_2_pair.webp"
    }
]

const IntroPhotography = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 14000)
        return () => clearInterval(interval)
    }, [])

    const handlePrev = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    const handleNext = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    const handleDotClick = (index: number) => setCurrentIndex(index)

    const { desktopBg, mobileBg, pairImage } = slides[currentIndex]

    return (
        <div
            id="intro-hero"
            className="relative flex h-screen max-h-[1500px] w-full flex-col overflow-hidden xl:flex-row"
        >
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 z-40 hidden items-center px-4 xl:flex">
                <button onClick={handlePrev} aria-label="Previous Slide">
                    <Image
                        src="/icons/left_arrow.svg"
                        alt="Previous"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-40 hidden items-center px-4 xl:flex">
                <button onClick={handleNext} aria-label="Next Slide">
                    <Image
                        src="/icons/right_arrow.svg"
                        alt="Next"
                        width={20}
                        height={20}
                    />
                </button>
            </div>

            {/* Background Images */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={desktopBg}
                    alt="Background desktop"
                    fill
                    priority
                    className="hidden object-cover xl:block"
                />
                <Image
                    src={mobileBg}
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
                    src={pairImage}
                    alt={`pair-${currentIndex}`}
                    fill
                    priority
                    className="object-contain transition-opacity duration-500"
                />

                {/* Mobile Dots */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 xl:hidden">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 w-6 rounded-full transition-colors ${
                                currentIndex === index
                                    ? "bg-white"
                                    : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IntroPhotography
