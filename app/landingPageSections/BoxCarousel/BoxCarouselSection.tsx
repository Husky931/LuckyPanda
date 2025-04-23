"use client"

import Image from "next/image"
import ProductImageCarousel from "./ProductImageCarousel"
import InputJoinWaitlist from "@/app/components/InputJoinWaitlist"

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
            {/* <Image
                src="/character_full.svg"
                alt="Decorative Chinese character"
                width={500}
                height={400}
                className="absolute bottom-10 right-0 z-40 hidden lg:block"
                priority
            /> */}

            <section
                id="products"
                className="flex h-full w-full flex-col justify-center gap-8 px-4 py-8 md:gap-y-12 md:px-8 md:py-10 lg:flex-row lg:items-stretch lg:px-20 2xl:px-60"
            >
                <article className="flex flex-1 items-center justify-center lg:max-w-[50%]">
                    <ProductImageCarousel images={productImages} />
                </article>

                <article className="relative flex flex-1 flex-col items-start justify-center lg:max-w-[50%]">
                    <div className="absolute left-1/2 top-0 z-0 w-[200px] -translate-x-1/2 sm:w-[250px] md:w-[300px] lg:w-[500px]">
                        <Image
                            src="/character_full.svg"
                            alt="Decorative Chinese character"
                            width={500}
                            height={400}
                            className="h-auto w-full"
                            priority
                        />
                    </div>
                    <header className="text-shadow relative leading-[1.2]">
                        <div className="text-3xl font-black md:text-4xl lg:text-5xl xl:text-6xl">
                            <span className="font-medium">Sneak peek:</span>{" "}
                            your first Chinese snack box
                        </div>
                    </header>

                    <article className="flex flex-col justify-between">
                        <p className="mb-8 mt-4 text-sm leading-relaxed md:mb-12 md:text-base lg:mb-16 lg:text-lg">
                            Get a taste of what’s coming! Your first box is
                            packed with a variety of authentic Chinese snacks —
                            from spicy chips to nostalgic childhood sweets.
                            Every item is hand-selected to give you an exciting
                            and flavorful introduction to the world of Chinese
                            snacking. This is more than just a treat — it’s an
                            edible adventure.
                        </p>
                        {/* <InputJoinWaitlist /> */}
                    </article>
                </article>
            </section>
        </section>
    )
}

export default BoxCarouselSection
