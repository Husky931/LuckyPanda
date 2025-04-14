"use client"

import Image from "next/image"
import WaitingListBtn from "./WaitingListBtn"

const WhatIs = () => {
    return (
        <section className="relative">
            {/* <img
                src="/character_1.svg"
                alt="chinese character"
                className="absolute"
            /> */}
            <section className="relative flex h-full flex-col justify-center gap-y-12 px-8 py-10 md:px-20 lg:flex-row lg:items-stretch 2xl:px-60">
                <Image
                    src="/character_1.svg"
                    alt="chinese character"
                    fill
                    className="object-fit left-0"
                />
                <article className="flex flex-1 flex-col items-start justify-center">
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
                <article className="flex flex-1 items-center justify-center">
                    <figure className="relative h-[450px] w-full max-w-[400px]">
                        <Image
                            src="/images_dummy/image1.png"
                            alt="chinese snack box product photography"
                            fill
                            className="object-contain"
                        />
                    </figure>
                </article>
            </section>
        </section>
    )
}

export default WhatIs
