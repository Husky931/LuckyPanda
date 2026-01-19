// app/components/MasonryGallery.tsx  (no "use client")
import Image from "next/image"
import { getVisualJourneyImages } from "@/app/lib/visual-journey-images.server"

// (Optional) ISR if your page uses SSR/ISR: revalidate list hourly
export const revalidate = 3600

export default function MasonryGallery() {
    const dynamicImages = getVisualJourneyImages()
    const images = [...dynamicImages]

    return (
        <section className="px-4 py-12 md:px-20 2xl:px-60" id="journey">
            <h2 className="mb-10 text-center text-3xl font-bold text-black">
                Our Visual Journey
            </h2>
            <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
                {images.map((img, idx) => (
                    <div
                        key={`${img.src}-${idx}`}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={600}
                            height={600}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
