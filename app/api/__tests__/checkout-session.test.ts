/**
 * @jest-environment node
 */
import { POST } from "@/app/api/stripe/checkout-session/route"

jest.mock("next/headers", () => ({
    headers: jest.fn()
}))

const mockLimiterCheck = jest.fn()
jest.mock("@/app/lib/rate-limit", () => ({
    limiter: { check: (...args: unknown[]) => mockLimiterCheck(...args) }
}))

const originalFetch = global.fetch
const { headers } = require("next/headers")

function jsonRequest(body: object) {
    return new Request("http://localhost/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}

describe("POST /api/stripe/checkout-session", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        mockLimiterCheck.mockResolvedValue(undefined)
        ;(headers as jest.Mock).mockResolvedValue(
            new Headers({
                "x-real-ip": "127.0.0.1",
                origin: "https://luckypandatreats.com"
            })
        )
        process.env.STRIPE_SECRET_TEST = "sk_test_xxx"
        process.env.STRIPE_PRICE_SINGLE_BOX_ID_TEST = "price_test"
        process.env.STRIPE_EUROPE_SHIPPING_TEST_ID = "shr_eu"
        process.env.STRIPE_ASIA_SHIPPING_TEST_ID = "shr_asia"
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("returns 400 for invalid plan", async () => {
        const res = await POST(jsonRequest({ plan: "plan-99", country: "GB" }))
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.error).toContain("not available")
    })

    it("returns 400 for unsupported country", async () => {
        const res = await POST(jsonRequest({ plan: "single", country: "XX" }))
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.error).toContain("shipping country")
    })

    it("returns 400 for invalid request body", async () => {
        const req = new Request(
            "http://localhost/api/stripe/checkout-session",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "not valid json {"
            }
        )
        const res = await POST(req)
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.error).toContain("Invalid request body")
    })

    it("returns 429 when rate limit exceeded", async () => {
        mockLimiterCheck.mockRejectedValue(new Error("Rate limit exceeded"))
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(429)
        const data = await res.json()
        expect(data.error).toContain("Too many requests")
    })

    it("returns 500 when Stripe key is missing", async () => {
        delete process.env.STRIPE_SECRET_TEST
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        process.env.STRIPE_SECRET_TEST = "sk_test_xxx"
    })

    it("returns 500 when single plan missing shipping rate IDs", async () => {
        delete process.env.STRIPE_EUROPE_SHIPPING_TEST_ID
        delete process.env.STRIPE_ASIA_SHIPPING_TEST_ID
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        const data = await res.json()
        expect(data.error).toContain("shipping configuration")
        process.env.STRIPE_EUROPE_SHIPPING_TEST_ID = "shr_eu"
        process.env.STRIPE_ASIA_SHIPPING_TEST_ID = "shr_asia"
    })

    it("returns 500 when Stripe API returns error", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: () =>
                Promise.resolve({
                    error: { message: "Invalid API Key provided." }
                })
        })
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        const data = await res.json()
        expect(data.error).toContain("Invalid API Key")
    })

    it("returns 500 when Stripe response is not valid JSON", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.reject(new Error("Unexpected token"))
        })
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        const data = await res.json()
        expect(data.error).toContain("Invalid response from Stripe")
    })

    it("returns 500 when Stripe returns 200 but no url", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ id: "cs_xxx" })
        })
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        const data = await res.json()
        expect(data.error).toContain("Missing checkout URL")
    })

    it("returns 200 with url when Stripe succeeds for single plan", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({ url: "https://checkout.stripe.com/xxx" })
        })
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(200)
        const data = await res.json()
        expect(data.url).toBe("https://checkout.stripe.com/xxx")
    })

    it("returns 200 for subscription plan when price env is set", async () => {
        process.env.STRIPE_PRICE_3_MONTS_EUROPE_BOX_ID_TEST = "price_3_eu_test"
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({ url: "https://checkout.stripe.com/sub" })
        })
        const res = await POST(jsonRequest({ plan: "plan-3", country: "GB" }))
        expect(res.status).toBe(200)
        const data = await res.json()
        expect(data.url).toBe("https://checkout.stripe.com/sub")
        delete process.env.STRIPE_PRICE_3_MONTS_EUROPE_BOX_ID_TEST
    })

    it("defaults plan to single and rejects missing country", async () => {
        const res = await POST(
            jsonRequest({ plan: "plan-3", country: "" } as {
                plan: string
                country: string
            })
        )
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.error).toContain("shipping country")
    })

    it("normalizes country to uppercase", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({ url: "https://checkout.stripe.com/yyy" })
        })
        const res = await POST(jsonRequest({ plan: "single", country: "gb" }))
        expect(res.status).toBe(200)
        expect(global.fetch).toHaveBeenCalled()
    })

    it("uses test key when STRIPE_SECRET_TEST is set and live key is not", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({ url: "https://checkout.stripe.com/zzz" })
        })
        await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(global.fetch).toHaveBeenCalledWith(
            "https://api.stripe.com/v1/checkout/sessions",
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer sk_test_xxx"
                })
            })
        )
    })
})
