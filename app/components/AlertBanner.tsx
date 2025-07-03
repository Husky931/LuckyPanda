"use client"

import { useEffect, useState } from "react"

const messages = [
    "🚀 We’re launching soon! Join the waitlist to get early access!",
    "🎁 Sign up today and get an exclusive 10% off your first box!",
    "🐼 Be first to snack! Only early birds get limited launch bonuses!"
]

const AlertBanner = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [])

    if (!isVisible) return null

    const prevMessage = () =>
        setCurrentIndex(
            (prev) => (prev - 1 + messages.length) % messages.length
        )
    const nextMessage = () =>
        setCurrentIndex((prev) => (prev + 1) % messages.length)

    return (
        <div className="fixed top-0 z-30 w-full bg-yellow-300 px-4 py-2 text-center">
            <div className="relative w-full">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700 focus:outline-none lg:right-10"
                >
                    ×
                </button>
                <div className="relative mx-auto flex max-w-full items-center justify-center pr-10 sm:max-w-2xl sm:pr-16">
                    {/* Message and arrows centered */}
                    <div className="mx-auto flex max-w-[90%] items-center justify-center px-2 text-sm sm:max-w-full sm:px-6 sm:text-base">
                        <button
                            onClick={prevMessage}
                            className="mr-0 text-xl font-bold text-blue-700 focus:outline-none md:mr-10"
                        >
                            ‹
                        </button>
                        <span className="font-medium">
                            {messages[currentIndex]}
                        </span>
                        <button
                            onClick={nextMessage}
                            className="ml-0 text-xl font-bold text-blue-700 focus:outline-none md:ml-10"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertBanner
