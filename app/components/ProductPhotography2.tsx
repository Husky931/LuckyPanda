import Image from "next/image"

const ProductPhotography2 = () => {
    return (
        <div className="img-holder relative aspect-[16/9] w-full">
            <Image
                src="/product_photography_2.svg"
                alt="product photography"
                fill
                className="object-contain"
            />
        </div>
    )
}

export default ProductPhotography2
