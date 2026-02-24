/**
 * Returns the full month name for a date (e.g. "December", "January").
 * Use this from server components (with new Date()) or from client code inside
 * useEffect to avoid hydration mismatch.
 */
export function getMonthName(date: Date): string {
    return date.toLocaleString("en-US", { month: "long" })
}
