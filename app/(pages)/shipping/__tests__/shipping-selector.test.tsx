import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import ShippingSelector from "../shipping-selector"

const originalFetch = global.fetch

describe("ShippingSelector", () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("shows error when continuing without selecting country", async () => {
        render(<ShippingSelector plan="single" />)
        fireEvent.click(screen.getByRole("link", { name: /continue to checkout/i }))
        await waitFor(() => {
            expect(screen.getByRole("alert")).toHaveTextContent(/select a country/i)
        })
    })

    it("calls checkout API when country is selected", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ url: "https://checkout.stripe.com/xxx" })
        })
        const assignMock = jest.fn()
        Object.defineProperty(window, "location", {
            value: { assign: assignMock },
            writable: true
        })

        render(<ShippingSelector plan="single" />)
        const select = screen.getByRole("combobox")
        fireEvent.change(select, { target: { value: "GB" } })
        fireEvent.click(screen.getByRole("link", { name: /continue to checkout/i }))

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                "/api/stripe/checkout-session",
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify({ plan: "single", country: "GB" })
                })
            )
        })
        expect(assignMock).toHaveBeenCalledWith("https://checkout.stripe.com/xxx")
    })
})
