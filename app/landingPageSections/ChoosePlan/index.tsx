import SelectPlan from './SelectPlan';

const ChooseYourPlan = () => {
  return (
    <section className="w-full px-8 py-10 md:px-20 2xl:px-60">
      <header className="mb-12 text-center text-h1 font-bold leading-[50px]">
        Choose Your Plan
      </header>
      <div className="flex flex-col items-center gap-6 md:justify-between lg:flex-row xl:justify-evenly">
        <SelectPlan />
        <SelectPlan />
        <SelectPlan />
      </div>
    </section>
  );
};

export default ChooseYourPlan;
