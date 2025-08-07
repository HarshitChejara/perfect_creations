'use client';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
// import { Variants } from 'framer-motion';
import Image from 'next/image';

// const slideUpVariant: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
//   },
// };

const Footer = () => {
  return (
    <footer className="bg-[#0B0B14] text-white px-4 py-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
        {/* About Section */}
        <div>
          <div className="relative w-52 h-20 mb-6">
            <Image src='/white_logo.png' alt="Logo" fill className="object-contain" />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Our Categories</p>
            <ul className="space-y-2 text-sm">
              <li>Furniture</li>
              <li>Remote Spaces</li>
              <li>Office Tech</li>
              <li>Floor Plans</li>
              <li>Organization</li>
              <li>Interior Design</li>
            </ul>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-5">Navigation</p>
          <div className="grid gap-5 text-sm cursor-pointer">
            {[
              { name: 'About', href: '/about' },
              { name: 'Projects', href: '/projects' },
              { name: 'Careers', href: '/careers' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <div key={item.name} className="group w-fit">
                <Link href={item.href} className="relative inline-block transition-colors duration-300">
                  {item.name}
                  <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-5">Follow Us</p>
          <ul className="grid gap-5 text-sm cursor-pointer">
            {[
              { icon: <FaInstagram className="text-xl" />, text: '@perfect creation' },
              { icon: <FaFacebookF className="text-xl" />, text: '@perfect creation' },
              { icon: <FaLinkedinIn className="text-xl" />, text: '@perfect creation' },
              { icon: <FaYoutube className="text-xl" />, text: '@perfect creation' },
            ].map((item, idx) => (
              <li key={idx} className="group flex flex-col">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="relative inline-block transition-colors duration-300">
                    {item.text}
                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-10 text-xs text-gray-500 text-center">
        © 2025 Perfect Creation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
