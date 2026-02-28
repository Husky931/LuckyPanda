import React from "react"
import { render, screen } from "@testing-library/react"
import OrderConfirmationPage from "../page"

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: { src: string; alt: string }) => (
        <img src={props.src} alt={props.alt} />
    )
}))

const originalFetch = global.fetch

describe("OrderConfirmationPage", () => {
    beforeEach(() => {
        process.env.STRIPE_SECRET_TEST = "sk_test_xxx"
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("shows invalid session ID when session_id does not start with cs_", async () => {
        const searchParams = Promise.resolve({
            session_id: "invalid_session_123"
        })
        const Page = await OrderConfirmationPage({ searchParams })
        render(Page)

        expect(screen.getByText(/invalid session id/i)).toBeInTheDocument()
        expect(screen.getByRole("link", { name: /back to homepage/i })).toBeInTheDocument()
    })

    it("shows thank you message when no session_id", async () => {
        const searchParams = Promise.resolve({})
        const Page = await OrderConfirmationPage({ searchParams })
        render(Page)

        expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument()
    })

    it("shows order summary when valid session_id and Stripe returns session", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({
                    customer_details: { email: "customer@example.com" },
                    amount_total: 2999,
                    currency: "usd",
                    shipping_details: {
                        name: "Jane Doe",
                        address: {
                            line1: "123 Main St",
                            city: "London",
                            postal_code: "SW1A 1AA",
                            country: "GB"
                        },
                        phone: "+441234567890"
                    },
                    line_items: {
                        data: [
                            {
                                description: "Monthly Snack Box - Single",
                                amount_total: 2999,
                                currency: "usd"
                            }
                        ]
                    }
                })
        })
        const searchParams = Promise.resolve({
            session_id: "cs_valid_123"
        })
        const Page = await OrderConfirmationPage({ searchParams })
        render(Page)

        expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument()
        expect(screen.getByText(/receipt was sent to customer@example.com/i)).toBeInTheDocument()
        expect(screen.getByText(/\$29\.99/)).toBeInTheDocument()
        expect(screen.getByText(/order summary/i)).toBeInTheDocument()
        expect(screen.getByText(/customer shipping address/i)).toBeInTheDocument()
        expect(screen.getByText(/Jane Doe/)).toBeInTheDocument()
        expect(screen.getByText(/123 Main St/)).toBeInTheDocument()
    })

    it("fetches session with correct Stripe API URL and auth", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({
                    customer_details: { email: "test@test.com" },
                    amount_total: 1999,
                    currency: "usd"
                })
        })
        const searchParams = Promise.resolve({
            session_id: "cs_fetch_test_456"
        })
        await OrderConfirmationPage({ searchParams })

        expect(global.fetch).toHaveBeenCalledWith(
            "https://api.stripe.com/v1/checkout/sessions/cs_fetch_test_456?expand[]=line_items",
            expect.objectContaining({
                headers: { Authorization: "Bearer sk_test_xxx" },
                cache: "no-store"
            })
        )
    })

    it("shows thank you without order summary when Stripe API fails", async () => {
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => { })
            ; (global.fetch as jest.Mock).mockResolvedValue({
                ok: false
            })
        const searchParams = Promise.resolve({
            session_id: "cs_xxx"
        })
        const Page = await OrderConfirmationPage({ searchParams })
        render(Page)

        expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument()
        expect(screen.queryByText(/order summary/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/receipt was sent/)).not.toBeInTheDocument()
        consoleSpy.mockRestore()
    })

    it("shows thank you without order summary when session_id empty string", async () => {
        const searchParams = Promise.resolve({ session_id: "" })
        const Page = await OrderConfirmationPage({ searchParams })
        render(Page)

        expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument()
        expect(screen.queryByText(/order summary/i)).not.toBeInTheDocument()
    })
})
