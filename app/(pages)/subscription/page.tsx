import Link from "next/link"

export default function SubscriptionPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-grey1">
            <section className="relative w-full px-6 pb-16 pt-32 md:px-12 lg:px-20">
                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                    <span className="w-fit rounded-full bg-primary-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        Subscription Mode
                    </span>
                    <h1 className="text-4xl font-bold text-text-dark md:text-5xl">
                        Placeholder: monthly Chinese snack box experience
                    </h1>
                    <p className="max-w-3xl text-base text-text-dark4 md:text-lg">
                        Placeholder: curated snacks and cultural surprises
                        delivered each month. Discover new flavors without the
                        sourcing effort.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/choose-plan"
                            className="rounded-full bg-primary-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-redHover"
                        >
                            Choose a plan
                        </Link>
                        <span className="flex items-center text-sm text-text-dark4">
                            Placeholder: payments stay in the current checkout.
                        </span>
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
                            Placeholder: rotating themes, regions, and flavor
                            profiles.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Cultural add-ons
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Placeholder: stories, traditions, and special items
                            inside the box.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Worldwide delivery
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Placeholder: shipping to global snack lovers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
