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

const CareerHeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-20 mb-16 mt-44">
      {/* Left Column */}
      <motion.div
        className="flex flex-col justify-between"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p className="uppercase tracking-widest text-sm mb-2 text-gray-600">Careers</p>
          <h1 className="text-4xl font-bold mb-4">Build with us</h1>
          <p className="text-gray-600 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
          </p>
        </div>
        <motion.div
          className="flex justify-end items-baseline text-lg"
          variants={slideUpVariant}
        >
          <span className="text-gray-600 mr-2">Mission</span>
          <span className="font-semibold text-4xl">2025</span>
        </motion.div>
      </motion.div>

      {/* Center Column */}
      <motion.div
        className="flex flex-col items-center md:px-4 lg:justify-end"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/office.jpeg"
          alt="Office"
          width={500}
          height={200}
          className="h-48 object-cover mb-6"
        />
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
        </p>
      </motion.div>

      {/* Right Column (Form) */}
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-2">New Employee Details</h2>
        <p className="text-gray-600 mb-6">Please fill out your information below.</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name*"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address*"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Contact No.*"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <input
            type="file"
            className="w-full border border-gray-300 px-4 py-2 text-gray-500"
          />
          <button
            type="submit"
            className="bg-black text-white border border-black hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full hover:bg-gray-800 transition uppercase"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default CareerHeroSection;
