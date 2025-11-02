"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useAlert } from "@/app/providers/AlertBannerProvider/AlertBannerContext"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showWhiteBg, setShowWhiteBg] = useState(false)
    const { isAlertVisible } = useAlert()

    const navLinks = [
        { href: "#whatis", label: "What is" },
        { href: "#howitworks", label: "How it Works" },
        { href: "#whatsinside", label: "What's Inside" },
        { href: "#products", label: "Snacks" }
    ]

    useEffect(() => {
        const introSection = document.querySelector("#intro-hero")
        if (!introSection) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowWhiteBg(!entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.1
            }
        )

        observer.observe(introSection)
        return () => observer.disconnect()
    }, [])

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav
                className={`fixed start-0 top-0 z-30 w-full border-b transition-all duration-300 ${
                    showWhiteBg
                        ? "border-gray-200 bg-white"
                        : "border-transparent bg-transparent"
                } ${isAlertVisible ? "translate-y-[44px]" : "translate-y-0"}`}
            >
                <div id="hero-anchor" className="h-px w-full" />
                <div className="mx-auto max-w-screen-xl p-4">
                    {/* === Mobile Row === */}
                    <div className="flex w-full items-center justify-between md:hidden">
                        <Link
                            href="/"
                            className="mx-2 flex flex-shrink-0 items-center space-x-2 rtl:space-x-reverse"
                        >
                            <Image
                                src="/logo/logo.png"
                                alt="Lucky Panda Treats Logo"
                                width={32}
                                height={32}
                                className="h-12 w-auto"
                            />
                        </Link>

                        <div className="mx-2 flex-shrink">
                            <a
                                href="#subscribe"
                                className={`rounded-full px-10 py-3 text-body2 font-semibold tracking-wide transition-all duration-300 ${
                                    showWhiteBg
                                        ? "bg-primary-red text-white hover:bg-primary-redHover"
                                        : "bg-white text-primary-red hover:bg-primary-red hover:text-white"
                                }`}
                            >
                                Subscribe
                            </a>
                        </div>

                        <button
                            type="button"
                            className="mx-2 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                            onClick={handleMenuToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative h-5 w-5">
                                <span
                                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                                        isMenuOpen
                                            ? "top-1/2 -translate-y-1/2 rotate-45"
                                            : "top-0"
                                    }`}
                                />
                                <span
                                    className={`absolute top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                                        isMenuOpen
                                            ? "top-1/2 -translate-y-1/2 -rotate-45"
                                            : "bottom-0"
                                    }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* === Desktop Layout === */}
                    <div className="hidden items-center justify-between md:flex">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <Image
                                src="/logo/logo.png"
                                alt="Lucky Panda Treats Logo"
                                width={32}
                                height={32}
                                className="h-12 w-auto"
                            />
                            <Image
                                src="/logo/text_black.webp"
                                alt="Lucky Panda Treats Logo"
                                width={170}
                                height={150}
                                className="w-auto"
                            />
                        </Link>

                        <ul className="flex space-x-8 font-medium rtl:space-x-reverse">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="hover:underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="ml-4">
                            <a
                                href="#subscribe"
                                className={`rounded-full px-12 py-4 text-body2 font-semibold tracking-wide transition-all duration-300 ${
                                    showWhiteBg
                                        ? "bg-primary-red text-white hover:bg-primary-redHover"
                                        : "bg-white text-primary-red hover:bg-primary-red hover:text-white"
                                }`}
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>

                    {/* === Mobile Dropdown Nav === */}
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
                        id="navbar-sticky"
                    >
                        <div className="rounded-lg bg-white p-4 shadow-md">
                            <ul className="flex flex-col space-y-4 font-medium">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="block border-b border-black border-opacity-10 py-2 text-center hover:border-opacity-100 hover:underline"
                                            onClick={handleMenuItemClick}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
