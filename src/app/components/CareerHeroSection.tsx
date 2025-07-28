// components/CareerHeroSection.tsx
import Image from "next/image";

const CareerHeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-16 mb-16 mt-44">
      {/* Left Column */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="uppercase tracking-widest text-sm mb-2 text-gray-600">Careers</p>
          <h1 className="text-4xl font-bold mb-4">Build with us</h1>
          <p className="text-gray-600 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
          </p>
        </div>
        <div className="mt-12 text-lg">
          <span className="text-gray-600 mr-2">Mission</span>
          <span className="font-bold text-2xl">2025</span>
        </div>
      </div>

      {/* Center Column */}
      <div className="flex flex-col items-center">
        <Image
          src="/office.jpeg" // ✅ Replace with actual image in /public
          alt="Office"
          width={500}
          height={300}
          className="rounded-md mb-6"
        />
        <p className="text-gray-600 text-center max-w-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
        </p>
      </div>

      {/* Right Column (Form) */}
      <div>
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
            className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerHeroSection;
