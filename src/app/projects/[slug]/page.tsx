import type { Metadata } from "next";
import { projects, type ProjectItem } from "@/app/_components/portfolio-data";
import ProjectDetail from "@/components/ProjectDetail";

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateMetadata({ params }: any): Metadata {
  const project = findProject(params.slug);

  return {
    title: project ? `${project.title} | Project Detail` : "Project not found",
    description: project?.summary ?? "Detail project page.",
  };
}

export default function ProjectDetailPage({ params }: any) {
  const project = findProject(params.slug);

  if (!project) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[#d96d68]">Project Not Found</p>
        <h1 className="mt-4 text-4xl font-serif">Maaf, proyek tidak tersedia.</h1>
        <p className="mt-4 text-sm text-[#57506e]">
          Pastikan Anda membuka halaman detail proyek yang valid.
        </p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-[#e98579] px-6 py-3 text-sm font-bold text-white hover:bg-[#d96d68]">
          Kembali ke Beranda
        </a>
      </main>
    );
  }
  return <ProjectDetail project={project as ProjectItem} />;
}
