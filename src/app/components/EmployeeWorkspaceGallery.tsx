// components/EmployeeWorkspaceGallery.tsx
import Image from "next/image";

const images = [
  { src: "/workspace1.jpeg", alt: "Employee Workspace 1" },
  { src: "/workspace2.jpeg", alt: "Employee Workspace 2" },
  { src: "/workspace3.jpeg", alt: "Employee Workspace 3" },
];

const EmployeeWorkspaceGallery = () => {
  return (
    <section className="py-16 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center">
              <p className="uppercase text-sm tracking-widest">SNS Business Hub</p>
              <h2 className="text-xl font-semibold">All Employee Workspace</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeWorkspaceGallery;
