import Link from "next/link"
import ExportHero from "./components/ExportHero"

export default function ExportPage() {
    return (
        <div className="flex h-full flex-col items-start justify-start bg-primary-red">
         
            <ExportHero />
            <section className="relative w-full px-6 pb-16 pt-32 md:px-12 lg:px-20 bg-background-grey1">
                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                    <h1 className="text-4xl font-bold text-text-dark md:text-5xl">
                        Placeholder: exporting Chinese snacks worldwide
                    </h1>
                    <p className="max-w-3xl text-base text-text-dark4 md:text-lg">
                        Placeholder: combine multiple snack brands into one
                        container, plus guidance on flavors, formats, and market
                        fit. We help you build a ready-to-import assortment with
                        less sourcing friction.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="rounded-full bg-primary-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-redHover"
                        >
                            Start an export conversation
                        </Link>
                        <span className="flex items-center text-sm text-text-dark4">
                            Placeholder: consultation-first, no online payments.
                        </span>
                    </div>
                </div>
            </section>

            <section className="w-full px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Curated container builds
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Placeholder: mix sweets, candy, and drinks into one
                            shipment optimized for your market.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Flavor + category consulting
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Placeholder: guidance on what sells, packaging
                            formats, and cultural preferences.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-text-dark">
                            Supplier coordination
                        </h2>
                        <p className="mt-3 text-sm text-text-dark4">
                            Placeholder: consolidate brands and factory
                            relationships so you can move faster.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
