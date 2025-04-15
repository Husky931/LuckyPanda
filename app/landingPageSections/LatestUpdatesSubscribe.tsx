"use client"

import { MouseEvent, useState } from "react"
import { validateEmail } from "@/app/lib/utils"

const LatestUpdatesSubscribe = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        setError("")
        setMessage("")
        event.preventDefault()

        if (email === "") {
            setError("Please enter email address")
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
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
            setMessage(data.result || data.error || "Signup successful!")
            setEmail("")
        } catch (error) {
            console.error("Error:", error)
            setMessage("An error occurred. Please try again later.")
        }
    }

    return (
        <div className="bg-background-grey1 px-8 py-10 md:px-20 2xl:px-60">
            <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
                Subscribe to our pre-release updates
            </header>
            <div className="text-center text-body1 text-black">
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                orci porta dapibus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus suscipit tortor eget felis porttitor
                volutpat.
            </div>

            {/* Mobile Only */}
            <div className="mt-6 flex w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:hidden">
                <div className="relative w-full">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-[50px] w-full rounded-full border border-borders-border2 bg-white pl-4 pr-20 text-black focus:ring-0"
                        placeholder="Your email"
                    />
                    <button
                        onClick={handleSubmit}
                        className="absolute right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-r-full bg-primary-red px-4 text-body2 font-semibold text-background-white"
                    >
                        Subscribe
                    </button>
                </div>
                {(error || message) && (
                    <p
                        className={`text-sm ${error ? "text-red-500" : "text-green-500"}`}
                    >
                        {error || message}
                    </p>
                )}
            </div>

            {/* Medium and Up */}
            <div className="mt-6 hidden w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:flex md:flex-row">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-borders-border2 bg-white p-4 px-6 text-black focus:border-none focus:ring-0 md:flex-1"
                    placeholder="Your email address"
                />
                <button
                    onClick={handleSubmit}
                    className="rounded-full bg-primary-red px-8 py-4 font-parkinsans text-body2 font-semibold text-background-white md:max-w-[250px]"
                >
                    Subscribe
                </button>
            </div>
            {(error || message) && (
                <p
                    className={`mt-2 text-sm ${error ? "text-red-500" : "text-green-500"}`}
                >
                    {error || message}
                </p>
            )}
        </div>
    )
}

export default LatestUpdatesSubscribe
