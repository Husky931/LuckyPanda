"use client"

import { useState } from "react"
import Image from "next/image"

const ProductImageCarousel = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(0)

    const handlePrev = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleNext = () => {
        setSelectedImage((prev) => (prev + 1) % images.length)
    }

    return (
        <div className="flex max-w-full flex-1 flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-xl bg-gray-100">
                <div className="w-full">
                    <Image
                        src={images[selectedImage]}
                        alt="Product display"
                        width={200}
                        height={200}
                        className="h-auto w-full"
                        priority
                    />
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
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
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-white shadow-md transition hover:scale-105"
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
            </div>

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
                            fill
                            className="object-cover object-center"
                            sizes="80px"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductImageCarousel
