import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Cog,
  Compass,
  Database,
  Gem,
  LayoutDashboard,
  MonitorSmartphone,
  PenTool,
  PhoneCallIcon,
  ServerCog,
  Sparkles,
} from "lucide-react";

export type ProjectItem = {
  title: string;
  slug: string;
  type: string;
  theme: string;
  accent: string;
  mark: string;
  client?: string;
  year?: string;
  summary?: string;
  description?: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  features?: string[];
  tools?: string[];
  images?: string[];
  demoUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
  category?: string;
  tags?: string[];
  archived?: boolean;
  stack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
  };
  overview?: {
    problem?: string;
    goal?: string;
  };
  contribution?: {
    frontend?: string;
    backend?: string;
    database?: string;
    architecture?: string;
  };
  workflowDiagram?: {
    src: string;
    alt?: string;
    caption?: string;
  };
  challenges?: {
    problem?: string;
    solution?: string;
  };
  sections?: {
    title: string;
    text?: string;
    items?: string[];
  }[];
  keyPoints?: string[];
  stats?: { label: string; value: string }[];
  gallery?: {
    src: string;
    caption?: string;
    alt?: string;
  }[];
  // flexible assets to support images, 3D models, source files, logos, etc.
  assets?: {
    kind: "image" | "model" | "logo" | "file";
    src: string;
    caption?: string;
    format?: string; // e.g. "glb", "obj", "svg", "png"
  }[];
  files?: { name: string; url: string }[];
  externalLinks?: { label: string; url: string }[];
  createdAt?: string;
  updatedAt?: string;
};

export type ServiceItem = {
  title: string;
  detail: string;
  Icon: LucideIcon;
};

export type ProcessItem = {
  number: string;
  title: string;
  detail: string;
  Icon: LucideIcon;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  theme: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  detail: string;
};

export type EducationItem = {
  school: string;
  major: string;
  period: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  Icon: LucideIcon;
};

