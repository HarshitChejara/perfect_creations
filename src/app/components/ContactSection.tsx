'use client';

import { motion, Variants } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Fixed slide-up variant
const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
  },
};

const ContactSection = () => {
  return (
    <section className="w-full px-4 md:px-20 md:mb-16 md:mt-24 mt-20">
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Left: Contact Form */}
        <motion.div
          className="lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpVariant}
        >
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Contact us</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            If you have any question about our process or company? Let us know how we can help you.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name*"
              className="w-full border px-4 py-3 outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Your Email Address*"
              className="w-full border px-4 py-3 outline-none focus:border-black"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border px-4 py-3 outline-none focus:border-black"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer bg-black text-white border border-black hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full hover:bg-gray-800 transition uppercase"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Info and Map */}
        <motion.div
          className="lg:w-2/3 flex flex-col lg:flex-row gap-8 h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpVariant}
        >
          {/* Contact Info */}
          <div className="w-full h-full lg:w-1/3 space-y-5 md:px-4 mb-3 flex flex-col justify-between">
            <motion.div className="flex items-start gap-3" variants={slideUpVariant}>
              <div className="w-6 h-6 flex items-center justify-center">
                <FaMapMarkerAlt className="text-black text-lg" />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">
                  711, SNS Business Park, Udhna Magdalla Road, University Road, Vesu, Surat, Gujarat 395007
                </p>
              </div>
            </motion.div>
            <motion.div className="border-t border-gray-300" variants={slideUpVariant} />

            <motion.div className="flex items-start gap-3" variants={slideUpVariant}>
              <div className="w-6 h-6 flex items-center justify-center">
                <FaClock className="text-black text-lg" />
              </div>
              <div>
                <p className="font-semibold">Working Hours:</p>
                <p className="text-gray-600">10 am - 07 pm</p>
              </div>
            </motion.div>
            <motion.div className="border-t border-gray-300" variants={slideUpVariant} />

            <motion.div className="flex items-start gap-3" variants={slideUpVariant}>
              <div className="w-6 h-6 flex items-center justify-center">
                <FaPhoneAlt className="text-black text-lg" />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-600">+91 9712973274</p>
              </div>
            </motion.div>
            <motion.div className="border-t border-gray-300" variants={slideUpVariant} />

            <motion.div className="flex items-start gap-3" variants={slideUpVariant}>
              <div className="w-6 h-6 flex items-center justify-center">
                <FaEnvelope className="text-black text-lg" />
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">contact@gmail.com</p>
              </div>
            </motion.div>
          </div>


          {/* Map */}
          <motion.div className="w-full h-full lg:w-2/3" variants={slideUpVariant} >
            <div className="relative w-full h-full md:h-[390] aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.4982978792436!2d72.77502593558214!3d21.15253376410681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d16a742bedd%3A0xbf8c9a2f812cbd4!2sSheetal%27s%20Perfect%20Creations!5e0!3m2!1sen!2sin!4v1754293226767!5m2!1sen!2sin"
                className="absolute top-0 bottom-0 left-0 w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
