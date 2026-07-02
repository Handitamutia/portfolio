import type { LucideIcon } from "lucide-react";
import { Compass, Gem, Layers3, MonitorSmartphone, PenTool, Sparkles } from "lucide-react";

export type ProjectItem = {
  title: string;
  type: string;
  theme: string;
  accent: string;
  mark: string;
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

export const projects: ProjectItem[] = [
  {
    title: "Lumiere Cosmetics",
    type: "Branding & Packaging",
    theme: "bg-[#d9d1f2]",
    accent: "from-white/70 to-[#b8a6e8]",
    mark: "LC",
  },
  {
    title: "Elevate Coaching",
    type: "Web Design & Development",
    theme: "bg-[#201b46]",
    accent: "from-[#302c64] to-[#0e0b25]",
    mark: "EC",
  },
  {
    title: "Sofia Living",
    type: "Brand Identity",
    theme: "bg-[#f5cfc3]",
    accent: "from-white/75 to-[#e7a89d]",
    mark: "SL",
  },
];

export const services: ServiceItem[] = [
  { title: "Brand Identity", detail: "Logo, visual identity, brand guideline", Icon: Gem },
  { title: "Web Design", detail: "Modern, responsive, user-focused", Icon: MonitorSmartphone },
  { title: "UI/UX Design", detail: "Wireframes, prototype, user research", Icon: PenTool },
  { title: "Digital Content", detail: "Social media, graphics, presentation", Icon: Layers3 },
  { title: "Creative Direction", detail: "Concept, art direction, visual strategy", Icon: Compass },
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
