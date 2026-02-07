import Image from "next/image"


const pastBoxes = [
    {
        title: "New Beginnings",
        subtitle: "January 2026",
        // description:
        //     "A cozy collection of winter favorites with chocolate crunch, fruity gummies, and a spiced surprise to keep the season bright.",
        image: "/new_product_images/full.webp"
    },
    {
        title: "November's Moonlights",
        subtitle: "December 2025",
        // description:
        //     "A cozy collection of winter favorites with chocolate crunch, fruity gummies, and a spiced surprise to keep the season bright.",
        image: "/monthly/november.webp"
    },
    {
        title: "December Delight",
        subtitle: "December 2025",
        // description:
        //     "A cozy collection of winter favorites with chocolate crunch, fruity gummies, and a spiced surprise to keep the season bright.",
        image: "/hero/snack_box.webp"
    }
    // {
    //     title: "Autumn Adventure",
    //     subtitle: "October 2025",
    //     description:
    //         "Warm, toasty flavors like caramel biscuits, nutty bites, and a fizzy citrus soda to celebrate sweater weather.",
    //     image: "/hero/snack_box.webp"
    // },
    // {
    //     title: "Summer Streets",
    //     subtitle: "August 2025",
    //     description:
    //         "Crisp chips, chewy mochi-style treats, and bright tropical candies inspired by night markets and sunny strolls.",
    //     image: "/hero/snack_box.webp"
    // },
    // {
    //     title: "Spring Picnic",
    //     subtitle: "May 2025",
    //     description:
    //         "Light wafers, floral candies, and refreshing tea-inspired sips for a breezy, snackable picnic vibe.",
    //     image: "/hero/snack_box.webp"
    // }
]

const PreviousBoxes = () => {
    return (
        <div className="min-h-screen bg-background-grey1">
            <div className="mx-auto max-w-6xl px-4 pb-12 pt-32 md:px-8 lg:px-12">
                <header className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-red">
                        Our Past Boxes
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-text-dark md:text-4xl">
                        Take a look back at where we&apos;ve snacked
                    </h1>
                    <p className="mt-4 text-base text-text-dark4 md:text-lg">
                        Browse a few of our recent monthly boxes and the flavors
                        that made them memorable.
                    </p>
                </header>

                <div className="space-y-8">
                    {pastBoxes.map((box, idx) => (
                        <section
                            key={`${box.title}-${box.subtitle}`}
                            className={`flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-md md:flex-row md:items-center md:gap-10 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="md:w-1/2">
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-red">
                                    {box.subtitle}
                                </p>
                                <h2 className="mt-2 text-2xl font-bold text-text-dark md:text-3xl">
                                    {box.title}
                                </h2>
                            </div>
                            <div className="md:w-1/2">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={box.image}
                                        alt={`${box.title} box`}
                                        width={800}
                                        height={600}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        priority={idx === 0}
                                    />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviousBoxes
