// app/projects/[slug]/page.tsx
import Contact from "app/components/Contact";
import ProjectDetailSection from "app/components/ProjectDetailSection";
import ServicesSection from "app/components/ServicesSection";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main>
      <ProjectDetailSection slug={slug} />
      <ServicesSection />
      <Contact/>
    </main>
  );
}
