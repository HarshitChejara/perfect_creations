"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectCategories } from "data/projectsData";

const AllProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(projectCategories[0]?.name || "");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const currentCategory = projectCategories.find(
    (cat) => cat.name === selectedCategory
  );
  const filteredProjects = currentCategory?.projects || [];

  return (
    <section className="px-4 md:px-20 py-4 md:mt-44 mt-40 md:mb-0 mb-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <motion.aside
          className="md:w-1/4 md:mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Projects
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Our Projects</h2>
          <div>
            <h5 className="uppercase text-sm font-medium text-gray-500 mb-4">
              Categories
            </h5>
            <ul className="space-y-2">
              {projectCategories.map((cat, index) => (
                <motion.li
                  key={index}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setVisibleProjects(6);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer px-3 py-2 border text-md ${
                    selectedCategory === cat.name
                      ? "bg-black text-white"
                      : "border-gray-200 text-gray-600 hover:border-black"
                  }`}
                >
                  {cat.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.aside>

        {/* Projects Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="cursor-pointer">
                  <div className="relative w-full h-[250px] overflow-hidden group">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <button
                        type="button"
                        className="cursor-pointer opacity-0 group-hover:opacity-100 border text-white border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all duration-300"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                  <h4 className="mt-4 font-semibold">{project.title}</h4>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span className="uppercase">{project.category}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
       {filteredProjects.length > visibleProjects && (
        <div className="flex justify-center py-12">
          <button
            onClick={handleLoadMore}
            className="cursor-pointer bg-black text-white border border-black hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full transition uppercase"
          >
            Load More
          </button>
          </div>
        )}
    </section>
  );
};

export default AllProjectsSection;
