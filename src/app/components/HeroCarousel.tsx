'use client';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ✅ Import useRouter

const images = [
  './hero-bg.jpeg',
  './hero-bg-2.jpg',
  './hero-bg-3.jpeg',
];

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center px-4 md:px-20 text-white">
        {/* Heading with Slide-Up */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          Interior design <br /> that matters.
        </motion.h1>

        {/* Button with Slide-Up */}
        <motion.button
          onClick={() => router.push('/contact')} // ✅ Navigate to contact page
          className="cursor-pointer mt-8 border border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap w-fit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ delay: 0.2 }}
        >
          Schedule a call
        </motion.button>
      </div>
    </section>
  );
};

export default HeroCarousel;
