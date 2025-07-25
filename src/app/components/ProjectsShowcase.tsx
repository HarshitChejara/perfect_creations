'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
    image: '/showcase_project1.png',
    client: 'Name Of Project Client',
    description: 'The interior of the apartments.',
  },
  {
    image: '/showcase_project2.png',
    client: 'Name Of Project Client',
    description: 'Modern open space design.',
  },
  {
    image: '/showcase_project3.png',
    client: 'Name Of Project Client',
    description: 'Cozy and minimal office setup.',
  },
];

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-white text-black">
      <p className="uppercase text-sm tracking-widest mb-2">Project Categories</p>
      <h2 className="text-4xl font-bold mb-12">What’s new?</h2>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left - Categories */}
        <div className="space-y-4">
          {categories.map((cat, index) => (
            <p
              key={index}
              className={`text-sm md:text-base ${
                index === 0 ? 'font-semibold text-black' : 'text-gray-400'
              }`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Middle - Project Image */}
        <div className="col-span-2 relative">
          <div className="grid grid-cols-2 gap-4">
            {[0, 1].map((offset) => {
              const item = projectImages[(currentIndex + offset) % projectImages.length];
              return (
                <div key={offset}>
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="mt-3 font-semibold">{item.client}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <div className="absolute bottom-0 right-0 flex gap-3 mt-4">
            <button onClick={prevSlide} className="p-2 border rounded-full">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-2 border rounded-full">
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* CTA Button */}
          <div className="absolute top-0 right-0">
            <button className="bg-black text-white px-5 py-2 text-sm rounded-full hover:opacity-90">
              LEARN ABOUT INSIDE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
