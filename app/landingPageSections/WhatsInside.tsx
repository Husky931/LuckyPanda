"use client"

import Image from "next/image"

import dynamic from "next/dynamic"

const InputJoinWaitlist = dynamic(
    () => import("@/app/components/InputJoinWaitlist"),
    {
        ssr: false
    }
)

const WhatsInside = () => {
    return (
        <section
            id="whatsinside"
            className="flex h-full flex-col justify-center gap-x-12 gap-y-12 bg-primary-red px-8 py-10 md:px-20 lg:flex-row lg:items-stretch xl:gap-x-20 2xl:px-60"
        >
            <article className="flex flex-1 items-center justify-center">
                <figure className="relative h-[400px] w-full overflow-hidden rounded-br-[20px] rounded-tl-[20px]">
                    <Image
                        src="/product_images/whats_inside.webp"
                        alt="chinese snack box product photography"
                        fill
                        className="object-fill"
                    />
                </figure>
            </article>
            <article className="flex flex-1 flex-col items-start justify-center">
                <header className="text-shadow leading-[50px] text-background-white">
                    <div className="text-h1 font-medium">
                        <span className="font-normal">What&apos;s</span> inside
                        my Box
                    </div>
                </header>

                <article className="flex flex-col justify-between">
                    <p className="mg:mb-0 mb-16 mt-4 font-nunito text-background-white">
                        Each box is packed with a handpicked selection of unique
                        Chinese snacks — sweet, savory, spicy, and everything in
                        between. From regional specialties to modern favorites,
                        we curate bold and unexpected flavors you won’t find
                        anywhere else. <br className="hidden md:block" />
                        <br />
                        And for a little surprise? Every month you’ll also get a
                        fun cultural extra — like a temporary Chinese character
                        tattoo, a miniature chopstick set, or something quirky
                        straight from the local markets.
                    </p>
                    <InputJoinWaitlist bgColor="bg-black" errorColor="white" />
                </article>
            </article>
        </section>
    )
}

export default WhatsInside
