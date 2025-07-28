// components/ProjectDetailSection.tsx
// import Image from "next/image";
import React from "react";

// type ProjectDetailSectionProps = {
//   slug: string;
// };
const ProjectDetailSection: React.FC = () => {
// const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({ slug }) => {
//   const roomImages = [
//     { label: "Bedroom", src: "/project1.png" },
//     { label: "Kitchen", src: "/project2.png" },
//     { label: "Living Room", src: "/project3.png" },
//     { label: "Bedroom", src: "/project4.png" },
//     { label: "Kitchen", src: "/project5.jpg" },
//     { label: "Living Room", src: "/project6.jpg" },
//     { label: "Bedroom", src: "/project1.png" },
//     { label: "Kitchen", src: "/project2.png" },
//     { label: "Living Room", src: "/project3.png" },
//   ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-screen-2xl mx-auto lg:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h4 className="text-xs uppercase text-gray-500 tracking-widest mb-1">
            Project Detail
          </h4>
          {/* <h1 className="text-4xl font-bold capitalize">Project: {slug.replace(/-/g, " ")}</h1> */}
        </div>
        <div className="md:col-span-1 text-sm text-gray-600 leading-relaxed">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="mt-4">
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="text-right">
          <button className="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100">
            Image ▼
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {roomImages.map((room, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg w-full h-[300px]">
            <Image
              src={room.src}
              alt={room.label}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
              {room.label}
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default ProjectDetailSection;
