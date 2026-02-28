/**
 * @jest-environment node
 */
import { POST } from "@/app/api/waitlist/route"

jest.mock("next/headers", () => ({
    headers: jest.fn()
}))

const originalFetch = global.fetch
const { headers } = require("next/headers")

function jsonRequest(body: object) {
    return new Request("http://localhost/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}

describe("POST /api/waitlist", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        ;(headers as jest.Mock).mockResolvedValue(
            new Headers({ "x-real-ip": "127.0.0.1" })
        )
        process.env.GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/test"
        process.env.GOOGLE_SHEETS_API = "test-key"
        global.fetch = jest.fn()
    })

    afterAll(() => {
        global.fetch = originalFetch
    })

    it("returns 400 when email is missing", async () => {
        const res = await POST(jsonRequest({}))
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.result).toContain("email")
    })

    it("returns 400 for invalid email", async () => {
        const res = await POST(jsonRequest({ email: "invalid" }))
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.result).toContain("valid")
    })

    it("returns 500 when Google Sheets config is missing", async () => {
        const consoleSpy = jest.spyOn(console, "error").mockImplementation()
        delete process.env.GOOGLE_SHEETS_SCRIPT_URL
        const res = await POST(jsonRequest({ email: "user@example.com" }))
        expect(res.status).toBe(500)
        process.env.GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/test"
        consoleSpy.mockRestore()
    })

    it("returns 200 and result when Sheets responds ok", async () => {
        ;(global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ result: "Added!" })
        })
        const res = await POST(jsonRequest({ email: "user@example.com" }))
        expect(res.status).toBe(200)
        const data = await res.json()
        expect(data.result).toBe("Added!")
        expect(data.error).toBeNull()
    })
})
