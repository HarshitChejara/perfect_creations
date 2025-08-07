'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const contentData = [
  {
    title: 'Education',
    description: 'We provide access to quality education resources tailored to your career growth.',
    image: '/education.png',
  },
  {
    title: 'Experience',
    description: 'Gain hands-on experience through real-world projects and mentorship.',
    image: '/hero-bg.jpeg',
  },
  {
    title: 'Learning',
    description: 'Engage in continuous learning with industry-leading professionals.',
    image: '/hero-bg-2.jpg',
  },
  {
    title: 'Community',
    description: 'Join a thriving community of learners, mentors, and professionals.',
    image: '/hero-bg-3.jpeg',
  },
  {
    title: 'Job Training',
    description: 'Get job-ready with practical training and placement support.',
    image: '/education.png',
  },
];

const WhyUsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, { once: true, margin: '-30% 0px' });
  const isMobileInView = useInView(mobileRef, { once: true, margin: '-20% 0px' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0.5 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full md:py-24 py-12 px-4 md:px-20 bg-white">
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col md:flex-row items-start justify-center">
        {/* LEFT TEXT SECTION */}
        <div className="md:w-1/3 mb-10 md:mb-0 sticky top-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Why Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-gray-600 leading-relaxed mb-4"
          >
            We help you grow through education, experience, learning, community, and job training.
          </motion.p>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/3 flex justify-center mb-10 md:mb-0 sticky top-20">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={contentData[activeIndex].image}
              alt={contentData[activeIndex].title}
              width={400}
              height={300}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT MENU SECTION */}
        <div className="md:w-1/3 space-y-8">
          {contentData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              className="min-h-[50px] scroll-mt-24"
            >
              <div
                className={`flex items-center gap-4 ${
                  index === activeIndex ? 'text-black font-semibold text-xl' : 'text-gray-400'
                }`}
              >
                <span
                  className={`font-bold ${
                    index === activeIndex ? 'text-black text-4xl' : 'text-gray-300 text-xl'
                  }`}
                >
                  {`0${index + 1}`}
                </span>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW (TABS) */}
      <div ref={mobileRef} className="md:hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Why Us
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-gray-600 mb-6"
        >
          We help you grow through education, experience, learning, community, and job training.
        </motion.p> */}

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex gap-2 mb-6 flex-wrap"
        >
          {contentData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndex === index ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {item.title}
            </button>
          ))}
        </motion.div>

        {/* IMAGE & DESCRIPTION */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          // className="p-4"
        >
          <Image
            src={contentData[activeIndex].image}
            alt={contentData[activeIndex].title}
            width={350}
            height={200}
            className=" object-cover mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">{contentData[activeIndex].title}</h3>
          <p className="text-gray-600 mt-2">{contentData[activeIndex].description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
