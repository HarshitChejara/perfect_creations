'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
    images: ['/project2.png', '/project3.png', '/project1.png', '/project4.png'],
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description:
      'A countryside cottage designed for peaceful and minimal living.',
    area: '65 m²',
    year: '2023',
    images: ['/project3.png', '/project4.png', '/project1.png', '/project2.png'],
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const project = projectsData[currentIndex];

  return (
    <section className="w-full px-4 md:px-20 py-16 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500">Catalog</p>
        <h2 className="text-4xl font-bold mt-2">Projects</h2>
      </div>

      {/* Top 2 Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
        <div className="w-full h-[250px] md:h-[300px] relative">
          <Image src={project.images[0]} alt="Project Image 1" fill className="object-cover" />
        </div>
        <div className="w-full h-[250px] md:h-[300px] relative">
          <Image src={project.images[1]} alt="Project Image 2" fill className="object-cover" />
        </div>
      </div>

      {/* Project Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="relative w-full h-[250px]">
          <Image src={project.images[2]} alt="Project Detail 1" fill className="object-cover" />
        </div>
        <div className="relative w-full h-[250px]">
          <Image src={project.images[3]} alt="Project Detail 2" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-between">
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
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-16 right-0 flex gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <FiChevronLeft size={30} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <FiChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
