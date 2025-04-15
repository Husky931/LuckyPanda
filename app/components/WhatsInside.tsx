"use client"

import Image from "next/image"
import WaitingListBtn from "./WaitingListBtn"

const WhatsInside = () => {
    return (
        <section
            id="whatsinside"
            className="flex h-full flex-col justify-center gap-y-12 bg-primary-red px-8 py-10 md:px-20 lg:flex-row lg:items-stretch 2xl:px-60"
        >
            <article className="flex flex-1 items-center justify-center">
                <figure className="relative h-[400px] w-full">
                    <Image
                        src="/product_images/3-whats_inside.webp"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae urna id ipsum cursus ornare nec non diam.
                        Phasellus congue mi ut ex efficitur tristique. Sed
                        lacinia pharetra tortor, vitae fringilla eros feugiat
                        sit amet. Sed vehicula ante sed lacus tempor
                        scelerisque. Phasellus blandit arcu diam, sit amet
                        consequat sapien aliquam vel. Vestibulum porta orci et
                        ligula iaculis sodales. Nulla scelerisque eros a blandit
                        luctus..
                    </p>
                    <WaitingListBtn
                        color="background-white"
                        textColor="primary-red"
                    />
                </article>
            </article>
        </section>
    )
}

export default WhatsInside
