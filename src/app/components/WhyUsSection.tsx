'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const contentData = [
  {
    title: 'Education',
    description: 'We provide access to quality education resources tailored to your career growth.',
    image: '/education.png',
  },
  {
    title: 'Experience',
    description: 'Gain hands-on experience through real-world projects and mentorship.',
    image: '/workspace1.jpeg',
  },
  {
    title: 'Learning',
    description: 'Engage in continuous learning with industry-leading professionals.',
    image: '/workspace2.jpeg',
  },
  {
    title: 'Community',
    description: 'Join a thriving community of learners, mentors, and professionals.',
    image: '/workspace3.jpeg',
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
    <section className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-20 bg-white">
      <div className="md:w-1/3 mb-10 md:mb-0 sticky top-20">
        <h2 className="text-4xl font-bold mb-6">Why Us</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {contentData[activeIndex].description}
        </p>
      </div>

      <div className="md:w-1/3 flex justify-center mb-10 md:mb-0 sticky top-20">
        <Image
          src={contentData[activeIndex].image}
          alt={contentData[activeIndex].title}
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="md:w-1/3 space-y-7">
        {contentData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
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
    </section>
  );
};

export default WhyUsSection;
