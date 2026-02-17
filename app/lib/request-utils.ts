/** Allowed origins for Stripe redirect URLs. Add preview URLs if needed. */
export const ALLOWED_ORIGINS = [
    "https://luckypandatreats.com",
    "https://www.luckypandatreats.com",
    "http://localhost:3000"
]

export function getValidOrigin(requestOrigin: string | null): string {
    if (requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)) {
        return requestOrigin
    }
    return "https://luckypandatreats.com"
}

/**
 * Extract client IP for rate limiting.
 * Prefer x-real-ip (set by Vercel/trusted proxies), then parse x-forwarded-for
 * taking the leftmost (client) IP. Falls back to placeholder when unavailable.
 */
export function getClientIp(headers: Headers): string {
    const realIp = headers.get("x-real-ip")
    if (realIp) return realIp.trim()

    const forwarded = headers.get("x-forwarded-for")
    if (forwarded) {
        const first = forwarded.split(",")[0]?.trim()
        if (first) return first
    }

    return "127.0.0.1"
}
