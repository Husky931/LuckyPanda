"use client"

import { MouseEvent, useState, ChangeEvent, useEffect } from "react"
import { validateEmail } from "@/app/lib/utils"
import SuccessModal from "@/app/components/SuccessModal"
import CountdownTimer from "../components/CountdownTimer"

const LatestUpdatesCopy = () => {
    const [mounted, setMounted] = useState(false)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setError("")
        setMessage("")
        setIsLoading(true)

        if (email === "") {
            setError("Please enter email address")
            setIsLoading(false)
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            setIsLoading(false)
            return
        }

        try {
            const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PUBLIC_URL!
            const params = new URLSearchParams({
                email,
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY!
            })

            const response = await fetch(scriptUrl, {
                method: "POST",
                body: params
            })

            const data = await response.json()

            if (data.result && data.result.includes("already exists")) {
                setError(data.result)
            } else {
                const successMessage =
                    data.result ||
                    "You've been added to the waitlist successfully!"
                setMessage(successMessage)
                setEmail("")
                setShowSuccessModal(true)
            }
        } catch (error) {
            console.error("Error:", error)
            setError("An error occurred. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (message || error) {
            setMessage("")
            setError("")
        }
    }

    if (!mounted) return null

    return (
        <div className="w-full bg-background-grey1 px-8 py-10 md:px-20 lg:mt-10 2xl:mt-20 2xl:px-60">
            <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
                Join our launch waitlist
            </header>
            <div className="text-center text-body1 text-black">
                10% off your first 6 months subscription as a thank-you for
                being an early bird.
            </div>
            <CountdownTimer />

            {/* Mobile Only */}
            <div className="mt-6 flex w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:hidden">
                <div className="relative w-full">
                    <input
                        onChange={handleChange}
                        value={email}
                        className="h-[50px] w-full rounded-full border border-borders-border2 bg-white pl-4 pr-20 text-black focus:ring-0"
                        placeholder="Join waitlist"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="absolute right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-r-full bg-primary-red px-4 text-body2 font-semibold text-background-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? "Sending..." : "Waitlist"}
                    </button>
                </div>
                {(error || message) && (
                    <p
                        className={`text-sm ${error ? "text-red-500" : "text-text-redPrimary"}`}
                    >
                        {error || message}
                    </p>
                )}
            </div>

            {/* Medium and Up */}
            <div className="mt-6 hidden w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:flex md:flex-row">
                <input
                    onChange={handleChange}
                    value={email}
                    className="w-full rounded-full border border-borders-border2 bg-white p-4 px-6 text-black focus:border-none focus:ring-0 md:flex-1"
                    placeholder="Join waitlist"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="rounded-full bg-primary-red px-8 py-4 font-parkinsans text-body2 font-semibold text-background-white disabled:cursor-not-allowed disabled:opacity-60 md:max-w-[250px]"
                >
                    {isLoading ? "Sending..." : "Waitlist"}
                </button>
            </div>

            {(error || message) && (
                <p
                    className={`mt-2 text-center text-sm ${error ? "text-red-500" : "text-text-redPrimary"}`}
                >
                    {error || message}
                </p>
            )}

            <SuccessModal
                isOpen={showSuccessModal}
                message={message}
                onClose={() => setShowSuccessModal(false)}
            />
        </div>
    )
}

export default LatestUpdatesCopy