export type ArticleItem = {
  title: string;
  category: string;
  detail: string;
  date: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Procurement Website",
    slug: "procurement-website",
    type: "Branding & Packaging",
    theme: "bg-[#d9d1f2]",
    accent: "from-white/70 to-[#b8a6e8]",
    mark: "LC",
    client: "Lumiere",
    year: "2025",
    summary: "Visual identity and packaging system for a beauty brand.",
    description:
      "Lumiere Cosmetics needed a polished brand experience for their launch. The project included a refined logo system, soft packaging textures, and a website concept with strong visual hierarchy.",
    role: "Brand identity, packaging design, and web concept",
    features: [
      "Brand guidelines and logo lockups",
      "Luxury-inspired packaging visuals",
      "Landing page concept with product showcase",
    ],
    tools: ["Figma", "Illustrator", "Tailwind CSS", "Next.js"],
    images: ["/profile/Profile.png"],
    category: "branding",
    tags: ["branding", "packaging", "identity"],
    archived: false,
    assets: [
      { kind: "image", src: "/project/procurement/hero.png", caption: "Packaging mockup" },
      { kind: "logo", src: "/project/procurement/logo.svg", caption: "Primary logo", format: "svg" }
    ],
    externalLinks: [{ label: "Design Files", url: "https://figma.com/example" }],
  },
  {
    title: "Lumiere Cosmetics",
    slug: "lumiere-cosmetics",
    type: "Branding & Packaging",
    category: "branding",
    theme: "bg-[#d9d1f2]",
    accent: "from-white/70 to-[#b8a6e8]",
    mark: "LC",
    client: "Lumiere",
    year: "2025",
    summary: "Visual identity and packaging system for a beauty brand.",
    description:
      "Lumiere Cosmetics needed a polished brand experience for their launch. The project included a refined logo system, soft packaging textures, and a website concept with strong visual hierarchy.",
    role: "Brand identity, packaging design, and web concept",
    features: [
      "Brand guidelines and logo lockups",
      "Luxury-inspired packaging visuals",
      "Landing page concept with product showcase",
    ],
    tools: ["Figma", "Illustrator", "Tailwind CSS", "Next.js"],
    images: ["/profile/Profile.png"],
  },
  {
    title: "Elevate Coaching",
    slug: "elevate-coaching",
    type: "Web Design & Development",
    theme: "bg-[#201b46]",
    accent: "from-[#302c64] to-[#0e0b25]",
    mark: "EC",
    client: "Elevate Coaching",
    year: "2024",
    summary: "Corporate website and booking flow for a coaching brand.",
    description:
      "Elevate Coaching wanted a modern digital presence to showcase programs and simplify booking. The result is a bold and trusted brand experience, optimized for conversions.",
    role: "UI/UX design, responsive website development",
    features: [
      "Program overview and testimonials",
      "Booking call-to-action flow",
      "Mobile-first responsive design",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: ["/profile/Profile.png", "/profile/Profile.png"],
    demoUrl: "https://elevate-coaching.example.com",
    category: "web",
  },
  {
    title: "Sofia Living",
    slug: "sofia-living",
    type: "Brand Identity",
    category: "branding",
    theme: "bg-[#f5cfc3]",
    accent: "from-white/75 to-[#e7a89d]",
    mark: "SL",
    client: "Sofia Living",
    year: "2024",
    summary: "Brand refresh for an interior lifestyle label.",
    description:
      "Sofia Living's new identity is warm, elegant, and approachable. The visual system supports their premium interiors offering with signature colors, tone, and typography.",
    role: "Brand identity and design system",
    features: [
      "Logo and typography guidelines",
      "Color palette and imagery style",
      "Marketing collateral direction",
    ],
    tools: ["Figma", "Photoshop", "Brand Strategy"],
  },
  {
    title: "Procurement Control System",
    slug: "procurement-control-system",
    type: "Enterprise Procurement System",
    category: "procurement",
    theme: "bg-[#202a3c]",
    accent: "from-[#3d4a6b] to-[#121a2b]",
    mark: "PC",
    client: "Corporate Construction",
    year: "2025",
    summary: "Solusi procurement end-to-end untuk kontrol anggaran, approval, dan log audit.",
    description:
      "Sistem procurement enterprise yang memisahkan frontend dan backend untuk mengelola RAB/BOQ, permintaan material, PO, penerimaan barang, approval multi-level, dan pembayaran.",
    role: "Arsitektur frontend/backend, RBAC, audit-ready workflow, dan integrasi API.",
    keyPoints: [
      "Permission-based routing dan RBAC granular",
      "Budget control dan audit trail untuk procurement",
      "Approval workflow PENDING / APPROVED / REJECTED / REVISION_REQUIRED",
      "Master data supplier/material, PO, GR, dan payment flow",
    ],
    overview: {
      problem: "Tim procurement kesulitan memantau anggaran, approval, dan audit dalam satu sistem yang terpusat.",
      goal: "Membangun platform procurement enterprise dengan kontrol anggaran, approval multi-level, inventory tracking, dan audit trail lengkap.",
    },
    contribution: {
      frontend: "Mendesain dan mengimplementasikan dashboard procurement, halaman approval, form request, serta mekanisme protected routing berdasarkan permission.",
      backend: "Membangun API Express/TypeScript untuk auth, RBAC, master data, approval workflow, dan integrasi Postgres menggunakan Drizzle ORM.",
      database: "Merancang skema Postgres untuk project, RAB/BOQ, material, PO, GR, approval, dan audit log.",
      architecture: "Memisahkan frontend dan backend, menerapkan JWT/RSA, Zod validation, Swagger docs, serta soft-delete dan snapshot untuk audit readiness.",
    },
    tools: ["Next.js", "Express", "TypeScript", "Drizzle ORM", "Zod"],
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "zustand", "React Query/SWR"],
      backend: ["Node.js", "Express 5", "TypeScript", "JWT + RSA", "Zod", "Swagger"],
      database: ["Postgres", "Drizzle ORM", "Schema migrations", "Soft delete"],
      deployment: ["Vercel", "Docker", "CI/CD"],
    },
    workflowDiagram: {
      src: "/project/procurement/workflow-diagram.png",
      alt: "Procurement system workflow diagram",
      caption: "Alur sistem procurement end-to-end",
    },
    challenges: {
      problem: "Tim pengadaan kesulitan menjaga kontrol anggaran dan approval saat multiple stakeholder terlibat.",
      solution: "Membangun sistem dengan RBAC, approval multi-level, dan audit log untuk setiap action agar semua proses transparan dan terkontrol.",
    },
    gallery: [
      { src: "/project/procurement/dashboard.png", caption: "Dashboard procurement", alt: "Procurement dashboard" },
      { src: "/project/procurement/purchase-order.png", caption: "Purchase Order", alt: "Purchase order page" },
      { src: "/project/procurement/inventory.png", caption: "Inventory", alt: "Inventory management page" },
      { src: "/project/procurement/approval.png", caption: "Approval workflow", alt: "Approval workflow screen" },
    ],
    stats: [
      { label: "40 APIs", value: "40" },
      { label: "30 Pages", value: "30" },
      { label: "18 Tables", value: "18" },
      { label: "4 Roles", value: "4" },
    ],
    assets: [
      { kind: "image", src: "/project/procurement/dashboard.png", caption: "Procurement dashboard" },
      { kind: "image", src: "/project/procurement/approval.png", caption: "Approval workflow" },
    ],
    sections: [
      {
        title: "Frontend",
        text: "Next.js App Router dengan React, Tailwind CSS, framer-motion, react-hook-form, zustand, dan React Query/SWR untuk proteksi state dan data fetching.",
      },
      {
        title: "Backend",
        text: "Express 5 + TypeScript, JWT + RSA, Zod validation, Swagger API docs, Drizzle ORM dengan Postgres untuk model procurement kompleks.",
      },
      {
        title: "Workflow",
        items: [
          "Master data material dan supplier",
          "RAB/BOQ terhubung ke PO dan penggunaan anggaran",
          "Approval multi-level dan auditing action log",
          "Goods receipt dan material issue dengan stok dan status PO",
        ],
      },
    ],
    externalLinks: [
      { label: "Swagger API Docs", url: "https://swagger.example.com" },
    ],
    liveUrl: "https://procurement.example.com",
    sourceUrl: "https://github.com/your-repo/procurement-system",
    tags: ["procurement", "rbac", "enterprise", "audit"],
    archived: false,
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Freelance & Project Based",
    period: "2023 - Present",
    detail:
      "Membangun website responsif, company profile, landing page, dan aplikasi web yang fokus pada kebutuhan bisnis.",
  },
  {
    role: "IT & System Support",
    company: "Operational Support",
    period: "2022 - Present",
    detail:
      "Membantu maintenance, troubleshooting, dokumentasi kebutuhan, dan perbaikan alur kerja digital.",
  },
  {
    role: "UI/UX Designer",
    company: "Product & Web Projects",
    period: "2022 - Present",
    detail:
      "Menyusun wireframe, prototype, dan tampilan yang mudah digunakan untuk pengalaman pengguna yang lebih rapi.",
  },
];

