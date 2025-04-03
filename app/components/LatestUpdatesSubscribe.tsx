const LatestUpdatesSubscribe = () => {
  return (
    <div className="bg-background-grey1 px-8 py-10 md:px-20 2xl:px-60">
      <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
        Subscribe to our pre-release updates
      </header>
      <div className="text-center text-body1 text-black">
        Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta
        dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus suscipit tortor eget felis porttitor volutpat.
      </div>

      {/* Mobile Only */}
      <div className="mt-6 flex w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:hidden">
        <div className="relative w-full">
          <input
            className="h-[50px] w-full rounded-full border border-borders-border2 bg-white pl-4 pr-20 text-black focus:ring-0"
            placeholder="Your email"
          />
          <button className="absolute right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-r-full bg-primary-red px-4 text-body2 font-semibold text-background-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* Medium and Up */}
      <div className="mt-6 hidden w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 md:flex md:flex-row">
        <input
          className="w-full rounded-full border border-borders-border2 bg-white p-4 px-6 text-black focus:border-none focus:ring-0 md:flex-1"
          placeholder="Your email address"
        />
        <button className="font-parkinsans rounded-full bg-primary-red px-8 py-4 text-body2 font-semibold text-background-white md:max-w-[250px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default LatestUpdatesSubscribe;
