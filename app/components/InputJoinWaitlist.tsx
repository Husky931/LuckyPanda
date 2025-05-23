"use client"

import { MouseEvent, useState, ChangeEvent } from "react"
import { validateEmail } from "@/app/lib/utils"
import SuccessModal from "./SuccessModal"

interface EmailInputProps {
    initialEmail?: string
    buttonText?: string
    placeholder?: string
    className?: string
    bgColor?: string
    errorColor?: "red" | "white"
    onSuccess?: (message: string) => void
    onError?: (error: string) => void
}

const InputJoinWaitlist = ({
    initialEmail = "",
    buttonText = "Join Waitlist",
    placeholder = "Your email",
    bgColor = "bg-primary-red",
    errorColor = "red",
    className = "",
    onSuccess,
    onError
}: EmailInputProps) => {
    const [email, setEmail] = useState(initialEmail)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        setError("")
        setMessage("")
        event.preventDefault()
        setIsLoading(true)

        if (email === "") {
            setError("Please enter email address")
            setIsLoading(false)
            if (onError) onError("Please enter email address")
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            setIsLoading(false)
            if (onError) onError("Please enter a valid email address")
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
                if (onError) onError(data.result)
            } else {
                const successMessage =
                    data.result ||
                    "You've been added to the waitlist successfully!"
                setMessage(successMessage)
                setEmail("")
                setShowSuccessModal(true)
                if (onSuccess) onSuccess(successMessage)
            }
        } catch (error) {
            console.error("Error:", error)
            const errorMessage = "An error occurred. Please try again later."
            setError(errorMessage)
            if (onError) onError(errorMessage)
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

    return (
        <div className={`w-full ${className}`}>
            <div className="relative w-full">
                <input
                    value={email}
                    onChange={handleChange}
                    className="z-50 h-[50px] w-full rounded-full border border-borders-border2 bg-white pl-4 pr-20 text-black focus:outline-none"
                    placeholder={placeholder}
                    disabled={isLoading}
                />
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`absolute right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-r-full ${bgColor} px-4 text-body2 font-semibold text-background-white disabled:opacity-50`}
                >
                    {isLoading ? "..." : buttonText}
                </button>
            </div>
            {(error || message) && (
                <p
                    className={`mt-2 text-sm ${
                        error
                            ? errorColor === "white"
                                ? "text-white"
                                : "text-red-500"
                            : "text-green-500"
                    }`}
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

export default InputJoinWaitlist
