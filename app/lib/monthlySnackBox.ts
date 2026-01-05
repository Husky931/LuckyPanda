export type MonthlySnackBoxPlan = {
    id: string
    title: string
    price: string
    billedLabel: string
    compareAt?: string
    totalPrice?: string
    savingsLabel?: string
    sellingPlanId?: string
    isOneTime?: boolean
}

export const MONTHLY_SNACK_BOX_PLANS: MonthlySnackBoxPlan[] = [
    {
        id: "plan-3",
        title: "3 Months",
        price: "$25.99",
        billedLabel: "Billed quarterly",
        compareAt: "$83.97",
        totalPrice: "$77.97",
        savingsLabel: "Save $6",
        sellingPlanId: "1955791019"
    },
    {
        id: "plan-6",
        title: "6 Months",
        price: "$23.99",
        billedLabel: "Billed every 6 months",
        compareAt: "$167.94",
        totalPrice: "$143.94",
        savingsLabel: "Save $24",
        sellingPlanId: "1955823787"
    },
    {
        id: "plan-12",
        title: "12 Months",
        price: "$21.99",
        billedLabel: "Billed yearly",
        compareAt: "$335.88",
        totalPrice: "$263.88",
        savingsLabel: "Save $72",
        sellingPlanId: "1955856555"
    },
    {
        id: "plan-single",
        title: "Single Box",
        price: "$27.99",
        billedLabel: "One-time payment. Shipping & VAT included for EU.",
        isOneTime: true
    }
]

export const MONTHLY_SNACK_BOX_IMAGES = [
    "/new_product_images/1.webp",
    "/new_product_images/2.webp",
    "/new_product_images/3.webp",
    "/new_product_images/4.webp",
    "/new_product_images/5.webp",
    "/new_product_images/6.webp",
    "/new_product_images/7.webp",
    "/new_product_images/8.webp",
    "/new_product_images/9.webp",
    "/new_product_images/10.webp",
    "/new_product_images/11.webp",
    "/new_product_images/12.webp",
    "/new_product_images/13.webp",
    "/new_product_images/14.webp",
    "/new_product_images/15webp.webp",
    "/new_product_images/full.webp"
]
