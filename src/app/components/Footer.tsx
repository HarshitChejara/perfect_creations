// components/Footer.tsx
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B14] text-white px-6 py-12 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-700 pt-12">
        {/* About Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Perfect Creation</h2>
          <h3 className="font-semibold text-white mb-2">About us</h3>
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
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Navigation</p>
          <div className="grid gap-2 text-sm">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Follow Us</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-xl" />
              <span>@perfect creation</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaFacebookF className="text-xl" />
              <span>@perfect creation</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedinIn className="text-xl" />
              <span>@perfect creation</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaYoutube className="text-xl" />
              <span>@perfect creation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-xs text-gray-500 text-center">
        © 2025 Perfect Creation. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;
