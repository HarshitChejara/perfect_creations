import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

// data/projectsData.ts
export type Project = {
  image: string | StaticImport;
  category: ReactNode;
  date: ReactNode;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: { label: string; src: string }[];
  videos: { label: string; src: string }[];
};

export type Category = {
  name: string;
  projects: Project[];
};

export const projectCategories: Category[] = [
  {
    name: "Residential",
    projects: [
      {
        slug: "residential-project-1",
        title: "Luxury Villa",
        description: "A luxury villa project with modern interior design.",
        thumbnail: "/project/project1.png",
        images: [
          { label: "Living Room", src: "/project/project1.png" },
          { label: "Bedroom", src: "/project/project2.png" },
        ],
        videos: [{ label: "Walkthrough", src: "/videos/residential1.mp4" }],
        image: "",
        category: "office",
        date: "02.03.2025"
      },
      {
        slug: "residential-project-2",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project2.png",
        images: [
          { label: "Kitchen", src: "/project/project2.png" },
          { label: "Balcony", src: "/project/project3.png" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-3",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project3.png",
        images: [
          { label: "Kitchen", src: "/project/project3.png" },
          { label: "Balcony", src: "/project/project4.png" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-4",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project8.jpeg",
        images: [
          { label: "Kitchen", src: "/project/project8.jpeg" },
          { label: "Balcony", src: "/project/project9.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-5",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project9.jpeg",
        images: [
          { label: "Kitchen", src: "/project/project9.jpeg" },
          { label: "Balcony", src: "/project/project10.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-6",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project10.jpeg",
        images: [
          { label: "Kitchen", src: "/project/project10.jpeg" },
          { label: "Balcony", src: "/project/project11.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-7",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project11.jpeg",
        images: [
          { label: "Kitchen", src: "/project/project11.jpeg" },
          { label: "Balcony", src: "/project/project12.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "residential-project-8",
        title: "Modern Apartment",
        description: "A stylish apartment with open-concept living.",
        thumbnail: "/project/project12.jpeg",
        images: [
          { label: "Kitchen", src: "/project/project12.jpeg" },
          { label: "Balcony", src: "/project/project13.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
    ],
  },
  {
    name: "Commercial",
    projects: [
      {
        slug: "commercial-project-1",
        title: "Office Tower",
        description: "A commercial office tower designed for maximum efficiency.",
        thumbnail: "/project/project4.png",
        images: [
          { label: "Lobby", src: "/project/project4.png" },
          { label: "Conference Room", src: "/project/project5.jpg" },
        ],
        videos: [{ label: "Tour", src: "/videos/commercial1.mp4" }],
        image: "",
        category: undefined,
        date: undefined
      },
      {
        slug: "commercial-project-2",
        title: "Shopping Mall",
        description: "A large shopping center with multiple retail spaces.",
        thumbnail: "/project/project5.jpg",
        images: [
          { label: "Atrium", src: "/project/project5.jpg" },
          { label: "Food Court", src: "/project/project6.jpg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
    ],
  },
  {
    name: "Hospitality",
    projects: [
      {
        slug: "hospitality-project-1",
        title: "Luxury Hotel",
        description: "A five-star hotel project with premium amenities.",
        thumbnail: "/project/project6.jpg",
        images: [
          { label: "Reception", src: "/project/project6.jpg" },
          { label: "Suite", src: "/project/project7.jpg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
    ],
  },
  {
    name: "Office Tech",
    projects: [
      {
        slug: "office-tech-project-1",
        title: "Smart Office",
        description: "An innovative office with integrated technology.",
        thumbnail: "/project/project7.jpg",
        images: [
          { label: "Workspace", src: "/project/project7.jpg" },
          { label: "Breakout Area", src: "/project/project8.jpeg" },
        ],
        videos: [],
        image: "",
        category: undefined,
        date: undefined
      },
    ],
  },
];
