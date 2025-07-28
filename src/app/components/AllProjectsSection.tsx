import Link from "next/link";
import Image from "next/image";

const categories = [
  "Furniture",
  "Remote Spaces",
  "Office Tech",
  "Floor Plans",
  "Organization",
  "Interior Design",
];

const projects = [
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project1.png",
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project2.png",
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project3.png",
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project4.png",
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project5.jpg",
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Floor Plans",
    date: "4.5.21",
    image: "/project6.jpg",
  },
];

const AllProjectsSection = () => {
  return (
    <section className="px-4 md:px-16 py-16 mt-24">
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <aside className="md:w-1/4 mb-10 md:mb-0">
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Projects</h4>
          <h2 className="text-3xl font-bold mb-6">Our all Projects</h2>
          <div>
            <h5 className="uppercase text-xs font-medium text-gray-500 mb-4">Popular Categories</h5>
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-3 py-1 border border-gray-200 rounded hover:bg-black hover:text-white ${
                    cat === "Furniture" ? "bg-black text-white" : "text-gray-700"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Projects Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8 px-2">
          {projects.map((project, index) => (
            <Link href={`/projects/project-${index + 1}`} key={index}>
              <div className="cursor-pointer">
                <div className="relative w-full h-[250px] overflow-hidden rounded">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <button className="border border-white text-white px-4 py-1 text-sm rounded-full">
                        View Project
                      </button>
                    </div>
                  )}
                </div>
                <h4 className="mt-4 font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-500">{project.description}</p>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span className="uppercase">{project.category}</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
          Load More
        </button>
      </div>
    </section>
  );
};

export default AllProjectsSection;
