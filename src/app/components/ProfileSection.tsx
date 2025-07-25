'use client';

import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-white px-4 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="w-full h-[400px] relative">
          <Image
            src="/profile.png" // Replace with your actual image path
            alt="Sheetal Sharma"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Sheetal<br />Sharma</h2>
          <p className="uppercase text-xs tracking-widest">Interior Designer, Surat</p>
        </div>

        {/* Right Description + Video Thumbnail */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text
            </p>
          </div>

          {/* Video Thumbnail */}
          <div
            className="mt-6 relative w-[200px] h-[120px] self-end cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/video-thumb.png" // Replace with your actual video thumbnail
              alt="Video Process"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-2">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </button>
            </div>
            <p className="absolute bottom-2 left-2 text-xs text-white tracking-widest">VIDEO PROCESS</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
      />

    </section>
  );
};

export default ProfileSection;
