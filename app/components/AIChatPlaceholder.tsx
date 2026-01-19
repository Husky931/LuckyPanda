"use client"

import { useState } from "react"

const AIChatPlaceholder = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mt-8 flex w-full flex-col items-center gap-4 text-center xl:items-start xl:text-left">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group flex w-full max-w-md items-center justify-between rounded-2xl border border-white/60 bg-white/10 px-5 py-4 text-white backdrop-blur transition hover:border-white hover:bg-white/20"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/80">
                        Snack AI
                    </span>
                    <span className="text-lg font-semibold">
                        Ask for a custom box
                    </span>
                    <span className="text-xs text-white/70">
                        Placeholder: AI will ask flavor questions and build a box.
                    </span>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black transition group-hover:bg-black group-hover:text-white">
                    Chat now
                </span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
                    <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-borders-border2 px-6 py-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-text-dark4">
                                    Snack AI (Placeholder)
                                </p>
                                <h2 className="text-xl font-semibold text-text-dark">
                                    Build your perfect Chinese snack box
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-full border border-borders-border1 px-4 py-2 text-sm font-semibold text-text-dark transition hover:border-text-dark hover:bg-text-dark hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-background-grey1 px-6 py-6">
                            <div className="max-w-xl rounded-2xl bg-white px-4 py-3 text-sm text-text-dark shadow-sm">
                                Hi! Tell me your favorite flavors (sweet, spicy, savory) and any allergies.
                            </div>
                            <div className="ml-auto max-w-xl rounded-2xl bg-primary-red px-4 py-3 text-sm text-white shadow-sm">
                                Placeholder response: I like sweet + fruity, no nuts.
                            </div>
                            <div className="max-w-xl rounded-2xl bg-white px-4 py-3 text-sm text-text-dark shadow-sm">
                                Great. I will mix fruity gummies, light pastries, and tea-friendly bites.
                            </div>
                        </div>
                        <div className="border-t border-borders-border2 bg-white px-6 py-4">
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <input
                                    type="text"
                                    placeholder="Type your preferences (placeholder)"
                                    disabled
                                    className="w-full rounded-xl border border-borders-border1 bg-background-grey2 px-4 py-3 text-sm text-text-dark"
                                />
                                <button
                                    type="button"
                                    disabled
                                    className="rounded-xl bg-primary-red px-6 py-3 text-sm font-semibold text-white opacity-60"
                                >
                                    Send
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-text-dark4">
                                Placeholder UI only. No data is sent yet.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AIChatPlaceholder
