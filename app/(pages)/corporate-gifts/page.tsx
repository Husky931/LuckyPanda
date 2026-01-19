"use client"

import CTAButton from "@/app/components/CTAButton"
import CorporateInquiryForm from "./CorporateInquiryForm"

export default function CorporateGiftsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-red to-primary-redHover px-8 pb-20 pt-32 md:px-20 lg:min-h-[70vh] 2xl:px-60">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-h1">
                        Corporate <span className="font-medium">Gifts</span>
                    </h1>
                    <p className="mb-8 text-lg text-white md:text-xl lg:text-2xl">
                        Surprise your team, clients, or partners with authentic
                        Chinese snacks and cultural treasures. Perfect for
                        employee appreciation, client gifts, or special
                        occasions.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 p-8 px-12 sm:flex-row">
                        <CTAButton
                            href="#inquiry"
                            label="Request a Quote"
                            startColor="white"
                            textColor="red"
                        />
      
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-background-sectionBg"></div>
            </section>

            {/* Benefits Section */}
            <section
                id="benefits"
                className="w-full bg-background-sectionBg px-8 py-16 md:px-20 2xl:px-60"
            >
                <header className="mb-12 text-center">
                    <h2 className="mb-4 text-h2 font-bold">
                        Why Choose{" "}
                        <span className="font-medium">Lucky Panda</span> for
                        Corporate Gifts?
                    </h2>
                    <p className="mx-auto max-w-2xl text-text-dark3">
                        We make corporate gifting easy, memorable, and
                        culturally enriching
                    </p>
                </header>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Benefit 1 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-red text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Bulk Ordering
                        </h3>
                        <p className="text-text-dark3">
                            Order boxes in bulk with volume discounts. Perfect
                            for large teams, events, or ongoing corporate
                            programs.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Customization
                        </h3>
                        <p className="text-text-dark3">
                            Customize boxes with your company logo, special
                            messages, or curated selections to match your brand
                            and occasion.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-red text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Flexible Delivery
                        </h3>
                        <p className="text-text-dark3">
                            Schedule deliveries to multiple addresses, all at
                            once or spread over time. We handle the logistics
                            for you.
                        </p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Competitive Pricing
                        </h3>
                        <p className="text-text-dark3">
                            Special corporate rates with transparent pricing. No
                            hidden fees, just great value for your budget.
                        </p>
                    </div>

                    {/* Benefit 5 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-red text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Dedicated Support
                        </h3>
                        <p className="text-text-dark3">
                            Your dedicated account manager will help you plan,
                            customize, and execute your corporate gift program
                            seamlessly.
                        </p>
                    </div>

                    {/* Benefit 6 */}
                    <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-h4 font-semibold">
                            Unique & Memorable
                        </h3>
                        <p className="text-text-dark3">
                            Stand out with authentic Chinese snacks and cultural
                            items that create lasting impressions and
                            conversations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="w-full bg-white px-8 py-16 md:px-20 2xl:px-60">
                <header className="mb-12 text-center">
                    <h2 className="mb-4 text-h2 font-bold">
                        Perfect For <span className="font-medium">Every</span>{" "}
                        Occasion
                    </h2>
                    <p className="mx-auto max-w-2xl text-text-dark3">
                        Whether it&apos;s a one-time gift or an ongoing program,
                        we&apos;ve got you covered
                    </p>
                </header>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Use Case 1 */}
                    <div className="flex flex-col overflow-hidden rounded-lg border border-borders-border2 bg-background-grey1 shadow-sm transition hover:shadow-md">
                        <div className="relative h-48 bg-gradient-to-br from-primary-red to-primary-redHover">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="h-20 w-20 text-white opacity-20"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-h4 font-semibold">
                                Employee Appreciation
                            </h3>
                            <p className="mb-4 text-text-dark3">
                                Show your team you care with monthly snack boxes
                                that boost morale and create a sense of
                                community. Perfect for remote teams, office
                                celebrations, or milestone achievements.
                            </p>
                            <ul className="space-y-2 text-sm text-text-dark3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Monthly team subscriptions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Holiday gift boxes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Performance rewards</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 2 */}
                    <div className="flex flex-col overflow-hidden rounded-lg border border-borders-border2 bg-background-grey1 shadow-sm transition hover:shadow-md">
                        <div className="relative h-48 bg-gradient-to-br from-primary-gold to-[#D99A2E]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="h-20 w-20 text-white opacity-20"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-h4 font-semibold">
                                Client Gifts
                            </h3>
                            <p className="mb-4 text-text-dark3">
                                Impress clients and partners with unique,
                                thoughtful gifts that show you value the
                                relationship. Stand out from generic corporate
                                gifts with authentic Chinese cultural
                                experiences.
                            </p>
                            <ul className="space-y-2 text-sm text-text-dark3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Custom branded boxes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>One-time gift packages</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Partnership appreciation</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 3 */}
                    <div className="flex flex-col overflow-hidden rounded-lg border border-borders-border2 bg-background-grey1 shadow-sm transition hover:shadow-md">
                        <div className="relative h-48 bg-gradient-to-br from-primary-red to-primary-gold">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="h-20 w-20 text-white opacity-20"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-h4 font-semibold">
                                Events & Conferences
                            </h3>
                            <p className="mb-4 text-text-dark3">
                                Make your events memorable with welcome boxes,
                                swag bags, or conference gifts. Create buzz and
                                give attendees something unique to remember your
                                brand.
                            </p>
                            <ul className="space-y-2 text-sm text-text-dark3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Conference welcome packages</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Trade show giveaways</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Event swag bags</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 4 */}
                    <div className="flex flex-col overflow-hidden rounded-lg border border-borders-border2 bg-background-grey1 shadow-sm transition hover:shadow-md">
                        <div className="relative h-48 bg-gradient-to-br from-primary-gold to-primary-red">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="h-20 w-20 text-white opacity-20"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-h4 font-semibold">
                                Custom Programs
                            </h3>
                            <p className="mb-4 text-text-dark3">
                                Create a tailored corporate gift program that
                                fits your company culture, budget, and goals.
                                We&apos;ll work with you to design the perfect
                                solution.
                            </p>
                            <ul className="space-y-2 text-sm text-text-dark3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Flexible subscription models</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Custom curation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary-red">
                                        •
                                    </span>
                                    <span>Branded packaging options</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-primary-red px-8 py-16 md:px-20 2xl:px-60">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-h2 font-bold text-white">
                        Ready to <span className="font-medium">Surprise</span>{" "}
                        Your Team?
                    </h2>
                    <p className="mb-8 text-lg text-white">
                        Let&apos;s create something special together. Contact us
                        today to discuss your corporate gift needs.
                    </p>
                </div>
            </section>

        
            <section
                id="inquiry"
                className="w-full bg-background-sectionBg px-8 py-16 md:px-20 2xl:px-60"
            >
                <div className="mx-auto max-w-4xl">
                    <header className="mb-12 text-center">
                        <h2 className="mb-4 text-h2 font-bold">
                            Get Started{" "}
                            <span className="font-medium">Today</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-text-dark3">
                            Fill out the form below and our corporate team will
                            get back to you within 24 hours with a customized
                            quote and proposal.
                        </p>
                    </header>

                    <CorporateInquiryForm />
                </div>
            </section>

      
 
        </div>
    )
}
