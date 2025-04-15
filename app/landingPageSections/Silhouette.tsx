import Image from "next/image"

const Silhouette = () => {
    return (
        <Image
            src="/images_dummy/5.svg"
            alt="chinese silhouette"
            width={300}
            height={300}
            className="h-auto w-[900px] object-contain md:w-[600px]"
        />
    )
}

export default Silhouette
