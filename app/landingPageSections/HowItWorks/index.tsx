import WaitingListBtn from "../WaitingListBtn"
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
                    text="Each month's box is centered around a theme of Japan—seasons, prefectures, holidays, and many more."
                    imageSrc="/product_images/product_1.webp"
                />
                <Section
                    title="You Subscribe"
                    text="Select your subscription plan and start your snack journey with various must-try treats every month."
                    imageSrc="/product_images/product_2.webp"
                />
                <Section
                    title="We Deliver"
                    text="Sit tight as we bring you an exciting experience with our seasonal snacks shipped directly from Japan."
                    imageSrc="/product_images/product_3.webp"
                />
            </article>
            <div className="mt-20 flex w-full items-center justify-center">
                <WaitingListBtn />
            </div>
        </section>
    )
}

export default HowItWorks
