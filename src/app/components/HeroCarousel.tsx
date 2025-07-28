'use client';

const HeroCarousel = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('./hero-bg.jpeg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-xl">
          Interior design <br /> that matters.
        </h1>

        {/* Button */}
        <button className="mt-8 border border-white rounded-full px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap w-fit">
          Schedule a call
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
