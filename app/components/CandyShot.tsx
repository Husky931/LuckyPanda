"use client"

import Image from "next/image"

const CandyShot = () => {
    return (
        <div className="relative w-full">
            <Image
                src="/candy_shot.webp"
                alt="Candy Shot"
                width={1920}
                height={800}
                className="h-auto w-full object-cover"
                priority
            />
        </div>
    )
}

export default CandyShot