export const education: EducationItem[] = [
  {
    school: "Universitas",
    major: "Information Systems / Informatics",
    period: "2021 - Present",
    detail:
      "Mempelajari pengembangan aplikasi, basis data, analisis sistem, dan perancangan solusi digital.",
  },
  {
    school: "Independent Learning",
    major: "Web Development & UI/UX",
    period: "2022 - Present",
    detail:
      "Mengembangkan kemampuan frontend, desain antarmuka, dokumentasi teknis, dan praktik pengembangan modern.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    detail: "Responsive websites and web apps.",
    Icon: Gem,
  },
  // {
  //   title: "Web Design",
  //   detail: "Clean layouts for every screen.",
  //   Icon: MonitorSmartphone,
  // },
  {
    title: "UI/UX Design",
    detail: "Flows, wireframes, and prototypes.",
    Icon: PenTool,
  },
  {
    title: "System Solutions",
    detail: "Simple tools for faster operations.",
    Icon: Cog,
  },
  {
    title: "IT Support",
    detail: "Maintenance and technical support.",
    Icon: PhoneCallIcon,
  },
];

export const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Discover",
    detail: "Memahami tujuan, audience, dan arah brand.",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Design",
    detail: "Membuat konsep yang cantik dan fungsional.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    detail: "Membangun desain menjadi website responsif.",
    Icon: MonitorSmartphone,
  },
  {
    number: "04",
    title: "Deliver",
    detail: "Merapikan detail akhir untuk hasil siap pakai.",
    Icon: Compass,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Icon: Code2,
  },
  {
    title: "Backend",
    skills: ["Node.js", "API Integration", "Authentication", "Database"],
    Icon: ServerCog,
  },
  {
    title: "Design",
    skills: ["UI Design", "UX Flow", "Wireframe", "Prototype"],
    Icon: LayoutDashboard,
  },
  {
    title: "Tools",
    skills: ["Git", "Deployment", "Testing", "Documentation"],
    Icon: Database,
  },
];

export const articles: ArticleItem[] = [
  {
    title: "Membangun Website yang Mudah Dipakai",
    category: "Web Development",
    detail:
      "Catatan tentang struktur halaman, navigasi, dan detail kecil yang membuat website terasa lebih jelas.",
    date: "2025",
  },
  {
    title: "Dari Kebutuhan Bisnis ke Sistem Digital",
    category: "System Design",
    detail:
      "Bagaimana menerjemahkan proses manual menjadi fitur yang praktis dan mudah dirawat.",
    date: "2025",
  },
  {
    title: "UI yang Rapi Membantu Pengguna Bekerja",
    category: "UI/UX",
    detail:
      "Pendekatan sederhana untuk membuat interface yang enak dibaca, konsisten, dan tidak membingungkan.",
    date: "2024",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Emily Morgan",
    role: "Founder, Lumiere",
    quote: "Hasilnya terasa elegan, rapi, dan sesuai dengan karakter brand kami.",
    theme: "bg-[#fbf2e5]",
  },
  {
    name: "Michael Peters",
    role: "CEO, Elevate",
    quote: "Prosesnya jelas dan hasil websitenya terlihat profesional di semua device.",
    theme: "bg-[#eadcf4]",
  },
  {
    name: "Sofia Lang",
    role: "Owner, Sofia Living",
    quote: "Visi kami berhasil diterjemahkan menjadi identitas visual yang hangat.",
    theme: "bg-[#f7dcd5]",
  },
];
