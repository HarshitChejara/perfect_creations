// import Contact from "app/components/Contact";
// import ProjectDetailSection from "app/components/ProjectDetailSection";
// import ServicesSection from "app/components/ServicesSection";

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default async function ProjectPage({ params }: PageProps) {
//   const { slug } = params;

//   return (
//     <main>
//       <ProjectDetailSection slug={slug} />
//       <ServicesSection />
//       <Contact />
//     </main>
//   );
// }
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ProjectPage = ({ params }: Props) => {
  return (
    <div>
      <h1>Project: {params.slug}</h1>
      {/* your content here */}
    </div>
  );
};

export default ProjectPage;