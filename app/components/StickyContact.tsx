"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function StickyContact() {
    const [showModal, setShowModal] = useState(false)
    const [isStickyVisible, setIsStickyVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle")
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const hero = document.getElementById("intro-hero")
        if (!hero) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsStickyVisible(!entry.isIntersecting),
            { threshold: 0 }
        )
        observer.observe(hero)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setShowModal(false)
            }
        }

        // Handle escape key
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowModal(false)
            }
        }

        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [showModal])

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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) throw new Error("Submission failed")

            setSubmitStatus("success")
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setTimeout(() => setShowModal(false), 2000)
        } catch (error) {
            console.error("Submission error:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div
                className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
                    isStickyVisible
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                }`}
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="flex flex-col items-center gap-1 rounded-full p-3 transition-colors"
                    aria-label="Contact us"
                >
                    <Image
                        src="/logo_3_clean.png"
                        alt="Lucky Panda Logo"
                        width={96}
                        height={96}
                        className="h-24 w-24 object-contain"
                    />
                    <span className="text-lg font-medium text-black">
                        Questions?
                    </span>
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div
                        ref={modalRef}
                        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
                    >
                        <div className="mb-6 flex items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-semibold">
                                    Pre-launch questions?
                                </h2>
                                <div className="text-base">
                                    Don&apos;t shy away, share with us
                                    what&apos;s on your mind. We&apos;ll ease
                                    your concerns in less than 24 hours.
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-2xl text-gray-500 focus:outline-none"
                                aria-label="Close contact form"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Full Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Email{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Subject{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Message{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full rounded-md bg-primary-red px-4 py-2 text-white transition-colors ${
                                    isSubmitting
                                        ? "cursor-not-allowed opacity-70"
                                        : "hover:bg-primary-redHover"
                                }`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {submitStatus === "success" && (
                                <div className="mt-4 rounded-md p-3 text-sm text-green-700">
                                    Message sent successfully! We&apos;ll
                                    respond soon.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="mt-4 rounded-md bg-red-100 p-3 text-sm text-red-700">
                                    Error sending message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
