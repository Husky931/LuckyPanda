"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageGalleryProps {
    images: string[]
}

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeImage = images[activeIndex] ?? images[0]

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background-grey2 shadow-md">
                {activeImage && (
                    <Image
                        src={activeImage}
                        alt={`Monthly snack box image ${activeIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        priority
                    />
                )}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {images.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`relative aspect-square w-full overflow-hidden rounded-xl border-2 transition ${
                            activeIndex === index
                                ? "border-primary-red"
                                : "border-transparent hover:border-primary-red/50"
                        }`}
                        aria-label={`View image ${index + 1}`}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductImageGallery
