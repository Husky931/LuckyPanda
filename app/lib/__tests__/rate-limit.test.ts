import { createRateLimiter } from "@/app/lib/rate-limit"

describe("createRateLimiter", () => {
    it("allows requests under limit", () => {
        const limiter = createRateLimiter({
            interval: 60_000,
            uniqueTokenPerInterval: 100
        })
        expect(() => limiter.check("rate-test-ip1", 3)).not.toThrow()
        expect(() => limiter.check("rate-test-ip1", 3)).not.toThrow()
        expect(() => limiter.check("rate-test-ip1", 3)).not.toThrow()
    })

    it("throws when limit exceeded", () => {
        const limiter = createRateLimiter({
            interval: 60_000,
            uniqueTokenPerInterval: 100
        })
        limiter.check("rate-test-ip2", 2)
        limiter.check("rate-test-ip2", 2)
        expect(() => limiter.check("rate-test-ip2", 2)).toThrow(
            "Rate limit exceeded"
        )
    })

    it("tracks different tokens separately", () => {
        const limiter = createRateLimiter({
            interval: 60_000,
            uniqueTokenPerInterval: 100
        })
        limiter.check("sep-token-x", 2)
        limiter.check("sep-token-x", 2)
        expect(() => limiter.check("sep-token-x", 2)).toThrow()
        expect(() => {
            limiter.check("sep-token-y", 2)
            limiter.check("sep-token-y", 2)
        }).not.toThrow()
    })
})
