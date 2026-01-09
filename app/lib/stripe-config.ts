type PlanKey = "plan-3" | "plan-6" | "plan-12" | "single"
type Region = "europe" | "asia"

export const getStripePriceId = (
    plan: PlanKey,
    region: Region,
    isLive: boolean
): string | undefined => {
    const planSuffix =
        plan === "plan-3"
            ? "3_MONTS"
            : plan === "plan-6"
              ? "6_MONTS"
              : plan === "plan-12"
                ? "12_MONTS"
                : "SINGLE"

    const regionSuffix = region === "europe" ? "EUROPE" : "ASIA"
    const testSuffix = isLive ? "" : "_TEST"

    if (plan === "single") {
        const envKey = `STRIPE_PRICE_SINGLE_BOX_ID${testSuffix}`
        return process.env[envKey]
    }

    const envKey = `STRIPE_PRICE_${planSuffix}_${regionSuffix}_BOX_ID${testSuffix}`
    return process.env[envKey]
}

export const getStripePriceIdEnvName = (
    plan: PlanKey,
    region: Region,
    isLive: boolean
): string => {
    const planSuffix =
        plan === "plan-3"
            ? "3_MONTS"
            : plan === "plan-6"
              ? "6_MONTS"
              : plan === "plan-12"
                ? "12_MONTS"
                : "SINGLE"

    const regionSuffix = region === "europe" ? "EUROPE" : "ASIA"
    const testSuffix = isLive ? "" : "_TEST"

    if (plan === "single") {
        return `STRIPE_PRICE_SINGLE_BOX_ID${testSuffix}`
    }

    return `STRIPE_PRICE_${planSuffix}_${regionSuffix}_BOX_ID${testSuffix}`
}

