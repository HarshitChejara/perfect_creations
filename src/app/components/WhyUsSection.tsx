'use client';

import Image from 'next/image';

const WhyUsSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-20 bg-white">
      {/* Left Text Block */}
      <div className="md:w-1/3 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-6">Why Us</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.
        </p>
      </div>

      {/* Center Image */}
      <div className="md:w-1/3 flex justify-center mb-10 md:mb-0">
        <Image
          src="/education.png" // Make sure this image exists in your /public folder
          alt="Office planning"
          width={400}
          height={300}
          className="rounded-md object-cover"
        />
      </div>

      {/* Right List */}
      <div className="md:w-1/3">
        <ul className="space-y-6 text-lg">
          {['Education', 'Experience', 'Learning', 'Community', 'Job Training'].map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-4 ${
                index === 0 ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <span className={`text-xl font-bold ${index === 0 ? 'text-black' : 'text-gray-300'}`}>
                {`0${index + 1}`}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
