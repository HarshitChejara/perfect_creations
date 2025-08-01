"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/contact-bg.png')", // Replace with your image path
      }}
    >
      <div className="relative z-10 md:px-20 px-5 py-16 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full text-white space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="tracking-widest text-sm uppercase"
          >
            Get in Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            If you have any question about our process or company? Let us know how we can help you.
          </motion.p>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Your Full Name*"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email Address*"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 border border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap w-fit"
            >
              Submit
            </button>
          </motion.form>
        </div>

        {/* Right Side Empty for spacing or future image usage */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
};

export default Contact;
