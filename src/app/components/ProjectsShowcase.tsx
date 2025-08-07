'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';

const categories = [
  'Architecture',
  'Organization',
  'Furniture',
  'Remote Spaces',
  'Interior Design',
  'Office Tech',
  'Floor Plans',
];

const projectImages = [
  {
    image: '/about/showcase/showcase_project1.png',
    client: 'Name Of Project Client1',
    description: 'The interior of the apartments.',
    category: 'Architecture',
  },
  {
    image: '/about/showcase/showcase_project2.png',
    client: 'Name Of Project Client2',
    description: 'Modern open space design.',
    category: 'Organization',
  },
  {
    image: '/about/showcase/showcase_project3.png',
    client: 'Name Of Project Client3',
    description: 'Cozy and minimal office setup.',
    category: 'Furniture',
  },
  {
    image: '/about/showcase/showcase_project1.png',
    client: 'Name Of Project Client4',
    description: 'The interior of the apartments.',
    category: 'Remote Spaces',
  },
  {
    image: '/about/showcase/showcase_project2.png',
    client: 'Name Of Project Client5',
    description: 'Modern open space design.',
    category: 'Interior Design',
  },
  {
    image: '/about/showcase/showcase_project3.png',
    client: 'Name Of Project Client6',
    description: 'Cozy and minimal office setup.',
    category: 'Office Tech',
  },
  {
    image: '/about/showcase/showcase_project2.png',
    client: 'Name Of Project Client7',
    description: 'The interior of the apartments.',
    category: 'Floor Plans',
  },
];

const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const activeCategory = projectImages[currentIndex].category;

  return (
    <section className="px-4 md:px-20 py-20 md:mb-20 bg-white text-black">
      {/* Title Section */}
      <motion.p
        className="uppercase text-sm tracking-widest mb-2 text-gray-500"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Project Categories
      </motion.p>

      <div className="flex items-center justify-between mb-12">
        <motion.h2
          className="md:text-4xl text-3xl font-bold"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
        >
          What’s new?
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => router.push('/projects')}
            className="cursor-pointer bg-black text-white border border-black hover:bg-white hover:text-black uppercase px-4 py-2 text-sm rounded-full hover:opacity-90"
          >
            Learn more
          </button>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left - Categories */}
        <motion.div
          className="space-y-4"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <p
              key={index}
              className={`text-md cursor-pointer ${
                cat === activeCategory
                  ? 'font-semibold text-black text-xl'
                  : 'text-gray-400'
              }`}
            >
              {cat}
            </p>
          ))}
        </motion.div>

        {/* Middle - Project Image */}
        <div className="col-span-2 relative">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[0, 1].map((offset) => {
              const item =
                projectImages[(currentIndex + offset) % projectImages.length];
              return (
                <motion.div
                  key={offset}
                  variants={slideUpVariant}
                  transition={{ delay: 0.4 + offset * 0.2 }}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 font-semibold">{item.client}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Arrows */}
          <div className="absolute right-0 flex gap-4">
            <button onClick={prevSlide}>
              <FiChevronLeft size={40} className="cursor-pointer"/>
            </button>
            <button onClick={nextSlide}>
              <FiChevronRight size={40} className="cursor-pointer"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
