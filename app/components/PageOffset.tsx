"use client"

import { useAlert } from "@/app/providers/AlertBannerProvider/AlertBannerContext"

type PageOffsetProps = {
    children: React.ReactNode
}

const PageOffset = ({ children }: PageOffsetProps) => {
    const { isAlertVisible } = useAlert()
    const offsetClass = isAlertVisible ? "pt-[124px]" : "pt-[80px]"

    return <div className={offsetClass}>{children}</div>
}

export default PageOffset
