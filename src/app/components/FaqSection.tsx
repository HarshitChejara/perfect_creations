// components/FaqSection.tsx
'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'Question Lorem Ipsum?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
  },
  // Add more items here as needed
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="px-6 md:px-16 py-12 w-full">
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">FAQ</p>
      <h2 className="text-4xl font-bold mb-10">Clear your doubts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[0, 1, 2].map((col) => (
          <div key={col} className="space-y-4">
            {faqData.map((faq, index) => {
              const globalIndex = col * faqData.length + index;
              const isOpen = openIndexes.includes(globalIndex);
              return (
                <div key={globalIndex} className="border-b pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleIndex(globalIndex)}
                  >
                    <h4 className="font-semibold text-lg">{faq.question}</h4>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
