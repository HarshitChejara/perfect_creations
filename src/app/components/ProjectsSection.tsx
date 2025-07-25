'use client';

import Image from 'next/image';

const ProjectsSection = () => {
  return (
    <section className="w-full px-4 md:px-20 py-16 bg-white">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500">Catalog</p>
        <h2 className="text-4xl font-bold mt-2">Projects</h2>
      </div>

      {/* Top 2 Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
        <div className="w-full h-[250px] md:h-[300px] relative">
          <Image
            src="/project1.png" // Make sure to place this image in /public
            alt="Project Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-[250px] md:h-[300px] relative">
          <Image
            src="/project2.png"
            alt="Project Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Right arrows + label */}
        <div className="hidden md:flex flex-col absolute right-0 top-0 h-full justify-center items-end pr-2">
          <div className="flex flex-col items-center text-sm text-gray-600">
            <p className="mb-2 rotate-90">next project</p>
            <div className="text-xs">01</div>
            <div className="text-xl font-bold">›</div>
          </div>
        </div>
      </div>

      {/* Project Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative w-full h-[250px]">
          <Image
            src="/project3.png"
            alt="Project Detail 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="relative w-full h-[250px]">
          <Image
            src="/project4.png"
            alt="Project Detail 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text.
            </p>
          </div>
          <div className="text-sm text-gray-800">
            <p className="mb-1">
              <span className="font-bold">Area:</span> Area of 66 m
            </p>
            <p>
              <span className="font-bold">Year:</span> Since 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
