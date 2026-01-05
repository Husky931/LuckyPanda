"use client"

import { useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
    MONTHLY_SNACK_BOX_PLANS,
    type MonthlySnackBoxPlan
} from "@/app/lib/monthlySnackBox"
import CTAButton from "@/app/components/CTAButton"

const CHECKOUT_HREF = "/checkout"

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
    const activePlan =
        MONTHLY_SNACK_BOX_PLANS.find((plan) => plan.id === selectedPlanId) ??
        MONTHLY_SNACK_BOX_PLANS[0]

    const updateQuery = (plan: MonthlySnackBoxPlan) => {
        const params = new URLSearchParams()
        if (plan.sellingPlanId) {
            params.set("selling_plan", plan.sellingPlanId)
        } else if (plan.isOneTime) {
            params.set("plan", "single")
        }
        const query = params.toString()
        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false
        })
    }

    const handleSelect = (plan: MonthlySnackBoxPlan) => {
        setSelectedPlanId(plan.id)
        updateQuery(plan)
    }

    return (
        <section className="w-full" aria-label="Select plan">
            {/* <header className="mb-6 border-b border-borders-border2 pb-4">
                <p className="text-sm uppercase tracking-[0.2em] text-text-dark4">
                    Subscription
                </p>
                <h2 className="mt-2 text-h3 font-bold text-text-dark">
                    Select your plan
                </h2>
                <p className="mt-2 text-body1 text-text-dark3">
                    {activePlan.isOneTime
                        ? activePlan.billedLabel
                        : "Choose how long you want to subscribe."}
                </p>
            </header> */}
            <div className="rounded-2xl border border-borders-border2 bg-background-white p-5 shadow-sm">
                <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm text-text-dark4">Price</p>
                        <p className="text-h4 font-bold text-primary-red">
                            {activePlan.price}
                            {activePlan.isOneTime ? "" : "/month"}
                        </p>
                    </div>
                    {activePlan.totalPrice && (
                        <div className="text-right">
                            <p className="text-xs text-text-dark4">
                                Total billed
                            </p>
                            <p className="text-sm font-semibold text-primary-red">
                                {activePlan.totalPrice}
                            </p>
                        </div>
                    )}
                </div>
                <fieldset className="space-y-3">
                    {MONTHLY_SNACK_BOX_PLANS.map((plan) => (
                        <PlanOption
                            key={plan.id}
                            plan={plan}
                            isSelected={plan.id === selectedPlanId}
                            onSelect={() => handleSelect(plan)}
                        />
                    ))}
                </fieldset>
                <div className="mt-6">
                    <CTAButton
                        href={CHECKOUT_HREF}
                        label="Checkout"
                        className="w-full bg-primary-red from-primary-red to-primary-red hover:scale-[1.01]"
                    />
                </div>
            </div>
        </section>
    )
}

interface PlanCardProps {
    plan: MonthlySnackBoxPlan
    isSelected: boolean
    onSelect: () => void
}

const PlanOption = ({ plan, isSelected, onSelect }: PlanCardProps) => {
    return (
        <label
            className={`flex cursor-pointer items-start justify-between gap-4 rounded-xl border p-4 transition ${
                isSelected
                    ? "border-primary-red bg-primary-red"
                    : "border-borders-border2 bg-background-white hover:border-primary-red/50"
            }`}
        >
            <span className="flex items-start gap-3">
                <span
                    className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${
                        isSelected
                            ? "border-background-white bg-background-white"
                            : "border-borders-border1 bg-white"
                    }`}
                    aria-hidden="true"
                >
                    {isSelected && (
                        <span className="h-2 w-2 rounded-full bg-primary-red" />
                    )}
                </span>
                <span>
                    <span
                        className={`block text-sm font-semibold ${
                            isSelected
                                ? "text-background-white"
                                : "text-text-dark"
                        }`}
                    >
                        {plan.title}
                    </span>
                    <span
                        className={`block text-xs ${
                            isSelected
                                ? "text-background-white/90"
                                : "text-text-dark4"
                        }`}
                    >
                        {plan.billedLabel}
                    </span>
                    {plan.compareAt && plan.totalPrice && (
                        <span
                            className={`mt-2 block text-xs ${
                                isSelected
                                    ? "text-background-white/90"
                                    : "text-text-dark4"
                            }`}
                        >
                            <span
                                className={`line-through ${
                                    isSelected
                                        ? "text-background-white/70"
                                        : "text-[#C49A45]"
                                }`}
                            >
                                {plan.compareAt}
                            </span>
                            <span
                                className={`pl-2 font-semibold ${
                                    isSelected
                                        ? "text-background-white"
                                        : "text-primary-red"
                                }`}
                            >
                                {plan.totalPrice}
                            </span>
                        </span>
                    )}
                </span>
            </span>
            <span className="text-right">
                <span
                    className={`block text-sm font-semibold ${
                        isSelected ? "text-background-white" : "text-text-dark"
                    }`}
                >
                    {plan.price}
                    {plan.isOneTime ? "" : "/mo"}
                </span>
                {plan.savingsLabel && (
                    <span className="mt-1 block rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-red">
                        {plan.savingsLabel}
                    </span>
                )}
            </span>
            <input
                type="radio"
                name="monthly-plan"
                value={plan.id}
                checked={isSelected}
                onChange={onSelect}
                className="sr-only"
            />
        </label>
    )
}

export default ProductPlanSelector
