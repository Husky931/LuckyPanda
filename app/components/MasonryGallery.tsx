// app/components/MasonryGallery.tsx  (no "use client")
import Image from "next/image"
import fs from "fs"
import path from "path"

type Img = { src: string; alt: string }

// keep your existing static items if you want them too
const staticImages: Img[] = [
    { src: "/MAIN.png", alt: "Snack 1" },
    { src: "/paralax.webp", alt: "Cultural Item" },
    { src: "/qipao.jpg", alt: "Temple View" },
    { src: "/intro_photography/bg_3.jpeg", alt: "Spicy Chips" },
    { src: "/whats_inside.webp", alt: "Night Market" },
    { src: "/intro_photography/city_view.webp", alt: "Lanterns" }
]

function getVisualJourneyImages(): Img[] {
    const dir = path.join(process.cwd(), "public", "visual_journey")
    try {
        const files = fs
            .readdirSync(dir)
            .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
            .sort((a, b) => {
                // numeric sort if files are "1.jpg", "2.webp", etc.; fallback to natural sort
                const na = parseInt(a, 10),
                    nb = parseInt(b, 10)
                if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb
                return a.localeCompare(b, undefined, {
                    numeric: true,
                    sensitivity: "base"
                })
            })

        return files.map((f) => ({
            src: `/visual_journey/${f}`,
            alt: `Visual Journey ${f.replace(/\.[^/.]+$/, "")}`
        }))
    } catch {
        return []
    }
}

// (Optional) ISR if your page uses SSR/ISR: revalidate list hourly
export const revalidate = 3600

export default function MasonryGallery() {
    const dynamicImages = getVisualJourneyImages()
    const images = [...staticImages, ...dynamicImages]

    return (
        <section className="px-4 py-12 md:px-20 2xl:px-60">
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
