"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  processItems,
  projects,
  services,
  testimonials,
  type ProjectItem,
  type TestimonialItem,
} from "./portfolio-data";

const shellClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f0ea] text-[#252047]">
      <HeroSection />
      <WorkSection />
      <FeatureBand />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="home" className={`${shellClass} overflow-x-clip py-4 sm:py-5`}>
      <SiteHeader />
      <div className="relative border-b border-[#252047]/15 pt-6 sm:pt-8 lg:min-h-[520px]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative z-20 min-w-0 max-w-4xl pb-8 sm:pb-12 lg:pb-8"
        >
          <h1 className="max-w-full font-serif text-[clamp(3.1rem,18vw,13.5rem)] leading-[0.76] tracking-normal sm:text-[clamp(4.5rem,17vw,12.5rem)] sm:leading-[0.7]">
            Portfolio
          </h1>
          <div className="mt-6 max-w-xl sm:mt-7">
            <p className="max-w-full text-sm font-semibold uppercase leading-snug tracking-[0.1em] sm:text-2xl sm:tracking-[0.18em]">
              I BUILD MODERN WEBSITES
              <span className="block text-[#d96d68]">& WEB APPLICATIONS</span>
            </p>
            <p className="mt-3 max-w-sm text-sm font-medium leading-7 text-[#57506e] sm:text-base">
              Creating reliable digital solutions that help businesses work more
              efficiently.
            </p>
            <div className="my-3 sm:my-5">
              <p className="font-serif text-4xl italic text-[#d96d68] sm:text-5xl">
                Handita Mutia
              </p>
              <p className="mt-1 max-w-full text-[9px] font-bold uppercase leading-5 tracking-[0.12em] sm:text-[11px] sm:tracking-[0.18em]">
                Web Developer
              </p>
            </div>
            <Button className="rounded-full border-[#252047]/20">
              <a
                href="/cv/cv-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* https://drive.google.com/uc?export=download&id=1X5JZ1X5JZ1X5JZ1X5JZ1X5JZ1X5JZ1X5 */}
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
        <HeroPortrait />
        <ContactStrip />
      </div>
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#252047]/15 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] sm:pb-5 sm:text-[11px] sm:tracking-[0.22em]">
      <a href="#home" className="inline-flex items-center gap-2 sm:gap-3">
        <Sparkles className="h-4 w-4 fill-[#252047]" />
        Handita Mutia
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        <a href="#about" className="hover:text-[#d96d68]">
          About
        </a>
        <a href="#projects" className="hover:text-[#d96d68]">
          Projects
        </a>
        <a href="#experience" className="hover:text-[#d96d68]">
          Experience
        </a>
        <a href="#skills" className="hover:text-[#d96d68]">
          Skills
        </a>
        <a href="#articles" className="hover:text-[#d96d68]">
          Articles
        </a>
        <a href="#contact" className="hover:text-[#d96d68]">
          Contact
        </a>
      </nav>
      <span className="hidden items-center gap-3 sm:inline-flex">
        Portfolio
        <Star className="h-4 w-4 fill-[#252047]" />
      </span>
    </header>
  );
}

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="pointer-events-none relative z-10 -mt-8 min-h-56 sm:-mt-16 sm:min-h-80 md:min-h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:min-h-[520px] lg:w-[63%]"
    >
      <div className="absolute bottom-0 left-1/2 h-[95%] w-[70%] max-w-72 -translate-x-1/2 overflow-hidden rounded-t-full bg-[radial-gradient(circle_at_50%_50%,#fff5ea_0,#ead8ff_35%,#b5a4cd_100%)] sm:w-[58%] sm:max-w-none lg:left-auto lg:right-[-6%] lg:h-[98%] lg:w-[78%] lg:translate-x-0">
        <Image
          src="/profile/Profile.png"
          alt="Ilustrasi portofolio kreatif"
          width={1773}
          height={1849}
          priority
          className="absolute bottom-0 left-1/2 z-10 w-[112%] max-w-none -translate-x-1/2 lg:w-[108%]"
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-20 w-[100%] h-[50%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,0.8) 100%)",
          }}
        />
      </div>
      {/* Inner Glow */}
      {/* <div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          left: "34%",
          top: "47%",
          transform: "translate(-50%,-50%)",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,235,220,.95) 0%, rgba(255,222,205,.55) 28%, rgba(255,222,205,.18) 55%, rgba(255,222,205,0) 75%)",
        }} 
      /> */}
      {/* <div className="pointer-events-none absolute right-[12%] top-24 hidden h-72 w-72 rounded-full border border-white/55 lg:block">
        <span className="absolute left-10 top-20 h-2 w-2 rounded-full bg-white/80" />
        <span className="absolute right-20 top-16 h-3 w-3 rounded-full bg-[#e98579]" />
      </div> */}
      <StatsCard />
    </motion.div>
  );
}

