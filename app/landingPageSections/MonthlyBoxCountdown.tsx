"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "@/app/components/CountdownTimer"

const MonthlyBoxCountdown = () => {
    const [monthName, setMonthName] = useState<string>("")

    useEffect(() => {
        const updateMonth = () => {
            const now = new Date()
            const name = now.toLocaleString("en-US", { month: "long" })
            setMonthName(name)
        }

        updateMonth()
        // No need for super-frequent updates; once a minute is enough
        const interval = setInterval(updateMonth, 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    const displayMonth = monthName || "this"
    const displayMonthLower = displayMonth.toLowerCase()

    return (
        <div className="w-full bg-background-sectionBg px-8 py-10 md:px-20 lg:mt-10 2xl:mt-20 2xl:px-60">
            <header className="mb-3 text-center text-h1 font-bold leading-[50px] text-black">
                Get {displayMonth} box
            </header>
            <div className="mb-4 text-center text-body1 text-black">
                Order before the end of {displayMonthLower} to secure this
                month&apos;s Lucky Panda box.
            </div>
            <div className="text-center text-sm text-black/70">
                Each month features new Chinese snacks and surprises. When the
                countdown hits zero, we switch to the next month&apos;s box.
            </div>
            <CountdownTimer />
        </div>
    )
}

export default MonthlyBoxCountdown
