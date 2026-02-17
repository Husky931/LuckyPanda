import {
    ALLOWED_ORIGINS,
    getValidOrigin,
    getClientIp
} from "@/app/lib/request-utils"

describe("ALLOWED_ORIGINS", () => {
    it("includes production and localhost", () => {
        expect(ALLOWED_ORIGINS).toContain("https://luckypandatreats.com")
        expect(ALLOWED_ORIGINS).toContain("http://localhost:3000")
    })
})

describe("getValidOrigin", () => {
    it("returns origin when it is in allowlist", () => {
        expect(getValidOrigin("https://luckypandatreats.com")).toBe(
            "https://luckypandatreats.com"
        )
        expect(getValidOrigin("http://localhost:3000")).toBe(
            "http://localhost:3000"
        )
    })

    it("returns default when origin is null or undefined", () => {
        expect(getValidOrigin(null)).toBe("https://luckypandatreats.com")
    })

    it("returns default when origin is not in allowlist", () => {
        expect(getValidOrigin("https://evil.com")).toBe(
            "https://luckypandatreats.com"
        )
        expect(getValidOrigin("https://luckypandatreats.com.evil.com")).toBe(
            "https://luckypandatreats.com"
        )
    })
})

describe("getClientIp", () => {
    it("returns x-real-ip when set", () => {
        const headers = new Headers({ "x-real-ip": "192.168.1.1" })
        expect(getClientIp(headers)).toBe("192.168.1.1")
    })

    it("returns first IP from x-forwarded-for when x-real-ip not set", () => {
        const headers = new Headers({
            "x-forwarded-for": "203.0.113.1, 70.41.3.18"
        })
        expect(getClientIp(headers)).toBe("203.0.113.1")
    })

    it("returns 127.0.0.1 when no IP headers present", () => {
        const headers = new Headers()
        expect(getClientIp(headers)).toBe("127.0.0.1")
    })
})
