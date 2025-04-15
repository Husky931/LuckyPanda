"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: "#whatis", label: "What is" },
        { href: "#howitworks", label: "How it Works" },
        { href: "#whatsinside", label: "What's Inside" },
        { href: "#products", label: "Snacks" }
    ]

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/logo_4.png"
                        alt="Lucky Panda Treats Logo"
                        width={32}
                        height={32}
                        className="h-12 w-auto"
                    />
                    <span className="hidden self-center whitespace-nowrap text-2xl font-semibold lg:inline">
                        Lucky Panda Treats
                    </span>
                </Link>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="rounded-lg bg-primary-red px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-red focus:bg-primary-red focus:outline-none focus:ring-4"
                    >
                        Get started
                    </button>

                    {/* Animated hamburger menu button */}
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={handleMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="relative h-5 w-5">
                            {/* Top bar */}
                            <span
                                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
                            ></span>
                            {/* Middle bar */}
                            <span
                                className={`absolute top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                            ></span>
                            {/* Bottom bar */}
                            <span
                                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
                            ></span>
                        </div>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
                    id="navbar-sticky"
                >
                    <ul className="mt-4 flex flex-col space-y-4 rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:border-0 md:p-0 rtl:space-x-reverse">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block border-b border-black border-opacity-10 py-2 text-center hover:border-opacity-100 hover:underline md:border-b-0 md:px-0 md:py-0"
                                    onClick={handleMenuItemClick}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
