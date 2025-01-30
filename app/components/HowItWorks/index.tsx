import WaitingListBtn from '../WaitingListBtn';
import Section from './Section';

const HowItWorks = () => {
  return (
    <section className="bg-background-sectionBg w-full px-8 py-10 md:px-20 2xl:px-60">
      <header className="text-shadow mb-12 text-center text-h2 font-medium">
        How <span className="font-black">it works?</span>
      </header>
      <article className='md:flex-row" grid grid-cols-1 gap-8 gap-y-12 md:grid-cols-3'>
        <Section />
        <Section />
        <Section />
      </article>
      <div className="mt-20 flex w-full items-center justify-center">
        <WaitingListBtn />
      </div>
    </section>
  );
};

export default HowItWorks;
