export type Project = {
  id: string;
  name: string;
  shots: string[];
  cat?: string;
  tags?: string[];
  year?: string;
  role?: string;
  status?: string;
  lead?: string;
  highlights?: string[];
  stack?: string[];
  links?: { label: string; href: string }[];
  /** Set when shots are portrait (e.g. phone screenshots) so the gallery
   *  renders them in a side-by-side grid instead of stacking full-width. */
  portrait?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "boson",
    cat: "Open Source",
    name: "Boson",
    tags: ["Lit", "Web Components"],
    year: "2025",
    role: "Frontend Engineer",
    status: "Live",
    shots: [
      "/projects/boson/1.webp",
      "/projects/boson/2.webp",
      "/projects/boson/3.webp",
    ],
    lead: "Boson is a PHP framework for building native desktop applications with web technologies, similar to Electron but with PHP as the host runtime instead of Node. I built the entire frontend of bosonphp.com, the framework's marketing and documentation site. All components, layouts, and interactions were authored as Lit web components, with no UI framework underneath.",
    highlights: [
      "Built the entire site as a custom Lit web component library — no UI framework, no third-party component dependencies.",
    ],
    stack: ["Lit", "Web Components"],
    links: [
      { label: "Live site", href: "https://bosonphp.com/" },
      { label: "GitHub", href: "https://github.com/boson-php/bosonphp.com" },
    ],
  },
  {
    id: "techscreen",
    cat: "SaaS",
    name: "TechScreen",
    tags: ["Next.js", "Fastify", "Electron"],
    year: "2025",
    role: "Founder & Engineer",
    status: "Live",
    shots: [
      "/projects/techscreen.app/1.webp",
      "/projects/techscreen.app/2.webp",
      "/projects/techscreen.app/3.webp",
      "/projects/techscreen.app/4.webp",
    ],
    lead: "TechScreen is a SaaS for interview assistance with 10k+ active users. As the sole engineer, I designed, built, and continue to operate it — web app, native desktop client, and API. Integrations include Stripe for billing, the OpenAI API, and a custom testing and status system with Slack alerts when anything goes down.",
    highlights: [
      "Grew the product to 10k+ active users as the sole engineer, handling development, infrastructure, and support.",
      "Integrated Stripe for subscription billing and the OpenAI API for AI-powered assistance features.",
      "Built a custom testing and status monitoring system that sends Slack alerts on downtime.",
      "Designed and maintain three product surfaces: a Next.js web app, a Fastify REST API, and an Electron desktop client.",
    ],
    stack: ["Next.js", "Fastify", "Electron", "React", "PostgreSQL", "Prisma", "Docker"],
    links: [
      { label: "Live site", href: "https://techscreen.app/" },
    ],
  },
  {
    id: "mrr-is-land",
    cat: "Data Visualization",
    name: "MRR is land",
    tags: ["Next.js", "Three.js", "Fastify"],
    year: "2026",
    role: "Solo Developer",
    status: "Live",
    shots: [
      "/projects/mrris.land/1.webp",
      "/projects/mrris.land/2.webp",
      "/projects/mrris.land/3.webp",
    ],
    lead: "Mrr is land is a 3D data visualization I designed and built. It pulls public startup metrics — MRR, revenue growth, and financial trends — and renders them as an interactive city of islands: each startup has its own building, and the building's height and form reflect the startup's current state. Users can fly through the city and interact with individual buildings to explore the underlying data.",
    highlights: [
      "Built a Three.js 3D city renderer that maps startup MRR and growth data from TrustMRR to building height and form.",
      "Implemented fly-through navigation and interactive building selection for exploring individual startup data.",
    ],
    stack: ["Next.js", "Three.js", "Fastify", "PostgreSQL", "Docker"],
    links: [
      { label: "Live site", href: "https://mrris.land/" },
    ],
  },
  {
    id: "medusa",
    cat: "Web Application",
    name: "Medusa",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    year: "2026",
    role: "Sole Engineer",
    status: "Live",
    shots: [
      "/projects/medusa.cc/1.webp",
      "/projects/medusa.cc/2.webp",
      "/projects/medusa.cc/3.webp",
      "/projects/medusa.cc/4.webp",
    ],
    lead: "Medusa is a production web application designed and built under contract for a software company. The product covers user authentication, product purchasing, and a fully custom admin dashboard. The dashboard includes role management, a coupon and referral system, multi-language support, and complete product management, among other integrations and features.",
    highlights: [
      "Built a fully custom admin dashboard with role management, coupon and referral systems, and complete product management.",
      "Integrated Stripe and Palych for payment processing.",
      "Implemented multi-language support across 3 languages.",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "Docker"],
    links: [
      { label: "Live site", href: "https://medusa.cc/en" },
    ],
  },
  {
    id: "hoppin",
    cat: "iOS App",
    name: "Hoppin",
    tags: ["Swift", "Fastify", "PostgreSQL"],
    year: "2026",
    role: "Author",
    status: "Live",
    portrait: true,
    shots: [
      "/projects/hoppin.to/1.webp",
      "/projects/hoppin.to/2.webp",
      "/projects/hoppin.to/3.webp",
    ],
    lead: "Hoppin is a native iOS travel planning app, built to replace the friction of managing trips with pins on Google Maps. It supports AI-generated itineraries, day-by-day trip plans, and visualizes all saved places on an interactive map. I built and maintain both the iOS client and the supporting API.",
    highlights: [
      "Built the iOS client in SwiftUI and a supporting Fastify API from scratch.",
      "Integrated the Gemini API for AI-powered itinerary generation and day-by-day trip planning.",
      "Implemented interactive map visualization using MapKit to display and navigate saved places.",
    ],
    stack: ["Swift", "SwiftUI", "Fastify", "PostgreSQL", "Prisma"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/hoppin-to/id6771064605" },
    ],
  },
  {
    id: "cs2ru",
    cat: "Internal Tooling",
    name: "CS2RU",
    tags: ["Discord.js", "React", "PostgreSQL"],
    year: "2023 — 2026",
    role: "Contract Engineer",
    status: "Live",
    shots: [
      "/projects/cs2ru/1.webp",
      "/projects/cs2ru/2.webp",
      "/projects/cs2ru/3.webp",
    ],
    lead: "CS2RU is a Discord-based LFG service for CS2 players with over 100k users. I built and maintained several Discord and Telegram bots for moderation and community management, along with a web dashboard where moderators can configure rules, permissions, and server details.",
    highlights: [
      "Developed a tournament registration platform supporting 200+ teams and 1,000+ players through skill-based solo matchmaking and full-team sign-ups.",
      "Built an admin dashboard for 100+ moderators with real-time statistics, activity logging, leave management, and performance-based rewards.",
      "Engineered Discord and Telegram bots for onboarding, verification, and ticketing — processing 8,000+ requests and verifying 30,000+ users.",
      "Built a moderator support site with searchable rules, penalty guidelines, and onboarding references.",
    ],
    stack: ["React", "Discord.js", "PostgreSQL", "MongoDB", "SQLite", "Nest.js", "Prisma"],
  },
  {
    id: "applily",
    cat: "Chrome Extension",
    name: "Applily",
    tags: ["Next.js", "Chrome Extension", "Prisma"],
    year: "2025",
    role: "Sole Engineer",
    status: "Offline",
    shots: [
      "/projects/applily.co/1.webp",
      "/projects/applily.co/2.webp",
      "/projects/applily.co/3.webp",
    ],
    lead: "Applily was a Chrome extension that streamlined job application forms, eliminating repetitive manual entry across application sites. I designed and built the full product — extension, backend, and database. It's currently offline; the market for job-application tooling grew crowded faster than the product could gain traction without dedicated marketing.",
    highlights: [
      "Built a Chrome extension that detects and auto-fills job application form fields across application sites.",
      "Developed a full backend with user authentication and persistent profile storage to sync data across sites and sessions.",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Chrome Extension"],
  },
  {
    id: "laravel",
    cat: "Open Source",
    name: "Laravel",
    tags: ["PHP", "Laravel"],
    role: "Contributor",
    status: "Merged",
    shots: ["/projects/laravel/1.webp"],
    lead: "Early in my programming career, I identified a critical bug in the Laravel framework and submitted a patch. Taylor Otwell, Laravel's creator, reviewed and approved the pull request.",
    highlights: [
      "Identified and patched a critical bug in Laravel's core while learning the framework.",
      "Pull request reviewed and merged by Taylor Otwell, Laravel's creator and lead maintainer.",
    ],
    stack: ["PHP", "Laravel"],
  },
];

