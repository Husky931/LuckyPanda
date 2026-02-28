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
})
