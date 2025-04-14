"use client"

import WaitingListBtn from "./WaitingListBtn"
import Image from "next/image"

const BoxCarouselSection = () => {
    return (
        <section className="relative">
            <Image
                src="/character_full.svg"
                alt="chinese character"
                width={500}
                height={400}
                className="absolute bottom-10 right-0 z-10"
            />

            <section
                id="products"
                className="flex h-full flex-col justify-center gap-y-12 px-8 py-10 md:px-20 lg:flex-row lg:items-stretch 2xl:px-60"
            >
                <article className="flex flex-1 items-center justify-center">
                    <figure className="relative h-[400px] w-full">
                        <Image
                            src="/images_dummy/image1.png"
                            alt="chinese character"
                            fill
                            className="object-contain"
                        />
                    </figure>
                </article>
                <article className="relative flex flex-1 flex-col items-start justify-center">
                    <header className="text-shadow leading-[50px]">
                        <div className="text-h1 font-black">
                            <span className="font-medium">Taste and</span> enjoy
                            China
                        </div>
                        <div className="text-h1 font-black">from your home</div>
                    </header>

                    <article className="flex flex-col justify-between">
                        <p className="mg:mb-0 mb-16 mt-4 font-nunito">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut vitae urna id ipsum cursus ornare nec non
                            diam. Phasellus congue mi ut ex efficitur tristique.
                            Sed lacinia pharetra tortor, vitae fringilla eros
                            feugiat sit amet. Sed vehicula ante sed lacus tempor
                            scelerisque. Phasellus blandit arcu diam, sit amet
                            consequat sapien aliquam vel. Vestibulum porta orci
                            et ligula iaculis sodales. Nulla scelerisque eros a
                            blandit luctus..
                        </p>
                        <WaitingListBtn />
                    </article>
                </article>
            </section>
        </section>
    )
}

export default BoxCarouselSection
