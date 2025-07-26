import Contact from "app/components/Contact";
import ProjectDetailSection from "app/components/ProjectDetailSection";
import ServicesSection from "app/components/ServicesSection";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;

  return (
    <main>
      <ProjectDetailSection slug={slug} />
      <ServicesSection />
      <Contact />
    </main>
  );
}