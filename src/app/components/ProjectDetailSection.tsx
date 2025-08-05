"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { projects } from "data/projectsData";

type ProjectDetailSectionProps = {
  slug: string;
};

const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({ slug }) => {
  const [viewType, setViewType] = useState<"images" | "videos">("images");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Find the project using slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center py-100">Project not found.</p>;
  }

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + project.images.length) % project.images.length
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
    }
  };

  return (
    <section className="px-4 md:px-20 py-20 mx-auto mt-32">
      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mb-16 mb-4">
        <div>
          <h4 className="text-xs uppercase text-gray-500 tracking-widest mb-1">
            Project Detail
          </h4>
          <h1 className="text-4xl font-bold capitalize">{project.title}</h1>
        </div>
        <div className="md:col-span-1 text-sm text-gray-600 leading-relaxed">
          <p>{project.description}</p>
        </div>
        <div className="relative text-right z-60">
          <div className="flex justify-end">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 w-32 flex justify-between"
            >
              <span>{viewType === "images" ? "Images" : "Videos"}</span>
              <span>▼</span>
            </button>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg">
              <button
                onClick={() => {
                  setViewType("images");
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Images
              </button>
              <button
                onClick={() => {
                  setViewType("videos");
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Videos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Images or Videos */}
      {viewType === "images" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full h-[300px] cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image src={image.src} alt={image.label} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
                {image.label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.videos.map((video, index) => (
            <div key={index} className="relative w-full h-[300px]">
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
                {video.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <button
            type="button"
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
            onClick={() => setSelectedImageIndex(null)}
          >
            <FiX size={30} />
          </button>

          <button
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
            onClick={handlePrevImage}
          >
            <FiChevronLeft size={40} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={project.images[selectedImageIndex].src}
              alt="Fullscreen Project Image"
              width={1200}
              height={800}
              className="max-w-[100%] max-h-[100%] object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20"
            onClick={handleNextImage}
          >
            <FiChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetailSection;
