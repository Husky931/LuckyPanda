import Item from "./Item"

const ItemsDescription = () => {
    return (
        <section className="mx-auto flex w-full flex-col items-center justify-around px-8 py-10 md:flex-row md:px-20 2xl:px-60">
            <div>
                <Item
                    title="Cultural Surprise Inside"
                    text="Each box includes a fun extra — like a temporary tattoo, a traditional trinket, or something quirky from local markets."
                    imageSrc="/items_description/cultural_surprise.webp"
                />
                <Item
                    title="Ingredient Guide in English"
                    text="All snacks come with a printed pamphlet listing the ingredients in English — so you know exactly what you're eating."
                    imageSrc="/new_product_images/product_3.webp"
                />
            </div>
            <div>
                <Item
                    title="Unexpected Flavors"
                    text="From savory seaweed chips to sweet hawthorn rolls, experience the wide variety of snacks you won’t find at home."
                    imageSrc="/items_description/unexpected_flavors.webp"
                />
                <Item
                    title="Choose Your Box Style"
                    text="Pick from different box types: Classic, Adventurous, or Spicy — each curated to match your taste preferences."
                    imageSrc="/items_description/space-dunk-1.png"
                />
            </div>
        </section>
    )
}

export default ItemsDescription
