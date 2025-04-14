import Image from "next/image"

const Item = () => {
    return (
        <article className="mb-12 flex max-w-[500px] flex-col items-center justify-center md:mx-4 lg:flex-row lg:items-start lg:justify-start">
            <div className="img-holder relative mb-4 h-[200px] w-[200px] flex-shrink-0">
                <Image
                    src="/images_dummy/image1.png"
                    alt="wagasi snack image"
                    fill
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="ml-0 lg:ml-8">
                <header className="mb-4 text-center text-h4 font-semibold leading-[28px] text-text-dark1 lg:text-left">
                    Premium Authentic Wagasi
                </header>
                <p className="text-body2 font-light">
                    Unique and interesting Chinese snacks from around the
                    country. Get surprised every month.
                </p>
            </div>
        </article>
    )
}

export default Item
