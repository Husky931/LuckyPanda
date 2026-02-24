import Image from "next/image"
import type { MouseEventHandler } from "react"

interface PlanProps {
    title: string
    price: string
    description: string
    isOneTimePurchase?: boolean
    link: string
    onClick: MouseEventHandler<HTMLAnchorElement>
}

const SelectPlan = ({
    title,
    price,
    description,
    link,
    isOneTimePurchase,
    onClick
}: PlanProps) => {
    return (
        <article className="flex w-full max-w-sm flex-col items-center justify-center rounded-2xl p-4 shadow-2xl md:w-fit">
            <div className="flex w-full justify-center">
                <div className="rounded-bl-2xl rounded-br-2xl bg-primary-red px-12 py-4 text-center text-h3 font-bold text-background-white">
                    {title}
                </div>
            </div>
            <div className="image-holder my-4 flex justify-center">
                <div className="relative h-32 w-32">
                    <Image
                        src="/box_panda.webp"
                        alt={`select ${title} plan`}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="mb-5 text-center text-[54px] text-lg font-bold text-primary-red">
                {price} {isOneTimePurchase ? "" : "/ month"}
            </div>
            <div
                className="mb-5 px-6 text-center text-body1 leading-5"
                dangerouslySetInnerHTML={{ __html: description }}
            />

            <a
                onClick={onClick}
                href={link}
                className="my-4 min-w-[250px] cursor-pointer rounded-2xl bg-primary-red px-8 py-4 text-center font-parkinsans text-body2 font-semibold text-background-white transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:max-w-[250px]"
            >
                {isOneTimePurchase ? "Buy Single Box" : "Choose Plan"}
            </a>

            {/* <button
                type="button"
                onClick={onClick}
                title="Coming soon"
                className="my-4 min-w-[250px] rounded-full bg-gray-300 px-8 py-4 text-center font-parkinsans text-body2 font-semibold text-gray-600 opacity-70 md:max-w-[250px]"
            >
                Soon
            </button> */}

            <div className="my-4">
                <div className="text-center text-sm text-text-dark3">
                    {isOneTimePurchase
                        ? "Receive 1 box."
                        : "No automatic renewal."}
                </div>
                <div className="text-center text-sm text-text-dark3">
                    {isOneTimePurchase
                        ? "You can repurchase any time."
                        : "VAT & shipping calculated at checkout"}
                </div>
            </div>
        </article>
    )
}

export default SelectPlan
