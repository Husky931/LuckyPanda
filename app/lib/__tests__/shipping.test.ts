import {
    SHIPPING_COUNTRIES,
    SHIPPING_COUNTRY_CODES,
    getRegionForCountry
} from "@/app/lib/shipping"

describe("SHIPPING_COUNTRIES", () => {
    it("has required structure for each country", () => {
        SHIPPING_COUNTRIES.forEach((country) => {
            expect(country).toHaveProperty("code")
            expect(country).toHaveProperty("label")
            expect(country).toHaveProperty("region")
            expect(typeof country.code).toBe("string")
            expect(country.region).toMatch(/^(europe|asia)$/)
        })
    })

    it("has europe and asia regions", () => {
        const regions = new Set(SHIPPING_COUNTRIES.map((c) => c.region))
        expect(regions.has("europe")).toBe(true)
        expect(regions.has("asia")).toBe(true)
    })
})

describe("SHIPPING_COUNTRY_CODES", () => {
    it("contains all country codes from SHIPPING_COUNTRIES", () => {
        SHIPPING_COUNTRIES.forEach((country) => {
            expect(SHIPPING_COUNTRY_CODES.has(country.code)).toBe(true)
        })
    })

    it("has expected European countries", () => {
        expect(SHIPPING_COUNTRY_CODES.has("GB")).toBe(true)
        expect(SHIPPING_COUNTRY_CODES.has("DE")).toBe(true)
        expect(SHIPPING_COUNTRY_CODES.has("FR")).toBe(true)
    })

    it("has expected Asian countries", () => {
        expect(SHIPPING_COUNTRY_CODES.has("JP")).toBe(true)
        expect(SHIPPING_COUNTRY_CODES.has("AU")).toBe(true)
        expect(SHIPPING_COUNTRY_CODES.has("SG")).toBe(true)
    })
})

describe("getRegionForCountry", () => {
    it("returns europe for European country codes", () => {
        expect(getRegionForCountry("GB")).toBe("europe")
        expect(getRegionForCountry("DE")).toBe("europe")
        expect(getRegionForCountry("FR")).toBe("europe")
    })

    it("returns asia for Asian country codes", () => {
        expect(getRegionForCountry("JP")).toBe("asia")
        expect(getRegionForCountry("AU")).toBe("asia")
        expect(getRegionForCountry("SG")).toBe("asia")
    })

    it("returns undefined for unknown country code", () => {
        expect(getRegionForCountry("XX")).toBeUndefined()
        expect(getRegionForCountry("")).toBeUndefined()
    })
})
