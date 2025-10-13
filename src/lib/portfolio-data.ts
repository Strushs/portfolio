import { desc } from "framer-motion/client";

export const heroContent = {
  name: "Dawid Strużyński",
  title: "Front-End Developer & Computer Science Student",
  tagline:
    "I create responsive web applications with React, Next.js, and TypeScript while administering the systems they run on.",
  location: "Gdańsk, Poland · Open to hybrid or remote roles",
  availability:
    "Currently pursuing a B.Sc. in Computer Science at WSB Merito Gdańsk and open to junior front-end opportunities.",
  primaryCta: {
    label: "View my projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Download résumé",
    href: "/dawid-struzynski-cv.pdf",
  },
};

export const spotlightHighlights = [
  "Improved local network stability and speed by 20% while supporting users on-site.",
  "Deliver responsive React and Next.js interfaces backed by Supabase and REST APIs.",
  "Comfortable across Windows, Linux, Git workflows, and Agile/Scrum collaboration.",
];

export const projects = [
  {
    title: "WSB Finder",
    description:
      "A Tinder-inspired matching platform for WSB Merito students built with React, Next.js, and Supabase. Includes JWT authentication, REST API integration, and a fully responsive UI.",
    type: "personal",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "JWT"],
    liveUrl: "https://github.com/Strushs/wsbfinder",
    repoUrl: "https://github.com/Strushs/wsbfinder",
  },
  {
    title: "NextSTEP",
    description:
      "A web application that helps student's choose their field of study based on quiz, test's and AI. W.I.P",
    type: "personal",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "AI"],
    liveUrl: "https://github.com/Strushs/nextstepv1",
    repoUrl: "https://github.com/Strushs/nextstepv1",
  },
  {
    title: "Handmade Bracelets Store",
    description:
      "An e-commerce experience for a local artisan hosted at lesnapracownia.com. Implemented product listings, Supabase-backed content, and mobile-first layouts using React and Next.js.",
    type: "commercial",
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    liveUrl: "https://lesnapracownia.com",
    repoUrl: "https://github.com/Strushs/bransoletki",
  },
  {
    title: "Hangman Game",
    description:
      "Classic hangman built as a learning project with React and SCSS modules. Features keyboard interaction, animated state changes, and a clean component architecture.",
    type: "personal",
    tags: ["React", "TypeScript", "SCSS"],
    liveUrl: "https://github.com/Strushs/Wisielec",
    repoUrl: "https://github.com/Strushs/Wisielec",
  },
  {
    title: "Terminal Mockup",
    description:
      "Web-based terminal simulation showcasing command parsing, state management, and custom styling in React.",
    type: "personal",
    tags: ["React", "TypeScript"],
    liveUrl: "https://github.com/Strushs/Terminal",
    repoUrl: "https://github.com/Strushs/Terminal",
  },
];

export const skills = [
  {
    category: "Front-end",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
    ],
  },
  {
    category: "Back-end & Data",
    items: ["Supabase", "MySQL", "FastAPI", "Python", "C#"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "GitLab", "Docker", "VS Code"],
  },
  {
    category: "Systems & Practices",
    items: ["Linux", "Windows Server", "Agile/Scrum", "IT support"],
  },
];

export const timeline = [
  {
    year: "2024 — Present",
    title: "Computer Science Student",
    company: "WSB Merito Gdańsk",
    description:
      "B.Sc. Computer Science studies focused on modern web development, databases, and software engineering fundamentals.",
  },
  {
    year: "2023",
    title: "IT Technician",
    company: "ZDZ Słupsk · OKZ Połczyn-Zdrój",
    description:
      "Supported staff across Windows and Linux environments, improved the local network’s stability and speed by 20%, and deployed a refreshed web presence with WordPress.",
  },
  {
    year: "2021",
    title: "Computer Service Technician",
    company: "Techkom PPHU Rafał Miter",
    description:
      "Configured operating systems, installed drivers and software, diagnosed hardware issues, and provided day-to-day end-user support.",
  },
  {
    year: "2019 — 2024",
    title: "Secondary Education · INF.02 & INF.03",
    company: "ZSR CKZ Świdwin",
    description:
      "Completed technical secondary programme with certificates in computer science specialisations INF.02 and INF.03.",
  },
];

export const testimonials = [
  {
    quote:
      "Boosted our centre’s network reliability by 20% and took ownership of launching a modern website for the organisation.",
    name: "ZDZ Słupsk · OKZ Połczyn-Zdrój",
    title: "IT Department",
  },
  {
    quote:
      "Trusted to diagnose and repair complex hardware and software issues while keeping users productive across Windows and Linux.",
    name: "Techkom PPHU Rafał Miter",
    title: "Service Lead",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:dawidstruzynski1@wp.pl",
  },
  {
    label: "GitHub",
    href: "https://github.com/Strushs",
  },
  {
    label: "Phone",
    href: "tel:+48693199517",
  },
  {
    label: "Résumé (PDF)",
    href: "/dawid-struzynski-cv.pdf",
  },
];
