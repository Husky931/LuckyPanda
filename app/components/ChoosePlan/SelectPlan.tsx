const SelectPlan = () => {
  return (
    <article className="flex w-full max-w-sm flex-col items-center justify-center rounded-2xl p-4 shadow-2xl md:w-fit">
      <div className="flex w-full justify-center">
        <div className="rounded-bl-2xl rounded-br-2xl bg-primary-red px-12 py-4 text-center text-h3 font-bold text-background-white">
          Monthly
        </div>
      </div>
      <div className="image-holder my-4 flex justify-center">
        <img
          src="/images_dummy/box.svg"
          alt="select monthly plan"
          className="w-32"
        />
      </div>
      <div className="my-5 text-center text-[54px] text-lg font-bold text-primary-red">
        $54.99
      </div>
      <div className="my-5 px-6 text-center text-body1 leading-5">
        Single payment of $128.99 (shipping costs and VAT included for EU)
      </div>
      <button className="font-parkinsans my-4 rounded-full bg-primary-red px-8 py-4 text-body2 font-semibold text-background-white md:max-w-[250px]">
        Select this plan
      </button>
      <div className="my-4">
        <div className="text-center text-text-dark3">
          Automatic renewal every month.
        </div>
        <div className="text-center text-text-dark3">
          You can unsubscribe any time you want.
        </div>
      </div>
    </article>
  );
};

export default SelectPlan;
