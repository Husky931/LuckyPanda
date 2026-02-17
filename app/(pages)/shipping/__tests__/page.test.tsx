import React from "react"
import { render, screen } from "@testing-library/react"
import ShippingPage from "../page"

jest.mock("../shipping-selector", () => {
    return function MockShippingSelector({ plan }: { plan: string }) {
        return <div data-testid="shipping-selector">Plan: {plan}</div>
    }
})

describe("ShippingPage", () => {
    it("renders shipping notice and passes plan to selector", async () => {
        const searchParams = Promise.resolve({ plan: "plan-3" })
        const Page = await ShippingPage({ searchParams })
        render(Page)

        expect(screen.getByText(/ship only to selected countries/i)).toBeInTheDocument()
        expect(screen.getByTestId("shipping-selector")).toHaveTextContent("Plan: plan-3")
    })

    it("defaults to single plan when no search params", async () => {
        const searchParams = Promise.resolve({})
        const Page = await ShippingPage({ searchParams })
        render(Page)

        expect(screen.getByTestId("shipping-selector")).toHaveTextContent("Plan: single")
    })
})
