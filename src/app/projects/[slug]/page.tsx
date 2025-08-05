import ProjectDetailSection from "app/components/ProjectDetailSection";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <main>
      <ProjectDetailSection slug={slug} />
    </main>
  );
}