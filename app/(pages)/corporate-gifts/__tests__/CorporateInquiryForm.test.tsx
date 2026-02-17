import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import CorporateInquiryForm from "../CorporateInquiryForm"

const originalFetch = global.fetch

describe("CorporateInquiryForm", () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("sends correct payload to contact API", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({ ok: true })

        render(<CorporateInquiryForm />)

        fireEvent.change(screen.getByLabelText(/company name/i), {
            target: { name: "companyName", value: "Acme Inc" }
        })
        fireEvent.change(screen.getByLabelText(/your name/i), {
            target: { name: "contactName", value: "John Doe" }
        })
        fireEvent.change(screen.getByLabelText(/email address/i), {
            target: { name: "email", value: "john@acme.com" }
        })
        fireEvent.change(screen.getByLabelText(/additional details/i), {
            target: { name: "message", value: "Interested in 100 boxes" }
        })

        fireEvent.click(screen.getByRole("button", { name: /request quote/i }))

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                "/api/contact",
                expect.objectContaining({
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                })
            )
        })

        const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body)
        expect(callBody.name).toBe("John Doe")
        expect(callBody.email).toBe("john@acme.com")
        expect(callBody.subject).toContain("Acme Inc")
        expect(callBody.message).toContain("Acme Inc")
        expect(callBody.message).toContain("100 boxes")
    })
})
