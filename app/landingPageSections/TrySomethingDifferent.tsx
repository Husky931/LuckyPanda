"use client"

import { useId } from "react"
import Link from "next/link"

interface Props {
    headline?: string
    subcopy?: string
    images?: string[]
    ctaHref?: string
    ctaLabel?: string
    cols?: number // default 4
    pieceSize?: number // px width per piece (height preserves 1:1)
    gap?: number // px gutter between pieces
}

const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#f13e3b'/>
        <stop offset='100%' stop-color='#f3b034'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
  </svg>`
    )

const DEFAULT_IMAGES = [
    "/fun_images/1.jpg",
    "/fun_images/2.png",
    "/fun_images/3.webp",
    "/fun_images/4.jpg",
    "/fun_images/5.webp",
    "/fun_images/6.jpg",
    "/fun_images/7.jpg",
    "/fun_images/8.jpg",
    "/fun_images/9.jpg",
    "/fun_images/10.jpg",
    "/fun_images/11.jpg",
    "/fun_images/12.jpeg",
    "/fun_images/13.webp",
    "/fun_images/14.jpg",
    "/fun_images/16.webp",
    "/fun_images/17.webp",
    "/fun_images/18.webp"
]

// 300x300 normalized jigsaw piece paths (knobs vary by side)
// Source: hand-tuned cubic curves to mimic classic jigsaw silhouettes
const SHAPES: { name: string; d: string }[] = [
    {
        name: "topOut-bottomIn-leftFlat-rightFlat",
        d: "M20,150 C20,80 80,20 150,20 c25,0 45,5 60,15 10,-20 30,-35 60,-35 40,0 70,30 70,70 0,30 -15,50 -35,60 10,15 15,35 15,60 0,70 -60,130 -130,130 -70,0 -130,-60 -130,-130 0,-25 5,-45 15,-60 -20,-10 -35,-30 -35,-60 z"
    },
    {
        name: "topIn-bottomOut-leftFlat-rightFlat",
        d: "M20,150 C20,220 80,280 150,280 c25,0 45,-5 60,-15 -20,10 -35,30 -35,60 0,40 30,70 70,70 40,0 70,-30 70,-70 0,-30 -15,-50 -35,-60 15,10 35,15 60,15 70,0 130,-60 130,-130 0,-70 -60,-130 -130,-130 -25,0 -45,5 -60,15 20,-10 35,-30 35,-60 0,-40 -30,-70 -70,-70 -40,0 -70,30 -70,70 0,30 15,50 35,60 -15,-10 -35,-15 -60,-15 -70,0 -130,60 -130,130 z"
    },
    {
        name: "leftOut-rightIn",
        d: "M150,20 c-30,0 -50,15 -60,35 -15,-10 -35,-15 -60,-15 -40,0 -70,30 -70,70 0,40 30,70 70,70 25,0 45,-5 60,-15 -10,15 -15,35 -15,60 0,70 60,130 130,130 70,0 130,-60 130,-130 0,-25 -5,-45 -15,-60 20,10 35,15 60,15 40,0 70,-30 70,-70 0,-40 -30,-70 -70,-70 -25,0 -45,5 -60,15 10,-20 15,-40 15,-60 0,-70 -60,-130 -130,-130 0,70 -20,130 -60,130 z"
    },
    {
        name: "rightOut-leftIn",
        d: "M150,20 c30,0 50,15 60,35 15,-10 35,-15 60,-15 40,0 70,30 70,70 0,40 -30,70 -70,70 -25,0 -45,-5 -60,-15 10,15 15,35 15,60 0,70 -60,130 -130,130 -70,0 -130,-60 -130,-130 0,-25 5,-45 15,-60 -20,10 -35,15 -60,15 -40,0 -70,-30 -70,-70 0,-40 30,-70 70,-70 25,0 45,5 60,15 -10,-20 -15,-40 -15,-60 0,-70 60,-130 130,-130 0,70 20,130 60,130 z"
    },
    {
        name: "allFlat",
        d: "M40,40 h220 v220 h-220 z"
    },
    {
        name: "topOut-leftOut",
        d: "M40,150 C40,90 90,40 150,40 c20,0 36,4 48,12 8,-18 25,-32 52,-32 34,0 58,24 58,58 0,27 -14,44 -32,52 8,12 12,28 12,48 0,60 -50,110 -110,110 -60,0 -110,-50 -110,-110 0,-20 4,-36 12,-48 -18,-8 -32,-25 -32,-52 z"
    }
]

export default function JigsawSilhouetteGallery({
    headline = "Yes, I do want to try something interesting and unique every month",
    subcopy = "A fresh curation of bold Chinese snacks. New surprises monthly.",
    images,
    ctaHref = "/products/monthly-box",
    ctaLabel = "Get the monthly box",
    cols = 4,
    pieceSize = 140,
    gap = 12
}: Props) {
    const uid = useId()
    const list = images && images.length ? images : DEFAULT_IMAGES

    // Build pieces with repeating shapes
    const pieces = Array.from({ length: list.length }, (_, i) => ({
        img: list[i],
        shape: SHAPES[i % SHAPES.length],
        id: `${uid}-piece-${i}`
    }))

    return (
        <section className="relative isolate mx-auto overflow-hidden bg-white">
            <div className="mt-20 h-1 w-full bg-gradient-to-r from-[#F13E3A] via-[#f3b034] to-[#F13E3A]" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#F13E3A] via-[#f3b034] to-[#F13E3A]" />

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 lg:gap-14 lg:px-8">
                {/* Gallery */}
                <div className="order-1 md:order-2 md:col-span-7">
                    <div
                        className="relative"
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${cols}, ${pieceSize}px)`,
                            gap,
                            justifyContent: "center"
                        }}
                    >
                        {pieces.map((p) => (
                            <svg
                                key={p.id}
                                width={pieceSize}
                                height={pieceSize}
                                viewBox="0 0 300 300"
                                className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                            >
                                <defs>
                                    <clipPath
                                        id={`${p.id}-clip`}
                                        clipPathUnits="userSpaceOnUse"
                                    >
                                        <path d={p.shape.d} />
                                    </clipPath>
                                    <filter
                                        id={`${p.id}-soft`}
                                        x="-20%"
                                        y="-20%"
                                        width="140%"
                                        height="140%"
                                    >
                                        <feDropShadow
                                            dx="0"
                                            dy="4"
                                            stdDeviation="4"
                                            floodColor="rgba(0,0,0,0.18)"
                                        />
                                    </filter>
                                </defs>

                                {/* outline */}
                                <path
                                    d={p.shape.d}
                                    fill="white"
                                    stroke="#d1d5db"
                                    strokeWidth="2"
                                    filter={`url(#${p.id}-soft)`}
                                />

                                {/* image masked into silhouette */}
                                <image
                                    href={p.img || PLACEHOLDER}
                                    width="300"
                                    height="300"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath={`url(#${p.id}-clip)`}
                                />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Copy */}
                <div className="order-2 md:order-1 md:col-span-5">
                    <h2 className="text-balance text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                        {headline}
                    </h2>
                    <p className="mt-4 text-pretty text-base/7 text-neutral-700 sm:text-lg/8">
                        {subcopy}
                    </p>

                    <div className="mt-6">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#f13e3b] to-[#f3b034] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b034]/60"
                        >
                            {ctaLabel}
                        </Link>
                    </div>

                    <p className="mt-3 text-xs text-neutral-500">
                        Skip or cancel anytime. Worldwide shipping available.
                    </p>
                </div>
            </div>
        </section>
    )
}

// ---- DEV TESTBED ---------------------------------------------------------
export function JigsawSilhouetteGallery__Testbed() {
    if (process.env.NODE_ENV === "production") return null

    return (
        <div className="space-y-10 p-4">
            <JigsawSilhouetteGallery />
            <JigsawSilhouetteGallery cols={5} pieceSize={120} />
        </div>
    )
}
