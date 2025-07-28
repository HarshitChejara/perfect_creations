'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    image: '/testimonial1.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat venenatis tempor, turpis dolor. Aliquam faucibus velit, volutpat vulputate risus. Urna enim donec sed fringilla blandit arcu mi quam semper nunc.',
    clientImage: '/client-avatar.png',
    clientName: 'Name Of Project / Client',
    clientTitle: 'CEO, Unity Real Estate',
  },{
    image: '/testimonial1.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat venenatis tempor, turpis dolor. Aliquam faucibus velit, volutpat vulputate risus. Urna enim donec sed fringilla blandit arcu mi quam semper nunc.',
    clientImage: '/client-avatar.png',
    clientName: 'Name Of Project / Client',
    clientTitle: 'CEO, Unity Real Estate',
  },{
    image: '/testimonial1.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat venenatis tempor, turpis dolor. Aliquam faucibus velit, volutpat vulputate risus. Urna enim donec sed fringilla blandit arcu mi quam semper nunc.',
    clientImage: '/client-avatar.png',
    clientName: 'Name Of Project / Client',
    clientTitle: 'CEO, Unity Real Estate',
  },
  // Add more testimonials here if needed
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount =
        direction === 'left'
          ? -sliderRef.current.offsetWidth
          : sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="relative px-4 md:px-20">
        {/* Scrollable container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth gap-16 no-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center min-w-full"
            >
              {/* Left Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={testimonial.image}
                  alt="Client Room"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2 md:pl-16 mt-10 md:mt-0">
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                  What Clients Says
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Testimonials
                </h2>
                <p className="text-gray-700 text-lg italic relative pl-10 mb-8 leading-relaxed">
                  <span className="absolute left-0 top-0 text-4xl text-gray-300 leading-none">
                    “
                  </span>
                  {testimonial.quote}
                  <span className="absolute right-0 bottom-0 text-4xl text-gray-300 leading-none">
                    ”
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.clientImage}
                    alt="Client"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.clientTitle}
                    </p>
                  </div>
                </div>
                <div className="absolute right-4 flex gap-4 py-8 px-4 md:px-20">
                  <button onClick={() => handleScroll('left')}>
                    <FiChevronLeft size={40} />
                  </button>
                  <button onClick={() => handleScroll('right')}>
                    <FiChevronRight size={40} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
