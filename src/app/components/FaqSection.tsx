'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  { question: 'Question1 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
  { question: 'Question2 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
  { question: 'Question3 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
  { question: 'Question4 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
  { question: 'Question5 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
  { question: 'Question6 Lorem Ipsum?', answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]); // No question open initially

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const columns: FaqItem[][] = [[], [], []];
  faqData.forEach((faq, i) => {
    columns[i % 3].push(faq);
  });

  return (
    <section className="px-4 md:px-20 py-20 md:mb-16 mb-5 w-full">
      <motion.p
        className="uppercase tracking-widest text-sm text-gray-500 mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FAQ
      </motion.p>

      <motion.h2
        className="md:text-4xl text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Clear your doubts
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: colIndex * 0.2 }}
            viewport={{ once: true }}
          >
            {column.map((faq, index) => {
              const globalIndex = colIndex * 10 + index;
              const isOpen = openIndexes.includes(globalIndex);

              return (
                <motion.div
                  key={globalIndex}
                  className="border-b pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleIndex(globalIndex)}
                  >
                    <h4 className="font-semibold text-lg">{faq.question}</h4>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {/* Slide Open/Close Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
