"use client"

import { useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
    MONTHLY_SNACK_BOX_PLANS,
    type MonthlySnackBoxPlan
} from "@/app/lib/monthlySnackBox"

interface ProductPlanSelectorProps {
    initialSellingPlanId?: string
    initialPlanKey?: string
}

const ProductPlanSelector = ({
    initialSellingPlanId,
    initialPlanKey
}: ProductPlanSelectorProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const initialPlan = useMemo(() => {
        if (initialPlanKey === "single") {
            return (
                MONTHLY_SNACK_BOX_PLANS.find((plan) => plan.isOneTime) ??
                MONTHLY_SNACK_BOX_PLANS[0]
            )
        }
        if (!initialSellingPlanId) return MONTHLY_SNACK_BOX_PLANS[0]
        return (
            MONTHLY_SNACK_BOX_PLANS.find(
                (plan) => plan.sellingPlanId === initialSellingPlanId
            ) ?? MONTHLY_SNACK_BOX_PLANS[0]
        )
    }, [initialPlanKey, initialSellingPlanId])

    const [selectedPlanId, setSelectedPlanId] = useState(initialPlan.id)

    const updateQuery = (plan: MonthlySnackBoxPlan) => {
        const params = new URLSearchParams()
        if (plan.sellingPlanId) {
            params.set("selling_plan", plan.sellingPlanId)
        } else if (plan.isOneTime) {
            params.set("plan", "single")
        }
        const query = params.toString()
        router.replace(query ? `${pathname}?${query}` : pathname)
    }

    const handleSelect = (plan: MonthlySnackBoxPlan) => {
        setSelectedPlanId(plan.id)
        updateQuery(plan)
    }

    return (
        <section className="w-full" aria-label="Select plan">
            <header className="mb-6 text-center text-h2 font-bold text-text-dark">
                Select Plan
            </header>
            <div className="grid gap-6 lg:grid-cols-3">
                {MONTHLY_SNACK_BOX_PLANS.slice(0, 3).map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        isSelected={plan.id === selectedPlanId}
                        onSelect={() => handleSelect(plan)}
                    />
                ))}
            </div>
            <div className="my-10 flex w-full items-center justify-center">
                <div className="h-px w-full border-t-2 border-dotted border-gray-400"></div>
                <span className="mx-2 text-5xl uppercase text-gray-400">
                    OR
                </span>
                <div className="h-px w-full border-t-2 border-dotted border-gray-400"></div>
            </div>
            <div className="flex justify-center">
                {MONTHLY_SNACK_BOX_PLANS.slice(3).map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        isSelected={plan.id === selectedPlanId}
                        onSelect={() => handleSelect(plan)}
                    />
                ))}
            </div>
        </section>
    )
}

interface PlanCardProps {
    plan: MonthlySnackBoxPlan
    isSelected: boolean
    onSelect: () => void
}

const PlanCard = ({ plan, isSelected, onSelect }: PlanCardProps) => {
    return (
        <article
            className={`flex w-full max-w-sm flex-col items-center justify-center rounded-2xl border-2 p-4 shadow-2xl transition ${
                isSelected ? "border-primary-red" : "border-transparent"
            }`}
        >
            <div className="flex w-full justify-center">
                <div className="rounded-bl-2xl rounded-br-2xl bg-primary-red px-12 py-4 text-center text-h3 font-bold text-background-white">
                    {plan.title}
                </div>
            </div>
            <div className="mb-4 mt-6 text-center text-[54px] text-lg font-bold text-primary-red">
                {plan.price} {plan.isOneTime ? "" : "/ month"}
            </div>
            <div className="mb-3 text-center text-body1 text-text-dark3">
                {plan.billedLabel}
            </div>
            {plan.compareAt && plan.totalPrice && (
                <div className="mb-3 text-center text-body1">
                    <span className="line-through text-[#C49A45]">
                        {plan.compareAt}
                    </span>
                    <span className="px-2 font-semibold text-primary-red">
                        {plan.totalPrice}
                    </span>
                </div>
            )}
            {plan.savingsLabel && (
                <div className="mb-4 rounded-full bg-yellow-100 px-3 py-1 text-base font-semibold uppercase tracking-wide text-primary-red">
                    {plan.savingsLabel}
                </div>
            )}
            <button
                type="button"
                onClick={onSelect}
                aria-pressed={isSelected}
                className={`my-4 min-w-[250px] cursor-pointer rounded-2xl px-8 py-4 text-center font-parkinsans text-body2 font-semibold text-background-white transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:max-w-[250px] ${
                    isSelected ? "bg-primary-red" : "bg-primary-red/80"
                }`}
            >
                {plan.isOneTime ? "Buy Single Box" : "Choose Plan"}
            </button>
            <div className="my-4">
                <div className="text-center text-sm text-text-dark3">
                    {plan.isOneTime
                        ? "Receive 1 box."
                        : "No automatic renewal."}
                </div>
                <div className="text-center text-sm text-text-dark3">
                    {plan.isOneTime
                        ? "You can repurchase any time."
                        : "VAT & shipping calculated at checkout"}
                </div>
            </div>
        </article>
    )
}

export default ProductPlanSelector
