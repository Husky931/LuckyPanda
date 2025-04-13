"use client"
import { useState } from "react"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const faqs = [
        {
            category: "General",
            question: "What is Lucky Panda Treats?",
            answer: "Lucky Panda Treats is a service dedicated to sharing interesting Chinese snacks with the world. It is targeted for the people interested in Chinese culture and open to trying different, unexpected flavors of snacks every month. We handpick the snacks based on what we considered are the most tasty and interesting ones to try."
        },
        {
            category: "General",
            question: "What do i get in my box",
            answer: "Inside each box, you’ll receive anywhere from 16, up to 20 carefully selected items, all of which are authentic Chinese sweets and snacks. Each item is sourced from local stores, shops and makers, showcasing the diversity and craftsmanship of Chinese snacks, an industry that is starting to really expand recently. The snacks will vary in flavor, going from sweet and sour, to savoury bites (with sweets being the biggest chunk), as we try to include most flavors for better experience. It is planned to have 2 drinks in each box, but currently the shipping channels we use prohibit transportation of liquid, we are trying to work around this."
        },
        {
            category: "General",
            question: "Allergy / nutrition information",
            answer: "Each box includes an English insert detailing the ingredients and allergen information for every snack inside, as all snacks are locally produced in China and their original packaging is written in Chinese. "
        },
        {
            category: "General",
            question: "The date on the snacks product packaging",
            answer: "Unlike the West, Chinese snack packaging usually displays the production date rather than the expiration date. According to China's National Standard GB7718-2011, all prepackaged foods must include the production date and the shelf life. We ensure that no products are shipped if they are expired or set to expire within 45 days of dispatch."
        },
        {
            category: "Shipping",
            question: "What countries are you currently shipping to?",
            answer: "Currently the following countries are supported: Austria, Australia, Belgium, Belarus, Brazil, Canada, Denmark, Finland, France, Germany, Greece, Hong Kong, Hungary, Ireland, Israel, Italy, Japan, Luxembourg, Malaysia, Mexico, Netherlands, New Zealand, Norway, Poland, Portugal, Russia, Saudi Arabia, Singapore, South Korea, Spain, Sweden, Switzerland, Thailand, Turkey, United Kingdom, Ukraine, United States, Vietnam"
        },
        {
            category: "Shipping",
            question: "How much does shipping cost?",
            answer: "There is a slight difference in shipping costs from one country to another. The shipping cost is displayed on the checkout page after entering your country, state and zip code."
        },
        {
            category: "Payment",
            question: "Do you accept international credit cards?",
            answer: "Yes, we accept most international credit and debit cards through our secure payment gateway."
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
        <section className="relative w-full">
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
            <img src="/images_dummy/5.svg" alt="chinese silhouette" />
        </section>
    )
}

export default Faq
