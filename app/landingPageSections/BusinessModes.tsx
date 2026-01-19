import Link from "next/link"

const BusinessModes = () => {
    return (
        <section
            id="business-modes"
            className="relative w-full bg-background-grey1 px-6 py-16 md:px-12 lg:px-20"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                <div className="flex flex-col gap-4 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-dark4">
                        Three ways to work with us
                    </p>
                    <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
                        Export-first partnerships, plus gifts and monthly boxes
                    </h2>
                    <p className="max-w-2xl text-sm text-text-dark4 md:text-base">
                        We combine multiple snack brands into one shipment and
                        guide the flavor mix, formats, and sourcing so your
                        market gets the right assortment faster.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Link
                        href="/exporting"
                        className="group flex h-full flex-col justify-between rounded-3xl border border-primary-red/40 bg-gradient-to-br from-white via-white to-primary-red/10 p-6 shadow-lg transition hover:-translate-y-1 hover:border-primary-red"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="w-fit rounded-full bg-primary-red px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                                Primary
                            </span>
                            <h3 className="text-2xl font-semibold text-text-dark">
                                Exporting Chinese snacks worldwide
                            </h3>
                            <p className="text-sm text-text-dark4">
                                Consolidate multiple snack brands into one
                                container, with guidance on market fit, flavor
                                mix, and sourcing strategy.
                            </p>
                        </div>
                        <span className="mt-8 text-sm font-semibold text-primary-red">
                            Explore export mode
                        </span>
                    </Link>

                    <Link
                        href="/corporate-gifts"
                        className="group flex h-full flex-col justify-between rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-red"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dark4">
                                Corporate
                            </span>
                            <h3 className="text-2xl font-semibold text-text-dark">
                                Corporate gifts from China
                            </h3>
                            <p className="text-sm text-text-dark4">
                                Curated gift boxes, cultural items, and custom
                                builds designed for teams, partners, and clients.
                            </p>
                        </div>
                        <span className="mt-8 text-sm font-semibold text-primary-red">
                            See corporate gifts
                        </span>
                    </Link>

                    <Link
                        href="/monthly-box"
                        className="group flex h-full flex-col justify-between rounded-3xl border border-borders-border2 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-red"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dark4">
                                Monthly
                            </span>
                            <h3 className="text-2xl font-semibold text-text-dark">
                                Monthly snack subscription box
                            </h3>
                            <p className="text-sm text-text-dark4">
                                A recurring box of Chinese snacks and cultural
                                surprises delivered worldwide.
                            </p>
                        </div>
                        <span className="mt-8 text-sm font-semibold text-primary-red">
                            Explore monthly box
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BusinessModes
