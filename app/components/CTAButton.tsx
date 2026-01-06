import Link from "next/link"
import type { MouseEventHandler } from "react"

interface CTAButtonProps {
    href: string
    label: string
    startColor?: string
    textColor?: string
    className?: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const CTAButton = ({
    href,
    label,
    startColor,
    textColor,
    className,
    onClick
}: CTAButtonProps) => {
    const fromColor =
        startColor === "white" ? "from-[#f5f5f5]" : "from-[#f13e3b]"
    const textClass = textColor === "red" ? "text-[#f13e3b]" : "text-white"

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${fromColor} to-[#f3b034] px-6 py-3 text-sm font-semibold ${textClass} shadow-lg transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b034]/60 ${
                className ?? ""
            }`}
        >
            {label}
        </Link>
    )
}

export default CTAButton
