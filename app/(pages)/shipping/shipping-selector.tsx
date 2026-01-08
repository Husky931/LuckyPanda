"use client"

import { useMemo, useState } from "react"
import CTAButton from "@/app/components/CTAButton"
import { SHIPPING_COUNTRIES } from "@/app/lib/shipping"

const EUROPE_LABEL = "Europe"
const ASIA_LABEL = "Asia"

const ShippingSelector = ({ plan }: { plan: string }) => {
    const [country, setCountry] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const grouped = useMemo(() => {
        const europe = SHIPPING_COUNTRIES.filter(
            (item) => item.region === "europe"
        )
        const asia = SHIPPING_COUNTRIES.filter((item) => item.region === "asia")
        return { europe, asia }
    }, [])

    const handleContinue = async () => {
        if (!country) {
            setError("Please select a country to continue.")
            return
        }
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch("/api/stripe/checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ plan, country })
            })
            const data = await response.json()
            if (!response.ok || !data?.url) {
                throw new Error(
                    data?.error ?? "Unable to start checkout session."
                )
            }
            window.location.assign(data.url)
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to start checkout session."
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-4 text-left">
            <label className="text-sm font-semibold text-text-dark">
                Shipping country
            </label>
            <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="w-full rounded-2xl border border-borders-border1 bg-white px-4 py-3 text-sm text-text-dark shadow-sm focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/30"
            >
                <option value="" disabled>
                    Select your country
                </option>
                <optgroup label={EUROPE_LABEL}>
                    {grouped.europe.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.label}
                        </option>
                    ))}
                </optgroup>
                <optgroup label={ASIA_LABEL}>
                    {grouped.asia.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.label}
                        </option>
                    ))}
                </optgroup>
            </select>
            {error && (
                <p className="text-sm text-primary-red" role="alert">
                    {error}
                </p>
            )}
            <CTAButton
                href="/shipping"
                label={isLoading ? "Redirecting..." : "Continue to Checkout"}
                className="w-full bg-primary-red from-primary-red to-primary-red hover:scale-[1.01]"
                onClick={(event) => {
                    event.preventDefault()
                    handleContinue()
                }}
            />
            <CTAButton
                href="/"
                label="My country is not supported"
                startColor="white"
                textColor="red"
                className="w-full border border-borders-border1"
            />
        </div>
    )
}

export default ShippingSelector
