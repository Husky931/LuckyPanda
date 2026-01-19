import Link from "next/link"

const ExportHeroTextOverlay = () => {
    return (
        <div className="z-10 flex w-full mt-10 items-center justify-center lg:translate-y-0 xl:w-1/2 xl:justify-start">
            <div className="max-w-xl px-6 py-12 text-center text-white xl:ml-20 xl:py-0 xl:text-left">
                <h1
                    className="text-[44px] font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl"
                    style={{
                        WebkitTextStroke: "1.2px black",
                        WebkitTextFillColor: "white"
                    }}
                >
                    Are you working with Chinese snacks?
                </h1>
                <p
                    className="mt-4 font-parkinsans text-xl font-bold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]"
                    style={{
                        WebkitTextStroke: "0.3px black",
                        WebkitTextFillColor: "white"
                    }}
                >
                    If you are working with Chinese snacks, we can help you with your export plans. We can curate different snacks into 1 container, provide direct factory contact and charge standard 7% fee.

                </p>
            </div>
        </div>
    )
}

export default ExportHeroTextOverlay
