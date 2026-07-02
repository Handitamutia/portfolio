import Image from "next/image";
import { ArrowRight, Mail, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  navItems,
  processItems,
  projects,
  socialItems,
  stats,
  tools,
  type ProjectItem,
} from "./backup-data";

const portfolioCopy = {
  name: "Maria Lune",
  role: "Web & Product Designer",
  email: "hello@marialune.com",
  location: "Barcelona, Spain",
  intro:
    "I craft strategic, beautiful, and impactful digital experiences that connect brands with people.",
  about:
    "I'm a web and product designer with a passion for minimal aesthetics, thoughtful user experiences, and purposeful design. I partner with brands to create digital solutions that are not only beautiful, but built to perform.",
};

const shellClass = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10";

export function BackupPortfolio() {
  return (
    <main className="min-h-screen bg-[#f1e9e0] text-[#2e3b2d]">
      <section id="home" className={`${shellClass} py-6`}>
        <BackupHeader />
        <HeroSection />
        <StatsStrip />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
      </section>
      <ContactSection />
      <BackupFooter />
    </main>
  );
}

function BackupHeader() {
  return (
    <header className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em]">
      <a href="/backup" className="font-serif text-4xl normal-case tracking-normal text-[#9a7a35]">
        M
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-[#9a7a35]">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-5 sm:flex">
        <span className="h-px w-24 bg-[#9a7a35]/45" />
        <Star className="h-4 w-4 fill-[#9a7a35] text-[#9a7a35]" />
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative grid gap-8 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div className="relative z-10 pb-4 lg:pb-20">
        <p className="font-serif text-5xl italic leading-none text-[#9a7a35] sm:text-6xl">
          Hello, I'm
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-[clamp(5.1rem,12vw,10.8rem)] uppercase leading-[0.82] tracking-normal">
          {portfolioCopy.name}
        </h1>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.43em] text-[#9a7a35] sm:text-base">
          {portfolioCopy.role}
        </p>
        <p className="mt-5 max-w-sm text-sm leading-7 text-[#384835]">{portfolioCopy.intro}</p>
        <Button asChild className="mt-7 bg-[#2e3b2d] text-white hover:bg-[#43533d]">
          <a href="#work">
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>

      <PortraitArch />
    </section>
  );
}

function PortraitArch() {
  return (
    <div className="relative min-h-[520px] overflow-hidden lg:min-h-[660px]">
      <div className="absolute bottom-0 left-1/2 h-[92%] w-[72%] -translate-x-1/2 rounded-t-full border border-[#b69d62] bg-[#cfd2bf]" />
      <div className="absolute bottom-0 left-1/2 h-[86%] w-[65%] -translate-x-1/2 overflow-hidden rounded-t-full bg-[#d7d4c3]">
        <Image
          src="/profile/Profile.png"
          alt="Portrait portfolio backup"
          width={720}
          height={720}
          priority
          className="absolute bottom-0 left-1/2 w-[88%] max-w-[520px] -translate-x-1/2"
        />
      </div>
      <IdeaBadge />
      <LeafDecoration />
    </div>
  );
}

function IdeaBadge() {
  return (
    <div className="absolute right-[5%] top-32 hidden h-36 w-36 items-center justify-center rounded-full border border-[#b69d62] text-center text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#2e3b2d] sm:flex">
      Design
      <br />
      thinking
      <br />
      makes ideas
      <br />
      real
      <Star className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 fill-[#9a7a35] text-[#9a7a35]" />
    </div>
  );
}

function LeafDecoration() {
  return (
    <div className="absolute -right-10 bottom-10 hidden h-[520px] w-48 opacity-70 lg:block">
      {Array.from({ length: 7 }).map((_, index) => (
        <span
          key={index}
          className="absolute right-0 h-20 w-36 rounded-[50%] bg-[#62705d]"
          style={{
            top: `${index * 66}px`,
            transform: `rotate(${index % 2 === 0 ? "-24deg" : "22deg"})`,
          }}
        />
      ))}
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="relative z-20 -mt-7 grid bg-[#6e765f] text-white shadow-[0_18px_45px_rgba(46,59,45,0.18)] sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ value, label, Icon }) => (
        <article key={label} className="flex items-center gap-4 border-white/20 p-6 lg:border-r">
          <Icon className="h-8 w-8 text-[#d0b46f]" />
          <div>
            <p className="font-serif text-3xl">{value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
              {label}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="py-10">
      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a35]">Selected</p>
          <h2 className="font-serif text-4xl uppercase leading-none">
            Projects <span className="text-[#9a7a35]">*</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7a35] sm:inline-flex"
        >
          View all work
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const textColor = project.isDark ? "text-white" : "text-[#2e3b2d]";
  const mutedTextColor = project.isDark ? "text-white/70" : "text-[#2e3b2d]/70";
  const actionColor = project.isDark
    ? "border-white/45 text-white"
    : "border-[#2e3b2d]/35 text-[#2e3b2d]";

  return (
    <article className="group overflow-hidden rounded-md bg-white/45">
      <div className={`relative aspect-[1.35] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-x-8 bottom-8 top-12 rounded-md bg-[#ebe6dc]/55 shadow-2xl" />
        <div className="absolute bottom-6 right-7 h-28 w-36 rounded-sm bg-[#1f261c]/20" />
        <div className="absolute left-6 top-12 max-w-40">
          <h3 className={`font-serif text-2xl uppercase leading-none ${textColor}`}>{project.title}</h3>
          <p className={`mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] ${mutedTextColor}`}>
            {project.type}
          </p>
        </div>
        <span
          className={`absolute bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full border ${actionColor}`}
        >
          <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
        </span>
      </div>
    </article>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 border-b border-t border-[#2e3b2d]/12 py-10 lg:grid-cols-[0.9fr_1fr_0.55fr]"
    >
      <ToolsPanel />
      <div>
        <h2 className="mb-6 font-serif text-2xl uppercase">
          About Me <span className="text-[#9a7a35]">*</span>
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[#384835]">{portfolioCopy.about}</p>
        <p className="mt-7 font-serif text-4xl italic text-[#9a7a35]">{portfolioCopy.name}</p>
      </div>
      <VaseCard />
    </section>
  );
}

function ToolsPanel() {
  return (
    <div id="expertise">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Tools & Technologies</h2>
        <span className="h-px flex-1 bg-[#2e3b2d]/20" />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#6e765f] text-sm font-bold text-white">
              {tool.shortName}
            </span>
            <p className="mt-3 text-[10px] font-semibold uppercase text-[#384835]">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VaseCard() {
  return (
    <div className="relative min-h-64 overflow-hidden rounded-t-full bg-[#d5d1c0]">
      <div className="absolute left-1/2 top-12 h-36 w-px -translate-x-1/2 bg-[#8c917c]" />
      <div className="absolute left-1/2 top-10 h-16 w-24 -translate-x-2 rounded-[50%] border border-[#8c917c]" />
      <div className="absolute bottom-10 left-1/2 h-24 w-20 -translate-x-1/2 rounded-b-lg rounded-t-full bg-[#e9e4d7]" />
    </div>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-9">
      <div className="mb-8 flex items-center gap-5">
        <span className="h-px flex-1 bg-[#2e3b2d]/15" />
        <h2 className="text-center font-serif text-3xl uppercase">My Design Process</h2>
        <span className="h-px flex-1 bg-[#2e3b2d]/15" />
      </div>
      <div className="grid divide-y divide-[#2e3b2d]/12 border-y border-[#2e3b2d]/12 md:grid-cols-5 md:divide-x md:divide-y-0">
        {processItems.map(({ number, title, detail, Icon }) => (
          <article key={title} className="p-6 text-center">
            <p className="text-xs font-semibold uppercase text-[#384835]">{number}</p>
            <Icon className="mx-auto mt-5 h-9 w-9 text-[#6e765f]" />
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em]">{title}</h3>
            <p className="mt-3 text-xs leading-5 text-[#384835]">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#6e765f] text-white">
      <div className={`${shellClass} grid gap-8 py-9 lg:grid-cols-[1.1fr_1px_0.95fr]`}>
        <div className="flex gap-6">
          <p className="font-serif text-7xl leading-none text-[#d0b46f]">&quot;</p>
          <div>
            <p className="max-w-lg font-serif text-xl leading-8">
              Maria is an exceptional designer who truly understands our brand and audience. The results
              exceeded our expectations.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              James Carter, CEO of Northline Studio
            </p>
            <div className="mt-6 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d0b46f]" />
              <span className="h-2 w-2 rounded-full bg-white/45" />
              <span className="h-2 w-2 rounded-full bg-white/45" />
            </div>
          </div>
        </div>
        <span className="hidden bg-white/25 lg:block" />
        <div className="flex items-center gap-6">
          <span className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#d0b46f] md:flex">
            <Mail className="h-9 w-9 text-[#d0b46f]" />
          </span>
          <div>
            <h2 className="font-serif text-3xl uppercase leading-tight">Let's create something amazing</h2>
            <p className="mt-3 text-sm text-white/75">Have a project in mind? I'd love to hear about it.</p>
            <Button asChild className="mt-6 bg-[#f1e9e0] text-[#2e3b2d] hover:bg-white">
              <a href={`mailto:${portfolioCopy.email}`}>
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackupFooter() {
  return (
    <footer className="bg-[#f1e9e0] text-[#2e3b2d]">
      <div className={`${shellClass} grid gap-6 py-7 text-xs md:grid-cols-[0.2fr_1fr_1fr_1fr]`}>
        <p className="font-serif text-4xl leading-none text-[#9a7a35]">M</p>
        <p className="font-semibold uppercase leading-5 tracking-[0.16em]">
          Designing digital experiences
          <br />
          that leave a lasting impact.
        </p>
        <div className="space-y-2 text-[#384835]">
          <a href={`mailto:${portfolioCopy.email}`} className="flex items-center gap-2 hover:text-[#9a7a35]">
            <Mail className="h-4 w-4" />
            {portfolioCopy.email}
          </a>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {portfolioCopy.location}
          </p>
        </div>
        <div className="flex items-start gap-3 md:justify-end">
          {socialItems.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2e3b2d]/25 hover:border-[#9a7a35] hover:text-[#9a7a35]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className={`${shellClass} flex flex-col justify-between gap-3 border-t border-[#2e3b2d]/12 py-4 text-[11px] uppercase tracking-[0.12em] text-[#384835] md:flex-row`}>
        <p>(c) 2026 Maria Lune. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#home" className="hover:text-[#9a7a35]">
            Privacy Policy
          </a>
          <a href="#home" className="hover:text-[#9a7a35]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