function StatsCard() {
  return (
    <div className="absolute bottom-16 right-0 z-20 w-36 rounded-[1.35rem] bg-[#252047] p-6 text-white shadow-[0_24px_70px_rgba(37,32,71,0.28)] sm:bottom-20 sm:right-[4%] lg:right-[-1%]">
      <Sparkles className="mb-5 h-4 w-4 fill-white text-white" />
      <p className="text-2xl font-semibold">5+</p>
      <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-white/70">
        Years of Experience
      </p>
      <div className="my-4 h-px bg-white/15" />
      <p className="text-2xl font-semibold">30+</p>
      <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-white/70">
        Projects Delivered
      </p>
      <div className="my-4 h-px bg-white/15" />
      <p className="text-2xl font-semibold">20+</p>
      <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-white/70">
        Happy Clients
      </p>
    </div>
  );
}

function ContactStrip() {
  return (
    <div className="relative z-30 grid min-w-0 gap-4 border-t border-[#252047]/15 py-5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#57506e] sm:grid-cols-3 sm:text-[11px] sm:tracking-[0.14em] lg:max-w-[64%]">
      <span className="inline-flex min-w-0 items-center gap-2">
        <MapPin className="h-4 w-4 text-[#252047]" />
        Based in Indonesia
      </span>
      <span className="inline-flex min-w-0 items-center gap-2">
        <ArrowRight className="h-4 w-4 -rotate-45 text-[#252047]" />
        Available for freelance
      </span>
      <a
        href="mailto:handitamutia@gmail.com"
        className="inline-flex min-w-0 items-center gap-2 break-all hover:text-[#d96d68]"
      >
        <Mail className="h-4 w-4 text-[#252047]" />
        handitamutia@gmail.com
      </a>
    </div>
  );
}

function WorkSection() {
  return (
    <section
      id="work"
      className={`${shellClass} grid gap-6 py-5 lg:grid-cols-[1fr_340px]`}
    >
      <div>
        <SectionHeader
          title="Selected Work"
          actionLabel="View all projects"
          href="#contact"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
      <ServicesPanel />
    </section>
  );
}

