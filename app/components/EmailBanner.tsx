"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

const WaitlistModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedBonus, setSelectedBonus] = useState("15% off first box")

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail")
        if (!storedEmail) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => setIsVisible(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const email = (form.elements.namedItem("email") as HTMLInputElement)
            .value
        if (email) {
            localStorage.setItem("userEmail", email)
            localStorage.setItem("launchBonus", selectedBonus)
            setIsVisible(false)
            // Optionally send to your backend here
        }
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="relative mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row">
                {/* Left - Image */}
                <div className="relative w-full lg:w-1/2">
                    <Image
                        src="/whats_inside.webp"
                        alt="Panda Snacks Box"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right - Waitlist Form */}
                <div className="relative flex w-full flex-col justify-center p-6 lg:w-1/2">
                    <button
                        onClick={handleClose}
                        className="absolute right-2 top-2 text-2xl text-gray-600 hover:text-black"
                    >
                        &times;
                    </button>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-2">
                            <Image
                                src="/logo/logo+text.png"
                                alt="Lucky Panda Treats"
                                width={150}
                                height={48}
                                className="mx-auto mb-2 h-12 w-auto"
                            />
                            <h2 className="mt-4 text-center text-xl font-bold">
                                We’re Launching Soon!
                            </h2>
                            <h1 className="mb-4 text-center text-3xl font-extrabold text-primary-red">
                                Join the Waitlist 🎉
                            </h1>
                            <p className="mb-4 text-center text-sm text-gray-600">
                                Lucky Panda Treats is a wild snack subscription
                                box from China. Get early access + your favorite
                                launch bonus.
                            </p>

                            <div className="mb-4">
                                <p className="mb-2 font-semibold">
                                    Choose your launch bonus:
                                </p>
                                <label className="mb-2 flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="bonus"
                                        value="15% off first box"
                                        checked={
                                            selectedBonus ===
                                            "15% off first box"
                                        }
                                        onChange={(e) =>
                                            setSelectedBonus(e.target.value)
                                        }
                                    />
                                    <span>15% off your first box</span>
                                </label>
                                <label className="mb-2 flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="bonus"
                                        value="10% off first 3 boxes"
                                        checked={
                                            selectedBonus ===
                                            "10% off first 3 boxes"
                                        }
                                        onChange={(e) =>
                                            setSelectedBonus(e.target.value)
                                        }
                                    />
                                    <span>10% off your first 3 boxes</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="bonus"
                                        value="Fun surprise in first 2 boxes"
                                        checked={
                                            selectedBonus ===
                                            "Fun surprise in first 2 boxes"
                                        }
                                        onChange={(e) =>
                                            setSelectedBonus(e.target.value)
                                        }
                                    />
                                    <span>
                                        Fun surprise in your first 2 boxes
                                    </span>
                                </label>
                            </div>

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-full bg-primary-red py-2 font-bold text-white transition hover:bg-primary-redHover"
                            >
                                Join the Waitlist
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WaitlistModal
