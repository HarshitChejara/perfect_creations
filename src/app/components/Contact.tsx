"use client";
import React from "react";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/contact-bg.png')", // Replace with your image path
      }}
    >
      {/* <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div> */}

      <div className="relative z-10 px-20 py-16 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-white space-y-6">
          <p className="tracking-widest text-sm uppercase">Get in Touch</p>
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg">
            If you have any question about our process or company? Let us know how we can help you.
          </p>

          <form className="space-y-4">
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
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Empty for spacing or future image usage */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
};

export default Contact;
