'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Modern Villa',
    description:
      'A luxurious villa project featuring cutting-edge architecture and a serene environment.',
    area: '120 m²',
    year: '2024',
    images: ['/project1.png', '/project2.png', '/project3.png', '/project4.png'],
  },
  {
    id: 2,
    title: 'Urban Apartment',
    description:
      'High-rise apartment complex with premium amenities for city living.',
    area: '85 m²',
    year: '2025',
    images: ['/project5.jpg', '/project6.jpg', '/project7.jpg', '/project5.jpg'],
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description:
      'A countryside cottage designed for peaceful and minimal living.',
    area: '65 m²',
    year: '2023',
    images: ['/project8.jpeg', '/project9.jpeg', '/project10.jpeg', '/project11.jpeg'],
  },
];

const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const project = projectsData[currentIndex];

  const imageSliderVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full px-4 md:px-20 py-24 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="mb-10">
        <motion.p
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-sm uppercase tracking-widest text-gray-500"
        >
          Catalog
        </motion.p>

        <motion.h2
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-4xl font-bold mt-2"
        >
          Projects
        </motion.h2>
      </div>

      <div className="relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={project.id}
            custom={direction}
            variants={imageSliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {/* Top 2 Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {project.images.slice(0, 2).map((img, index) => (
                <motion.div
                  key={index}
                  variants={slideUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 * (index + 1) }}
                  className="w-full h-[250px] md:h-[300px] relative"
                >
                  <Image src={img} alt={`Project Image ${index + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {project.images.slice(2, 4).map((img, index) => (
                <motion.div
                  key={index}
                  variants={slideUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 * (index + 1) }}
                  className="relative w-full h-[250px]"
                >
                  <Image src={img} alt={`Project Detail ${index + 3}`} fill className="object-cover" />
                </motion.div>
              ))}

              {/* Project Details */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="text-sm text-gray-800">
                  <p className="mb-1">
                    <span className="font-bold">Area:</span> {project.area}
                  </p>
                  <p>
                    <span className="font-bold">Year:</span> {project.year}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-0 right-0 flex gap-4">
          <button onClick={handlePrev}>
            <FiChevronLeft size={40} />
          </button>
          <button onClick={handleNext}>
            <FiChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
