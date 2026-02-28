import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { CartProvider } from "@/app/providers/CartProvider/CartContext"
import ProductPlanSelector from "../ProductPlanSelector"

const mockReplace = jest.fn()
jest.mock("next/navigation", () => ({
    useRouter: () => ({ replace: mockReplace }),
    usePathname: () => "/products/monthly-snack-box"
}))

function renderWithCart(ui: React.ReactElement) {
    return render(<CartProvider>{ui}</CartProvider>)
}

describe("ProductPlanSelector", () => {
    beforeEach(() => {
        mockReplace.mockClear()
    })

    it("renders plan options", () => {
        renderWithCart(<ProductPlanSelector />)
        expect(screen.getByRole("region", { name: /select plan/i })).toBeInTheDocument()
        expect(screen.getByText(/3 months/i)).toBeInTheDocument()
        expect(screen.getByText(/single box/i)).toBeInTheDocument()
    })

    it("updates url when selecting single plan", () => {
        renderWithCart(<ProductPlanSelector initialPlanKey="plan-3" />)
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
        renderWithCart(<ProductPlanSelector initialPlanKey="plan-3" />)
        const singleRadio = screen.getByRole("radio", {
            name: /single box one-time payment/i
        })
        fireEvent.click(singleRadio)
        const checkoutLink = screen.getByRole("link", { name: /checkout/i })
        expect(checkoutLink).toHaveAttribute("href", "/shipping?plan=single")
    })
})
