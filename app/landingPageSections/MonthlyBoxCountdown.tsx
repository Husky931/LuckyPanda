"use client"

import CountdownTimer from "../components/CountdownTimer"

const MonthlyBoxCountdown = () => {
    return (
        <div className="w-full bg-background-grey1 px-8 py-10 md:px-20 lg:mt-10 2xl:mt-20 2xl:px-60">
            <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
                Launching December 1
            </header>
            <div className="text-center text-body1 text-black">
                Lock in our December 1 launch bonus before the countdown hits
                zero. Get early bird discounts.
            </div>
            <CountdownTimer />
        </div>
    )
}

export default MonthlyBoxCountdown
