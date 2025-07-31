'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import VideoModal from './VideoModal';

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Animation Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // ✅ stagger effect
      },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' as const } 
    },
  };

  return (
    <section className="w-full bg-white px-4 md:px-20 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <motion.div className="w-full h-[400px] relative" variants={slideUp}>
          <Image
            src="/profile.png"
            alt="Sheetal Sharma"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          className="text-center md:text-left flex flex-col justify-center"
          variants={slideUp}
        >
          <h2 className="text-3xl font-bold mb-4">
            Sheetal<br />Sharma
          </h2>
          <p className="uppercase text-xs tracking-widest">Interior Designer, Surat</p>
        </motion.div>

        {/* Right Description + Video */}
        <motion.div
          className={`flex flex-col justify-between ${isHomePage ? 'h-full' : ''}`}
          variants={slideUp}
        >
          <div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {isHomePage && (
            <motion.div
              className="mt-6 relative w-[200px] h-[120px] self-end cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              variants={slideUp}
            >
              <Image
                src="/video-thumb.png"
                alt="Video Process"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 rounded-full p-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </button>
              </div>
              <p className="absolute bottom-2 left-11 -translate-x-1 text-xs text-white tracking-widest">
                VIDEO PROCESS
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  );
};

export default ProfileSection;