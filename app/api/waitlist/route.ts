import { NextResponse } from "next/server"
import { validateEmail } from "@/app/lib/utils"
import { limiter } from "@/app/lib/rate-limit"
import { headers } from "next/headers"
import { getClientIp } from "@/app/lib/request-utils"

export async function POST(request: Request) {
    try {
        const headersList = await headers()
        const ip = getClientIp(headersList)

        try {
            await limiter.check(ip, 5) // 5 waitlist signups per minute
        } catch (error) {
            return NextResponse.json(
                {
                    result: "Too many requests. Please try again later.",
                    error: "rate_limit"
                },
                { status: 429 }
            )
        }

        const body = await request.json()
        const email = typeof body.email === "string" ? body.email.trim() : ""

        if (!email) {
            return NextResponse.json(
                {
                    result: "Please enter an email address.",
                    error: "validation"
                },
                { status: 400 }
            )
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                {
                    result: "Please enter a valid email address.",
                    error: "validation"
                },
                { status: 400 }
            )
        }

        const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL
        const apiKey = process.env.GOOGLE_SHEETS_API

        if (!scriptUrl || !apiKey) {
            console.error(
                "Waitlist: Missing GOOGLE_SHEETS_SCRIPT_URL or GOOGLE_SHEETS_API"
            )
            return NextResponse.json(
                {
                    result: "Signup is temporarily unavailable.",
                    error: "config"
                },
                { status: 500 }
            )
        }

        const params = new URLSearchParams({
            email,
            apiKey
        })

        const response = await fetch(scriptUrl, {
            method: "POST",
            body: params
        })

        const data = await response.json()

        if (!response.ok) {
            return NextResponse.json(
                { result: data?.error ?? "Signup failed.", error: "external" },
                { status: 502 }
            )
        }

        return NextResponse.json({
            result: data.result ?? "You've been added successfully!",
            error: null
        })
    } catch (error) {
        console.error("Waitlist error:", error)
        return NextResponse.json(
            {
                result: "An error occurred. Please try again later.",
                error: "server"
            },
            { status: 500 }
        )
    }
}
