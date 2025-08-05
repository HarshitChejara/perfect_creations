import ProjectDetailSection from "app/components/ProjectDetailSection";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;

  return (
    <main>
      <ProjectDetailSection slug={slug} />
    </main>
  );
}