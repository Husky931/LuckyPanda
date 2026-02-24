"use client"

import { useState } from "react"

export default function CorporateInquiryForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle")

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const subject = `Corporate inquiry: ${formData.companyName}`
            const message = `Company: ${formData.companyName}\n\n${formData.message}`

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.contactName,
                    email: formData.email,
                    subject,
                    message
                })
            })

            if (!response.ok) {
                throw new Error("Submission failed")
            }

            setSubmitStatus("success")
            setFormData({
                companyName: "",
                contactName: "",
                email: "",
                message: ""
            })
        } catch (error) {
            console.error("Submission error:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-borders-border2 bg-white p-6 shadow-sm md:p-8"
        >
            <div className="grid gap-6 md:grid-cols-1">
                <div>
                    <label
                        htmlFor="companyName"
                        className="mb-2 block text-sm font-medium text-text-dark"
                    >
                        Company name
                    </label>
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contactName"
                        className="mb-2 block text-sm font-medium text-text-dark"
                    >
                        Your name
                    </label>
                    <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-text-dark"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-text-dark"
                    >
                        Additional details
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                        placeholder="Tell us about your needs: quantity, occasion, delivery preferences..."
                    />
                </div>
            </div>

            {submitStatus === "success" && (
                <p className="mt-4 text-sm font-medium text-green-600">
                    Thank you! We&apos;ll get back to you within 24 hours.
                </p>
            )}
            {submitStatus === "error" && (
                <p className="mt-4 text-sm font-medium text-red-600">
                    Something went wrong. Please try again.
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-lg bg-primary-red px-6 py-3 font-semibold text-white transition hover:bg-primary-redHover disabled:opacity-50 md:w-auto"
            >
                {isSubmitting ? "Sending..." : "Request quote"}
            </button>
        </form>
    )
}
