import Image from "next/image"

interface ItemProps {
    title: string
    text: string
    imageSrc: string
}

const Item = ({ title, text, imageSrc }: ItemProps) => {
    return (
        <article className="mb-12 flex max-w-[500px] flex-col items-center justify-center md:mx-4 lg:flex-row lg:items-start lg:justify-start">
            <div className="relative mb-4 h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-[20px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-2 lg:ml-8 lg:mt-4">
                <header className="mb-4 min-h-[24px] text-center text-h4 font-semibold leading-[28px] text-text-dark1 lg:text-left">
                    {title}
                </header>
                <p className="text-center text-body2 font-light lg:text-left">
                    {text}
                </p>
            </div>
        </article>
    )
}

export default Item
