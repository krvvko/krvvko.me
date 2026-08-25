export type Shot = {
  src: string;
  /** Intrinsic pixel size. Carried in the data so the gallery can reserve the
   *  exact box up front and skip the reflow when the media finishes loading. */
  w: number;
  h: number;
};

export type Project = {
  id: string;
  name: string;
  shots: Shot[];
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
    id: "snappy",
    cat: "Open Source",
    name: "Snappy",
    tags: ["Electron", "Fastify", "OpenAI API"],
    year: "2026",
    role: "Author",
    status: "Live",
    shots: [
      { src: "/projects/snappy/1.gif", w: 760, h: 470 },
      { src: "/projects/snappy/2.gif", w: 960, h: 540 },
      { src: "/projects/snappy/3.gif", w: 960, h: 540 },
    ],
    lead: "Snappy is a desktop AI assistant that sees your screen and walks you through whatever you're trying to do. You ask by text or voice, it reads the current screenshot, tells you the next step, and can take a narrow set of explicitly requested actions — opening a validated web page, launching an installed app, or adjusting output volume. It's an open source alternative to HeyClicky, which is closed, macOS-only, and billed per message: Snappy is self-hosted, you bring your own OpenAI API key, and you pay only what the model costs. The whole stack — auth server, database, landing page, and desktop client — lives in one repo.",
    highlights: [
      "Built the Electron desktop client: screen capture, text and voice input, and step-by-step guidance against whatever is on screen.",
      "Scoped the action layer to explicitly requested operations only — opening a validated web page, launching an installed app, and adjusting output volume.",
      "Shipped the full self-hosted stack in a single repo: Fastify auth server, PostgreSQL, landing page, and desktop client.",
    ],
    stack: ["Electron", "Fastify", "PostgreSQL", "OpenAI API"],
    links: [{ label: "GitHub", href: "https://github.com/krvvko/snappy" }],
  },
  {
    id: "boson",
    cat: "Open Source",
    name: "Boson",
    tags: ["Lit", "Web Components"],
    year: "2025",
    role: "Frontend Engineer",
    status: "Live",
    shots: [
      { src: "/projects/boson/1.webp", w: 1800, h: 930 },
      { src: "/projects/boson/2.webp", w: 1800, h: 936 },
      { src: "/projects/boson/3.webp", w: 1800, h: 922 },
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
      { src: "/projects/techscreen.app/1.webp", w: 1800, h: 1022 },
      { src: "/projects/techscreen.app/2.webp", w: 1800, h: 1023 },
      { src: "/projects/techscreen.app/3.webp", w: 1800, h: 1022 },
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
    id: "chat-widget",
    cat: "Internal Tooling",
    name: "Chat Widget",
    tags: ["React", "Fastify", "WebSockets"],
    year: "2026",
    role: "Sole Engineer",
    status: "Live",
    shots: [
      { src: "/projects/chat-widget/1.webp", w: 416, h: 558 },
      { src: "/projects/chat-widget/2.webp", w: 420, h: 474 },
      { src: "/projects/chat-widget/3.webp", w: 736, h: 521 },
      { src: "/projects/chat-widget/4.webp", w: 892, h: 917 },
    ],
    lead: "A support chat widget I built for my own products. It answers from an AI knowledge base first, and when the knowledge base doesn't cover a question it escalates to a human — sending me an email notification and opening a socket session so I can take over the same conversation in real time. Dropping it into another project is a config rather than a fork: brand colors, FAQs, and working hours are set per install.",
    highlights: [
      "Built AI-first support that answers from a per-project knowledge base and hands off to a human when it can't.",
      "Implemented real-time handover over WebSockets, so I can join an active conversation and reply live.",
      "Wired escalation notifications through Resend so they reach me with the dashboard closed.",
      "Made the widget drop-in for any project — brand colors, FAQ content, and working hours are configured per install.",
    ],
    stack: ["React", "Fastify", "WebSockets", "PostgreSQL", "Resend"],
  },
  {
    id: "dexcreative",
    cat: "Web Application",
    name: "DexCreative",
    tags: ["Next.js", "Fastify", "BullMQ"],
    year: "2026",
    role: "Contract Engineer",
    status: "Live",
    shots: [
      { src: "/projects/dexcreative/1.webp", w: 1575, h: 1040 },
      { src: "/projects/dexcreative/2.webp", w: 1570, h: 1038 },
      { src: "/projects/dexcreative/3.webp", w: 1575, h: 1039 },
    ],
    lead: "DexCreative is a creative operations system built under contract for Pixated. It pulls campaign data from Google, Meta, and TikTok ads into one place, generates ad creatives with AI, and analyses competitors' creatives so the team can see what's already running in a market. Everything slow — ad syncs, generation jobs, competitor scrapes — runs as queued work on BullMQ and Redis, with n8n handling automation between the services.",
    highlights: [
      "Integrated the Google, Meta, and TikTok ad APIs behind a single campaign and reporting view.",
      "Built AI creative generation and a pipeline that collects and analyses competitors' creatives.",
      "Moved every long-running job — syncs, generation, scrapes — onto BullMQ and Redis to keep the app responsive.",
      "Connected the surrounding services through n8n automation flows.",
    ],
    stack: ["Next.js", "Fastify", "PostgreSQL", "BullMQ", "Redis", "n8n"],
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
      { src: "/projects/mrris.land/1.webp", w: 1800, h: 926 },
      { src: "/projects/mrris.land/2.webp", w: 1800, h: 933 },
      { src: "/projects/mrris.land/3.webp", w: 1800, h: 933 },
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
      { src: "/projects/medusa.cc/1.webp", w: 1800, h: 923 },
      { src: "/projects/medusa.cc/2.webp", w: 1800, h: 924 },
      { src: "/projects/medusa.cc/3.webp", w: 1800, h: 924 },
      { src: "/projects/medusa.cc/4.webp", w: 1800, h: 921 },
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
      { src: "/projects/hoppin.to/1.webp", w: 644, h: 1400 },
      { src: "/projects/hoppin.to/2.webp", w: 644, h: 1400 },
      { src: "/projects/hoppin.to/3.webp", w: 644, h: 1400 },
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
    id: "reddit-bot",
    cat: "Internal Tooling",
    name: "Reddit Bot",
    tags: ["React", "Fastify", "Slack API"],
    year: "2026",
    role: "Sole Engineer",
    status: "Live",
    shots: [
      { src: "/projects/reddit-bot/1.webp", w: 1575, h: 948 },
      { src: "/projects/reddit-bot/2.webp", w: 1126, h: 600 },
    ],
    lead: "A bot that watches a chosen set of subreddits and analyses every new post as it lands. When a post is a fit for one of my products, it sends a Slack notification with the thread and a suggested comment, so replying is a review-and-post rather than a writing job. Scanning and analysis run as queued jobs on BullMQ and Redis; a small React dashboard manages the subreddit list and the matches it turns up.",
    highlights: [
      "Built continuous subreddit scanning with per-post analysis to surface threads worth replying to.",
      "Delivered every match to Slack with the source thread and a drafted comment suggestion.",
      "Ran scanning and analysis as queued jobs on BullMQ and Redis.",
    ],
    stack: ["React", "Fastify", "Redis", "BullMQ", "Slack API"],
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
      { src: "/projects/cs2ru/1.webp", w: 1800, h: 927 },
      { src: "/projects/cs2ru/2.webp", w: 1800, h: 927 },
      { src: "/projects/cs2ru/3.webp", w: 1800, h: 931 },
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
      { src: "/projects/applily.co/1.webp", w: 1800, h: 1012 },
      { src: "/projects/applily.co/2.webp", w: 1800, h: 1018 },
      { src: "/projects/applily.co/3.webp", w: 1800, h: 1017 },
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
    shots: [{ src: "/projects/laravel/1.webp", w: 1800, h: 1005 }],
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
    date: "Mar 2020 — Present",
    company: "Independent",
    title: "Full-Stack Developer & Designer",
    bullets: [
      "TechScreen (techscreen.app) — Built and run a SaaS for interview assistance solo: 10,000+ users, $2k+ MRR, and 100% uptime since its March 2025 launch. Handles Stripe billing, AI-powered features, a cross-platform Electron app, multiple web systems (website, docs, admin CRM), and a custom monitoring and alerting stack.",
      "Quolly (quolly.app) — Built the full technical product for a real-time assistant that helps sales reps live during calls; now in closed beta with 400+ reps. Built solo; an agency now runs acquisition.",
      "MRR Island (mrris.land) — Designed and built a 3D interactive city (Three.js) where each building maps a public startup's MRR and growth.",
      "Take on contract work fixing AI-generated (\"vibe-coded\") codebases — refactoring, stabilizing, and shipping projects that had become unmaintainable.",
    ],
    tags: ["Next.js", "Swift", "Fastify", "Three.js", "PostgreSQL", "Docker"],
  },
  {
    date: "Mar 2023 — Jun 2026",
    company: "Fintech Gaming Platform (NDA)",
    title: "Full-Stack Developer & Designer",
    bullets: [
      "Built and designed several revenue-generating games and their backend systems for a fintech platform serving 100,000+ monthly users.",
      "Built an anti-fraud system that reliably detects and blocks 3,000+ abuse attempts per month.",
      "Designed and animated game interfaces, including 3D browser games built with Three.js.",
    ],
    tags: ["React", "Three.js", "Node.js", "PostgreSQL"],
  },
  {
    date: "Apr 2021 — Feb 2023",
    company: "CS2 CIS",
    title: "Full-Stack Developer & Automation Engineer",
    bullets: [
      "Built the web platform and automation behind a 130,000+ member competitive Counter-Strike community.",
      "Built a tournament registration platform (React, Express, PostgreSQL) with solo and full-team signups and skill-based matchmaking — 200+ teams, 1,000+ players.",
      "Built an admin dashboard for 100+ administrators to track stats, log actions, and manage rewards.",
      "Built Discord automation for onboarding, verification, and ticketing that processed 8,000+ requests.",
    ],
    tags: ["React", "Express.js", "PostgreSQL", "Discord.js", "SQLite"],
  },
  {
    date: "Aug 2020 — Feb 2021",
    company: "Web Studio DimaDim",
    title: "Web Developer",
    bullets: [
      "Delivered ~30 client websites (React, Node.js, CMS) — landing pages, entertainment apps, and business sites.",
      "Improved client SEO by ~60% and load times by ~40% on average.",
    ],
    tags: ["React", "Node.js", "CMS"],
  },
];
