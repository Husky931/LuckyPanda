"use client"

import Image from "next/image"
import SnackBrainIcon from "@/app/icons/SnackBrain"
import LaughFaceIcon from "@/app/icons/LaughFaceIcon"
import TruckIcon from "@/app/icons/TruckIcon"
import CTAButton from "../components/CTAButton"

const WhyNotSection = () => {
    return (
        <section id="whatis" className="relative w-full">
            <Image
                src="/chinese_character/character_1.svg"
                alt="chinese character"
                width={300}
                height={300}
                className="absolute left-0 top-2"
            />
            <section className="relative flex h-full flex-col justify-center gap-x-12 gap-y-12 px-8 py-10 md:px-20 lg:flex-row lg:items-stretch xl:gap-x-20 2xl:px-60">
                <article className="flex flex-1 flex-col items-start justify-center">
                    <div className="flex flex-1 flex-col gap-6 text-[#111]">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Subscribe & Save
                        </h2>
                        <h3 className="text-2xl font-extrabold leading-snug text-gray-900">
                            <span className="font-semibold">Why not</span> try a
                            subscription?
                        </h3>

                        <ul className="space-y-4 text-sm leading-relaxed md:text-base">
                            <li className="flex items-start gap-4">
                                <SnackBrainIcon />
                                <span>
                                    <strong>We do the thinking for you!</strong>{" "}
                                    Each month, we handpick the most fun, weird,
                                    and delicious Asian snacks—so you don’t have
                                    to scroll and second-guess.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <LaughFaceIcon />
                                <span>
                                    <strong>Fun and exciting</strong> Every box
                                    is a surprise party of flavors. From spicy
                                    duck neck to sweet panda cookies, expect
                                    laughs, shocks, and snack obsession.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <TruckIcon />
                                <span>
                                    <strong>Straight to your door!</strong> No
                                    need to hunt for exotic snacks. We deliver
                                    Asia boldest bites straight to your
                                    doorstep—fast and fresh.
                                </span>
                            </li>
                        </ul>

                        <CTAButton href="#subscribe" label="Subscribe" />
                    </div>
                </article>
                <article className="relative flex flex-1 items-center justify-center lg:min-h-[400px]">
                    <div className="relative h-[300px] w-full overflow-hidden rounded-br-[20px] rounded-tl-[20px] md:h-[400px] lg:h-full">
                        {/* REPLACE BELOW WITH VIDEO */}
                        <Image
                            src="/qipao.jpg"
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

export default WhyNotSection
