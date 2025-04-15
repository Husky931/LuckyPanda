"use client"

import { useState } from "react"
import Image from "next/image"

const ProductImageCarousel = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(0)

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
                        // sizes="(max-width: 640px) 100vw, 50vw"
                    />
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
