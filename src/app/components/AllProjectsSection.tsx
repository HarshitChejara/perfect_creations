"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  "Furniture",
  "Remote Spaces",
  "Office Tech",
  "Floor Plans",
  "Organization",
  "Interior Design",
];

const projects = [
  {
    slug: "project-name1",
    title: "Project Name1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.1",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project1.png",
  },
  {
    slug: "project-name2",
    title: "Project Name2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.2",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project2.png",
  },
  {
    slug: "project-name3",
    title: "Project Name3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.3",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project3.png",
  },
  {
    slug: "project-name4",
    title: "Project Name4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.4",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project4.png",
  },
  {
    slug: "project-name5",
    title: "Project Name5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.5",
    category: "Remote Spaces",
    date: "4.5.21",
    image: "/project5.jpg",
  },
  {
    slug: "project-name6",
    title: "Project Name6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.6",
    category: "Remote Spaces",
    date: "4.5.21",
    image: "/project6.jpg",
  },
  {
    slug: "project-name7",
    title: "Project Name7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.7",
    category: "Office Tech",
    date: "4.5.21",
    image: "/project7.jpg",
  },
  {
    slug: "project-name8",
    title: "Project Name8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.8",
    category: "Furniture",
    date: "4.5.21",
    image: "/project8.jpeg",
  },
  {
    slug: "project-name9",
    title: "Project Name9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.9",
    category: "Furniture",
    date: "4.5.21",
    image: "/project9.jpeg",
  },
  {
    slug: "project-name10",
    title: "Project Name10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.10",
    category: "Furniture",
    date: "4.5.21",
    image: "/project10.jpeg",
  },
  {
    slug: "project-name11",
    title: "Project Name11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.11",
    category: "Furniture",
    date: "4.5.21",
    image: "/project11.jpeg",
  },
  {
    slug: "project-name12",
    title: "Project Name12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.12",
    category: "Furniture",
    date: "4.5.21",
    image: "/project12.jpeg",
  },
  {
    slug: "project-name13",
    title: "Project Name13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.13",
    category: "Furniture",
    date: "4.5.21",
    image: "/project13.jpeg",
  },
  {
    slug: "project-name14",
    title: "Project Name14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.14",
    category: "Furniture",
    date: "4.5.21",
    image: "/project14.jpeg",
  },
  {
    slug: "project-name15",
    title: "Project Name15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.15",
    category: "Interior Design",
    date: "4.5.21",
    image: "/project15.jpeg",
  },
  {
    slug: "project-name16",
    title: "Project Name16",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.16",
    category: "Organization",
    date: "4.5.21",
    image: "/project16.jpeg",
  },
];

const AllProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Furniture");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section className="px-4 md:px-20 py-16 mt-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <motion.aside
          className="md:w-1/4 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Projects
          </h4>
          <h2 className="text-3xl font-bold mb-6">Our all Projects</h2>
          <div>
            <h5 className="uppercase text-xs font-medium text-gray-500 mb-4">
              Popular Categories
            </h5>
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <motion.li
                  key={index}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleProjects(6);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer px-3 py-1 border border-gray-200 hover:bg-black hover:text-white ${
                    cat === selectedCategory
                      ? "bg-black text-white"
                      : "text-gray-700"
                  }`}
                >
                  {cat}
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
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <button
                        type="button"
                        className="opacity-0 group-hover:opacity-100 border text-white border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all duration-300"
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

      {/* Load More Button */}
      {visibleProjects < filteredProjects.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white border border-black hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full transition uppercase"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default AllProjectsSection;
