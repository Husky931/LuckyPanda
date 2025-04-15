"use client"

import WaitingListBtn from "../WaitingListBtn"
import Image from "next/image"
import ProductImageCarousel from "./ProductImageCarousel"

const BoxCarouselSection = () => {
    const productImages = [
        "/product_images/product_1.webp",
        "/product_images/product_2.webp",
        "/product_images/product_3.webp",
        "/product_images/product_4.webp",
        "/product_images/product_5.webp",
        "/product_images/product_6.webp",
        "/product_images/product_7.webp"
    ]

    return (
        <section className="relative w-full">
            <Image
                src="/character_full.svg"
                alt="Decorative Chinese character"
                width={500}
                height={400}
                className="absolute bottom-10 right-0 z-10 hidden lg:block"
                priority
            />

            <section
                id="products"
                className="flex h-full w-full flex-col justify-center gap-8 px-4 py-8 md:gap-y-12 md:px-8 md:py-10 lg:flex-row lg:items-stretch lg:px-20 2xl:px-60"
            >
                <article className="flex flex-1 items-center justify-center lg:max-w-[50%]">
                    <ProductImageCarousel images={productImages} />
                </article>

                <article className="relative flex flex-1 flex-col items-start justify-center lg:max-w-[50%]">
                    <header className="text-shadow leading-[1.2]">
                        <div className="text-3xl font-black md:text-4xl lg:text-5xl xl:text-6xl">
                            <span className="font-medium">Taste and</span> enjoy
                            China
                        </div>
                        <div className="text-3xl font-black md:text-4xl lg:text-5xl xl:text-6xl">
                            from your home
                        </div>
                    </header>

                    <article className="flex flex-col justify-between">
                        <p className="mb-8 mt-4 text-sm leading-relaxed md:mb-12 md:text-base lg:mb-16 lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut vitae urna id ipsum cursus ornare nec non
                            diam. Phasellus congue mi ut ex efficitur tristique.
                            Sed lacinia pharetra tortor, vitae fringilla eros
                            feugiat sit amet. Sed vehicula ante sed lacus tempor
                            scelerisque. Phasellus blandit arcu diam, sit amet
                            consequat sapien aliquam vel. Vestibulum porta orci
                            et ligula iaculis sodales. Nulla scelerisque eros a
                            blandit luctus.
                        </p>
                        <WaitingListBtn />
                    </article>
                </article>
            </section>
        </section>
    )
}

export default BoxCarouselSection
