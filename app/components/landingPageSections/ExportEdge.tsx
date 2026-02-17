const ExportEdge = () => {
    return (
        <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                <div className="flex flex-col gap-4 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-dark4">
                        Export edge
                    </p>
                    <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
                        A smarter way to source Chinese snacks at scale
                    </h2>
                    <p className="max-w-3xl text-sm text-text-dark4 md:text-base">
                        We bundle multiple categories into one container, refine
                        the mix for your buyers, and coordinate sourcing so you
                        launch faster with less operational risk.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-3xl border border-borders-border2 bg-background-grey1 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-text-dark">
                            One container, many brands
                        </h3>
                        <p className="mt-3 text-sm text-text-dark4">
                            Combine sweets, candy, drinks, and trending hits
                            into a single shipment tailored to your market.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-background-grey1 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-text-dark">
                            Flavor and format consulting
                        </h3>
                        <p className="mt-3 text-sm text-text-dark4">
                            We align the assortment with local tastes, packaging
                            preferences, and seasonal demand signals.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-borders-border2 bg-background-grey1 p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-text-dark">
                            Sourcing coordination
                        </h3>
                        <p className="mt-3 text-sm text-text-dark4">
                            We manage supplier outreach and consolidation so you
                            focus on sales, not vendor wrangling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExportEdge
