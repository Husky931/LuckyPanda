import Image from "next/image"

interface SectionProps {
    title: string
    text: string
    imageSrc: string
}

const Section = ({ title, text, imageSrc }: SectionProps) => {
    return (
        <div className="flex h-full flex-col items-center">
            <div className="mb-6 flex h-[200px] items-center justify-center">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <h3 className="mb-4 min-h-[40px] text-center font-nunito text-body0 font-extrabold">
                {title}
            </h3>
            <p className="text-center">{text}</p>
        </div>
    )
}

export default Section
