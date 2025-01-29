import NavBar from './components/NavBar';
import IntroPhotography from './components/IntoPhotography';
import WhatIs from './components/WhatIs';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <div className="">
      <main className="flex h-full flex-col items-start justify-start">
        <NavBar />
        <IntroPhotography />
        <WhatIs />
        <HowItWorks />
      </main>
      <footer className="flex justify-center bg-background-footer py-8">
        <div>This is the footer</div>
      </footer>
    </div>
  );
}
