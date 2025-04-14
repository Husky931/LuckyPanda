import Image from "next/image"

const Section = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="img-holder relative mb-4 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                    src="/images_dummy/image1.png"
                    alt="profile image"
                    fill
                    className="object-cover"
                />
            </div>
            <article className="mt-2 flex flex-col items-center justify-center">
                <div className="text-center font-nunito text-body0 font-extrabold">
                    Lorem ipsum dolor
                </div>
                <p className="mt-4 text-center">
                    Lorem ipsum dolor sit amet consectetur. Euismod risus dictum
                    faucibus mattis ut adipiscing porta bibendum.
                </p>
            </article>
        </div>
    )
}

export default Section
