"use client"

import Image from "next/image"
import ProductImageCarousel from "./ProductImageCarousel"

const BoxCarouselSection = () => {
    const productImages = [
        "/new_product_images/full.webp",
        "/new_product_images/1.webp",
        "/new_product_images/2.webp",
        "/new_product_images/3.webp",
        "/new_product_images/4.webp",
        "/new_product_images/5.webp",
        "/new_product_images/6.webp",
        "/new_product_images/7.webp",
        "/new_product_images/8.webp",
        "/new_product_images/9.webp",
        "/new_product_images/10.webp",
        "/new_product_images/11.webp",
        "/new_product_images/12.webp",
        "/new_product_images/13.webp",
        "/new_product_images/14.webp"
    ]

    return (
        <section className="relative w-full">
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
                            src="/chinese_character/character_full.svg"
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
