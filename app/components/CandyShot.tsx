"use client"

import Image from "next/image"

const CandyShot = () => {
    return (
        <div className="relative w-full">
            <Image
                src="/candy_shot_2.webp"
                alt="Candy Shot"
                width={1920}
                height={800}
                className="h-[60vh] w-full object-cover sm:h-auto"
                priority
            />
        </div>
    )
}

export default CandyShot
