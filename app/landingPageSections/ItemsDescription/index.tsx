import Item from "./Item"

const ItemsDescription = () => {
    return (
        <section className="mx-auto flex w-full flex-col items-center justify-around gap-y-12 px-8 py-10 md:flex-row md:px-20 2xl:px-60">
            <div>
                <Item
                    title="Snack & Culture Guide"
                    text="Discover the stories of where your snacks came from in our 24-page guide."
                    imageSrc="/product_images/product_3.webp"
                />
                <Item
                    title="New Theme Every Month"
                    text="Carefully picked snacks with intent for a happy eating session"
                    imageSrc="/product_images/product_4.webp"
                />
            </div>
            <div>
                <Item
                    title="New Theme Every Month"
                    text="Carefully picked snacks with intent for a happy eating session"
                    imageSrc="/product_images/product_5.webp"
                />
                <Item
                    title="New Theme Every Month"
                    text="Carefully picked snacks with intent for a happy eating session"
                    imageSrc="/product_images/product_6.webp"
                />
            </div>
        </section>
    )
}

export default ItemsDescription
