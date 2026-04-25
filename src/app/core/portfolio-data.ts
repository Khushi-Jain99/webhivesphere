export interface NavLink {
  label: string;
  target: string;
}

export interface ProjectCard {
  name: string;
  summary: string;
  impact: string;
  year: string;
  tags: string[];
  gradient: string;
}

export interface SkillCluster {
  name: string;
  level: number;
  summary: string;
  chips: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' }
];

export const HERO_STATS = [
  { value: '24/7', label: 'Brand signal' },
  { value: '98+', label: 'Performance score' },
  { value: '3D', label: 'Motion system' }
];

export const ABOUT_POINTS = [
  {
    title: 'Strategy first',
    text: 'Every screen is built around clarity, user intent, and conversion-aware storytelling.'
  },
  {
    title: 'Futuristic motion',
    text: 'Motion is used as a functional layer to guide attention and create a premium feel.'
  },
  {
    title: 'Clean systems',
    text: 'Reusable components, consistent spacing, and modular architecture keep delivery fast.'
  }
];

export const PROJECTS: ProjectCard[] = [
  {
    name: 'Quantum Dashboard',
    summary: 'A live analytics cockpit with layered filters, real-time insights, and glass surfaces.',
    impact: '42% faster decision flow',
    year: '2026',
    tags: ['Angular', 'Data Viz', 'Motion'],
    gradient: 'from-cyan-400/25 via-indigo-500/20 to-fuchsia-500/25'
  },
  {
    name: 'Neon Commerce',
    summary: 'An immersive storefront experience designed for high conversion and brand memorability.',
    impact: '31% uplift in engagement',
    year: '2026',
    tags: ['UX', 'E-Commerce', 'Tailwind'],
    gradient: 'from-fuchsia-500/25 via-violet-500/20 to-cyan-400/25'
  },
  {
    name: 'Signal Engine',
    summary: 'An AI-assisted marketing interface with predictive insights and adaptive sections.',
    impact: '2.2x content throughput',
    year: '2025',
    tags: ['AI UI', 'Systems', 'Accessibility'],
    gradient: 'from-emerald-400/20 via-cyan-400/15 to-pink-500/20'
  }
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    name: 'Frontend craft',
    level: 92,
    summary: 'Angular, TypeScript, Tailwind, semantic HTML, and accessible UI engineering.',
    chips: ['Angular', 'TypeScript', 'Tailwind']
  },
  {
    name: 'Motion design',
    level: 84,
    summary: 'Micro-interactions, reveal states, buttery transitions, and polished feedback loops.',
    chips: ['GSAP', 'CSS motion', 'Angular Animations']
  },
  {
    name: 'System thinking',
    level: 89,
    summary: 'Reusable design systems, performance budgets, modular architecture, and clean build pipelines.',
    chips: ['Architecture', 'SEO', 'Performance']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Dribbble', href: 'https://dribbble.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' }
];