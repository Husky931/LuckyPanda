"use client"

import { useRef, useState } from "react"
import Image from "next/image"

const SWIPE_THRESHOLD = 30 // px

const ProductImageCarousel = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const startX = useRef<number | null>(null)
    const isPointerDown = useRef(false)

    const toPrev = () =>
        setSelectedImage((p) => (p - 1 + images.length) % images.length)
    const toNext = () => setSelectedImage((p) => (p + 1) % images.length)

    const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
        isPointerDown.current = true
        startX.current = e.clientX
    }

    const onPointerMove: React.PointerEventHandler<HTMLDivElement> = () => {
        if (!isPointerDown.current || startX.current === null) return
        // no visual drag needed; logic only
    }

    const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
        if (!isPointerDown.current || startX.current === null) return
        const dx = e.clientX - startX.current
        isPointerDown.current = false
        startX.current = null
        if (Math.abs(dx) < SWIPE_THRESHOLD) return
        if (dx > 0) toPrev()
        else toNext()
    }

    const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === "ArrowLeft") toPrev()
        if (e.key === "ArrowRight") toNext()
    }

    return (
        <div className="flex max-w-full flex-1 flex-col gap-4">
            {/* Main Image Display */}
            <div
                className="relative aspect-square w-full touch-pan-y select-none overflow-hidden rounded-xl"
                role="region"
                aria-roledescription="carousel"
                aria-label="Product images"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                <Image
                    src={images[selectedImage]}
                    alt={`Product image ${selectedImage + 1} of ${images.length}`}
                    fill
                    className="rounded-xl object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />

                {/* Left Arrow */}
                <button
                    onClick={toPrev}
                    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white shadow-md transition hover:scale-105"
                    aria-label="Previous image"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={toNext}
                    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 shadow-md backdrop-blur transition hover:scale-105"
                    aria-label="Next image"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 md:gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 hover:opacity-80 md:h-20 md:w-20 ${
                            selectedImage === index
                                ? "border-primary"
                                : "border-transparent"
                        }`}
                        aria-label={`View product image ${index + 1}`}
                    >
                        <Image
                            src={image}
                            alt={`Product thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover object-center"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductImageCarousel
