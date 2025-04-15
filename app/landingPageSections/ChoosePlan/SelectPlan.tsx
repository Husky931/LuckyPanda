import Image from "next/image"

interface PlanProps {
    title: string
    price: string
    description: string
}

const SelectPlan = ({ title, price, description }: PlanProps) => {
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
                        src="/images_dummy/box.svg"
                        alt={`select ${title} plan`}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="my-5 text-center text-[54px] text-lg font-bold text-primary-red">
                {price} / month
            </div>
            <div className="my-5 px-6 text-center text-body1 leading-5">
                {description}
            </div>
            <button
                className="my-4 cursor-not-allowed rounded-full bg-primary-red px-8 py-4 font-parkinsans text-body2 font-semibold text-background-white opacity-50 md:max-w-[250px]"
                disabled
            >
                Currently Unavailable
            </button>
            <div className="my-4">
                <div className="text-center text-text-dark3">
                    Automatic renewal based on your plan.
                </div>
                <div className="text-center text-text-dark3">
                    You can unsubscribe any time you want.
                </div>
            </div>
        </article>
    )
}

export default SelectPlan
