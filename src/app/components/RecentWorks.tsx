'use client';
import { useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const items = [
  { id: 1, title: 'Printing Office', image: '/work1.png' },
  { id: 2, title: 'Printing Office', image: '/work2.jpeg' },
  { id: 3, title: 'Printing Office', image: '/work3.jpeg' },
  { id: 4, title: 'Printing Office', image: '/work4.jpeg' },
  { id: 5, title: 'Printing Office', image: '/work1.png' },
];

const RecentWorks = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Recent Works</h2>

      <div className="relative">
        {/* Carousel container */}
        <div className="flex space-x-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 320}px)` }}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`min-w-[300px] transition-all duration-300 rounded-lg relative group ${
                index === activeIndex
                  ? 'scale-105 shadow-xl z-10'
                  : 'opacity-40'
              }`}
            >
              {/* Card Image */}
              <div
                className={`aspect-[3/4] bg-cover bg-center rounded-lg overflow-hidden relative`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Text content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="uppercase text-sm tracking-[0.2em]">Catagory</p>
                  <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                  <div className="border-t border-white my-2 w-10"></div>
                  <div className="flex items-center text-sm">
                    <span>More Information</span>
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-4 flex gap-4 py-8">
          <button onClick={scrollLeft}>
            <FiChevronLeft size={40} />
          </button>
          <button onClick={scrollRight}>
            <FiChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
