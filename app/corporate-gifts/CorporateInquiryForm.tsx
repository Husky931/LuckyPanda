"use client"

import { useState } from "react"

const CorporateInquiryForm = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        quantity: "",
        occasion: "",
        deliveryDate: "",
        budget: "",
        customization: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle")

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
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
                body: JSON.stringify({
                    name: formData.contactName,
                    email: formData.email,
                    subject: `Corporate Gift Inquiry - ${formData.companyName}`,
                    message: `Corporate Gift Inquiry Details:
                    
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Quantity: ${formData.quantity}
Occasion: ${formData.occasion}
Delivery Date: ${formData.deliveryDate}
Budget: ${formData.budget}
Customization: ${formData.customization}

Message:
${formData.message}`
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
                phone: "",
                quantity: "",
                occasion: "",
                deliveryDate: "",
                budget: "",
                customization: "",
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
        <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Company Name */}
                    <div>
                        <label
                            htmlFor="companyName"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Company Name{" "}
                            <span className="text-primary-red">*</span>
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        />
                    </div>

                    {/* Contact Name */}
                    <div>
                        <label
                            htmlFor="contactName"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Your Name{" "}
                            <span className="text-primary-red">*</span>
                        </label>
                        <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Email Address{" "}
                            <span className="text-primary-red">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label
                            htmlFor="quantity"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Estimated Quantity
                        </label>
                        <select
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        >
                            <option value="">Select quantity</option>
                            <option value="10-50">10-50 boxes</option>
                            <option value="51-100">51-100 boxes</option>
                            <option value="101-250">101-250 boxes</option>
                            <option value="251-500">251-500 boxes</option>
                            <option value="500+">500+ boxes</option>
                        </select>
                    </div>

                    {/* Occasion */}
                    <div>
                        <label
                            htmlFor="occasion"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Occasion / Purpose
                        </label>
                        <select
                            id="occasion"
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        >
                            <option value="">Select occasion</option>
                            <option value="Employee Appreciation">
                                Employee Appreciation
                            </option>
                            <option value="Client Gifts">Client Gifts</option>
                            <option value="Holiday Gifts">Holiday Gifts</option>
                            <option value="Event/Conference">
                                Event/Conference
                            </option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Delivery Date */}
                    <div>
                        <label
                            htmlFor="deliveryDate"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Preferred Delivery Date
                        </label>
                        <input
                            type="date"
                            id="deliveryDate"
                            name="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleChange}
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label
                            htmlFor="budget"
                            className="mb-2 block text-sm font-medium text-text-dark2"
                        >
                            Budget Range
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                        >
                            <option value="">Select budget range</option>
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $5,000">
                                $1,000 - $5,000
                            </option>
                            <option value="$5,000 - $10,000">
                                $5,000 - $10,000
                            </option>
                            <option value="$10,000 - $25,000">
                                $10,000 - $25,000
                            </option>
                            <option value="$25,000+">$25,000+</option>
                        </select>
                    </div>
                </div>

                {/* Customization */}
                <div>
                    <label
                        htmlFor="customization"
                        className="mb-2 block text-sm font-medium text-text-dark2"
                    >
                        Customization Needs
                    </label>
                    <input
                        type="text"
                        id="customization"
                        name="customization"
                        value={formData.customization}
                        onChange={handleChange}
                        className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-text-dark2"
                    >
                        Additional Details{" "}
                        <span className="text-primary-red">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-borders-border1 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full rounded-md bg-gradient-to-r from-primary-red to-primary-gold px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-gold/60 disabled:cursor-not-allowed disabled:opacity-70`}
                    >
                        {isSubmitting ? "Sending..." : "Request Quote"}
                    </button>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                    <div className="rounded-md bg-green-100 p-4 text-sm text-green-700">
                        <p className="font-semibold">
                            Thank you for your inquiry!
                        </p>
                        <p className="mt-1">
                            We&apos;ve received your corporate gift request and
                            will get back to you within 24 hours with a
                            customized quote and proposal.
                        </p>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                    <div className="rounded-md bg-red-100 p-4 text-sm text-red-700">
                        <p className="font-semibold">
                            There was an error sending your request.
                        </p>
                        <p className="mt-1">
                            Please try again later or contact us directly at{" "}
                            <a
                                href="mailto:business@luckypandatreats.com"
                                className="underline hover:text-red-800"
                            >
                                business@luckypandatreats.com
                            </a>
                        </p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default CorporateInquiryForm
