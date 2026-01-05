"use client"
import { useState, useEffect } from "react"
import SelectPlan from "./SelectPlan"
import { ClipLoader } from "react-spinners"

const ChooseYourPlan = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)

        const handlePageShow = (event: any) => {
            setIsLoading(false)

            if (event.persisted) setIsLoading(false)
        }

        window.addEventListener("pageshow", handlePageShow)

        return () => {
            window.removeEventListener("pageshow", handlePageShow)
        }
    }, [])

    const handlePlanClick = (link: string) => {
        setIsLoading(true)
        window.location.href = link
    }

    return (
        <section
            className="w-full px-8 py-10 md:px-20 2xl:px-60"
            id="subscribe"
        >
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
                    <ClipLoader
                        color="#F13E3A"
                        loading={true}
                        size={200}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
            <header className="mb-12 text-center text-h1 font-bold leading-[50px]">
                Select Plan
            </header>
            <div className="flex flex-col items-center gap-6 md:justify-between lg:flex-row xl:justify-evenly">
                <SelectPlan
                    title="3 Months"
                    price="$25.99"
                    description={`Billed quarterly
                        <span class="line-through text-[#C49A45]">$83.97</span>
                        &nbsp;
                        <span class="font-semibold text-primary-red">$77.97</span>
                        <span class="font-semibold text-primary-red"></BR></span>
                        <span class="inline-block mt-2 rounded-full bg-yellow-100 px-3 py-1 text-base font-semibold uppercase tracking-wide text-primary-red">
                            Save $6
                        </span>`}
                    link="/products/monthly-snack-box?selling_plan=1955791019"
                    onClick={() =>
                        handlePlanClick(
                            "/products/monthly-snack-box?selling_plan=1955791019"
                        )
                    }
                />

                <SelectPlan
                    title="6 Months"
                    price="$23.99"
                    description={`Billed every 6 months
                        <span class="line-through text-[#C49A45]">$167.94</span>
                        &nbsp;
                        <span class="font-semibold text-primary-red">$143.94</span>
                           <span class="font-semibold text-primary-red"></BR></span>
                        <span class="inline-block mt-2 rounded-full bg-yellow-100 px-3 py-1 text-base font-semibold uppercase tracking-wide text-primary-red">
                            Save $24
                        </span>`}
                    link="/products/monthly-snack-box?selling_plan=1955823787"
                    onClick={() =>
                        handlePlanClick(
                            "/products/monthly-snack-box?selling_plan=1955823787"
                        )
                    }
                />

                <SelectPlan
                    title="12 Months"
                    price="$21.99"
                    description={`Billed yearly
                        <span class="line-through text-[#C49A45]">$335.88</span>
                        &nbsp;
                        <span class="font-semibold text-primary-red">$263.88</span>
                        <span class="font-semibold text-primary-red"></BR></span>
                        <span class="inline-block mt-2 rounded-full bg-yellow-100 px-3 py-1 text-base font-semibold uppercase tracking-wide text-primary-red">
                            Save $72
                        </span>`}
                    link="/products/monthly-snack-box?selling_plan=1955856555"
                    onClick={() =>
                        handlePlanClick(
                            "/products/monthly-snack-box?selling_plan=1955856555"
                        )
                    }
                />
            </div>

            <div className="my-12 flex w-full items-center justify-center">
                <div className="h-px w-full border-t-2 border-dotted border-gray-400"></div>
                <span className="mx-2 text-5xl uppercase text-gray-400">
                    OR
                </span>
                <div className="h-px w-full border-t-2 border-dotted border-gray-400"></div>
            </div>

            <div className="flex justify-center">
                <SelectPlan
                    title="Single Box"
                    price="$27.99"
                    description="One-time payment. Shipping &amp; VAT included for EU."
                    isOneTimePurchase={true}
                    link="/products/monthly-snack-box?plan=single"
                    onClick={() =>
                        handlePlanClick(
                            "/products/monthly-snack-box?plan=single"
                        )
                    }
                />
            </div>
        </section>
    )
}

export default ChooseYourPlan
