// components/ExploreProjectsSection.tsx
import Image from 'next/image';

const ExploreProjectsSection = () => {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/office_space.jpeg" // ✅ Replace with your actual image path
          alt="Explore Projects"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 text-white z-10">
          <p className="uppercase tracking-widest text-sm mb-2">
            Explore our work
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            See what we can do <span className="text-primary">together.</span>
          </h2>
          <button className="mt-2 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            View All Projects
          </button>
        </div>
      </div>

      {/* Below items (Space Planning, etc) */}
      <div className="bg-[#F4F6FB] py-6 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-black uppercase tracking-wide text-sm font-medium">
        <div>Space Planning</div>
        <div>Custom Furniture</div>
        <div>Furniture Layouts</div>
      </div>
    </section>
  );
};

export default ExploreProjectsSection;
