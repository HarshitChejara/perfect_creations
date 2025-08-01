'use client';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const items = [
  { id: 1, title: 'Printing Office', image: '/work1.png' },
  { id: 2, title: 'Printing Office', image: '/work2.jpeg' },
  { id: 3, title: 'Printing Office', image: '/work3.jpeg' },
  { id: 4, title: 'Printing Office', image: '/work4.jpeg' },
  { id: 5, title: 'Printing Office', image: '/work1.png' },
  { id: 6, title: 'Printing Office', image: '/work1.png' },
  { id: 7, title: 'Printing Office', image: '/work2.jpeg' },
  { id: 8, title: 'Printing Office', image: '/work3.jpeg' },
  { id: 9, title: 'Printing Office', image: '/work4.jpeg' },
  { id: 10, title: 'Printing Office', image: '/work1.png' },
];

const RecentWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const loopedItems = [...items, ...items]; // duplicate for infinite effect

  const scrollLeft = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  // Reset index seamlessly without jump
  useEffect(() => {
    if (activeIndex === loopedItems.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(items.length - 1);
      }, 500); // wait for transition
    }

    if (activeIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(items.length);
      }, 500);
    }
  }, [activeIndex, loopedItems.length]);

  return (
    <section className="py-24 px-4 md:px-20 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Recent Works</h2>

      <div className="relative">
        {/* Carousel container */}
        <div
          className={`flex space-x-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${activeIndex * 320}px)` }}
        >
          {loopedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`min-w-[300px] transition-all duration-300 relative group ${
                index % items.length === activeIndex % items.length
                  ? 'scale-105 shadow-xl z-10'
                  : 'opacity-40'
              }`}
            >
              {item.image && item.title ? (
                <div
                  className="aspect-[3/4] bg-cover bg-center overflow-hidden relative"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="uppercase text-sm tracking-[0.2em]">Category</p>
                    <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                    <div className="border-t border-white my-2 w-10"></div>
                    <div className="flex items-center text-sm">
                      <span>More Information</span>
                      <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center text-gray-500">
                  No Content
                </div>
              )}
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