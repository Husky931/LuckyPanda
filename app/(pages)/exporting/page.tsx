import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Exporting Chinese Snacks | Lucky Panda",
    description:
        "Export-ready Chinese snacks with consolidated sourcing, curated flavor mixes, and market-fit consulting."
}

export default function ExportingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-grey1">
            <section className="relative w-full px-6 pb-16 pt-32 md:px-12 lg:px-20">
                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                    <span className="w-fit rounded-full bg-primary-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        Export Mode
                    </span>
                    <h1 className="text-4xl font-bold text-text-dark md:text-5xl">
                        Export Chinese snacks with a curated, market-ready mix
                    </h1>
                    <p className="max-w-3xl text-base text-text-dark4 md:text-lg">
                        We consolidate multiple snack brands into a single
                        container, advise on flavor and category selection, and
                        help you ship assortments that sell in your region.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/contact"
                            className="rounded-full bg-primary-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-redHover"
                        >
                            Start an export conversation
                        </Link>
                        <span className="text-sm text-text-dark4">
                            Consultation first, no online payments.
                        </span>
                    </div>
                </div>
            </section>

            <section className="w-full px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Container-built assortments
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Mix sweets, candy, snacks, and drinks into one
                            shipment designed for your audience.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Flavor and category strategy
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Get guidance on what sells, how to balance flavors,
                            and where to focus your first order.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Consolidated sourcing
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            We coordinate suppliers and packaging requirements
                            so your team can move faster.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
