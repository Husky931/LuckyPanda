"use client"

import Image from "next/image"

const images = [
    { src: "/MAIN.png", alt: "Snack 1" },
    { src: "/paralax.webp", alt: "Cultural Item" },
    { src: "/qipao.jpg", alt: "Temple View" },
    { src: "/intro_photography/bg_3.jpeg", alt: "Spicy Chips" },
    { src: "/whats_inside.webp", alt: "Night Market" },
    { src: "/intro_photography/city_view.webp", alt: "Lanterns" },
    { src: "/intro_photography/city_view.webp", alt: "Lanterns" },
    { src: "/images_dummy/image1.png", alt: "Lanterns" },
    { src: "/MAIN.png", alt: "Snack 1" },
    { src: "/paralax.webp", alt: "Cultural Item" },
    { src: "/qipao.jpg", alt: "Temple View" },
    { src: "/intro_photography/bg_3.jpeg", alt: "Spicy Chips" },
    { src: "/whats_inside.webp", alt: "Night Market" },
    { src: "/intro_photography/city_view.webp", alt: "Lanterns" },
    { src: "/intro_photography/city_view.webp", alt: "Lanterns" },
    { src: "/images_dummy/image1.png", alt: "Lanterns" }
]

const MasonryGallery = () => {
    return (
        <section className="px-4 py-12 md:px-20 2xl:px-60">
            <h2 className="mb-10 text-center text-3xl font-bold text-black">
                Our Visual Journey
            </h2>
            <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={600}
                            height={600}
                            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MasonryGallery
