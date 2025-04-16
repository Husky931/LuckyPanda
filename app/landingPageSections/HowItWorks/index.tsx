import Section from "./Section"

const HowItWorks = () => {
    return (
        <section
            id="howitworks"
            className="w-full bg-background-sectionBg px-8 py-10 md:px-20 2xl:px-60"
        >
            <header className="text-shadow mb-12 text-center text-h2 font-medium">
                How <span className="font-black">it works?</span>
            </header>
            <article className="grid grid-cols-1 gap-8 gap-y-12 md:grid-cols-3 md:flex-row">
                <Section
                    title="We Curate"
                    text="Each month's we handpick exciting snacks from across China, add insert in English about their nutritional ingrediants and add surprise cultural item to make it truly special."
                    imageSrc="/curate_section/we_curate.webp"
                />
                <Section
                    title="You Subscribe"
                    text="Choose your box style and plan. Whether you want classic comfort or bold adventures, we’ve got a journey ready for your tastebuds."
                    imageSrc="/curate_section/subscribe.webp"
                />
                <Section
                    title="We Deliver"
                    text="Sit back and relax while we ship your box straight to your door — filled with flavors, stories, and a bit of magic from the other side of the world."
                    imageSrc="/curate_section/we_deliver.webp"
                />
            </article>
            <div className="mt-20 flex w-full items-center justify-center"></div>
        </section>
    )
}

export default HowItWorks
