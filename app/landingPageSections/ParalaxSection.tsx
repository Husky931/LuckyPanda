"use client"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const ParalaxSection = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    // Same range as before
    const yRaw = useTransform(scrollYProgress, [0, 1], [0, 250])

    // Smooth the movement, especially noticeable on mobile
    const y = useSpring(yRaw, {
        stiffness: 90, // lower = softer
        damping: 24, // higher = less bounce
        mass: 0.4
    })

    return (
        <div
            ref={ref}
            className="img-holder z-80 relative my-10 h-[480px] w-full overflow-hidden sm:h-[600px] md:aspect-auto md:h-[700px] lg:h-[850px] xl:h-[950px] 2xl:h-[1050px]"
        >
            <motion.div
                style={{ y, scale: 1.1, willChange: "transform" }}
                className="absolute inset-0"
            >
                <Image
                    src="/paralax.jpg"
                    alt="Chinese girl in traditional clothes holding the Lucky Panda treats box and posing"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    )
}

export default ParalaxSection
