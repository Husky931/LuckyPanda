"use client"

import { useDraggableScroll } from "@/app/hooks/useDraggableScroll"

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
                    className="scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-x-6 overflow-x-auto pb-4"
                >
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 1
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 2
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 3
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 4
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 5
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 6
                    </div>
                    <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
                        insert video 7
                    </div>
                </article>
            </div>
        </section>
    )
}

export default SocialProof

// const SocialProof = () => {
//     return (
//         <section className="w-full px-8 py-10 md:px-20 2xl:px-60">
//             <header className="mb-12 text-center text-h1 font-bold leading-[50px]">
//                 What pre launch testers are saying
//             </header>

//             <div className="relative">
//                 {/* Fade left indicator */}
//                 <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
//                 {/* Fade right indicator */}
//                 <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

//                 <article className="scrollbar-hide flex snap-x snap-mandatory gap-x-6 overflow-x-auto pb-4">
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 1
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 2
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 3
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 4
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 5
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 6
//                     </div>
//                     <div className="h-auto w-fit rounded-3xl bg-[#d9d9d9] p-32">
//                         insert video 7
//                     </div>
//                 </article>
//             </div>
//         </section>
//     )
// }

// export default SocialProof
