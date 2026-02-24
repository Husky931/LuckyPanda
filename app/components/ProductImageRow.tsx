import Image from "next/image"

const IMAGE_COUNT = 16
const IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    src: `/new_product_images_ai/${i + 1}.png`,
    alt: `Product ${i + 1}`
}))

export default function ProductImageRow() {
    return (
        <section
            className="w-full border-t-2 border-primary-red bg-background-white px-4 pt-32 pb-6 md:px-6 md:pt-36"
            aria-label="Product highlights"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-4 gap-8 md:gap-12">
                    {IMAGES.map((img, idx) => (
                        <div
                            key={img.src}
                            className="relative aspect-square w-full overflow-hidden rounded-xl border border-borders-border2 shadow-sm ring-1 ring-black/5"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 25vw, 200px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
