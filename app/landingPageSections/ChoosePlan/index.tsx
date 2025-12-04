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
                    price="$36.99"
                    description="Billed quarterly ($110.97). <br/> Save 6$."
                    link="https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955791019"
                    onClick={() =>
                        handlePlanClick(
                            "https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955791019"
                        )
                    }
                />
                <SelectPlan
                    title="6 Months"
                    price="$34.99"
                    description="Billed every 6 months ($209.94). <br/> Save 24$."
                    link="https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955823787"
                    onClick={() =>
                        handlePlanClick(
                            "https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955823787"
                        )
                    }
                />
                <SelectPlan
                    title="12 Months"
                    price="$31.99"
                    description="Billed yearly ($383.88). <br/>Save 72$."
                    link="https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955856555"
                    onClick={() =>
                        handlePlanClick(
                            "https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435&selling_plan=1955856555"
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
                    price="$39.99"
                    description="One-time payment. Shipping & VAT included for EU."
                    isOneTimePurchase={true}
                    link="https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435"
                    onClick={() =>
                        handlePlanClick(
                            "https://order.luckypandatreats.com/products/monthly-snack-box?variant=45152590987435"
                        )
                    }
                />
            </div>
        </section>
    )
}

export default ChooseYourPlan
