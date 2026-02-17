/**
 * @jest-environment node
 */
import { POST } from "@/app/api/contact/route"

jest.mock("next/headers", () => ({
    headers: jest.fn()
}))
jest.mock("nodemailer", () => ({
    default: {
        createTransport: jest.fn(() => ({
            sendMail: jest.fn().mockResolvedValue({})
        }))
    }
}))

const { headers } = require("next/headers")

function jsonRequest(body: object) {
    return new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}

describe("POST /api/contact", () => {
    let ipCounter = 0
    beforeEach(() => {
        jest.clearAllMocks()
        ipCounter += 1
        ;(headers as jest.Mock).mockResolvedValue(
            new Headers({ "x-real-ip": `127.0.0.${ipCounter}` })
        )
    })

    it("returns 400 when required fields are missing", async () => {
        const res = await POST(jsonRequest({ name: "Test", email: "a@b.com" }))
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.message).toBe("All fields are required")
    })

    it("returns 400 for invalid email", async () => {
        const res = await POST(
            jsonRequest({
                name: "Test",
                email: "invalid",
                subject: "Subj",
                message: "Msg"
            })
        )
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.message).toBe("Please enter a valid email address")
    })

    it("returns 400 when name exceeds max length", async () => {
        const res = await POST(
            jsonRequest({
                name: "a".repeat(201),
                email: "a@b.com",
                subject: "Subj",
                message: "Msg"
            })
        )
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.message).toContain("Name must be at most 200")
    })

    it("returns 400 when subject exceeds max length", async () => {
        const res = await POST(
            jsonRequest({
                name: "Test",
                email: "a@b.com",
                subject: "a".repeat(501),
                message: "Msg"
            })
        )
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.message).toContain("Subject must be at most 500")
    })

    it("returns 400 when message exceeds max length", async () => {
        const res = await POST(
            jsonRequest({
                name: "Test",
                email: "a@b.com",
                subject: "Subj",
                message: "a".repeat(5001)
            })
        )
        expect(res.status).toBe(400)
        const data = await res.json()
        expect(data.message).toContain("Message must be at most 5000")
    })
})
