'use client';

import { useState } from 'react';
import ProfileSection from 'app/components/ProfileSection';
import ProjectsShowcase from 'app/components/ProjectsShowcase';
import TeamSection from 'app/components/TeamSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VideoModal from 'app/components/VideoModal';

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const, delay: i * 0.2 },
  }),
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-44 mb-24 px-4 md:px-16 bg-white text-black">
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* LEFT COLUMN */}
          <div className="relative w-full h-full md:min-h-[400px]">
            {/* Titles - Top Left */}
            <div className="md:absolute md:top-0 md:left-0 p-4">
              <motion.p
                className="tracking-widest text-sm mb-2 md:mb-4"
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
              >
                ABOUT US
              </motion.p>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-8"
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
              >
                Interior design <br /> that matters.
              </motion.h1>
            </div>

            {/* 2D Designer Block - Bottom Left */}
            <motion.div
              className="md:absolute md:bottom-0 md:left-0 w-full md:w-2/3 p-4 mt-4 md:mt-0"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">2D Designer</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text.
              </p>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="relative w-full h-full md:min-h-[400px] flex flex-col md:block">
            {/* Video Block - Top Right */}
            <motion.div
              className="relative md:absolute md:top-0 md:right-0 w-full md:w-[200px] h-48 md:h-[200px] cursor-pointer mb-6 md:mb-0"
              onClick={() => setIsModalOpen(true)}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              <Image
                src="/video-thumb.png"
                alt="Video Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 rounded-full p-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </button>
              </div>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-white tracking-widest whitespace-nowrap uppercase">
                Video Process
              </p>
            </motion.div>

            {/* 3D Designer Block - Bottom Left */}
            <motion.div
              className="md:absolute md:bottom-0 md:left-0 w-full md:w-2/3 p-4"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">3D Designer</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Description */}
            <motion.div
              className="bg-[#f9f9f9] p-6 mb-6 md:mb-0"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-semibold">Lorem ipsum dummy text</h2>
              <p className="text-sm text-gray-600 mt-2 md:mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </motion.div>

            {/* Image with Overlay Text */}
            <motion.div
              className="relative w-full h-48 md:h-80 overflow-hidden"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              custom={6}
              viewport={{ once: true }}
            >
              <Image
                src="/about_image.png"
                alt="Office Design"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      {/* Other Sections */}
      <ProfileSection />
      <TeamSection />
      <ProjectsShowcase />
    </>
  );
};

export default About;
