"use client"

import { useEffect, useState } from "react"
import { useAlert } from "@/app/providers/AlertBannerProvider/AlertBannerContext"

const messages = [
    "Officialy launched! Lucky Panda is on!",
    "First 100 customers: use coupon code `let me try it` for a 20% discount!"
]

const AlertBanner = () => {
    const { isAlertVisible, setIsAlertVisible } = useAlert()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAlertVisible(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [setIsAlertVisible])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [])

    if (!isAlertVisible) return null

    const prevMessage = () =>
        setCurrentIndex(
            (prev) => (prev - 1 + messages.length) % messages.length
        )
    const nextMessage = () =>
        setCurrentIndex((prev) => (prev + 1) % messages.length)

    return (
        <div className="fixed top-0 z-50 w-full bg-yellow-300 px-4 py-2 text-center">
            <div className="relative w-full">
                <button
                    onClick={() => setIsAlertVisible(false)}
                    className="absolute right-2 top-1/2 z-50 flex -translate-y-1/2 items-center justify-center text-xl font-bold text-gray-700 focus:outline-none sm:right-0 lg:right-4"
                >
                    ×
                </button>
                <div className="relative mx-auto flex max-w-full items-center justify-center sm:max-w-2xl">
                    {/* Message and arrows centered */}
                    <div className="mx-auto flex max-w-[90%] items-center justify-center px-2 text-sm sm:max-w-full sm:px-6 sm:text-base">
                        <button
                            onClick={prevMessage}
                            className="mr-0 text-xl font-bold text-blue-700 focus:outline-none md:mr-10"
                        >
                            ‹
                        </button>
                        <span className="animate-fade-in transition-opacity duration-500">
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
