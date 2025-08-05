'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const project = projectsData[currentIndex];

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % project.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <section ref={ref} className="w-full px-4 md:px-20 md:py-24 py-12 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="mb-10">
        <motion.p
          variants={slideUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-sm uppercase tracking-widest text-gray-500"
        >
          Catalog
        </motion.p>

        <motion.h2
          variants={slideUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-4xl font-bold mt-2"
        >
          Projects
        </motion.h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top 2 Images */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {project.images.slice(0, 2).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="w-full h-[300px] relative"
                >
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Images + Details */}
            <div className="grid grid-cols-3 gap-6">
              {project.images.slice(2, 4).map((img, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative w-full h-[250px]"
                >
                  <Image
                    src={img}
                    alt={`Project Detail ${index + 3}`}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedImageIndex(index + 2)}
                  />
                </motion.div>
              ))}

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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

      {/* Mobile View */}
      <div className="md:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Images Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative w-full h-[100px]"
                >
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="text-sm text-gray-800 mt-2">
                <p>
                  <span className="font-bold">Area:</span> {project.area}
                </p>
                <p>
                  <span className="font-bold">Year:</span> {project.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <div className="absolute bottom-0 right-0 flex gap-4">
          <button onClick={handlePrev}>
            <FiChevronLeft size={40} />
          </button>
          <button onClick={handleNext}>
            <FiChevronRight size={40} />
          </button>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
            onClick={() => setSelectedImageIndex(null)}
          >
            <FiX size={30} />
          </button>

          {/* Left Button */}
          <button
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
            onClick={handlePrevImage}
          >
            <FiChevronLeft size={40} />
          </button>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={project.images[selectedImageIndex]}
              alt="Fullscreen Project Image"
              width={1200}
              height={800}
              className="max-w-[100%] max-h-[100%] object-contain"
            />
          </div>

          {/* Right Button */}
          <button
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20"
            onClick={handleNextImage}
          >
            <FiChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
