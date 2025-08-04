'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const ExploreProjectsSection = () => {
  const router = useRouter();

  return (
    <motion.section
      className="relative w-full px-6 md:px-20 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Background image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/office_space.jpeg"
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
          <button
              type="submit" onClick={() => router.push('/projects')}
              className="border border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap w-fit"
            >
              View All Projects
            </button>
        </div>
      </div>

      {/* Below items (Space Planning, etc) */}
      <div className="px-6 md:px-20">
        <motion.div
          className="bg-[#F4F6FB] py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-black uppercase tracking-wide text-sm font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>Space Planning</div>
          <div>Custom Furniture</div>
          <div>Furniture Layouts</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExploreProjectsSection;
