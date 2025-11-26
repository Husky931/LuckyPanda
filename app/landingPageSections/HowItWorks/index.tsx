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
                    title="We Pick"
                    text="Each month we handpick exciting snacks from across China and include culturally fun surprise items to make the experience fun and enjoyable for you."
                    imageSrc="/panda_character/we_pick.webp"
                />
                <Section
                    title="You Subscribe"
                    text="Pick your subscription plan and we’ll take care of the rest. Your Chinese adventure has already started."
                    imageSrc="/panda_character/you_subscribe.webp"
                />
                <Section
                    title="We Deliver"
                    text="Sit back and relax while we ship your box straight to your door — filled with flavors, stories, and a bit of magic from the deep East."
                    imageSrc="/panda_character/we_deliver.webp"
                />
            </article>
            <div className="mt-20 flex w-full items-center justify-center"></div>
        </section>
    )
}

export default HowItWorks
