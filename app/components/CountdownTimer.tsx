"use client"

import { useEffect, useState } from "react"

const LAUNCH_DATE = new Date("2025-08-01T00:00:00Z")

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = LAUNCH_DATE.getTime() - now

            const days = Math.max(
                Math.floor(distance / (1000 * 60 * 60 * 24)),
                0
            )
            const hours = Math.max(
                Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                0
            )
            const minutes = Math.max(
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                0
            )
            const seconds = Math.max(
                Math.floor((distance % (1000 * 60)) / 1000),
                0
            )

            setTimeLeft({ days, hours, minutes, seconds })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full px-8 py-10 text-white md:px-20 2xl:px-60">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <TimeBox label="Days" value={timeLeft.days} />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
        </section>
    )
}

const TimeBox = ({ label, value }: { label: string; value: number }) => (
    <div className="flex w-[80px] flex-col items-center justify-center rounded-xl bg-black px-4 py-2 text-black shadow-sm md:w-[100px] md:px-6 md:py-4">
        <span className="text-3xl font-bold text-white md:text-4xl">
            {value.toString().padStart(2, "0")}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-white md:text-sm">
            {label}
        </span>
    </div>
)

export default CountdownTimer
