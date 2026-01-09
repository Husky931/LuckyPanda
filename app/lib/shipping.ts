export type ShippingCountry = {
    code: string
    label: string
    region: "europe" | "asia"
}

export const SHIPPING_COUNTRIES: ShippingCountry[] = [
    { code: "DK", label: "Denmark", region: "europe" },
    { code: "FR", label: "France", region: "europe" },
    { code: "DE", label: "Germany", region: "europe" },
    { code: "GR", label: "Greece", region: "europe" },
    { code: "IT", label: "Italy", region: "europe" },
    { code: "NL", label: "Netherlands", region: "europe" },
    { code: "PL", label: "Poland", region: "europe" },
    { code: "PT", label: "Portugal", region: "europe" },
    { code: "ES", label: "Spain", region: "europe" },
    { code: "SE", label: "Sweden", region: "europe" },
    { code: "GB", label: "United Kingdom", region: "europe" },
    { code: "AU", label: "Australia", region: "asia" },
    { code: "IL", label: "Israel", region: "asia" },
    { code: "JP", label: "Japan", region: "asia" },
    { code: "MY", label: "Malaysia", region: "asia" },
    { code: "NZ", label: "New Zealand", region: "asia" },
    { code: "RU", label: "Russia", region: "asia" },
    { code: "SA", label: "Saudi Arabia", region: "asia" },
    { code: "SG", label: "Singapore", region: "asia" },
    { code: "KR", label: "South Korea", region: "asia" },
    { code: "VN", label: "Vietnam", region: "asia" }
]

export const SHIPPING_COUNTRY_CODES = new Set(
    SHIPPING_COUNTRIES.map((country) => country.code)
)

export const getRegionForCountry = (
    code: string
): "europe" | "asia" | undefined =>
    SHIPPING_COUNTRIES.find((country) => country.code === code)?.region
