"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ParalaxSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, 250]) // Higher shift for desktop

    return (
        <div
            ref={ref}
            className="img-holder z-80 relative my-10 h-[480px] w-full overflow-hidden sm:h-[600px] md:aspect-auto md:h-[700px] lg:h-[850px] xl:h-[950px] 2xl:h-[1050px]"
        >
            <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
                <Image
                    src="/paralax.webp"
                    alt="product photography"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    )
}

export default ParalaxSection
