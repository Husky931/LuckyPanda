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
                    Monthly Box of Chinese Snacks and Culture
                </h1>
                <p
                    className="mt-4 font-parkinsans text-xl font-bold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]"
                    style={{
                        WebkitTextStroke: "0.3px black",
                        WebkitTextFillColor: "white"
                    }}
                >
                    Join our monthly subscription box and begin your adventure
                </p>
            </div>
        </div>
    )
}

export default HeroTextOverlay
