const HeroTextOverlay = () => {
    return (
        <div className="z-10 flex w-full items-center justify-center md:w-1/2 md:justify-start">
            <div className="max-w-xl px-6 py-12 text-center text-white md:ml-20 md:py-0 md:text-left">
                <h1 className="text-[44px] font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
                    Explore China with your tastebuds
                </h1>
                <p className="mt-4 font-nunito text-lg drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
                    Join our monthly subscription box and begin your adventure
                </p>
                <a
                    href="#products"
                    className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-black hover:text-white"
                >
                    View First Box
                </a>
            </div>
        </div>
    )
}

export default HeroTextOverlay
