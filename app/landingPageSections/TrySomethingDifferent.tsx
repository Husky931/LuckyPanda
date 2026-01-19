"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Props {
    headline?: string
    subcopy?: string
    images?: string[]
    ctaHref?: string
    ctaLabel?: string
    cols?: number
    pieceSize?: number
    gap?: number
}

const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>\
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#f13e3b'/><stop offset='100%' stop-color='#f3b034'/></linearGradient></defs>\
  <rect width='100%' height='100%' fill='url(#g)'/>\
</svg>`)

const DEFAULT_IMAGES = [
    "/fun_images/1.jpg",
    "/fun_images/2.webp",
    "/fun_images/3.webp",
    "/fun_images/4.webp",
    "/fun_images/5.webp",
    "/fun_images/6.jpg",
    "/fun_images/7.jpg",
    "/fun_images/8.jpg",
    "/fun_images/9.webp",
    "/fun_images/10.webp",
    "/fun_images/11.webp",
    "/fun_images/12.jpeg",
    "/fun_images/13.webp",
    "/fun_images/14.webp",
    "/fun_images/15.webp",
    "/fun_images/16.webp",
    "/fun_images/17.webp",
    "/fun_images/18.webp",
    "/fun_images/19.webp",
    "/fun_images/20.webp"
]

// 300x300 jigsaw-ish paths
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
    { name: "allFlat", d: "M40,40 h220 v220 h-220 z" },
    {
        name: "topOut-leftOut",
        d: "M40,150 C40,90 90,40 150,40 c20,0 36,4 48,12 8,-18 25,-32 52,-32 34,0 58,24 58,58 0,27 -14,44 -32,52 8,12 12,28 12,48 0,60 -50,110 -110,110 -60,0 -110,-50 -110,-110 0,-20 4,-36 12,-48 -18,-8 -32,-25 -32,-52 z"
    }
]

export default function JigsawSilhouetteGallery({
    headline = "Yes, I do want to try something interesting and unique",
    subcopy = "A fresh curation of bold Chinese snacks combined with cultural itens. New arrivals every month.",
    images,
    ctaHref = "/products/monthly-snack-box",
    ctaLabel = "Get the monthly box",
    cols = 4,
    pieceSize = 140,
    gap = 12
}: Props) {
    const uid = useId()
    const list = images && images.length ? images : DEFAULT_IMAGES

    const pieces = Array.from({ length: list.length }, (_, i) => ({
        img: list[i] || PLACEHOLDER,
        shape: SHAPES[i % SHAPES.length],
        idBase: `${uid}-piece-${i}`
    }))

    const [openSrc, setOpenSrc] = useState<string | null>(null)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenSrc(null)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    function PieceSVG({
        p,
        size,
        variant
    }: {
        p: { img: string; shape: { d: string }; idBase: string }
        size: number
        variant: "m" | "d"
    }) {
        const localId = `${p.idBase}-${variant}`
        return (
            <button
                type="button"
                onClick={() => setOpenSrc(p.img)}
                className="group relative shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#f3b034]/60"
                style={{ width: size, height: size }}
                aria-label="Open image"
            >
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 300 300"
                    className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                >
                    <defs>
                        <clipPath
                            id={`${localId}-clip`}
                            clipPathUnits="userSpaceOnUse"
                        >
                            <path d={p.shape.d} />
                        </clipPath>
                        <filter
                            id={`${localId}-soft`}
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

                    <path
                        d={p.shape.d}
                        fill="white"
                        stroke="#d1d5db"
                        strokeWidth="2"
                        filter={`url(#${localId}-soft)`}
                    />
                    <image
                        href={p.img}
                        width="300"
                        height="300"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath={`url(#${localId}-clip)`}
                    />
                </svg>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-hover:ring-2 group-hover:ring-[#f3b034]/50" />
            </button>
        )
    }

    return (
        <section className="w-full">
            <section className="relative mx-auto overflow-hidden bg-background-sectionBg">
                {/* Top gradient bar: full width minus standard padding */}
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mt-6 h-1 w-full bg-gradient-to-r from-[#F13E3A] via-[#f3b034] to-[#F13E3A]" />
                </div>

                {/* Content */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
                    {/* Copy first on mobile/tablet, left on desktop. Centered on mobile/tablet. */}
                    <div className="order-1 text-center lg:order-1 lg:col-span-5 lg:text-left">
                        <h2 className="text-balance text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                            {headline}
                        </h2>
                        <p className="mt-4 text-pretty font-parkinsans text-base/7 text-neutral-700 sm:text-lg/8">
                            {subcopy}
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <Link
                                href={ctaHref}
                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#f13e3b] to-[#f3b034] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b034]/60"
                            >
                                {ctaLabel}
                            </Link>
                        </div>
                        <p className="mt-3 text-xs text-neutral-500">
                            No automatic renewal.
                        </p>
                        <p className="mt-3 text-xs text-neutral-500">
                            Shipping only available for certain countries, check
                            shipping FAQ for more information.
                        </p>
                    </div>

                    {/* Gallery second on mobile/tablet, right on desktop. Hidden below lg by design. */}
                    <div className="order-2 lg:order-2 lg:col-span-7">
                        <div
                            className="relative hidden lg:block"
                            style={{
                                display: "grid",
                                gridTemplateColumns: `repeat(${cols}, ${pieceSize}px)`,
                                gap,
                                justifyContent: "center"
                            }}
                        >
                            {pieces.map((p) => (
                                <PieceSVG
                                    key={`${p.idBase}-d`}
                                    p={p}
                                    size={pieceSize}
                                    variant="d"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom gradient bar: full width minus standard padding */}
                <div className="px-4 pb-6 sm:px-6 lg:px-8">
                    <div className="mx-auto h-1 w-full bg-gradient-to-r from-[#F13E3A] via-[#f3b034] to-[#F13E3A]" />
                </div>

                {/* Modal */}
                {openSrc && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
                        onClick={() => setOpenSrc(null)}
                    >
                        <div
                            className="relative max-h-[85vh] max-w-[92vw]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                aria-label="Close"
                                className="absolute -right-3 -top-3 z-[1001] rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-neutral-800 shadow hover:bg-white"
                                onClick={() => setOpenSrc(null)}
                            >
                                ×
                            </button>
                            <img
                                src={openSrc}
                                alt=""
                                loading="lazy"
                                className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </section>
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