export type TechCard = { num: string; title: string; chips: string[] };

export const TECH: TechCard[] = [
  {
    num: "01",
    title: "Languages",
    chips: ["TypeScript", "JavaScript", "Python", "SQL", "PHP"],
  },
  {
    num: "02",
    title: "Frontend",
    chips: ["React", "Vue", "Next.js", "Nuxt", "Vite", "Tailwind", "Three.js", "Lit"],
  },
  {
    num: "03",
    title: "Backend",
    chips: ["Node.js", "Fastify", "REST", "Laravel"],
  },
  {
    num: "04",
    title: "Data",
    chips: ["PostgreSQL", "MongoDB", "SQLite", "Prisma"],
  },
  {
    num: "05",
    title: "Infra & DevOps",
    chips: ["Docker", "AWS", "GitHub Actions"],
  },
  {
    num: "06",
    title: "Tools",
    chips: ["Git", "Figma"],
  },
];

export type WorkItem = {
  date: string;
  company: string;
  title: string;
  description?: string;
  bullets?: string[];
  tags: string[];
};

export const WORK: WorkItem[] = [
  {
    date: "2023 — 2026",
    company: "CS 2 CIS",
    title: "Full Stack Developer & Automation Engineer",
    bullets: [
      "Developed a tournament registration platform supporting over 200 teams and 1,000+ players through skill-based solo matchmaking and full-team sign-ups.",
      "Built an admin dashboard for tracking user statistics, logging admin actions via a bot, managing leaves, and granting performance-based rewards in real time for over 100 administrators.",
      "Created an admin support site showcasing rules, penalty guidelines, tips, and examples, with an advanced search feature using custom keywords for quick reference and onboarding.",
      "Developed a Discord.js bot to handle user onboarding, role assignments, verification, and text/voice tickets — processing over 8,000 requests and onboarding 30,000+ users.",
      "Engineered a Discord bot for tracking and analyzing administrative activity, flagging inactive administrators and rewarding high-performing ones.",
    ],
    tags: ["React", "Next.js", "Express.js", "Nest.js", "PostgreSQL", "Discord.js", "SQLite"],
  },
  {
    date: "2021 — 2023",
    company: "Web Studio DimaDim",
    title: "Full Stack Web Developer",
    bullets: [
      "Delivered around 30 websites covering landing pages, entertainment apps, and business presentations.",
      "Optimized client projects, improving SEO by an average of 60% and reducing load times by an average of 40%.",
    ],
    tags: ["React", "Node.js", "SQLite", "CMS"],
  },
  {
    date: "2020 — 2026",
    company: "Solo Projects",
    title: "Independent Developer",
    bullets: [
      "Built and operate TechScreen, a SaaS for interview assistance that has grown to 10k+ active users, with Stripe billing, AI-powered features, and a custom monitoring and alerting system.",
      "Developed Hoppin, a native iOS travel planning app with AI-generated itineraries, day-by-day trip plans, and interactive map visualization — built for personal use and available on the App Store.",
      "Designed and built Mrr is land, a 3D data visualization that maps public startup MRR and growth metrics onto an interactive city where each building represents a startup's financial state.",
      "Built Applily, a Chrome extension that automated job application form filling, reducing repetitive manual entry across application sites.",
    ],
    tags: ["Next.js", "Swift", "Fastify", "PostgreSQL", "Docker"],
  },
];
