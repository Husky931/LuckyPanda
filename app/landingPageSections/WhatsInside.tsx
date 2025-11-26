"use client"

import Image from "next/image"
import CTAButton from "../components/CTAButton"

const WhatsInside = () => {
    return (
        <section
            id="whatsinside"
            className="flex h-full flex-col justify-center gap-x-12 gap-y-12 bg-primary-red px-8 py-10 md:px-20 lg:flex-row lg:items-stretch lg:py-16 xl:gap-x-20 2xl:px-60 2xl:py-28"
        >
            <article className="flex flex-1 items-center justify-center">
                <figure className="relative aspect-[4/3] w-full max-w-[650px] overflow-hidden rounded-br-[20px] rounded-tl-[20px] sm:aspect-[16/10] md:aspect-[5/3]">
                    <Image
                        src="/whats_inside.JPG"
                        alt="chinese snack box product photography"
                        fill
                        className="object-cover"
                    />
                </figure>
            </article>
            <article className="flex flex-1 flex-col items-start justify-center">
                <header className="text-shadow leading-[50px] text-background-white">
                    <div className="text-h1 font-medium">
                        <span className="font-normal">What&apos;s</span> inside{" "}
                        <br className="block md:hidden" />
                        my Box
                    </div>
                </header>

                <article className="flex flex-col justify-between">
                    <p className="mg:mb-0 mb-16 mt-4 text-background-white">
                        We try to make things as interesting as possible for
                        you. Each box is filled with different kinds of flavors
                        — mix of sweet, savory, some even little spicy - no
                        crying please. Our job is to take your taste buds on a
                        proper roller coaster ride every month.{" "}
                        <br className="hidden md:block" />
                        <br className="block md:hidden" />
                        <br />
                        We also sneak in some non-eatable items that we think
                        you'll enjoy. We keep these surprises a secret until the
                        box lands in your hands because we believe mystery makes
                        everything little more exciting.
                    </p>
                    <CTAButton
                        href="#subscribe"
                        label="Subscribe"
                        startColor="white"
                        textColor="red"
                    />
                </article>
            </article>
        </section>
    )
}

export default WhatsInside
