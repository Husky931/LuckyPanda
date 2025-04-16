"use client"

import { useEffect, useState } from "react"

const getTargetDate = () => {
    const now = new Date()
    now.setDate(now.getDate() + 45) // 1.5 months = ~45 days
    return now
}

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const targetDate = getTargetDate()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full px-8 py-10 text-white md:px-20 2xl:px-60">
            {/* <header className="mb-6 text-center text-h1 font-bold leading-[50px] text-text-redPrimary">
                Launch Countdown
            </header>
            <p className="mb-8 text-center text-body1 text-text-redPrimary">
                The first box drops soon. We’re counting down the seconds.
            </p> */}
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
