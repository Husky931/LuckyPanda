"use client"

import { useDraggableScroll } from "@/app/hooks/useDraggableScroll"
import Image from "next/image"

const testers = [
    {
        instagramHandle: "@snacklover123",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@yumreviews",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@asianfoodie",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@snacklover123",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@yumreviews",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@asianfoodie",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@yumreviews",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    },
    {
        instagramHandle: "@asianfoodie",
        postUrl: "https://www.instagram.com/reel/C484QZ9uipU/",
        profileImage: "/community/coming_soon_2.jpg"
    }
]

const SocialProof = () => {
    const scrollRef = useDraggableScroll()

    return (
        <section className="w-full px-8 py-10 md:px-20 2xl:px-60">
            <header className="mb-12 text-center text-h1 font-bold leading-[50px]">
                What pre launch testers are saying
            </header>

            <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

                <article
                    ref={scrollRef}
                    className="flex cursor-grab snap-x snap-mandatory gap-x-6 overflow-x-auto pb-4 scrollbar-hide"
                >
                    {testers.map((tester, index) => (
                        <a
                            key={index}
                            href={tester.postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative h-96 w-64 flex-shrink-0 overflow-hidden rounded-3xl bg-gray-200 shadow-md transition hover:opacity-90"
                        >
                            <Image
                                src={tester.profileImage}
                                alt={tester.instagramHandle}
                                fill
                                className="object-cover"
                            />

                            {/* Instagram handle overlay */}
                            <div className="absolute left-3 top-3 rounded-md bg-black bg-opacity-60 px-3 py-1 text-sm text-white">
                                {tester.instagramHandle}
                            </div>
                        </a>
                    ))}
                </article>
            </div>
        </section>
    )
}

export default SocialProof
