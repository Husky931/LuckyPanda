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
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ plan: "single", country: "GB" })
                })
            )
        })
        expect(assignMock).toHaveBeenCalledWith("https://checkout.stripe.com/xxx")
    })

    it("sends correct plan in request for subscription plan", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ url: "https://checkout.stripe.com/sub" })
        })
        const assignMock = jest.fn()
        Object.defineProperty(window, "location", {
            value: { assign: assignMock },
            writable: true
        })
        render(<ShippingSelector plan="plan-3" />)
        fireEvent.change(screen.getByRole("combobox"), { target: { value: "JP" } })
        fireEvent.click(screen.getByRole("link", { name: /continue to checkout/i }))
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                "/api/stripe/checkout-session",
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify({ plan: "plan-3", country: "JP" })
                })
            )
        })
        expect(assignMock).toHaveBeenCalledWith("https://checkout.stripe.com/sub")
    })

    it("shows API error and does not redirect when checkout returns error", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: () =>
                Promise.resolve({
                    error: "Please select a supported shipping country."
                })
        })
        const assignMock = jest.fn()
        Object.defineProperty(window, "location", {
            value: { assign: assignMock },
            writable: true
        })
        render(<ShippingSelector plan="single" />)
        fireEvent.change(screen.getByRole("combobox"), { target: { value: "GB" } })
        fireEvent.click(screen.getByRole("link", { name: /continue to checkout/i }))
        await waitFor(() => {
            expect(screen.getByRole("alert")).toHaveTextContent(
                /supported shipping country/i
            )
        })
        expect(assignMock).not.toHaveBeenCalled()
    })

    it("shows generic error when response has no url and no error message", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({})
        })
        render(<ShippingSelector plan="single" />)
        fireEvent.change(screen.getByRole("combobox"), { target: { value: "GB" } })
        fireEvent.click(screen.getByRole("link", { name: /continue to checkout/i }))
        await waitFor(() => {
            expect(screen.getByRole("alert")).toHaveTextContent(
                /unable to start checkout/i
            )
        })
    })
})
