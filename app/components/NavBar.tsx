"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import dynamic from "next/dynamic"

const InputJoinWaitlist = dynamic(
    () => import("@/app/components/InputJoinWaitlist"),
    {
        ssr: false
    }
)

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
                        <InputJoinWaitlist />
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
                                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
                            />
                            <span
                                className={`absolute top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                            />
                            <span
                                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
                            />
                        </div>
                    </button>
                </div>

                {/* === Desktop Layout === */}
                <div className="hidden items-center justify-between md:flex">
                    {/* Logo + Title */}
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

                    {/* Navigation Links */}
                    <ul className="flex space-x-8 font-medium rtl:space-x-reverse">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Email Input */}
                    <div className="ml-4">
                        <InputJoinWaitlist />
                    </div>
                </div>

                {/* === Mobile Dropdown Nav === */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
                    id="navbar-sticky"
                >
                    <ul className="mt-4 flex flex-col space-y-4 rounded-lg p-4 font-medium">
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
        </nav>
    )
}

export default NavBar
