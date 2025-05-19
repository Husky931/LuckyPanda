import Image from "next/image"

const WhatsIncluded = () => {
    return (
        <div className="img-holder relative my-10 aspect-[16/9] h-[450px] w-full 2xl:h-[850px]">
            <Image
                src="/whats_included/mob.webp"
                alt="product photography mobile"
                fill
                className="block object-fill md:hidden"
            />

            {/* Desktop Image */}
            <Image
                src="/whats_included/desktop.webp"
                alt="product photography desktop"
                fill
                className="hidden object-fill md:block"
            />

            {/* Centered Box */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 max-w-[320px] rounded-xl bg-white bg-opacity-90 px-5 py-6 text-center shadow-2xl sm:px-6 sm:py-8">
                    {/* Logo */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src="/logo/logo_no_red.png"
                            alt="logo"
                            width={60}
                            height={60}
                        />
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-xl font-bold lg:mt-2">Each Box</h2>
                    <h3 className="mb-4 text-base font-medium text-black">
                        Includes
                    </h3>

                    {/* List */}
                    <ul className="list-inside list-disc space-y-2 text-left text-sm text-black marker:text-[#F13E3A]">
                        <li>17 - 20 products</li>
                        <li>a cultural playful item</li>
                        <li>popular snacks</li>
                        <li>pamflet with the ingredients</li>
                        <li>fortune cookie for the month</li>
                        <li>postcard</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhatsIncluded
