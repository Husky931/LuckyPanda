"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

const WaitlistModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedBonus, setSelectedBonus] = useState("15% off first box")

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail")
        if (!storedEmail) {
            const timer = setTimeout(() => setIsVisible(true), 2000)
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
            // TODO: send to backend
        }
    }

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-3 sm:p-4"
            role="dialog"
            aria-modal="true"
        >
            <div className="relative mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-xl sm:max-w-4xl lg:max-h-[88vh] lg:flex-row">
                {/* Close button: red circle with white X */}
                <button
                    onClick={handleClose}
                    aria-label="Close waitlist modal"
                    className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
                >
                    <span className="text-lg font-bold leading-none sm:text-xl">
                        ×
                    </span>
                </button>

                {/* Left - Media */}
                <div className="relative h-64 w-full sm:h-64 lg:h-auto lg:w-1/2">
                    {/* <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/try_the_world.mov" />
                        Your browser does not support the video tag.
                    </video> */}
                    <Image
                        src="/new_product_images/full.webp"
                        alt="Lucky Panda Treats — product preview"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Right - Waitlist Form */}
                <div className="relative flex w-full flex-col justify-center p-4 sm:p-6 lg:max-h-[88vh] lg:w-1/2">
                    {/* Make form area scrollable on small screens to cap overall height */}
                    <div className="max-h-[90vh] overflow-y-auto pr-1 sm:max-h-[72vh] lg:max-h-[76vh]">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-2">
                                {/* <Image
                                    src="/logo/logo+text.png"
                                    alt="Lucky Panda Treats"
                                    width={140}
                                    height={44}
                                    className="mx-auto mb-2 h-10 w-auto sm:h-12"
                                /> */}
                                <h2 className="mt-2 text-center text-lg font-bold sm:text-xl">
                                    We’re Launching Soon!
                                </h2>
                                <h1 className="mb-3 text-center text-2xl font-extrabold text-primary-red sm:mb-4 sm:text-3xl">
                                    Join the Waitlist 🎉
                                </h1>
                                <p className="mb-3 text-center text-xs text-gray-600 sm:mb-4 sm:text-sm">
                                    Lucky Panda Treats is a wild snack
                                    subscription box from China. Get early
                                    access + your favorite launch bonus.
                                </p>

                                <div className="mb-3 sm:mb-4">
                                    <p className="mb-2 text-sm font-semibold sm:text-base">
                                        Choose your launch bonus:
                                    </p>

                                    {/* Slightly denser layout for mobile */}
                                    <div className="space-y-2 sm:space-y-2.5">
                                        <label className="flex items-center gap-2 text-sm sm:text-base">
                                            <input
                                                type="radio"
                                                name="bonus"
                                                value="15% off first box"
                                                checked={
                                                    selectedBonus ===
                                                    "15% off first box"
                                                }
                                                onChange={(e) =>
                                                    setSelectedBonus(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span>15% off your first box</span>
                                        </label>

                                        <label className="flex items-center gap-2 text-sm sm:text-base">
                                            <input
                                                type="radio"
                                                name="bonus"
                                                value="10% off first 3 boxes"
                                                checked={
                                                    selectedBonus ===
                                                    "10% off first 3 boxes"
                                                }
                                                onChange={(e) =>
                                                    setSelectedBonus(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span>
                                                10% off your first 3 boxes
                                            </span>
                                        </label>

                                        <label className="flex items-center gap-2 text-sm sm:text-base">
                                            <input
                                                type="radio"
                                                name="bonus"
                                                value="Fun surprise in first 2 boxes"
                                                checked={
                                                    selectedBonus ===
                                                    "Fun surprise in first 2 boxes"
                                                }
                                                onChange={(e) =>
                                                    setSelectedBonus(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span>
                                                Fun surprise in your first 2
                                                boxes
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="mb-3 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:mb-4 sm:text-base"
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-primary-red py-2.5 text-sm font-bold text-white transition hover:bg-primary-redHover sm:text-base"
                                >
                                    Join the Waitlist
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitlistModal
