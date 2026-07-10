import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/app/_components/portfolio-data";

const categoryMeta: Record<string, { title: string; description: string }> = {
  web: {
    title: "Web Application",
    description: "Frontend-focused experience with responsive UI and modern web patterns.",
  },
  branding: {
    title: "Branding & Identity",
    description: "Visual design system, logo, and brand asset management.",
  },
  procurement: {
    title: "Procurement System",
    description: "Enterprise procurement workflow with RBAC, audit trail, and budget control.",
  },
  "3d": {
    title: "3D Asset Project",
    description: "3D modeling or visualization assets with file previews and downloads.",
  },
  logo: {
    title: "Logo Project",
    description: "Logo system and brand asset library presented as reusable designs.",
  },
  system: {
    title: "System Design",
    description: "Architecture and engineering of a data-driven application.",
  },
  other: {
    title: "Project",
    description: "A custom project with tailored details and asset support.",
  },
};

export default function ProjectDetail({ project }: { project: ProjectItem }) {
  const imageAssets = project.assets?.filter((a) => a.kind === "image") ?? [];
  const modelAssets = project.assets?.filter((a) => a.kind === "model") ?? [];
  const logoAssets = project.assets?.filter((a) => a.kind === "logo") ?? [];
  const fileAssets = project.assets?.filter((a) => a.kind === "file") ?? [];
  const category = project.category ?? "other";
  const meta = categoryMeta[category] ?? categoryMeta.other;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl bg-white p-8 shadow-[0_30px_80px_rgba(37,32,71,0.08)]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-6">
            <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${project.theme}`}>
              <span className="font-serif text-4xl text-white">{project.mark}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d96d68]">{project.type}</p>
              <h1 className="mt-4 text-4xl font-serif leading-tight text-[#1d1d31]">{project.title}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#57506e]">{project.summary ?? project.subtitle ?? project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#f5e6e3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b45f57]">{meta.title}</span>
                <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4b56a9]">{category}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-[#f8f0ea] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#252047]/70">Client</p>
              <p className="mt-3 text-sm font-semibold text-[#252047]">{project.client ?? "—"}</p>
            </div>
            <div className="rounded-3xl bg-[#f8f0ea] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#252047]/70">Duration</p>
              <p className="mt-3 text-sm font-semibold text-[#252047]">{project.duration ?? "—"}</p>
            </div>
            <div className="rounded-3xl bg-[#f8f0ea] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#252047]/70">Year</p>
              <p className="mt-3 text-sm font-semibold text-[#252047]">{project.year ?? "—"}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {project.overview ? (
                <div className="rounded-3xl bg-[#f8f0ea] p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#252047]/70">Overview</h2>
                  {project.overview.problem ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Masalah yang diselesaikan:</span> {project.overview.problem}</p>
                  ) : null}
                  {project.overview.goal ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Tujuan sistem:</span> {project.overview.goal}</p>
                  ) : null}
                </div>
              ) : null}

              {project.contribution ? (
                <div className="rounded-3xl bg-[#f8f0ea] p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#252047]/70">My Contribution</h2>
                  {project.contribution.frontend ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Frontend:</span> {project.contribution.frontend}</p>
                  ) : null}
                  {project.contribution.backend ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Backend:</span> {project.contribution.backend}</p>
                  ) : null}
                  {project.contribution.database ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Database:</span> {project.contribution.database}</p>
                  ) : null}
                  {project.contribution.architecture ? (
                    <p className="mt-4 text-sm leading-7 text-[#57506e]"><span className="font-semibold">Architecture:</span> {project.contribution.architecture}</p>
                  ) : null}
                </div>
              ) : null}
            </div>

            {project.workflowDiagram ? (
              <div className="rounded-3xl bg-[#f8f0ea] p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#252047]/70">System Workflow</h2>
                <div className="mt-5 overflow-hidden rounded-3xl bg-white">
                  <Image src={project.workflowDiagram.src} alt={project.workflowDiagram.alt ?? "Workflow diagram"} width={1200} height={700} className="h-full w-full object-cover" />
                </div>
                {project.workflowDiagram.caption ? <p className="mt-4 text-sm text-[#57506e]">{project.workflowDiagram.caption}</p> : null}
              </div>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-3xl bg-[#f8f0ea] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#252047]/70">Key Highlights</p>
                <ul className="mt-4 space-y-3 text-sm text-[#57506e]">
                  {(project.features ?? project.keyPoints ?? []).map((value) => (
                    <li key={value} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#d96d68]" />
                      {value}
                    </li>
                  ))}
                  {!project.features && !project.keyPoints ? (
                    <li className="text-sm text-[#8a7f96]">Highlights belum tersedia.</li>
                  ) : null}
                </ul>
              </div>

              <div className="rounded-3xl bg-[#f8f0ea] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#252047]/70">Tools & Technology</p>
                <div className="mt-4 space-y-4 text-sm text-[#57506e]">
                  {project.tools?.length ? (
                    <div>
                      <p className="font-semibold text-[#252047]">Tools</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="rounded-full bg-white/70 px-3 py-1 text-xs text-[#5f4f5f]">{tool}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {project.stack?.frontend ? (
                    <div>
                      <p className="font-semibold text-[#252047]">Frontend</p>
                      <p>{project.stack.frontend.join(", ")}</p>
                    </div>
                  ) : null}
                  {project.stack?.backend ? (
                    <div>
                      <p className="font-semibold text-[#252047]">Backend</p>
                      <p>{project.stack.backend.join(", ")}</p>
                    </div>
                  ) : null}
                  {project.stack?.database ? (
                    <div>
                      <p className="font-semibold text-[#252047]">Database</p>
                      <p>{project.stack.database.join(", ")}</p>
                    </div>
                  ) : null}
                  {project.stack?.deployment ? (
                    <div>
                      <p className="font-semibold text-[#252047]">Deployment</p>
                      <p>{project.stack.deployment.join(", ")}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {project.gallery?.length ? (
              <div className="rounded-3xl bg-[#f8f0ea] p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#252047]/70">Gallery</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((item) => (
                    <div key={item.src} className="overflow-hidden rounded-3xl bg-white">
                      <Image src={item.src} alt={item.alt ?? item.caption ?? project.title} width={800} height={600} className="h-full w-full object-cover" />
                      {item.caption ? <p className="p-4 text-sm text-[#57506e]">{item.caption}</p> : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.challenges ? (
              <div className="rounded-3xl bg-[#f8f0ea] p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#252047]/70">Challenges & Solutions</h2>
                {project.challenges.problem ? (
                  <div className="mt-4">
                    <p className="font-semibold text-[#252047]">Problem</p>
                    <p className="mt-2 text-sm leading-7 text-[#57506e]">{project.challenges.problem}</p>
                  </div>
                ) : null}
                {project.challenges.solution ? (
                  <div className="mt-4">
                    <p className="font-semibold text-[#252047]">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-[#57506e]">{project.challenges.solution}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <aside className="flex flex-col gap-6 rounded-3xl bg-[#252047] p-8 text-white shadow-[0_30px_80px_rgba(37,32,71,0.18)]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d96d68]">Need help with your next project?</p>
            <h2 className="mt-4 text-3xl font-serif">Let&apos;s work together.</h2>
          </div>

          <div className="grid gap-4 rounded-3xl bg-white/5 p-6 text-sm">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#d96d68]">Project scope</p>
            <p className="text-[#f4e3d8]">{project.description ?? project.summary ?? "A project designed for enterprise-level workflow and brand impact."}</p>
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center justify-center rounded-full bg-[#e98579] px-5 py-2 text-sm font-semibold text-white hover:bg-[#d96d68]">
                Open Demo
              </a>
            ) : null}
          </div>

          <div className="rounded-2xl bg-white/5 p-4 text-sm">
            <p className="text-xs uppercase tracking-[0.12em] text-[#f4e3d8]">Meta</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags?.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-xs text-[#f4e3d8]">
              {project.archived ? <span>Archived</span> : <span>Active</span>}
            </div>
          </div>

          {project.stats?.length ? (
            <div className="rounded-2xl bg-white/5 p-6 text-sm">
              <p className="text-xs uppercase tracking-[0.12em] text-[#f4e3d8]">Project Statistics</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-[#252047]/10 p-4">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#f4e3d8]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {project.stack ? (
            <div className="rounded-2xl bg-white/5 p-6 text-sm">
              <p className="text-xs uppercase tracking-[0.12em] text-[#f4e3d8]">Technology Stack</p>
              <div className="mt-4 space-y-4 text-sm text-[#f4e3d8]">
                {project.stack.frontend ? (
                  <div>
                    <p className="font-semibold text-white">Frontend</p>
                    <p>{project.stack.frontend.join(", ")}</p>
                  </div>
                ) : null}
                {project.stack.backend ? (
                  <div>
                    <p className="font-semibold text-white">Backend</p>
                    <p>{project.stack.backend.join(", ")}</p>
                  </div>
                ) : null}
                {project.stack.database ? (
                  <div>
                    <p className="font-semibold text-white">Database</p>
                    <p>{project.stack.database.join(", ")}</p>
                  </div>
                ) : null}
                {project.stack.deployment ? (
                  <div>
                    <p className="font-semibold text-white">Deployment</p>
                    <p>{project.stack.deployment.join(", ")}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {project.externalLinks?.length || project.liveUrl || project.sourceUrl ? (
            <div className="rounded-2xl bg-white/5 p-4 text-sm">
              <p className="text-xs uppercase tracking-[0.12em] text-[#f4e3d8]">Links</p>
              <ul className="mt-3 space-y-2">
                {project.externalLinks?.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer" className="text-sm text-[#f4e3d8] underline">
                      {l.label}
                    </a>
                  </li>
                ))}
                {project.liveUrl ? (
                  <li>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-[#f4e3d8] underline">
                      Live Demo
                    </a>
                  </li>
                ) : null}
                {project.sourceUrl ? (
                  <li>
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="text-sm text-[#f4e3d8] underline">
                      Github
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}

          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#e98579] px-6 py-3 text-sm font-bold text-white hover:bg-[#d96d68]">
            Back to Portfolio
          </Link>
        </aside>
      </div>
    </main>
  );
}
