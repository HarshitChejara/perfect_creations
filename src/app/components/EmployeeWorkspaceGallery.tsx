"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const images = [
  { src: "/workspace1.jpeg", alt: "Employee Workspace 1", title: "Meeting Workspace" },
  { src: "/workspace2.jpeg", alt: "Employee Workspace 2", title: "Employee Workspace" },
  { src: "/workspace3.jpeg", alt: "Employee Workspace 3", title: "Waiting Workspace" },
];

const EmployeeWorkspaceGallery = () => {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[400px] overflow-hidden group"
            variants={slideUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />

            {/* Overlay that slides up on hover */}
            <div className="absolute inset-0 bg-black/30 transition-transform duration-500 ease-out group-hover:-translate-y-full" />

            {/* Text fixed at the top */}
            <div className="absolute top-0 text-center w-full text-white p-10">
              <p className="uppercase text-sm tracking-widest">SNS Business Hub</p>
              <h2 className="text-lg md:text-xl font-semibold">{image.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeWorkspaceGallery;
