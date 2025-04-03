'use client';
import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt lorem eget nibh placerat, a ultrices lorem viverra.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt lorem eget nibh placerat, a ultrices lorem viverra.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt lorem eget nibh placerat, a ultrices lorem viverra.',
    },
    {
      question: 'Can I change my order after it has been placed?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt lorem eget nibh placerat, a ultrices lorem viverra.',
    },
  ];

  const toggleFaq = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full">
      {/* <img
        src="/images_dummy/5.svg"
        alt="chinese silhouette"
        className="absolute bottom-0 z-0"
      /> */}
      <section className="flex w-full flex-col items-center justify-center gap-y-12 bg-background-white px-8 py-10 md:px-20 2xl:px-60">
        <header className="mb-5 text-center text-h1 font-bold leading-[50px] text-black">
          F.A.Q.
        </header>

        <div className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg border border-borders-border2 p-5 transition duration-300 ease-in-out hover:bg-gray-100"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between">
                <div className="text-body1 text-black">{faq.question}</div>
                <span className="text-2xl text-gray-500">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <img
        src="/images_dummy/5.svg"
        alt="chinese silhouette"
        //   className="absolute bottom-0 z-0"
      />
    </section>
  );
};

export default Faq;
