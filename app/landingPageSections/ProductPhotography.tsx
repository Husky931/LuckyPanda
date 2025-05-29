// import Image from "next/image"

// const ProductPhotography = () => {
//     return (
//         // <div className="img-holder relative aspect-[16/9] max-h-[650] w-full 2xl:max-h-[850]">
//         <div className="img-holder relative h-[480px] w-full sm:h-[600px] md:aspect-[16/9] md:max-h-[650px] 2xl:max-h-[850px]">
//             <Image
//                 src="/product_images/4-hands_photography.webp"
//                 alt="product photography"
//                 fill
//                 className="object-fill"
//             />
//         </div>
//     )
// }

// export default ProductPhotography

"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ProductPhotography = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, 250]) // Higher shift for desktop

    return (
        <div
            ref={ref}
            className="img-holder relative my-10 h-[480px] w-full overflow-hidden sm:h-[600px] md:aspect-auto md:h-[700px] lg:h-[850px] xl:h-[950px] 2xl:h-[1050px]"
        >
            <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
                <Image
                    src="/paralax.webp"
                    alt="product photography"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
        </div>
    )
}

export default ProductPhotography
