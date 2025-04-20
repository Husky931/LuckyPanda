"use client"

import { useState } from "react"

const ContactUs = () => {
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
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setSubmitStatus("success")
            setFormData({
                name: "",
                email: "",
                subject: "",
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
        <div className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <section>
                        <h2 className="mb-4 text-xl font-semibold">
                            Customer Support
                        </h2>
                        <p className="mb-4">
                            Our friendly customer support team is available to
                            help with any questions about your subscription,
                            orders, or our products.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg
                                    className="mr-3 mt-0.5 h-5 w-5 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>
                                    Email:{" "}
                                    <a
                                        href="mailto:support@snackboxdelights.com"
                                        className="text-amber-600 hover:underline"
                                    >
                                        support@snackboxdelights.com
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="mr-3 mt-0.5 h-5 w-5 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>
                                    Phone:{" "}
                                    <a
                                        href="tel:+11234567890"
                                        className="text-amber-600 hover:underline"
                                    >
                                        +1 (123) 456-7890
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="mr-3 mt-0.5 h-5 w-5 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                    />
                                </svg>
                                <span>
                                    Live Chat: Available on our website during
                                    business hours (9AM-5PM EST)
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-semibold">
                            Business Inquiries
                        </h2>
                        <p className="mb-4">
                            For partnership opportunities, wholesale inquiries,
                            or press requests, please contact our business team.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg
                                    className="mr-3 mt-0.5 h-5 w-5 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <span>
                                    Email:{" "}
                                    <a
                                        href="mailto:business@snackboxdelights.com"
                                        className="text-amber-600 hover:underline"
                                    >
                                        business@snackboxdelights.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-semibold">
                            Corporate Office
                        </h2>
                        <address className="not-italic">
                            <div className="mb-2 flex items-start">
                                <svg
                                    className="mr-3 mt-0.5 h-5 w-5 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>
                                    SnackBox Delights HQ
                                    <br />
                                    123 Snack Street
                                    <br />
                                    Foodville, FC 12345
                                    <br />
                                    United States
                                </span>
                            </div>
                        </address>
                    </section>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="mb-6 text-2xl font-semibold">
                        Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Email Address{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                        {submitStatus === "success" && (
                            <div className="rounded-md bg-green-100 p-4 text-sm text-green-700">
                                Thank you! Your message has been sent
                                successfully. We&apos;ll get back to you soon.
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="rounded-md bg-red-100 p-4 text-sm text-red-700">
                                There was an error sending your message. Please
                                try again later.
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <section className="mt-12">
                <h2 className="mb-4 text-xl font-semibold">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-900">
                            How do I change my subscription preferences?
                        </h3>
                        <p className="mt-1 text-gray-600">
                            You can update your snack preferences, delivery
                            frequency, and shipping address anytime by logging
                            into your account and visiting the &quot;My
                            Subscription&quot; section.
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-900">
                            What are your customer service hours?
                        </h3>
                        <p className="mt-1 text-gray-600">
                            Our customer support team is available Monday
                            through Friday, 9AM to 5PM EST. Emails received
                            outside these hours will be responded to on the next
                            business day.
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-900">
                            How long does it take to get a response?
                        </h3>
                        <p className="mt-1 text-gray-600">
                            We aim to respond to all inquiries within 24 hours
                            during business days. During peak times, response
                            may take up to 48 hours.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
