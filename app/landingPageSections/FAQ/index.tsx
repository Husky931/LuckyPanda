"use client"
import { useState } from "react"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpand = () => setIsExpanded((prev) => !prev)

    const faqs = [
        {
            category: "General",
            question: "What is Lucky Panda Treats?",
            answer: "Lucky Panda Treats is a service dedicated to sharing interesting Chinese snacks and cultural items with the world. It is targeted for the people interested in Chinese culture and open to trying different, unexpected flavors of snacks every month. We handpick the snacks based on what we considered are the most tasty and interesting ones to try and we add some culturally inspired items to give you a unique and exciting experience."
        },
        {
            category: "General",
            question: "What do i get in my box",
            answer: "Inside each box, you’ll receive anywhere from 18, up to 22 carefully selected items, all of which are authentic Chinese sweets and snacks. Each item is sourced from local stores, shops and makers, showcasing the diversity and craftsmanship of Chinese snacks, an industry that is starting to really expand recently. The snacks will vary in flavor, going from sweet and sour, to savoury bites (with sweets being the biggest chunk), as we try to include most flavors for better experience. It is planned to have 2 drinks in each box, but currently the shipping channels we use prohibit transportation of liquid, we are trying to work around this. In addition to the snacks, every box includes fun cultural bonus items."
        },
        {
            category: "General",
            question: "Allergy / nutrition information",
            answer: "All allergy and nutrition information for each month’s snacks will be available on a dedicated page on our website, with every snack having its own description. Inside the box, we’ll include a QR code you can scan, which takes you straight to that month’s specially created webpage."
        },
        {
            category: "General",
            question: "The date on the snacks product packaging",
            answer: "Unlike the West, Chinese snack packaging usually displays the production date rather than the expiration date. According to China's National Standard GB7718-2011, all prepackaged foods must include the production date and the shelf life. We ensure that no products are shipped if they are expired or set to expire within 60 days of dispatch."
        },
        {
            category: "Shipping",
            question: "What countries are you currently shipping to?",
            answer: "Currently the following countries are supported: Denmark, France, Germany, Russia, Saudi Arabia, Spain, Sweden, Thailand, Vietnam, Singapore, Japan, Malaysia, United Kingdom, Portugal, Norway, Australia, Hungary, Italy, Poland, Ireland, Luxembourg, New Zealand, Greece and Netherlands."
        },
        {
            category: "Shipping",
            question: "How much does shipping cost?",
            answer: "There is a slight difference in shipping costs from one country to another. For nearby Asian countries its a little cheaper compared to European or cross continental."
        },
        {
            category: "Shipping",
            question: "Shipping delivery time",
            answer: "Shipping generally takes up to 7 days, but it may take longer in some cases. We will keep you updated with email notifications throughout the process."
        },
        {
            category: "Shipping",
            question: "Is there a tracking service available",
            answer: "Yes, all shipments include tracking. You will receive a tracking number via email after your order is confirmed, and you can monitor your package in real time through the tracking link provided."
        },
        {
            category: "Payment",
            question: "Do you accept international credit cards?",
            answer: "Yes, we accept most international credit and debit cards through our secure payment gateway. Currently the following payment methods are accepted: Mastercard, Visa, debit cards, American Express, PayPal."
        },
        {
            category: "Payment",
            question: "Can I make changes to my subscription?",
            answer: "You can update your shipping address or shift your upcoming boxes to different months whenever needed. You can do it via the customer portal or just send us a message and we’ll sort it out for you."
        }
    ]

    const faqsByCategory = faqs.reduce(
        (acc, faq) => {
            if (!acc[faq.category]) {
                acc[faq.category] = []
            }
            acc[faq.category].push(faq)
            return acc
        },
        {} as Record<string, typeof faqs>
    )

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id="faq" className="relative w-full">
            <div
                className={`transition-max-height w-full space-y-8 overflow-hidden duration-500 ease-in-out ${
                    isExpanded ? "max-h-[2000px]" : "max-h-[500px]"
                }`}
            >
                <section className="flex w-full flex-col items-center justify-center gap-y-12 bg-background-white px-8 py-10 md:px-20 2xl:px-60">
                    <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
                        F.A.Q.
                    </header>

                    <div className="w-full space-y-8">
                        {Object.entries(faqsByCategory).map(
                            ([category, categoryFaqs]) => (
                                <div key={category} className="space-y-4">
                                    <h2 className="text-h4 font-bold text-black">
                                        {category}
                                    </h2>
                                    <div className="space-y-4">
                                        {categoryFaqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="cursor-pointer rounded-lg border border-borders-border2 p-5 transition duration-300 ease-in-out hover:bg-gray-100"
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="text-body1 text-black">
                                                        {faq.question}
                                                    </div>
                                                    <span className="text-2xl text-gray-500">
                                                        {activeIndex === index
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>

                                                {activeIndex === index && (
                                                    <p className="mt-4 text-sm text-gray-700">
                                                        {faq.answer}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </div>
            {/* See more / Show less button */}
            <div className="mx-auto mt-6 flex w-full justify-center">
                <button
                    onClick={toggleExpand}
                    className="border-primary text-primary hover:bg-primary flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:text-white"
                >
                    {isExpanded ? "Shrink FAQ" : "Expand FAQ"}
                    <span className="text-xs">{isExpanded ? "▲" : "▼"}</span>
                </button>
            </div>
        </section>
    )
}

export default Faq
