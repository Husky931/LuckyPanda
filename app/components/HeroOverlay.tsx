import Link from "next/link"

const HeroTextOverlay = () => {
    return (
        <div className="z-10 flex w-full translate-y-1/3 items-center justify-center lg:translate-y-0 xl:w-1/2 xl:justify-start">
            <div className="max-w-xl px-6 py-12 text-center text-white xl:ml-20 xl:py-0 xl:text-left">
                <h1
                    className="text-[44px] font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl"
                    style={{
                        WebkitTextStroke: "1.2px black",
                        WebkitTextFillColor: "white"
                    }}
                >
                    Your Chinese snacks partner
                </h1>
                <p
                    className="mt-4 font-parkinsans text-xl font-bold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]"
                    style={{
                        WebkitTextStroke: "0.3px black",
                        WebkitTextFillColor: "white"
                    }}
                >
                    Custom exports for all kinds of snacks and drinks, corporate gifts, and monthly curated boxes from China.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:justify-start">
                    <Link
                        href="/exporting"
                        className="rounded-full bg-primary-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-redHover"
                    >
                        Start an export plan
                    </Link>
                    <Link
                        href="/monthly-box"
                        className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                        See monthly boxes
                    </Link>
                </div>
    
            </div>
        </div>
    )
}

export default HeroTextOverlay
