import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ProductPlanSelector from "../ProductPlanSelector"

const mockReplace = jest.fn()
jest.mock("next/navigation", () => ({
    useRouter: () => ({ replace: mockReplace }),
    usePathname: () => "/products/monthly-snack-box"
}))

describe("ProductPlanSelector", () => {
    beforeEach(() => {
        mockReplace.mockClear()
    })

    it("renders plan options", () => {
        render(<ProductPlanSelector />)
        expect(screen.getByRole("region", { name: /select plan/i })).toBeInTheDocument()
        expect(screen.getByText(/3 months/i)).toBeInTheDocument()
        expect(screen.getByText(/single box/i)).toBeInTheDocument()
    })

    it("updates url when selecting single plan", () => {
        render(<ProductPlanSelector initialPlanKey="plan-3" />)
        const singleRadio = screen.getByRole("radio", {
            name: /single box one-time payment/i
        })
        fireEvent.click(singleRadio)
        expect(mockReplace).toHaveBeenCalledWith(
            "/products/monthly-snack-box?plan=single",
            expect.any(Object)
        )
    })

    it("shows checkout button with correct plan in href", () => {
        render(<ProductPlanSelector initialPlanKey="plan-3" />)
        const singleRadio = screen.getByRole("radio", {
            name: /single box one-time payment/i
        })
        fireEvent.click(singleRadio)
        const checkoutLink = screen.getByRole("link", { name: /checkout/i })
        expect(checkoutLink).toHaveAttribute("href", "/shipping?plan=single")
    })
})
