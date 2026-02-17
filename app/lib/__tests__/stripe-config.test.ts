import {
    getStripePriceId,
    getStripePriceIdEnvName
} from "@/app/lib/stripe-config"

describe("getStripePriceIdEnvName", () => {
    it("returns correct env name for single plan live", () => {
        expect(getStripePriceIdEnvName("single", "europe", true)).toBe(
            "STRIPE_PRICE_SINGLE_BOX_ID"
        )
        expect(getStripePriceIdEnvName("single", "asia", true)).toBe(
            "STRIPE_PRICE_SINGLE_BOX_ID"
        )
    })

    it("returns correct env name for single plan test", () => {
        expect(getStripePriceIdEnvName("single", "europe", false)).toBe(
            "STRIPE_PRICE_SINGLE_BOX_ID_TEST"
        )
    })

    it("returns correct env name for plan-3 europe live", () => {
        expect(getStripePriceIdEnvName("plan-3", "europe", true)).toBe(
            "STRIPE_PRICE_3_MONTS_EUROPE_BOX_ID"
        )
    })

    it("returns correct env name for plan-3 asia test", () => {
        expect(getStripePriceIdEnvName("plan-3", "asia", false)).toBe(
            "STRIPE_PRICE_3_MONTS_ASIA_BOX_ID_TEST"
        )
    })

    it("returns correct env name for plan-6 and plan-12", () => {
        expect(getStripePriceIdEnvName("plan-6", "europe", true)).toBe(
            "STRIPE_PRICE_6_MONTS_EUROPE_BOX_ID"
        )
        expect(getStripePriceIdEnvName("plan-12", "asia", true)).toBe(
            "STRIPE_PRICE_12_MONTS_ASIA_BOX_ID"
        )
    })
})

describe("getStripePriceId", () => {
    const originalEnv = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...originalEnv }
    })

    afterAll(() => {
        process.env = originalEnv
    })

    it("returns env value for single plan when set", () => {
        process.env.STRIPE_PRICE_SINGLE_BOX_ID = "price_single_live"
        process.env.STRIPE_PRICE_SINGLE_BOX_ID_TEST = "price_single_test"
        expect(getStripePriceId("single", "europe", true)).toBe(
            "price_single_live"
        )
        expect(getStripePriceId("single", "asia", false)).toBe(
            "price_single_test"
        )
    })

    it("returns env value for subscription plans when set", () => {
        process.env.STRIPE_PRICE_3_MONTS_EUROPE_BOX_ID = "price_3_eu"
        process.env.STRIPE_PRICE_6_MONTS_ASIA_BOX_ID_TEST = "price_6_asia_test"
        expect(getStripePriceId("plan-3", "europe", true)).toBe("price_3_eu")
        expect(getStripePriceId("plan-6", "asia", false)).toBe(
            "price_6_asia_test"
        )
    })

    it("returns undefined when env var not set", () => {
        delete process.env.STRIPE_PRICE_SINGLE_BOX_ID
        expect(getStripePriceId("single", "europe", true)).toBeUndefined()
    })
})
