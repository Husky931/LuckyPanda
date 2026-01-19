import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Monthly Snack Box | Lucky Panda",
    description:
        "A monthly Chinese snack subscription box filled with curated treats and cultural surprises."
}

export default function MonthlyBoxPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-grey1">
            <section className="relative w-full px-6 pb-16 pt-32 md:px-12 lg:px-20">
                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                    <span className="w-fit rounded-full bg-primary-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        Monthly Box
                    </span>
                    <h1 className="text-4xl font-bold text-text-dark md:text-5xl">
                        A monthly Chinese snack box for curious taste buds
                    </h1>
                    <p className="max-w-3xl text-base text-text-dark4 md:text-lg">
                        Discover rotating assortments of Chinese snacks and
                        cultural surprises, curated and shipped worldwide.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/choose-plan"
                            className="rounded-full bg-primary-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-redHover"
                        >
                            Choose a plan
                        </Link>
                        <Link
                            href="/previous-boxes"
                            className="text-sm font-semibold text-primary-red hover:underline"
                        >
                            View previous boxes
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Curated every month
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Each box features new themes, regions, and flavor
                            profiles to explore.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Cultural add-ons
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Enjoy stories, traditions, and special items beyond
                            the snacks themselves.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Worldwide delivery
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            We ship to global snack lovers with reliable
                            logistics and tracking.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
