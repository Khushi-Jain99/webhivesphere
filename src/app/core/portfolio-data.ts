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
  liveUrl: string;
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
    text: 'Every screen is built around clarity, user intent, and conversion-aware storytelling. I start with goals and user journeys, then map features to outcomes. Clear information hierarchy, accessible patterns, and measurable impact guide every decision. The result is a product narrative that feels focused, intentional, and easy to navigate.'
  },
  {
    title: 'Futuristic motion',
    text: 'Motion is used as a functional layer to guide attention and create a premium feel. Subtle reveals, micro-interactions, and responsive transitions help users understand state changes. I design motion to reduce friction, not distract. The experience stays smooth, modern, and purpose-driven.'
  },
  {
    title: 'Clean systems',
    text: 'Reusable components, consistent spacing, and modular architecture keep delivery fast. I build scalable UI systems with shared patterns, tokens, and documentation. Clean structure improves collaboration and keeps performance predictable. This approach makes new features easier to ship without design drift.'
  }
];

export const ABOUT_INTRO_SHORT =
  'I design and build digital products with a focus on clarity, performance, and consistent systems that scale.';

export const ABOUT_INTRO_FULL =
  'Over the years, I have partnered with teams to ship thoughtful interfaces, craft design systems, and translate complex goals into simple, human-first experiences.';

export const ABOUT_DETAILS = {
  journey:
    'From early front-end experiments to production-grade platforms, every milestone has sharpened my focus on quality and usability.',
  skillsSummary:
    'I blend product strategy, design systems, and engineering to build experiences that feel intuitive and perform fast.',
  goals:
    'To keep raising the bar on product craftsmanship while mentoring teams and shipping meaningful digital tools.'
};

export const ABOUT_HIGHLIGHTS = [
  { label: 'Years of experience', value: '7+' },
  { label: 'Projects completed', value: '48+' },
  { label: 'Technologies known', value: '22+' }
];

export const ABOUT_SECTIONS = [
  {
    title: 'My Journey',
    text: 'From early front-end experiments to production-grade platforms, every milestone has sharpened my focus on quality and usability.'
  },
  {
    title: 'What I Do',
    text: 'I blend product strategy, design systems, and engineering to build experiences that feel intuitive and perform fast.'
  },
  {
    title: 'Goals',
    text: 'To keep raising the bar on product craftsmanship while mentoring teams and shipping meaningful digital tools.'
  }
];

export const PROJECTS: ProjectCard[] = [
  {
    name: 'Agentic Forge',
    summary: 'An advanced orchestration platform for compiling, testing, and deploying autonomous multi-agent AI workflows.',
    impact: 'Optimized multi-agent execution paths',
    year: '2026',
    tags: ['TypeScript', 'Node.js', 'LangChain', 'OpenAI'],
    gradient: 'from-purple-500/25 via-pink-500/20 to-red-500/25',
    liveUrl: 'https://agentic-forge-three.vercel.app/'
  },
  {
    name: 'ID Generator',
    summary: 'A secure ID creation tool with validation rules, export options, and clean formatting.',
    impact: 'Streamlined onboarding workflows',
    year: '2026',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    gradient: 'from-cyan-400/25 via-indigo-500/20 to-fuchsia-500/25',
    liveUrl: 'https://id-generator-sys.vercel.app/'
  },
  {
    name: 'CreditWise Loan Approval System',
    summary: 'An intelligent underwriting platform utilizing machine learning models to assess credit risk and automate loan decisions.',
    impact: 'Accelerated loan processing by 60%',
    year: '2025',
    tags: ['Python', 'FastAPI', 'Scikit-Learn', 'React'],
    gradient: 'from-blue-500/25 via-indigo-500/20 to-cyan-400/25',
    liveUrl: 'https://credit-loan-system-weld.vercel.app/'
  },
  {
    name: 'Prediction of Length of Stay in Hospital',
    summary: 'A predictive analytics dashboard to estimate hospital stay length from patient features.',
    impact: 'Improved capacity planning',
    year: '2025',
    tags: ['Python', 'ML', 'Data Viz'],
    gradient: 'from-fuchsia-500/25 via-violet-500/20 to-cyan-400/25',
    liveUrl: 'https://prediction-of-length-of-stay-in-hos.vercel.app/'
  },
  {
    name: 'Gallerie',
    summary: 'A modern gallery experience for curated collections with fast browsing and previews.',
    impact: 'Higher content discoverability',
    year: '2024',
    tags: ['Angular', 'RxJS', 'UI'],
    gradient: 'from-emerald-400/20 via-cyan-400/15 to-pink-500/20',
    liveUrl: 'https://my-gallerie.vercel.app/'
  },
  {
    name: 'Luxury Fragrance Website',
    summary: 'A premium product site with storytelling sections, rich visuals, and refined branding.',
    impact: 'Elevated brand perception',
    year: '2024',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-amber-400/20 via-rose-400/20 to-violet-500/20',
    liveUrl: 'https://luxury-fragrance-website-htcj.vercel.app/'
  }
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    name: 'Programming Languages',
    level: 88,
    summary: 'C, C++, Python, JavaScript, HTML, CSS.',
    chips: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Libraries & Data Science',
    level: 82,
    summary: 'NumPy, Pandas, Scikit-learn, Seaborn, Matplotlib.',
    chips: ['NumPy', 'Pandas', 'Scikit-learn', 'Seaborn', 'Matplotlib']
  },
  {
    name: 'Frameworks & Technologies',
    level: 85,
    summary: 'Angular, React, Node.js.',
    chips: ['Angular', 'React', 'Node.js']
  },
  {
    name: 'Tools & Platforms',
    level: 84,
    summary: 'Git & GitHub, VS Code, Postman, Jupyter Lab, Vercel, Render, Cursor, Antigravity, Copilot.',
    chips: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Lab', 'Vercel', 'Render', 'Cursor', 'Antigravity', 'Copilot']
  },
  {
    name: 'Databases',
    level: 78,
    summary: 'SQL, MongoDB.',
    chips: ['SQL', 'MongoDB']
  },
  {
    name: 'Core Computer Science',
    level: 80,
    summary: 'Operating Systems, DBMS, OOPS.',
    chips: ['Operating Systems', 'DBMS', 'OOPS']
  },
  {
    name: 'Model Deployment',
    level: 62,
    summary: 'Machine learning, Deep Learning, Agentic AI.',
    chips: ['Machine Learning', 'Deep Learning', 'Agentic AI']
  },
  {
    name: 'Experience Highlight',
    level: 90,
    summary: 'Built multiple real-world projects including ML-based prediction systems and full-stack web applications.',
    chips: ['ML Systems', 'Full-Stack Apps', 'Production Delivery']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', href: 'mailto:khushijain.aiml@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khushi-jain-2009a02a8/' },
  { label: 'GitHub', href: 'https://github.com/Khushi-Jain99' }
];