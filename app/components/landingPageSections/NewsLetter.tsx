"use client"

import { useEffect, useState, MouseEvent } from "react"
import { validateEmail } from "@/app/lib/utils"

const NewsLetter = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isMobile, setIsMobile] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

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
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            const data = await response.json()
            if (response.ok) {
                setMessage(data.result || "Signup successful!")
                setEmail("")
            } else {
                setError(data.result || "An error occurred. Please try again later.")
            }
        } catch (error) {
            console.error("Error:", error)
            setError("An error occurred. Please try again later.")
        }
    }

    // ✅ This ensures NO conditional rendering on server
    if (!hasMounted) return null

    return (
        <div className="w-full bg-background-grey1 px-8 py-10 md:px-20 lg:mt-10 2xl:mt-20 2xl:px-60">
            <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
                Subscribe to our pre-release updates
            </header>
            <div className="text-center text-body1 text-black">
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                orci porta dapibus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus suscipit tortor eget felis porttitor
                volutpat.
            </div>

            {isMobile ? (
                <div className="mt-6 flex w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4">
                    <div className="relative w-full">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-[50px] w-full rounded-full border border-borders-border2 bg-white pl-4 pr-20 text-black focus:ring-0"
                            placeholder="Get newsletter"
                        />
                        <button
                            onClick={handleSubmit}
                            className="absolute right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-r-full bg-[#808000] px-4 text-body2 font-semibold text-background-white"
                        >
                            Newsletter
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mt-6 flex w-full flex-row items-center gap-4 rounded-lg bg-white px-6 py-4">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-full border border-borders-border2 bg-white p-4 px-6 text-black focus:border-none focus:ring-0"
                        placeholder="Get newsletter"
                    />
                    <button
                        onClick={handleSubmit}
                        className="rounded-full bg-[#808000] px-8 py-4 font-parkinsans text-body2 font-semibold text-background-white md:max-w-[250px]"
                    >
                        Newsletter
                    </button>
                </div>
            )}

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

export default NewsLetter
