'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const items = [
  { id: 1, title: 'Printing Office', image: '/work1.png' },
  { id: 2, title: 'Printing Office', image: '/work2.jpeg' },
  { id: 3, title: 'Printing Office', image: '/work3.jpeg' },
  { id: 4, title: 'Printing Office', image: '/work4.jpeg' },
  { id: 5, title: 'Printing Office', image: '/work1.png' },
];

const RecentWorks = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(items.length); // start in middle
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemWidth = 320;

  const loopedItems = [...items, ...items, ...items];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Loop reset
  useEffect(() => {
    if (currentIndex >= items.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length);
      }, 300);
      return () => clearTimeout(timeout);
    }
    if (currentIndex < items.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length * 2 - 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Fade-in on scroll with fixed cleanup warning
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current; // capture ref to avoid cleanup warning

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`md:py-24 py-16 px-4 md:px-20 bg-white overflow-hidden transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Recent Works</h2>

      <div className="relative">
        <div
          className="flex space-x-6"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            transition: isTransitioning ? 'transform 0.3s ease' : 'none',
          }}
        >
          {loopedItems.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={`${item.id}-${index}`}
                className={`min-w-[300px] transition-all duration-300 relative group`}
                style={{
                  transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
              >
                {item.image && item.title ? (
                  <div
                    className="aspect-[3/4] bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  >
                    {!isActive && <div className="absolute inset-0 bg-white/50 pointer-events-none"></div>}

                    {isActive && (
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="uppercase text-sm tracking-[0.2em]">Category</p>
                        <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                        <div className="border-t border-white my-2 w-10"></div>
                        <div className="flex items-center text-sm">
                          {/* <Link href={`/projects/${item.id}`} className="flex items-center"> */}
                          <Link href={`/projects`} className="flex items-center">
                          <span>More Information</span>
                          <FiArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center text-gray-500">
                    No Content
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-4 flex gap-4 py-8">
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

export default RecentWorks;
