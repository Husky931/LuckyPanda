"use client"

import Image from "next/image"
import InputJoinWaitlist from "@/app/components/InputJoinWaitlist"

const WhatIs = () => {
    return (
        <section id="whatis" className="relative">
            <Image
                src="/character_1.svg"
                alt="chinese character"
                width={300}
                height={300}
                className="absolute left-0 top-2"
            />
            <section className="relative flex h-full flex-col justify-center gap-x-12 gap-y-12 px-8 py-10 md:px-20 lg:flex-row lg:items-stretch xl:gap-x-20 2xl:px-60">
                <article className="flex flex-1 flex-col items-start justify-center">
                    <header className="text-shadow leading-[50px]">
                        <div className="text-h1 font-black">
                            <span className="font-medium">Taste and</span> enjoy
                            China from your home
                        </div>
                    </header>

                    <article className="flex flex-col justify-between">
                        <p className="mb-8 mt-4 text-sm leading-relaxed md:mb-12 md:text-base lg:mb-16 lg:text-lg">
                            Discover a new side of China each month with our
                            curated snack box. From spicy Sichuan treats to
                            sweet red bean pastries, every delivery is a
                            surprise journey through regional flavors, rare
                            finds, and beloved classics. Perfect for adventurous
                            foodies, culture lovers, or anyone craving a taste
                            of something different—delivered right to your
                            doorstep.
                        </p>
                        <InputJoinWaitlist />
                    </article>
                </article>
                <article className="relative flex flex-1 items-center justify-center lg:min-h-[400px]">
                    <div className="relative h-[300px] w-full overflow-hidden rounded-br-[20px] rounded-tl-[20px] md:h-[400px] lg:h-full">
                        <Image
                            src="/product_images/2-what_is.webp"
                            alt="chinese snack box product photography"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </article>
            </section>
        </section>
    )
}

export default WhatIs
