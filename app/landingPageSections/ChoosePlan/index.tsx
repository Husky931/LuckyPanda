import SelectPlan from "./SelectPlan"

const ChooseYourPlan = () => {
    return (
        <section className="w-full px-8 py-10 md:px-20 2xl:px-60">
            <header className="mb-12 text-center text-h1 font-bold leading-[50px]">
                Upcoming soon
            </header>
            <div className="flex flex-col items-center gap-6 md:justify-between lg:flex-row xl:justify-evenly">
                <SelectPlan
                    title="3 Months"
                    price="$36.99"
                    description="Billed quarterly ($110.97). Shipping & VAT included for EU."
                />
                <SelectPlan
                    title="6 Months"
                    price="$34.99"
                    description="Billed every 6 months ($209.94). Shipping & VAT included for EU."
                />
                <SelectPlan
                    title="12 Months"
                    price="$31.99"
                    description="Billed yearly ($383.88). Shipping & VAT included for EU."
                />
            </div>
        </section>
    )
}

export default ChooseYourPlan
