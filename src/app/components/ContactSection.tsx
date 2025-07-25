'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="w-full px-6 md:px-16 mb-12 lg:mt-24">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Contact Form */}
        <div className="lg:w-1/3">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-4">Contact us</h2>
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
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Center: Contact Info */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl mt-1 text-black" />
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-gray-600">123, lorem ipsum, state</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="text-xl mt-1 text-black" />
            <div>
              <p className="font-semibold">Working Hours:</p>
              <p className="text-gray-600">10 am - 07 pm</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl mt-1 text-black" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl mt-1 text-black" />
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-gray-600">contact@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="lg:w-1/3">
          {/* <iframe
            src="https://maps.app.goo.gl/gB2aGVGa3LMX5iFc6"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[300px] border"
            loading="lazy"
            allowFullScreen
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d29767.984337866914!2d72.7749825!3d21.1524762!3m2!1i1024!2i768!4f13.1!2m1!1sperfect%20creation%20SNS%20business%20hub%20surat!5e0!3m2!1sen!2sin!4v1753181496797!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
