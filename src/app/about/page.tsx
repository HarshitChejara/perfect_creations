'use client';

import ProjectsShowcase from 'app/components/ProjectsShowcase';
import TeamSection from 'app/components/TeamSection';
import Image from 'next/image';

const About = () => {
  return (
    <><div className="min-h-screen mt-44 px-6 md:px-16 bg-white text-black">
      {/* Section Top */}
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="tracking-widest text-sm mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Interior design <br />
            that matters.
          </h1>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-semibold">2D Designr</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3D Designr</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text.
              </p>
            </div>
          </div>
        </div>

        {/* Video and Text Section */}
        <div className="space-y-6">
          <div className="relative w-full h-48 md:h-64 overflow-hidden">
            <Image
              src="/video-thumb.png"
              alt="Video Process"
              fill
              className="object-cover brightness-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <button className="bg-white bg-opacity-20 p-3 rounded-full border border-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-xs mt-2 tracking-widest">VIDEO PROCESS</p>
            </div>
          </div>

          <div className="bg-[#f9f9f9] p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Lorem ipsum dummy text</h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about_image.png"
              alt="Office Design"
              fill
              className="object-cover" />
          </div>
        </div>
      </div>
    </div>
    <TeamSection />
    <ProjectsShowcase />
    </>
  );
};

export default About;
