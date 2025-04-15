const HeroTextOverlay = () => {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start">
            <div className="max-w-xl px-6 text-center text-white md:ml-20 md:text-left">
                <h1 className="text-4xl font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
                    Explore China with your tastebuds
                </h1>
                <p className="mt-4 font-nunito text-lg drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
                    Join our monthly subscription box and begin your adventure
                </p>
            </div>
        </div>
    )
}

export default HeroTextOverlay
