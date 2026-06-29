"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "REST API",
  "UI Engineering",
  "PostgreSQL",
  "Prisma",
];

const projects = [
  {
    title: "Procurement Dashboard",
    description: "Aplikasi operasional untuk approval, tracking pengadaan, dan laporan performa tim.",
    stack: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    title: "HR Management App",
    description: "Sistem internal untuk mengelola data karyawan, cuti, task, dan alur persetujuan.",
    stack: ["React", "Tailwind", "API"],
  },
  {
    title: "Personal Portfolio",
    description: "Website pribadi cepat, responsif, dan mudah dikembangkan sebagai pusat profil developer.",
    stack: ["Next.js 15", "Framer Motion", "shadcn/ui"],
  },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2024 - Sekarang",
    detail: "Membangun interface web yang rapi, responsif, dan nyaman dipakai untuk workflow bisnis.",
  },
  {
    role: "Full Stack Learner",
    company: "Project-Based Development",
    period: "2023 - 2024",
    detail: "Menghubungkan frontend, backend, database, dan deployment dalam aplikasi end-to-end.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-20 border-b bg-background/75 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-bold tracking-normal">
            Developer Portfolio
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#projects">
              Projects
            </a>
            <a className="hover:text-foreground" href="#experience">
              Experience
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
          </div>
          <Button asChild size="sm">
            <a href="mailto:hello@example.com">
              <Mail className="h-4 w-4" />
              Hire Me
            </a>
          </Button>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20 md:pt-20">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }}>
          <Badge variant="outline" className="mb-5 border-primary/30 bg-white/60 text-primary">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            Available for web development projects
          </Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl md:text-6xl">
            Halo, saya developer yang membangun web app modern dan rapi.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Saya fokus membuat produk digital yang cepat, maintainable, dan enak digunakan, dari dashboard internal sampai website portfolio profesional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                Lihat Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Indonesia
            </span>
            <span className="inline-flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              Frontend and Full Stack
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-[#f36f38]/20 blur-2xl" />
          <Image
            src="/developer-portrait.svg"
            width={720}
            height={720}
            priority
            alt="Ilustrasi developer dengan layar kode"
            className="relative h-auto w-full rounded-lg border bg-white shadow-soft"
          />
        </motion.div>
      </section>

      <section className="border-y bg-white/55">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {[
            ["15+", "Completed features"],
            ["6", "Core technologies"],
            ["100%", "Responsive layout"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-3xl font-black text-primary">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">Tech Stack</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal">Tools yang saya gunakan</h2>
          </div>
          <Layers3 className="hidden h-10 w-10 text-primary md:block" />
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#f1f7f6] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase text-primary">Selected Work</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal">Project unggulan</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary via-[#2b78b8] to-[#f36f38]" />
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="leading-6">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-center gap-3">
          <BriefcaseBusiness className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-black tracking-normal">Experience</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <Card key={item.role}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                    <CardDescription className="mt-2">{item.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{item.period}</Badge>
                </div>
              </CardHeader>
              <CardContent className="leading-7 text-muted-foreground">{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t bg-[#183b3a] py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
              <Rocket className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black tracking-normal">Mari bangun project berikutnya.</h2>
            <p className="mt-3 max-w-xl leading-7 text-white/75">
              Hubungi saya untuk website portfolio, dashboard, landing page, atau aplikasi web custom.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:hello@example.com">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
