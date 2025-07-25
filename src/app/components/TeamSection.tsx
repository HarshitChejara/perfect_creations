'use client';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Name of member',
    title: 'CEO',
    image: '/team1.png',
  },
  {
    name: 'Name of member',
    title: 'CEO',
    image: '/team2.png',
  },
  {
    name: 'Name of member',
    title: 'CEO',
    image: '/team3.png',
  },
];

const TeamSection = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-black">
      <p className="uppercase text-sm tracking-widest mb-2">Our Team</p>
      <h2 className="text-4xl font-bold mb-12">Behind the design</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative overflow-hidden group">
            <div className="relative w-full h-[400px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 text-white text-sm font-medium">
                {member.name}
              </div>
              <div className="absolute top-4 right-4 text-white text-xs font-light">
                {member.title}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black text-sm hover:bg-gray-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black text-sm hover:bg-gray-200"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black text-sm hover:bg-gray-200"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
