import Item from './Item';

const ItemsDescription = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-around gap-y-12 px-8 py-10 md:flex-row md:px-20 2xl:px-60">
      <div>
        <Item />
        <Item />
      </div>
      <div>
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default ItemsDescription;