function SectionHeader({
  title,
  actionLabel,
  href,
}: {
  title: string;
  actionLabel: string;
  href: string;
}) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="font-serif text-3xl">
        {title} <span className="text-[#d96d68]">+</span>
      </h2>
      <a
        href={href}
        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="overflow-hidden rounded-lg bg-white p-3 shadow-[0_18px_40px_rgba(37,32,71,0.08)]"
    >
      <div
        className={`relative aspect-[1.12] overflow-hidden rounded-md ${project.theme}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
        />
        <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-[#252047]/60">
          Studio
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-5xl text-white drop-shadow-sm">
            {project.mark}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 h-10 rounded-md bg-white/35 backdrop-blur" />
      </div>
      <div className="flex items-end justify-between gap-3 px-2 pb-1 pt-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.12em]">
            {project.title}
          </h3>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#57506e]">
            {project.type}
          </p>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="h-9 w-9 rounded-full border-[#252047]/20"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}

function ServicesPanel() {
  return (
    <aside className="rounded-lg bg-[#252047] p-7 text-white">
      <h2 className="font-serif text-3xl">
        What I Do <span className="text-[#d96d68]">+</span>
      </h2>
      <div className="mt-7 space-y-5">
        {services.map(({ title, detail, Icon }) => (
          <div key={title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.12em]">
                {title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-white/68">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function FeatureBand() {
  return (
    <section className={`${shellClass} pb-8`}>
      <div className="grid overflow-hidden rounded-none 
        bg-[radial-gradient(circle_at_50%_35%,#fff5ea_0%,#ead8ff_35%,#cdb7d6_100%)]
        md:grid-cols-[0.85fr_1.15fr_0.8fr]">
          {/* bg-[#d9c4ee]  */}
        <div className="flex min-h-44 items-center justify-center p-2">
          {/* bg-[#cdb4e8] */}
          <span className="font-serif text-9xl text-white">H*</span>
        </div>
        <div className="flex flex-col justify-center py-8">
          <h2 className="font-serif text-3xl leading-tight">
            Design with purpose. Create with heart.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#3f385b]">
            Setiap bagian dibuat untuk membantu portfolio terasa personal,
            jelas, dan memorable.
          </p>
        </div>
        <div className="relative min-h-56 overflow-hidden">
          <div className="absolute inset-0 " />
          {/* bg-[radial-gradient(circle_at_40%_35%,#fff7ef_0,#e7d4ff_48%,#c7b2ea_100%)] */}
          {/* <Image
            src="/developer-portrait.svg"
            alt="Detail visual portofolio"
            width={420}
            height={420}
            className="absolute bottom-0 left-1/2 w-72 -translate-x-1/2 rounded-t-full"
          /> */}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className={`${shellClass} pb-10`}>
      <h2 className="mb-6 font-serif text-3xl">
        My Process <span className="text-[#d96d68]">+</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-4">
        {processItems.map(({ number, title, detail }) => (
          <article key={title} className="relative">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8a6e8] text-sm font-bold text-white">
                {number}
              </span>
              <div className="h-px flex-1 bg-[#252047]/15" />
            </div>
            <h3 className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em]">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#57506e]">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className={`${shellClass} pb-10`}>
      <SectionHeader
        title="Kind Words"
        actionLabel="More reviews"
        href="#contact"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article
      className={`rounded-lg p-7 shadow-[0_18px_40px_rgba(37,32,71,0.06)] ${testimonial.theme}`}
    >
      <Quote className="h-8 w-8 fill-[#b8a6e8] text-[#b8a6e8]" />
      <p className="mt-4 min-h-20 text-sm leading-7 text-[#3f385b]">
        {testimonial.quote}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#252047] text-xs font-bold text-white">
          {initials}
        </span>
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.12em]">
            {testimonial.name}
          </h3>
          <p className="text-xs text-[#57506e]">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={`${shellClass} pb-8`}>
      <div className="grid overflow-hidden bg-[#252047] text-white md:grid-cols-[1.05fr_0.8fr_0.95fr]">
        <div className="p-8 sm:p-10">
          <h2 className="font-serif text-5xl leading-tight">
            Let&apos;s Create Something{" "}
            <span className="text-[#e98579]">Beautiful</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Terbuka untuk project portfolio, company profile, landing page, dan
            website bisnis kreatif.
          </p>
          <Button
            asChild
            className="mt-8 bg-[#e98579] text-white hover:bg-[#d96d68]"
          >
            <a href="mailto:hello@example.com">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="relative min-h-72 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f4d8ff_0,#b8a6e8_52%,#252047_100%)]" />
          <Image
            src="/developer-portrait.svg"
            alt="Kontak portfolio kreatif"
            width={520}
            height={520}
            className="absolute bottom-0 left-1/2 w-80 -translate-x-1/2 rounded-t-full"
          />
        </div>
        <ContactLinks />
      </div>
      <FooterNote />
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-col justify-center gap-5 p-8 text-sm sm:p-10">
      <span className="inline-flex items-center gap-3">
        <MapPin className="h-5 w-5 text-[#e98579]" />
        Indonesia
      </span>
      <a
        href="mailto:hello@example.com"
        className="inline-flex items-center gap-3 hover:text-[#e98579]"
      >
        <Mail className="h-5 w-5 text-[#e98579]" />
        hello@example.com
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 hover:text-[#e98579]"
      >
        <Github className="h-5 w-5 text-[#e98579]" />
        github.com
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 hover:text-[#e98579]"
      >
        <Linkedin className="h-5 w-5 text-[#e98579]" />
        linkedin.com
      </a>
      <span className="inline-flex items-center gap-3">
        <Globe2 className="h-5 w-5 text-[#e98579]" />
        portfolio.studio
      </span>
    </div>
  );
}

function FooterNote() {
  return (
    <footer className="flex flex-col justify-between gap-3 border-t border-[#252047]/15 py-5 text-xs text-[#57506e] sm:flex-row">
      <span>Designed with Next.js and Tailwind CSS.</span>
      <span className="inline-flex items-center gap-2">
        <BadgeCheck className="h-4 w-4 text-[#d96d68]" />
        Available for collaboration
      </span>
    </footer>
  );
}
