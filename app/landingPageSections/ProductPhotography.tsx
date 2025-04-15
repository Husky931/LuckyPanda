import Image from "next/image"

const ProductPhotography = () => {
    return (
        <div className="img-holder relative aspect-[16/9] max-h-[650] w-full 2xl:max-h-[850]">
            <Image
                src="/product_images/4-hands_photography.webp"
                alt="product photography"
                fill
                className="object-fill"
            />
        </div>
    )
}

export default ProductPhotography
