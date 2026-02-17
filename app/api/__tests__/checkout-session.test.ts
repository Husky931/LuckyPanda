/**
 * @jest-environment node
 */
import { POST } from "@/app/api/stripe/checkout-session/route"

jest.mock("next/headers", () => ({
    headers: jest.fn()
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
        ;(headers as jest.Mock).mockResolvedValue(
            new Headers({
                "x-real-ip": "127.0.0.1",
                origin: "https://luckypandatreats.com"
            })
        )
        process.env.STRIPE_SECRET_KEY_TEST = "sk_test_xxx"
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

    it("returns 500 when Stripe key is missing", async () => {
        delete process.env.STRIPE_SECRET_KEY_TEST
        const res = await POST(jsonRequest({ plan: "single", country: "GB" }))
        expect(res.status).toBe(500)
        process.env.STRIPE_SECRET_KEY_TEST = "sk_test_xxx"
    })

    it("returns 200 with url when Stripe succeeds", async () => {
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
})
