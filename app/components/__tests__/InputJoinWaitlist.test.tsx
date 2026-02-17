import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import InputJoinWaitlist from "../InputJoinWaitlist"

const originalFetch = global.fetch

describe("InputJoinWaitlist", () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("shows validation error when submitting empty email", async () => {
        render(<InputJoinWaitlist />)
        const button = screen.getByRole("button", { name: /join waitlist/i })
        fireEvent.click(button)
        await waitFor(() => {
            expect(screen.getByText(/please enter email/i)).toBeInTheDocument()
        })
    })

    it("shows validation error for invalid email", async () => {
        render(<InputJoinWaitlist />)
        const input = screen.getByPlaceholderText(/your email/i)
        fireEvent.change(input, { target: { value: "invalid" } })
        fireEvent.click(screen.getByRole("button", { name: /join waitlist/i }))
        await waitFor(() => {
            expect(screen.getByText(/valid email/i)).toBeInTheDocument()
        })
    })

    it("calls onError when validation fails", async () => {
        const onError = jest.fn()
        render(<InputJoinWaitlist onError={onError} />)
        fireEvent.click(screen.getByRole("button", { name: /join waitlist/i }))
        await waitFor(() => {
            expect(onError).toHaveBeenCalled()
        })
    })

    it("calls fetch with email when valid", async () => {
        ; (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ result: "Added!" })
        })
        render(<InputJoinWaitlist />)
        const input = screen.getByPlaceholderText(/your email/i)
        fireEvent.change(input, { target: { value: "user@example.com" } })
        fireEvent.click(screen.getByRole("button", { name: /join waitlist/i }))
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                "/api/waitlist",
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify({ email: "user@example.com" })
                })
            )
        })
    })
})
