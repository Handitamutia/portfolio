import type { LucideIcon } from "lucide-react";
import {
  CircleDot,
  Code2,
  Dribbble,
  Figma,
  Gem,
  Instagram,
  Linkedin,
  Monitor,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
  Icon: LucideIcon;
};

export type ProjectItem = {
  title: string;
  type: string;
  gradient: string;
  isDark: boolean;
};

export type ToolItem = {
  name: string;
  shortName: string;
};

export type ProcessItem = {
  number: string;
  title: string;
  detail: string;
  Icon: LucideIcon;
};

export type SocialItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  { value: "5+", label: "Years Experience", Icon: Sparkles },
  { value: "50+", label: "Projects Completed", Icon: ShieldCheck },
  { value: "30+", label: "Happy Clients", Icon: Gem },
  { value: "8", label: "Industries Served", Icon: CircleDot },
];

export const projects: ProjectItem[] = [
  {
    title: "Aurelia Skincare",
    type: "E-commerce Website",
    gradient: "from-[#7c846b] to-[#d9d3c7]",
    isDark: false,
  },
  {
    title: "Verdant Wellness",
    type: "Mobile App Design",
    gradient: "from-[#1f261c] to-[#778067]",
    isDark: true,
  },
  {
    title: "Northline Studio",
    type: "Brand & Website Design",
    gradient: "from-[#e7e1d8] to-[#b9b09f]",
    isDark: false,
  },
];

export const tools: ToolItem[] = [
  { name: "Figma", shortName: "Fi" },
  { name: "Adobe XD", shortName: "Xd" },
  { name: "Photoshop", shortName: "Ps" },
  { name: "Illustrator", shortName: "Ai" },
  { name: "Webflow", shortName: "W" },
  { name: "Framer", shortName: "Fr" },
  { name: "Notion", shortName: "N" },
  { name: "Miro", shortName: "M" },
];

export const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Discover",
    detail: "Research, insight, and understanding your goals.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Define",
    detail: "Strategy, user flows, and information architecture.",
    Icon: Sparkles,
  },
  {
    number: "03",
    title: "Design",
    detail: "Wireframes, UI design, and visual exploration.",
    Icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    detail: "Collaborate with developers to bring it to life.",
    Icon: Monitor,
  },
  {
    number: "05",
    title: "Deliver",
    detail: "Test, optimize, and launch with confidence.",
    Icon: Rocket,
  },
];

export const socialItems: SocialItem[] = [
  { label: "LinkedIn", href: "#home", Icon: Linkedin },
  { label: "Instagram", href: "#home", Icon: Instagram },
  { label: "Figma", href: "#home", Icon: Figma },
  { label: "Dribbble", href: "#home", Icon: Dribbble },
  { label: "Code", href: "#home", Icon: Code2 },
];
