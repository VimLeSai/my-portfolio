/**
 * projects.js
 * All portfolio projects, cross-referenced with skills, tools, and companies.
 *
 * Import pattern:
 *   import { skills } from './skills';
 *   import { tools }  from './tools';
 *   import { companies } from './companies';
 *
 * Each project.skills  → array of skill objects from skills.js
 * Each project.tools   → array of tool objects from tools.js
 * Each project.company → single company object from companies.js
 */

import { skills } from './skills';
import { tools } from './tools';
import { companies } from './companies';

export const projects = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. StringERP
  // ─────────────────────────────────────────────────────────────────────────────
  stringerp: {
    id: 'string-erp',
    title: 'StringERP',
    tagline:
      'Enterprise-grade ERP built from the ground up for the textile industry.',
    tags: ['Enterprise SaaS', 'ERP', 'CRM'],
    role: 'Lead Architect & Full-Stack Engineer',
    platform: 'Web · Mobile-Responsive',
    industries: ['Textiles', 'Enterprise SaaS', 'ERP'],
    deliverables: [
      'Fully responsive marketing website',
      'Fully responsive ERP system',
      'Mobile-responsive app interface',
      'Implr — standalone micro-service product',
    ],
    url: 'https://www.stringerp.com/',
    featured: true,
    company: companies.knovator,
    period: { start: '2018', end: '2022' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.typescript,
      skills.nodejs,
      skills.mongodb,
      skills.tailwindcss,
      skills.redux,
      skills.docker,
      skills.scss,
      skills.graphql,
      skills.rabbitMq,
      skills.aws,
      skills.gitlabCiCd,
    ],
    tools: [
      tools.openproject,
      tools.slack,
      tools.clickup,
      tools.postman,
      tools.docker,
      tools.linux,
      tools.git,
      tools.gitlab,
    ],

    impact:
      'Reduced new module integration time from days to under 10 minutes via a reusable module-based architecture; processed high-volume daily textile transactions with 99.98% data integrity through distributed locking.',

    overview:
      'StringERP is a real-time enterprise resource planning system purpose-built for mid-to-large textile enterprises. I architected and built the entire platform from scratch — from the public marketing site through to the core ERP system and a standalone micro-service product (Implr). The platform handles complex financial ledgers, purchase/sales orders, and inventory workflows for a business processing thousands of transactions daily.',

    challenges: [
      {
        label: 'Race Conditions at Scale',
        value: `As the client's business grew, multiple employees began updating purchase and sales orders simultaneously, causing data mismatches and corrupt entries. I implemented MongoDB transactions and distributed locking to guarantee atomic, consistent writes across concurrent operations.`,
      },
      {
        label: 'Bulk Data Import',
        value:
          'Clients needed to migrate legacy textile data via Excel/CSV uploads. I built a RabbitMQ-backed import queue to process requests sequentially, prevent overload, and send confirmation emails once imports completed.',
      },
      {
        label: 'Module Integration Bottleneck',
        value:
          'Onboarding new domain modules was slow and inconsistent. I designed a reusable, copy-paste module architecture that cut integration time to under 10 minutes per module.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Modular Frontend Architecture',
        description:
          'Established a reusable component library and module-based folder structure, enabling rapid feature additions without regression risk.',
      },
      {
        icon: 'distributed-locking',
        title: 'Distributed Locking via MongoDB Transactions',
        description:
          'Ensured atomic operations across concurrent multi-user writes, eliminating data corruption under load.',
      },
      {
        icon: 'queue',
        title: 'RabbitMQ Import Queue',
        description:
          'Decoupled heavy CSV import jobs from the request cycle, giving users reliable async feedback via email.',
      },
      {
        icon: 'cicd',
        title: 'CI/CD & Container Management',
        description:
          'Managed full server infrastructure, Docker containerization, and GitLab CI/CD pipelines for automated, predictable bi-weekly releases.',
      },
    ],

    impacts: [
      {
        label: 'Module Integration Time',
        before: 'Days of manual wiring',
        after: 'Under 10 minutes',
      },
      {
        label: 'Data Integrity',
        before: 'Frequent race-condition corruption',
        after: '99.98% integrity with distributed locking',
      },
      {
        label: 'Team Scale',
        before: 'Solo architect',
        after: 'Led cross-functional team of 11–20',
      },
      {
        label: 'Projects Delivered',
        before: '0',
        after: '50+ across multiple industries',
      },
    ],

    markdown: `
I led the end-to-end development of **StringERP**, architecting and building the platform from scratch using React and Next.js. I established strong engineering standards with ESLint, Prettier, Commitlint, and Docker to ensure code quality, consistency, and scalable resource management.

From project inception, I oversaw product planning, client communication, requirement analysis, and feature roadmapping. I managed sprint cycles and delivered production releases every 15 days, ensuring predictable and stable deployments. I handled server infrastructure, containerization, and CI/CD pipelines using Docker and GitLab CI/CD.

We implemented several unique, domain-specific features — including a real-time ledger, distributed import queue, and a micro-service spin-off product (Implr) — that set StringERP apart from typical off-the-shelf ERP solutions.
    `.trim(),

    image: '/assets/projects/string-erp/thumbnail.png',
    showcaseImages: [
      '/assets/projects/notloco/hero-section.png',
      '/assets/projects/notloco/how-it-works.png',
      '/assets/projects/notloco/testimonial.png',
    ],
    webViewDemo: '/assets/projects/notloco/website-demo.mov',
    mobileViewDemo: '/assets/projects/rampnow/Movile View Showcase.mp4',

    featured: true,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Mastery Logistics System (Mastery Cloud TMS)
  // ─────────────────────────────────────────────────────────────────────────────
  masterylogistics: {
    id: 'mastery-logistics',
    title: 'Mastery Logistics System',
    tagline:
      'Enterprise TMS with a zero-downtime MySQL → PostgreSQL migration at scale.',
    tags: ['Logistics', 'SaaS', 'TMS', 'Database Migration'],
    role: 'Full-Stack Engineer',
    platform: 'Web · SaaS',
    industries: ['Logistics', 'Transportation', 'Enterprise SaaS'],
    deliverables: [
      'Responsive logistics dashboard UI',
      'Modular NestJS API layer',
      'Full MySQL → PostgreSQL migration strategy',
      'Custom TypeScript data-integrity verification script',
      'GraphQL-optimized data fetching layer',
    ],
    url: 'https://www.mastery.net/',
    featured: true,
    company: companies.emtec,
    period: { start: '2022', end: '2023' },

    skills: [
      skills.react,
      skills.typescript,
      skills.redux,
      skills.reduxToolkit,
      skills.nestjs,
      skills.nodejs,
      skills.graphql,
      skills.postgresql,
      skills.mysql,
    ],
    tools: [tools.jmeter, tools.postman, tools.git, tools.github],

    impact:
      'Achieved 100% data integrity across a full MySQL → PostgreSQL migration for mission-critical logistics data, eliminating manual QA of thousands of records via a custom real-time comparison automation script.',

    overview: `Mastery Cloud TMS is a high-traffic SaaS platform serving large-scale transportation and logistics providers. I joined as a Full-Stack Engineer with a primary focus on frontend performance and a pivotal role in driving the platform's database migration from MySQL to PostgreSQL — all while keeping the system live for customers.`,

    challenges: [
      {
        label: 'Zero-Downtime Database Migration',
        value:
          'Migrating a production logistics database from MySQL to PostgreSQL without service interruption required careful planning, phased execution, and real-time validation against both systems simultaneously.',
      },
      {
        label: 'Manual QA Bottleneck',
        value:
          'Verifying thousands of migrated records manually was infeasible. A scalable automation approach was needed to catch discrepancies before the production cutover.',
      },
      {
        label: 'API Performance Under Load',
        value:
          'The platform required strict P90 latency targets under concurrent load, demanding rigorous benchmarking and optimization of NestJS API endpoints.',
      },
    ],

    approach: [
      {
        icon: 'migration',
        title: 'Phased DB Migration Strategy',
        description:
          'Authored PRDs and technical migration maps to guide a structured, risk-mitigated transition from MySQL to PostgreSQL, including specialized handling for geolocation data.',
      },
      {
        icon: 'automation',
        title: 'Data Integrity Automation Script',
        description:
          'Built a TypeScript script that simultaneously queried both databases, performed deep record comparison, and generated discrepancy reports — replacing manual QA entirely.',
      },
      {
        icon: 'graphql',
        title: 'GraphQL Query Optimization',
        description:
          'Audited schemas to remove unnecessary fields and applied strategic database indexes, making PostgreSQL queries faster than the legacy MySQL system.',
      },
      {
        icon: 'performance',
        title: 'P90 Load Testing',
        description:
          'Used JMeter to benchmark API endpoints at the 90th percentile response time, ensuring the system handled high-concurrency loads without latency spikes.',
      },
    ],

    impacts: [
      {
        label: 'Data Integrity',
        before: 'Manual verification of thousands of records',
        after: '100% automated validation, zero data loss',
      },
      {
        label: 'QA Overhead',
        before: 'Days of manual QA before production cutover',
        after: 'Real-time automated comparison reports',
      },
      {
        label: 'Query Performance',
        before: 'Legacy MySQL query times',
        after: 'Faster queries in PostgreSQL via strategic indexing',
      },
    ],

    markdown: `
At **Mastery Logistics**, I contributed to the Mastery Cloud TMS — a high-traffic SaaS platform for large-scale transportation management.

I developed responsive UIs using **TypeScript and Redux Toolkit**, and built modular APIs with **NestJS** in a monorepo architecture. A major highlight was driving the **full-scale database migration from MySQL to PostgreSQL**. I authored the technical PRDs, optimized data fetching via **GraphQL** with strategic indexing, and engineered a custom **TypeScript automation script** that performed real-time comparative analysis between both databases, generating discrepancy reports automatically.

This eliminated manual QA and ensured a seamless, zero-data-loss production cutover.
    `.trim(),

    image: '/assets/projects/mastery/thumbnail.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. RentBase
  // ─────────────────────────────────────────────────────────────────────────────
  rentbase: {
    id: 'rentbase',
    title: 'RentBase',
    tagline:
      'Rental leads CRM built from scratch with a three-person team and a former Zillow lead.',
    tags: ['Real Estate', 'CRM', 'PropTech', 'Startup'],
    role: 'Senior Full-Stack Engineer',
    platform: 'Web · SaaS',
    industries: ['Real Estate', 'PropTech', 'CRM'],
    deliverables: [
      'Full rental portal frontend (React + TypeScript)',
      'Reusable component library',
      'NestJS backend APIs',
      'TransUnion background & credit check integration',
      'Full-flow Postman E2E automation suite',
    ],
    url: null,
    featured: true,
    company: companies.emtec,
    period: { start: '2022', end: '2023' },

    skills: [
      skills.react,
      skills.typescript,
      skills.nestjs,
      skills.nodejs,
      skills.mongodb,
      skills.cypress,
      skills.graphql,
    ],
    tools: [tools.postman, tools.git, tools.github, tools.apache],

    impact:
      'Reduced manual QA time by over 70% through a full-flow Postman automation suite covering the entire renter-agent-property lifecycle, enabling zero-defect deployments for a small team with no dedicated QA.',

    overview:
      'RentBase is a US-based Rental Leads CRM and Listings Database automating the relationship between landlords, agents, and renters. I joined as a Senior Full-Stack Engineer in a lean three-person core team, working in a tight feedback loop with the CEO — a former Lead at Zillow. I owned the entire frontend and contributed significantly to backend APIs and third-party integrations.',

    challenges: [
      {
        label: 'No Dedicated QA Team',
        value:
          'With a three-person team and no QA engineer, manual testing of the lengthy onboarding and listing flows was a critical bottleneck that threatened deployment stability.',
      },
      {
        label: 'Sensitive Third-Party Integration',
        value:
          'The TransUnion credit and background check integration required careful handling of sensitive renter PII, reliable webhook processing, and accurate data surfacing in the dashboard.',
      },
      {
        label: 'Frontend Architecture from Zero',
        value:
          'The portal needed a scalable, reusable component system that could grow with the product without accumulating technical debt.',
      },
    ],

    approach: [
      {
        icon: 'automation',
        title: 'Postman Full-Flow Automation Suite',
        description:
          'Engineered pre-request and post-request Postman scripts that automated the entire user lifecycle — renter creation, agent creation, property listing, interest simulation, and final report generation — replacing manual QA entirely.',
      },
      {
        icon: 'integration',
        title: 'TransUnion API Integration',
        description:
          'Built the complete integration layer for automated credit and background checks, surfacing results in real time within the RentBase dashboard.',
      },
      {
        icon: 'architecture',
        title: 'Reusable Component Library',
        description:
          'Architected a modular React component system with TypeScript, ensuring UI consistency across complex flows like onboarding, listings, and reporting.',
      },
    ],

    impacts: [
      {
        label: 'Manual QA Time',
        before: 'Hours of manual testing per deployment',
        after: '70%+ reduction via automated Postman suite',
      },
      {
        label: 'Deployment Confidence',
        before: 'Risk of regression in multi-role flows',
        after: 'Zero-defect deployments on complex onboarding features',
      },
    ],

    markdown: `
As a **Senior Full-Stack Engineer** in a high-impact team of three, I collaborated directly with the CEO (a former Lead at Zillow) to build the **RentBase** rental portal from the ground up.

I held full ownership of the frontend architecture, developing a reusable component library and high-performance responsive UI using **React.js and TypeScript**. On the backend, I built **NestJS APIs** and executed mission-critical integrations with **TransUnion** for automated renter background and credit checks.

Operating without a dedicated QA team, I engineered a comprehensive **end-to-end automated testing suite** using Postman's pre/post-request scripting, covering the entire user lifecycle from account creation to final report generation. This reduced manual testing overhead by over **70%** and ensured stable, zero-defect deployments.
    `.trim(),

    image: '/assets/projects/rentbase/thumbnail.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Africa Business Console (ETK)
  // ─────────────────────────────────────────────────────────────────────────────
  africaconsole: {
    id: 'africa-business-console',
    title: 'Africa Business Console',
    tagline:
      "ETK's first digital platform for cross-border business operations across Africa.",
    tags: ['Enterprise', 'Cross-Border Operations', 'Dashboard'],
    role: 'Senior Full-Stack Engineer',
    platform: 'Web · Enterprise SaaS',
    industries: ['Business Services', 'Cross-Border Trade', 'Enterprise'],
    deliverables: [
      'Centralized cross-border operations platform',
      'Scalable component architecture',
      'Enterprise-grade folder structure and code standards',
    ],
    url: null,
    featured: false,
    company: companies.emtec,
    period: { start: '2022', end: '2023' },

    skills: [
      skills.react,
      skills.typescript,
      skills.nodejs,
      skills.nestjs,
      skills.postgresql,
      skills.tailwindcss,
      skills.redux,
    ],
    tools: [tools.git, tools.github, tools.postman, tools.docker],

    impact:
      "Delivered ETK's first digital platform, establishing enterprise-level architectural patterns and reusable component standards that support long-term maintainability across diverse regulatory environments.",

    overview:
      'The Africa Business Console is the first digital platform launched by ETK, designed to provide end-to-end solutions for companies conducting business in, out of, and within Africa. The platform streamlines cross-border operations through a centralized, scalable system tailored to diverse regulatory and operational requirements across the continent.',

    challenges: [
      {
        label: 'Regulatory Diversity',
        value:
          'Operating across multiple African markets meant the platform needed to be highly adaptable to differing regulatory, currency, and compliance requirements without a complete rebuild per country.',
      },
      {
        label: 'Long-Term Maintainability',
        value:
          'Being the first digital product for ETK, architectural decisions would define how the platform scaled. Strong patterns were critical from day one.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Scalable Component Architecture',
        description:
          'Designed highly reusable and adaptable components with clean separation of concerns, enabling rapid feature additions without structural changes.',
      },
      {
        icon: 'standards',
        title: 'Enterprise Code Standards',
        description:
          'Established scalable folder structures, naming conventions, and architectural patterns aligned with enterprise-level expectations.',
      },
    ],

    impacts: [
      {
        label: 'Platform Launch',
        before: 'No digital presence',
        after: "ETK's first fully digital operations platform",
      },
    ],

    markdown: `
The **Africa Business Console** is the first digital platform launched by ETK, providing end-to-end solutions for companies conducting business across Africa.

Through this project, I strengthened my ability to design highly reusable and adaptable components, implement scalable folder structures, and establish clean architectural patterns to support long-term maintainability — aligning development standards with enterprise-level expectations across diverse regulatory environments.
    `.trim(),

    image: '/assets/projects/etk/etk-hero-section.png',
    showcaseImages: [
      '/assets/projects/etk/etk-hero-section.png',
      '/assets/projects/etk/etk-services.png',
      '/assets/projects/etk/etk-profile.png',
      '/assets/projects/etk/etk-onboarding.png',
      '/assets/projects/etk/full-landing-page.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. UpKeep Platform (Preventive Maintenance & Release Engineering)
  // ─────────────────────────────────────────────────────────────────────────────
  upkeepplatform: {
    id: 'upkeep-platform',
    title: 'UpKeep Platform',
    tagline:
      'Release engineering and full-stack contributions for a high-traffic CMMS SaaS.',
    tags: ['CMMS', 'Enterprise SaaS', 'ERP', 'Release Engineering'],
    role: 'Sr. Software Engineer · Release Engineer',
    platform: 'Web · Mobile-Responsive · SaaS',
    industries: ['Software', 'CMMS', 'Enterprise Resource Planning'],
    deliverables: [
      'Platform-wide zero-downtime release pipeline',
      'Preventive Maintenance module optimizations',
      'AI hackathon POC for cross-service data consistency',
      'Shared component library contributions',
      'Consumer service integrations',
    ],
    url: 'https://www.upkeep.com/',
    featured: true,
    company: companies.upkeep,
    period: { start: '2023', end: 'Present' },

    skills: [
      skills.javascript,
      skills.typescript,
      skills.react,
      skills.nextjs,
      skills.nodejs,
      skills.angular,
      skills.postgresql,
      skills.mongodb,
      skills.docker,
      skills.cypress,
      skills.playwright,
      skills.jest,
      skills.awsSns,
      skills.awsSqs,
      skills.openai,
    ],
    tools: [
      tools.git,
      tools.github,
      tools.vercel,
      tools.postman,
      tools.cursorAi,
      tools.openai,
      tools.slack,
    ],

    impact:
      'Doubled sprint velocity from 16 to 40+ story points through AI tooling and workflow automation; recognized twice as "Leader of the Month" and secured 3rd place in an internal AI hackathon for a data-consistency POC.',

    overview:
      'UpKeep is a leading mobile-first CMMS and asset operations management platform used by maintenance and reliability teams globally. As a Sr. Software Engineer, I serve as the primary Release Engineer, own full-stack contributions across frontend, backend, and shared libraries, and act as a key contributor to the Preventive Maintenance module.',

    challenges: [
      {
        label: 'Release Reliability at Scale',
        value:
          'Coordinating platform-wide releases across multiple services and teams without downtime required a disciplined release engineering process and deep cross-team communication.',
      },
      {
        label: 'Sprint Velocity Ceiling',
        value:
          'The team was capped at ~16 story points per sprint. Without sacrificing quality, velocity needed to scale to meet growing product demands.',
      },
      {
        label: 'Data Consistency Across Services',
        value:
          'Disparate microservices created data consistency challenges that impacted product reliability. Identified and prototyped a solution during an internal AI hackathon.',
      },
    ],

    approach: [
      {
        icon: 'release',
        title: 'Release Engineering Leadership',
        description:
          'Established and led the release engineering process for the entire platform, coordinating zero-downtime deployments across services and teams.',
      },
      {
        icon: 'ai',
        title: 'AI & Automation-Driven Velocity',
        description:
          'Leveraged Cursor AI, OpenAI integrations, and workflow automation tools to more than double sprint throughput without compromising code quality.',
      },
      {
        icon: 'optimization',
        title: 'Preventive Maintenance Module',
        description:
          'Optimized performance, reduced architectural complexity, and improved workflow efficiency for end-users in the core PM module.',
      },
    ],

    impacts: [
      {
        label: 'Sprint Velocity',
        before: '16 story points per sprint',
        after: '40+ story points per sprint',
      },
      {
        label: 'Recognition',
        before: '',
        after: 'Leader of the Month — 2× | AI Hackathon — 3rd place',
      },
    ],

    markdown: `
At **UpKeep**, I serve as the primary **Release Engineer**, leading platform-wide releases and ensuring smooth, zero-downtime deployments across a high-traffic CMMS SaaS product.

I contribute across the full stack — frontend, backend, shared component libraries, and consumer services. As a key contributor to the **Preventive Maintenance module**, I optimized performance and reduced architectural complexity to improve the end-user workflow.

By integrating AI tools and workflow automation (Cursor AI, OpenAI), I helped increase team sprint velocity from **16 to over 40 story points** without compromising code quality. I was recognized twice as **"Leader of the Month"** and placed **3rd in an internal AI hackathon** for a POC that substantially improved data consistency across services.
    `.trim(),

    image: '/assets/projects/upkeep/thumbnail.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Micqro
  // ─────────────────────────────────────────────────────────────────────────────
  micqro: {
    id: 'micqro',
    title: 'Micqro',
    tagline:
      'A quiz-first social media platform with polls, ratings, and community discussions.',
    tags: ['Social Media', 'Quizzes', 'Community'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Social Media', 'EdTech'],
    deliverables: [
      'Quiz and poll creation interface',
      'Feed with answer distribution analytics',
      'Community groups and 1-on-1 messaging',
      'AWS + Vercel deployment',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.typescript,
      skills.javascript,
      skills.scss,
      skills.aws,
    ],
    tools: [tools.git, tools.github, tools.vercel],

    impact:
      'Delivered a unique social platform that moves beyond image-based content to enable data-rich quiz and poll interactions with live analytics in the feed.',

    overview:
      'Micqro is a social media platform focused on quizzes and information sharing rather than image posts. Users can post polls, ratings, location-based queries, and single/multiple-choice questions, and view answer distributions in their feed. The platform also includes community groups and one-on-one conversations.',

    challenges: [
      {
        label: 'Real-Time Analytics in Feed',
        value:
          'Displaying live distributions and analyses for each quiz post in a performant feed required careful data handling and UI design.',
      },
    ],

    approach: [
      {
        icon: 'frontend',
        title: 'React + Next.js',
        description:
          'Built the full frontend using React and Next.js, with GitHub for code synchronization across the team.',
      },
    ],

    impacts: [],

    markdown: `
**Micqro** is a quiz-first social platform that replaces image feeds with interactive questions — polls, ratings, location queries, and multi-choice posts. Users see answer distributions in their feed and can engage through community groups or 1-on-1 messages. Built with **React.js and Next.js**, deployed on AWS and Vercel.
    `.trim(),
    image: '/assets/projects/micqro/thumbnail.png',
    showcaseImages: [
      '/assets/projects/micqro/micqro-welcome.png',
      '/assets/projects/micqro/micqro-welcome-thank-you.png',
      '/assets/projects/micqro/micqro-quiz.png',
      '/assets/projects/micqro/micqro-feed.png',
      '/assets/projects/micqro/micqro-profile.png',
      '/assets/projects/micqro/micqro-mention.png',
      '/assets/projects/micqro/micqro-media-modal.png',
      '/assets/projects/micqro/micqro-currency.png',
      '/assets/projects/micqro/micqro-chat-sent.png',
      '/assets/projects/micqro/micqro-chat-attachment-sent.png',
      '/assets/projects/micqro/micqro-long-text-quiz.png',
      '/assets/projects/micqro/micqro-feed-mobile.png',
    ],
    featured: true,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // (not)Loco — Mental Health Therapy Platform
  // ─────────────────────────────────────────────────────────────────────────────
  notloco: {
    id: 'not-loco',
    title: '(not)Loco',
    tagline:
      'A calm, conversion-focused website for a modern online therapy platform.',
    tags: ['Healthcare', 'Mental Health', 'UI Design', 'Marketing Site'],
    role: 'UI Design & Development',
    platform: 'Web',
    industries: ['Healthcare', 'Mental Health', 'Therapy'],
    deliverables: [
      'Full website design and development',
      'Responsive UI for therapy platform',
      'Figma design to code implementation',
    ],
    url: null,
    featured: false,
    company: null, // freelance / independent
    period: { start: '2023', end: '2023' },

    skills: [
      skills.nextjs,
      skills.tailwindcss,
      skills.react,
      skills.typescript,
    ],
    tools: [tools.git, tools.vercel],

    impact:
      'Delivered a calm, trustworthy, and conversion-focused web experience tailored to a mental health audience — balancing emotional warmth with clean, minimal UI.',

    overview:
      '(not)Loco is a modern online therapy platform connecting users with licensed therapists via voice notes and video check-ins. I designed and developed the full website from Figma designs — with a strong emphasis on creating an emotionally appropriate, accessible, and conversion-optimised experience for users seeking mental health support.',

    challenges: [
      {
        label: 'Tone and Trust',
        value:
          'Mental health audiences require interfaces that feel calm and trustworthy. Every design choice — typography, spacing, color — needed to carry emotional weight without feeling clinical or cold.',
      },
    ],

    approach: [
      {
        icon: 'design',
        title: 'Figma to Production',
        description:
          'Translated detailed Figma designs into pixel-perfect, responsive Next.js components with Tailwind CSS — preserving every detail of the therapeutic aesthetic.',
      },
    ],

    impacts: [],

    markdown: `
**(not)Loco** is an online therapy platform connecting users with licensed therapists. I designed and built the full website, translating Figma designs into a responsive, production-ready **Next.js + Tailwind CSS** site — with careful attention to emotional tone, accessibility, and conversion design for a mental health audience.
    `.trim(),

    image: '/assets/projects/notloco/hero-section.png',
    showcaseImages: [
      '/assets/projects/notloco/hero-section.png',
      '/assets/projects/notloco/how-it-works.png',
      '/assets/projects/notloco/testimonial.png',
    ],
    webViewDemo: '/assets/projects/notloco/website-demo.mov',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Rampnow — Payment Platform Frontend
  // ─────────────────────────────────────────────────────────────────────────────
  rampnow: {
    id: 'rampnow',
    title: 'Rampnow',
    tagline:
      'Sole frontend engineer on a global payment platform — four modules, one engineer.',
    tags: ['Fintech', 'Payments', 'Admin Console', 'Dashboard'],
    role: 'Sole Frontend Engineer',
    platform: 'Web · SaaS',
    industries: ['Fintech', 'Payments', 'B2B SaaS'],
    deliverables: [
      'Public-facing landing page',
      'Payment checkout widget',
      'Internal admin console',
      'Merchant-facing dashboard',
      'Payment gateway API integration',
      'Webhook endpoint wiring',
    ],
    url: null,
    featured: true,
    company: null, // freelance / independent
    period: { start: '2023', end: '2024' },

    skills: [
      skills.nextjs,
      skills.tailwindcss,
      skills.react,
      skills.typescript,
      skills.nodejs,
    ],
    tools: [tools.git, tools.github, tools.postman, tools.vercel],

    impact:
      'Delivered four distinct, production-ready product modules as the sole frontend engineer — from public landing page to payment checkout widget to multi-role admin and merchant consoles — fully wired to live backend services.',

    overview:
      'Rampnow is a global payment infrastructure platform enabling merchants to accept and manage payments. I was brought on as the sole frontend engineer responsible for the entire client-facing product — architecting and building from initial wireframes to production-ready, API-integrated modules across four distinct user roles.',

    challenges: [
      {
        label: 'Four Modules, One Engineer',
        value:
          'The product required four purpose-built UIs — public visitors, paying customers, merchants, and internal admins — each with distinct access-controlled API calls and flows.',
      },
      {
        label: 'End-to-End Payment Integrations',
        value:
          'Integrating payment gateway APIs, hosted payment page flows, and webhook endpoints required careful handling of edge cases and error states throughout the entire payment lifecycle.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Sole Frontend Ownership',
        description:
          'Took complete ownership of the frontend architecture — from wireframes through to production — ensuring each of the four modules shared a consistent design system and component library.',
      },
      {
        icon: 'integration',
        title: 'End-to-End API Wiring',
        description:
          'Integrated payment gateway APIs, connected webhook endpoints, and wired both merchant and admin consoles to live backend services — handling all edge cases and error states.',
      },
      {
        icon: 'responsive',
        title: 'Pixel-Perfect Responsive Design',
        description:
          'Translated provided design files into clean, responsive UI code working seamlessly across desktop, tablet, and mobile — zero layout breakage.',
      },
    ],

    impacts: [
      {
        label: 'Modules Delivered',
        before: '0',
        after: '4 distinct modules (landing, checkout, admin, merchant)',
      },
      {
        label: 'Team Size',
        before: '',
        after: 'Sole frontend engineer on a live fintech product',
      },
    ],

    markdown: `
**Rampnow** is a global payment infrastructure platform. As the **sole frontend engineer**, I designed and built the entire client-facing product — a public landing page, a payment checkout widget, an internal admin console, and a merchant dashboard.
 
I integrated payment gateway APIs, wired webhook endpoints, and connected both consoles to live backend services — handling all edge cases throughout. Four modules, one engineer, fully production-ready.
    `.trim(),

    image: '/assets/projects/rampnow/thumbnail.png',
    showcaseImages: [
      '/assets/projects/rampnow/landing-section.png',
      '/assets/projects/rampnow/connectivity-section.png',
      '/assets/projects/rampnow/how-it-works-section.png',
      '/assets/projects/rampnow/supported-methods-section.png',
      '/assets/projects/rampnow/get-demo-section.png',
      '/assets/projects/rampnow/footer.png',
      '/assets/projects/rampnow/merchant-widget-checkout.png',
      '/assets/projects/rampnow/merchant-widget-details.png',
      '/assets/projects/rampnow/merchant-widget-methods.png',
    ],
    mobileviewVideo: '/assets/projects/rampnow/Movile View Showcase.mp4',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Textile Aadhar
  // ─────────────────────────────────────────────────────────────────────────────
  textileaadhar: {
    id: 'textile-aadhar',
    title: 'Textile Aadhar',
    tagline:
      'E-commerce platform for Zari, Threads, and Yarn with a dynamic, admin-managed storefront.',
    tags: ['Textiles', 'E-commerce', 'Admin Panel'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['Textiles', 'E-commerce'],
    deliverables: [
      'Customer-facing e-commerce website',
      'Admin panel for product and category management',
      'Dynamic landing page customizable via admin',
    ],
    url: 'https://www.textileaadhar.com/',
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.javascript,
      skills.nodejs,
      skills.mongodb,
      skills.scss,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Delivered the first project I managed end-to-end — built an admin-driven dynamic storefront that taught the importance of rigorous verification in what you ship.',

    overview:
      'Textile Aadhar is an e-commerce platform for textile products including Zari, Threads, and Yarn. The platform includes an admin panel and a user-facing website with a dynamic landing page — entirely customizable by the admin, including which product categories are displayed and what details each contains. This was the first project I managed from end to end.',

    challenges: [
      {
        label: 'Admin-Driven Dynamic UI',
        value:
          'The landing page layout, category visibility, and product detail fields all needed to be controllable by the admin without any code changes.',
      },
    ],

    approach: [
      {
        icon: 'dynamic',
        title: 'Config-Driven Storefront',
        description:
          'Built a configuration-driven frontend where the admin panel controls landing page content, category structure, and product field visibility — no deployments needed for content changes.',
      },
    ],

    impacts: [],

    markdown: `
**Textile Aadhar** is an e-commerce platform for textile products (Zari, Threads, Yarn). I built the user website and admin panel with a fully dynamic, admin-configurable landing page. This was my first project as manager — it taught me the necessity of thorough verification before shipping.
    `.trim(),

    image: '/assets/projects/textileaadhar/landing-page.png',
    showcaseImages: [
      '/assets/projects/textileaadhar/landing-page.png',
      '/assets/projects/textileaadhar/product-page.png',
      '/assets/projects/textileaadhar/results-page.png',
      '/assets/projects/textileaadhar/cart-page.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Textile ERP
  // ─────────────────────────────────────────────────────────────────────────────
  textileerp: {
    id: 'textile-erp',
    title: 'Textile ERP',
    tagline:
      'End-to-end fabric and design ERP covering inventory, recipes, manufacturing, and sales.',
    tags: ['Textiles', 'ERP', 'Admin Panel'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Textiles', 'Manufacturing', 'ERP'],
    deliverables: [
      'Design management module',
      'Recipe (cloth design pattern) management',
      'Warp and Weft calculation engine',
      'Manufacturing and inventory management',
      'Sales and purchase order management',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [
      skills.react,
      skills.javascript,
      skills.nodejs,
      skills.mongodb,
      skills.scss,
      skills.redux,
    ],
    tools: [tools.git, tools.gitlab],

    impact:
      'Delivered a domain-specific ERP handling the full textile manufacturing lifecycle — from design recipe calculations through to inventory and sales.',

    overview:
      'A textile-specific ERP system covering the full fabric and design business workflow. The admin panel manages designs, recipes (cloth design patterns), Warp and Weft calculations based on recipes, and the complete manufacturing cycle including inventory management, sales orders, and purchase orders.',

    challenges: [
      {
        label: 'Domain-Specific Calculations',
        value:
          'Warp and Weft calculations are highly domain-specific and formula-driven, requiring deep understanding of textile manufacturing logic to implement correctly.',
      },
    ],

    approach: [
      {
        icon: 'domain',
        title: 'Deep Domain Collaboration',
        description:
          'Worked closely with the client to understand textile manufacturing workflows, translating them into reliable, formula-driven modules.',
      },
    ],

    impacts: [],

    markdown: `
A domain-specific **Textile ERP** covering the full manufacturing lifecycle — design management, cloth design recipe management, Warp and Weft calculations, inventory, and sales and purchase orders. Deep collaboration with the client was essential to translate complex textile domain logic into reliable software.
    `.trim(),

    image: '/assets/projects/textileerp/dashboard.png',
    showcaseImages: [
      '/assets/projects/textileerp/add-design.png',
      '/assets/projects/textileerp/add-po.png',
      '/assets/projects/textileerp/add-so.png',
      '/assets/projects/textileerp/add-thread.png',
      '/assets/projects/textileerp/add-yarn-so.png',
      '/assets/projects/textileerp/list-sales.png',
      '/assets/projects/textileerp/side-nav.png',
      '/assets/projects/textileerp/thumbnail.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Tatkal Jobs
  // ─────────────────────────────────────────────────────────────────────────────
  tatkaljobs: {
    id: 'tatkal-jobs',
    title: 'Tatkal Jobs',
    tagline:
      'Recruitment consultancy platform with animated infographics and a full admin panel.',
    tags: ['Job Portal', 'Recruitment', 'Admin Panel'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['HR Tech', 'Recruitment'],
    deliverables: [
      'Admin panel (jobs, interviews, students, agencies, employees)',
      'User-facing job portal',
      'Animated infographic components for About page',
    ],
    url: 'https://www.tatkaljobs.com/',
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [
      skills.react,
      skills.javascript,
      skills.redux,
      skills.scss,
      skills.nodejs,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Deepened expertise in Redux state management and bundle optimization while delivering a full recruitment platform with custom animated infographics.',

    overview:
      'Tatkal Jobs is a recruitment consultancy with a full admin panel and public-facing job portal. The admin manages jobs, interviews, student profiles, agencies, and employees. I also designed and built animated infographic components for the About Us page. This project was pivotal in deepening my understanding of Redux, compilation, and bundle optimization.',

    challenges: [
      {
        label: 'Complex State Management',
        value:
          'The admin panel managed multiple entity types with complex relationships — jobs, interviews, agencies, students, and employees — requiring disciplined Redux architecture.',
      },
    ],

    approach: [
      {
        icon: 'state',
        title: 'Redux Architecture',
        description:
          'Applied Redux deeply for the first time on this project — learning state normalization, selectors, and bundle optimization in production.',
      },
      {
        icon: 'animation',
        title: 'Animated Infographics',
        description:
          'Built custom animated SVG/CSS infographic components for the About Us page.',
      },
    ],

    impacts: [],

    markdown: `
**Tatkal Jobs** is a recruitment consultancy platform. I contributed to both the admin panel (managing jobs, interviews, students, agencies, employees) and the user-facing site. I also created custom **animated infographics** for the About Us page. This project significantly deepened my understanding of **Redux**, compilation, and frontend bundle optimization.
    `.trim(),

    image: '/assets/projects/tatkaljobs/thumbnail.png',
    showcaseImages: [
      '/assets/projects/tatkaljobs/landing-page.png',
      '/assets/projects/tatkaljobs/about-us.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // FlightsTravel
  // ─────────────────────────────────────────────────────────────────────────────
  flightsstravel: {
    id: 'flights-travel',
    title: 'FlightsTravel',
    tagline:
      'Refactored a legacy flight-booking platform to restore performance and search reliability.',
    tags: ['Travel', 'Performance', 'Refactor'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Travel', 'E-commerce'],
    deliverables: [
      'Full refactor of search and results pages',
      'Filter logic rewrite — looping reduced from 368× to 33×',
      'Performance and rendering optimization',
    ],
    url: 'https://www.flightstravel.co.uk/',
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },

    skills: [
      skills.react,
      skills.javascript,
      skills.typescript,
      skills.redux,
      skills.scss,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Reduced a catastrophic filter-loop from 368 iterations (doubling on each interaction) down to a flat 33 — regardless of how many filters are applied — restoring a seamless search experience.',

    overview:
      'FlightsTravel.co.uk is a prominent UK travel brand owned and marketed by Flights & Travels Ltd. The platform suffered from a severely degraded search and results experience: filters triggered cascading re-renders, logic was tangled with excessive branching, and performance degraded exponentially with each filter selection. I was brought in to diagnose, refactor, and optimise.',

    challenges: [
      {
        label: 'Exponential Loop Growth',
        value:
          'Selecting one filter caused 368 iterations. Selecting a second doubled that to ~700. A third pushed it to ~1,300. Users were left waiting after every filter interaction — the problem compounded with each click.',
      },
      {
        label: 'Legacy Codebase Complexity',
        value:
          'The existing code accessed filter state as an array of selected options, creating deeply nested conditional logic that a previous engineer had worked on for a month without resolution.',
      },
    ],

    approach: [
      {
        icon: 'refactor',
        title: 'Filter State as an Object',
        description:
          'Rewrote filter state from an array of selected values to a keyed object. This eliminated the need to loop over all options on every state change — reducing iterations from hundreds to a flat 33, regardless of how many filters are active.',
      },
      {
        icon: 'performance',
        title: 'Logic Simplification',
        description:
          'Spent a full day understanding the existing functionality holistically before writing a line of code. Resolved the entire issue the following day.',
      },
    ],

    impacts: [
      {
        label: 'Filter Loop Iterations',
        before: '368 (doubling on each additional filter)',
        after: '33 — flat, regardless of filter count',
      },
      {
        label: 'Time to Resolution',
        before: '1 month (previous engineer)',
        after: '2 days (understanding + fix)',
      },
    ],

    markdown: `
**FlightsTravel.co.uk** is a prominent UK travel brand suffering from a badly broken search and filter experience. The filter logic looped 368 times on a single selection — and doubled with every additional filter applied. A colleague spent a month trying to resolve it before it was handed to me.
 
I spent a day deeply understanding the functionality, then rewrote the filter state from an array to a keyed object — reducing iterations to a flat **33 regardless of filter count**. Fixed the following day.
    `.trim(),

    image: '/assets/projects/flightstravel/landing-page.png',
    showcaseImages: [
      '/assets/projects/flightstravel/landing-page.png',
      '/assets/projects/flightstravel/booking-page.png',
      '/assets/projects/flightstravel/search-page.png',
      '/assets/projects/flightstravel/travel-detail-page.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ZovilStore
  // ─────────────────────────────────────────────────────────────────────────────
  zovilstore: {
    id: 'zovil-store',
    title: 'ZovilStore',
    tagline:
      'Custom phone and laptop accessories store with a full-featured admin panel.',
    tags: ['E-commerce', 'Customization', 'Admin Panel'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['E-commerce', 'Retail'],
    deliverables: [
      'Customer-facing product customization storefront',
      'Admin panel for product and category management',
      'Deployment on Vercel and AWS',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },

    skills: [
      skills.nextjs,
      skills.react,
      skills.tailwindcss,
      skills.typescript,
      skills.nodejs,
      skills.aws,
    ],
    tools: [tools.vercel, tools.git, tools.github, tools.docker],

    impact:
      'Delivered a seamless personalization storefront and an intuitive admin panel — deployed on a dual Vercel + AWS stack for peak performance and reliability.',

    overview:
      'ZovilStore is an online platform that empowers users to personalize phone and laptop accessories. The project included a full customer-facing store and an intuitive admin panel for the client to manage products and categories. Built with Next.js and Tailwind CSS, and deployed on Vercel and AWS.',

    challenges: [
      {
        label: 'Product Customization UX',
        value:
          'The platform needed a seamless, real-time customization experience for end users selecting accessory options.',
      },
    ],

    approach: [
      {
        icon: 'frontend',
        title: 'Next.js + Tailwind Stack',
        description:
          'Leveraged Next.js for SSR/SSG performance and Tailwind CSS for rapid, consistent styling across both the storefront and admin panel.',
      },
      {
        icon: 'admin',
        title: 'Carbon-Powered Admin Panel',
        description:
          'Built a sleek, modern admin panel using the Carbon component library for a clean management interface.',
      },
    ],

    impacts: [
      {
        label: 'Deployment',
        before: 'No platform',
        after: 'Live on Vercel + AWS dual-hosting stack',
      },
    ],

    markdown: `
**ZovilStore** is an e-commerce platform for personalized phone and laptop accessories. I built the customer-facing storefront using **Next.js and Tailwind CSS** and delivered an intuitive admin panel for product and category management. The platform is deployed on a dual **Vercel + AWS** stack for reliability and performance.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Thomas Cook
  // ─────────────────────────────────────────────────────────────────────────────
  thomascook: {
    id: 'thomas-cook',
    title: 'Thomas Cook Admin Panel',
    tagline:
      'Internal operations panel for a global travel agency featuring a custom multi-event calendar.',
    tags: ['Travel', 'Admin Panel', 'Calendar'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Travel', 'Tourism'],
    deliverables: [
      'Internal operations admin panel',
      'Fully custom calendar with overlapping multi-event and date-range selection',
      'Employee tour schedule and availability management',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },

    skills: [
      skills.react,
      skills.javascript,
      skills.typescript,
      skills.scss,
      skills.redux,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Delivered a bespoke calendar component supporting multiple overlapping events and date-range selections — a complex UI challenge built entirely from scratch.',

    overview:
      'Thomas Cook is a globally recognized tours and travel agency. I built their internal operations admin panel, which manages employee tour schedules and availability. The standout engineering challenge was developing a fully customized calendar component that supports multiple overlapping events and date-range selections simultaneously.',

    challenges: [
      {
        label: 'Custom Calendar Component',
        value:
          'No existing library satisfied the requirement for simultaneous overlapping event display and date-range selection. A fully custom implementation was required.',
      },
    ],

    approach: [
      {
        icon: 'custom',
        title: 'Built-from-Scratch Calendar',
        description:
          'Designed and built a fully custom React calendar component supporting multiple overlapping events, date-range selections, and employee schedule visualization.',
      },
    ],

    impacts: [],

    markdown: `
For **Thomas Cook**, I built an internal operations admin panel managing employee tour schedules and availability. The key engineering challenge was a **fully custom calendar component** built from scratch — supporting multiple overlapping events and date-range selections simultaneously. No off-the-shelf library could meet the requirement.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Implr (Standalone Micro-Service Product)
  // ─────────────────────────────────────────────────────────────────────────────
  implr: {
    id: 'implr',
    title: 'Implr',
    tagline:
      'A StringERP micro-service scaled and launched as its own standalone product.',
    tags: ['Micro-Service', 'SaaS', 'Product Launch'],
    role: 'Lead Engineer',
    platform: 'Web',
    industries: ['Enterprise SaaS', 'ERP'],
    deliverables: [
      'Standalone micro-service application',
      'Independent deployment pipeline',
      'Reusable service architecture',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2022' },

    skills: [
      skills.react,
      skills.nodejs,
      skills.typescript,
      skills.mongodb,
      skills.docker,
    ],
    tools: [tools.docker, tools.git, tools.gitlab, tools.linux],

    impact:
      'Demonstrated high service-level scalability and code reusability by successfully spinning a StringERP module into a fully independent, deployable product.',

    overview: `Implr began as a module within the StringERP ecosystem. Recognizing its value as a standalone solution, I led the extraction, refactoring, and independent deployment of the service as its own product — validating the modular architecture philosophy that underpinned all of StringERP's design decisions.`,

    challenges: [
      {
        label: 'Service Extraction Without Regression',
        value:
          'Decoupling a tightly integrated module from the core ERP without breaking existing StringERP functionality required careful boundary definition and API contract design.',
      },
    ],

    approach: [
      {
        icon: 'microservice',
        title: 'Modular Extraction',
        description:
          'Defined clear service boundaries, refactored shared dependencies, and established an independent deployment pipeline for the new standalone product.',
      },
    ],

    impacts: [
      {
        label: 'Product Scope',
        before: 'Internal StringERP module',
        after: 'Standalone deployable SaaS product',
      },
    ],

    markdown: `
**Implr** was originally a module within the StringERP platform. I led its extraction and relaunch as a standalone product, demonstrating the scalability and reusability of the modular architecture I designed for StringERP.

This project validated the architectural approach of building each module as an independently deployable unit — a pattern that cut integration time across all StringERP modules to under 10 minutes.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gatflix
  // ─────────────────────────────────────────────────────────────────────────────
  gatflix: {
    id: 'gatflix',
    title: 'Gatflix',
    tagline:
      'GATE coaching platform with secure video delivery, chunked uploads, and manual SSR.',
    tags: ['EdTech', 'Video', 'SSR', 'Security'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Education', 'EdTech'],
    deliverables: [
      'Live classes and video lecture platform',
      'Chunked large-file video upload system',
      'Secure video serving — URL-concealed, download-protected',
      'Manual server-side rendering with Express',
      'Practice tests and test series interfaces',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [
      skills.react,
      skills.javascript,
      skills.nodejs,
      skills.redux,
      skills.scss,
    ],
    tools: [tools.git, tools.linux],

    impact:
      'Implemented chunked video uploads for large files and a URL-concealed video serving solution to prevent content piracy — plus manually implemented SSR by compiling React to Vanilla JS and serving via Express.',

    overview:
      "Gatflix is one of India's leading GATE coaching platforms, offering live classes, video lectures, books, practice tests, and test series. I worked on this project for 6+ months, solving two major technical challenges: secure video delivery (serving video without exposing the URL or allowing downloads) and chunked video uploads to handle large file sizes. I also manually implemented server-side rendering by compiling the entire codebase to Vanilla JS and serving it through Express — predating modern SSR frameworks.",

    challenges: [
      {
        label: 'Secure Video Serving',
        value:
          'Educational video content had to be streamed without exposing the source URL or allowing users to download it.',
      },
      {
        label: 'Large Video Uploads',
        value:
          'Uploading large video files in a single request was unreliable. A chunked upload strategy was needed.',
      },
      {
        label: 'Manual Server-Side Rendering',
        value:
          'SSR was required for SEO and performance but implemented manually — compiling the full React app to Vanilla JS and serving it via Express.',
      },
    ],

    approach: [
      {
        icon: 'security',
        title: 'URL-Concealed Video Streaming',
        description:
          'Implemented a secure video serving mechanism that streams content without exposing source URLs, preventing direct downloads.',
      },
      {
        icon: 'upload',
        title: 'Chunked Video Upload',
        description:
          'Split large video files into smaller chunks for reliable, resumable uploads.',
      },
      {
        icon: 'ssr',
        title: 'Manual SSR via Express',
        description:
          'Compiled the entire React codebase to Vanilla JS and served it using an Express server for server-rendered HTML — a manual SSR implementation.',
      },
    ],

    impacts: [],

    markdown: `
**Gatflix** is a leading GATE coaching platform. Over 6+ months I implemented **chunked video uploads** for large files, a **URL-concealed video streaming** system to prevent piracy, and manual **server-side rendering** by compiling the full React app to Vanilla JS and serving it via Express — a non-trivial SSR implementation before modern frameworks made it easy.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Magic Author
  // ─────────────────────────────────────────────────────────────────────────────
  magicauthor: {
    id: 'magic-author',
    title: 'Magic Author',
    tagline:
      'An eBook creation platform — my first React project, and the hardest one I ever shipped.',
    tags: ['eBooks', 'Canvas', 'Creative Tools'],
    role: 'Frontend Developer',
    platform: 'Web',
    industries: ['Publishing', 'Creative Tools'],
    deliverables: [
      'eBook creation and management platform',
      'BookShelf module with canvas-based cover designer',
      'Multi-language content editor',
      'Web storage integration',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2018', end: '2019' },

    skills: [skills.react, skills.javascript, skills.html5, skills.css3],
    tools: [tools.git],

    impact:
      'Shipped my first React project — a complex canvas-based eBook creation platform — despite having no prior experience with web storage, Canvas API, or Fabric.js.',

    overview:
      'Magic Author is a platform where users can create eBooks on the go. It was my very first React project. The core engineering challenge was the BookShelf module, where authors design book covers using canvas-based tools (Fabric.js) and write content in any language. I had no prior knowledge of web storage, the Canvas API, or Fabric.js — and the existing codebase was messy. Despite that, I shipped it.',

    challenges: [
      {
        label: 'Canvas & Fabric.js — Zero Prior Experience',
        value:
          'The BookShelf book-cover designer relied on Fabric.js and the Canvas API, neither of which I had encountered before. Learning both while debugging a problematic existing codebase was the hardest challenge of my early career.',
      },
      {
        label: 'Web Storage',
        value:
          'Persisting user eBook state across sessions required understanding and implementing browser web storage, also new to me at the time.',
      },
    ],

    approach: [
      {
        icon: 'learning',
        title: 'Learn While Shipping',
        description:
          'Learned Fabric.js, the Canvas API, and web storage from scratch while delivering production features — the challenge that most accelerated early career growth.',
      },
    ],

    impacts: [],

    markdown: `
**Magic Author** was my very first React project — a platform for creating eBooks on the go. The most challenging module was **BookShelf**, a canvas-based cover designer using **Fabric.js** — a library I had never used before. I also learned web storage from scratch during this project. The messy existing codebase made it harder. I shipped it anyway.
    `.trim(),

    image: '/assets/projects/magicauthor/landing-page.png',
    showcaseImages: [
      '/assets/projects/magicauthor/landing-page.png',
      '/assets/projects/magicauthor/magicauthor.png',
      '/assets/projects/magicauthor/book-page.png',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Laahchee
  // ─────────────────────────────────────────────────────────────────────────────
  laahchee: {
    id: 'laahchee',
    title: 'Laahchee',
    tagline:
      'High-performance interactive web experience with complex timeline animations.',
    tags: ['Frontend', 'Animation', 'Web', 'Performance'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Creative Web', 'Design'],
    deliverables: [
      'High-performance React 19 frontend',
      'GSAP-driven interactive animations',
      'Next.js 15 App Router architecture',
    ],
    url: null,
    featured: false,
    period: { start: '2024', end: 'Present' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.tailwindcss,
      skills.typescript,
      skills.javascript,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Delivered a buttery-smooth 60fps animated experience while maintaining excellent core web vitals and SEO performance through modern React 19 architecture.',

    overview:
      'Laahchee is a visually stunning, high-performance web platform built with Next.js 15 and React 19. The project heavily utilizes GSAP for complex, timeline-based animations and micro-interactions, wrapped in a modern TailwindCSS v4 architecture.',

    challenges: [
      {
        label: 'Complex Animation States',
        value:
          'Managing complex timeline animations and scroll-triggered events required precision to avoid layout thrashing and maintain 60fps performance.',
      },
      {
        label: 'React 19 Compatibility',
        value:
          'Integrating advanced client-side animations with bleeding-edge React 19 concurrent features and server components.',
      },
    ],

    approach: [
      {
        icon: 'animation',
        title: 'GSAP Choreography',
        description:
          'Orchestrated intricate, multi-step animations using GSAP timelines to create a cohesive narrative flow without sacrificing performance.',
      },
      {
        icon: 'performance',
        title: 'Modern Architecture',
        description:
          'Leveraged Next.js 15 and Tailwind v4 to ensure the application remains lightweight, highly responsive, and easy to maintain.',
      },
    ],

    impacts: [],

    markdown: `
**Laahchee** represents a cutting-edge approach to creative web development. Leveraging the power of **Next.js 15**, **React 19**, and **TailwindCSS v4**, I engineered a high-performance frontend focused on immersive user experiences.

The core of the project relies on **GSAP** to orchestrate intricate, scroll-driven timelines. By carefully managing render cycles and offloading heavy computations, I ensured that the complex visual effects maintain a buttery-smooth **60fps** across all devices without compromising core web vitals.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Jivita Design
  // ─────────────────────────────────────────────────────────────────────────────
  jivitadesign: {
    id: 'jivita-design',
    title: 'Jivita Design',
    tagline:
      'Modern, responsive storefront with highly interactive UI components.',
    tags: ['E-commerce', 'Full-Stack', 'UI/UX'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['E-commerce', 'Retail'],
    deliverables: [
      'Next.js SSR application',
      'Responsive Tailwind UI',
      'MongoDB backend integration',
    ],
    url: null,
    featured: false,
    period: { start: '2021', end: '2022' },

    skills: [skills.react, skills.nextjs, skills.tailwindcss, skills.mongodb],
    tools: [tools.git, tools.github],

    impact:
      'Architected an SEO-optimized storefront with highly interactive UI components, significantly improving user engagement metrics.',

    overview:
      'Jivita is a full-stack Next.js web application designed for a seamless user experience. Combining SSR for performance with a robust MongoDB backend, the project emphasizes a clean, responsive design utilizing TailwindCSS and Alpine.js for lightweight frontend interactions.',

    challenges: [
      {
        label: 'SSR Performance',
        value:
          'Balancing SSR performance with dynamic client-side interactivity using lightweight libraries.',
      },
      {
        label: 'Database Integration',
        value:
          'Integrating a fast, scalable MongoDB backend with a heavy frontend without causing latency.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Hybrid Rendering',
        description:
          'Utilized Next.js SSR and SSG features to provide instant page loads while deferring non-critical interactive components.',
      },
    ],

    impacts: [],

    markdown: `
**Jivita Design** is a modern e-commerce platform built on **Next.js** and **TailwindCSS**. The goal was to create a highly responsive, visually appealing storefront that doesn't compromise on performance or SEO.

By leveraging server-side rendering (SSR) and integrating a flexible **MongoDB** backend, I delivered a robust full-stack solution. Lightweight interactivity was handled carefully to ensure the time-to-interactive (TTI) remained minimal, providing users with a fast and fluid shopping experience.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DS Universe
  // ─────────────────────────────────────────────────────────────────────────────
  dsuniverse: {
    id: 'ds-universe',
    title: 'DS Universe',
    tagline:
      'Immersive, creative web experience pushing the boundaries of modern frontend development.',
    tags: ['Creative Web', 'Animation', 'Immersive'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Creative Web', 'Design'],
    deliverables: [
      'Immersive smooth-scrolling experience',
      'Complex GSAP animations',
      'Modern React 19 frontend',
    ],
    url: null,
    featured: false,
    period: { start: '2024', end: 'Present' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.tailwindcss,
      skills.typescript,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Created an award-winning level digital experience that captivates users through interactive storytelling and seamless performance.',

    overview:
      'DS Universe is an immersive, creative web experience that pushes the boundaries of modern frontend development. Utilizing Next.js 16 and React 19, the project features buttery-smooth scrolling powered by Lenis and highly choreographed animations using GSAP.',

    challenges: [
      {
        label: 'Scroll Synchronization',
        value:
          'Achieving perfectly synchronized scroll-based animations across varied device capabilities and screen sizes.',
      },
    ],

    approach: [
      {
        icon: 'performance',
        title: 'Smooth Scrolling',
        description:
          'Implemented Lenis for fluid, momentum-based scrolling, closely tied to GSAP ScrollTrigger for precise animation timing.',
      },
    ],

    impacts: [],

    markdown: `
**DS Universe** is a testament to what is possible on the modern web. Built using **Next.js 16** and **React 19**, it prioritizes fluid motion and user immersion above all else.

I integrated **Lenis** for smooth, momentum-based scrolling and paired it with **GSAP** to orchestrate animations that react perfectly to the user's scroll position. This combination creates a seamless narrative flow, transforming a standard website into an interactive digital journey.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Creg Caribbean
  // ─────────────────────────────────────────────────────────────────────────────
  cregcaribbean: {
    id: 'creg-caribbean',
    title: 'Creg Caribbean',
    tagline:
      'Comprehensive real estate platform with a heavy focus on geospatial property discovery.',
    tags: ['Real Estate', 'Maps', 'Dashboard'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Real Estate', 'PropTech'],
    deliverables: [
      'Interactive Mapbox integration',
      'Data-rich real estate dashboard',
      'Complex state management',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [skills.react, skills.redux, skills.javascript],
    tools: [tools.git, tools.github],

    impact:
      'Transformed property discovery by building a high-performance, map-first interface that handles large geospatial datasets smoothly.',

    overview:
      'Creg Caribbean is a comprehensive real estate platform focused on the Caribbean market. The frontend is powered by React and Redux, featuring a deeply integrated Mapbox-GL interactive map for property discovery, coupled with an Ant Design dashboard for data management.',

    challenges: [
      {
        label: 'Geospatial Performance',
        value:
          'Optimizing performance with heavy geospatial data rendering on the client side using Mapbox and React.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Map-First UI',
        description:
          'Architected a map-first interface that tightly synchronizes with Redux state to display hundreds of properties without lag.',
      },
    ],

    impacts: [],

    markdown: `
**Creg Caribbean** is a dedicated real estate platform designed for the Caribbean market. The core feature of the application is its interactive, map-based property search, built using **React** and **Mapbox-GL**.

I engineered the frontend to handle large geospatial datasets efficiently. By leveraging **Redux** for state management and **Ant Design** for dashboard UI components, the platform offers users a fast, intuitive way to explore properties, filtering by complex criteria while maintaining smooth map interactions.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gateflix
  // ─────────────────────────────────────────────────────────────────────────────
  gateflix: {
    id: 'gateflix',
    title: 'Gateflix',
    tagline:
      'Scalable educational platform focused on delivering high-quality video content.',
    tags: ['EdTech', 'Video Streaming', 'Platform'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['EdTech', 'Education'],
    deliverables: [
      'Scalable video streaming platform',
      'Rich-text content management',
      'Custom video player integration',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },

    skills: [skills.react, skills.redux, skills.scss],
    tools: [tools.git, tools.github],

    impact:
      'Empowered thousands of students with a reliable, scalable streaming experience and interactive study materials.',

    overview:
      'Gateflix is a robust educational platform focused on delivering high-quality video content to students preparing for competitive exams. The platform integrates HLS.js for adaptive bitrate streaming, complex state management via Redux, and a rich content editor.',

    challenges: [
      {
        label: 'Adaptive Streaming',
        value:
          'Ensuring smooth video playback across varied network conditions using adaptive streaming technologies.',
      },
    ],

    approach: [
      {
        icon: 'performance',
        title: 'HLS Integration',
        description:
          'Implemented HLS.js to provide seamless, adaptive bitrate video streaming, minimizing buffering for users on slower connections.',
      },
    ],

    impacts: [],

    markdown: `
**Gateflix** is an EdTech platform designed to help students prepare for competitive exams through high-quality video courses. Built with **React** and **Redux**, the application handles complex state requirements for student progress, course catalogs, and interactive testing.

A major focus of the project was video delivery. I integrated **HLS.js** to enable adaptive bitrate streaming, ensuring that students across varying network conditions receive a smooth, uninterrupted learning experience.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HK Analytics
  // ─────────────────────────────────────────────────────────────────────────────
  hkanalytics: {
    id: 'hk-analytics',
    title: 'HK Analytics',
    tagline: 'Enterprise-grade data visualization and analytics dashboard.',
    tags: ['Data Analytics', 'Dashboard', 'Enterprise'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Data Analytics', 'Enterprise Software'],
    deliverables: [
      'Data-intensive analytical dashboard',
      'Complex grid implementations',
      'Interactive charting',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },

    skills: [skills.react, skills.nextjs, skills.tailwindcss],
    tools: [tools.git, tools.github],

    impact:
      'Streamlined enterprise decision-making by providing a highly performant, customizable data analytics suite.',

    overview:
      'HK Analytics is an enterprise-grade data visualization and analytics dashboard. Built with Next.js, the platform leverages AG-Grid for handling massive datasets in tabular formats and Highcharts for rendering complex, interactive data visualizations.',

    challenges: [
      {
        label: 'Massive Datasets',
        value:
          'Maintaining 60fps rendering performance when dealing with thousands of data rows and complex chart re-renders.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Virtualization & Memoization',
        description:
          'Utilized AG-Grid for efficient DOM virtualization and strict React memoization to prevent unnecessary re-renders of complex charts.',
      },
    ],

    impacts: [],

    markdown: `
**HK Analytics** is a powerful data visualization tool built for enterprise clients. Utilizing **Next.js** and **TailwindCSS**, the platform provides a clean, responsive interface for deep data analysis.

To handle massive amounts of tabular data without crashing the browser, I integrated **AG-Grid** for advanced row virtualization and column management. For visualization, **Highcharts** was used to render interactive, customizable charts, giving stakeholders real-time insights into their business metrics.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // RK Synthetics
  // ─────────────────────────────────────────────────────────────────────────────
  rksynthetics: {
    id: 'rk-synthetics',
    title: 'RK Synthetics',
    tagline: 'Lightning-fast corporate portal engineered for B2B excellence.',
    tags: ['Corporate Website', 'B2B', 'Performance'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Manufacturing', 'Corporate'],
    deliverables: [
      'High-speed corporate portal',
      'Modern frontend architecture',
    ],
    url: null,
    featured: false,
    period: { start: '2024', end: 'Present' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.tailwindcss,
      skills.typescript,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Modernized the corporate digital presence, significantly reducing page load times and improving B2B lead generation.',

    overview:
      'RK Synthetics is a modern B2B corporate portal engineered for lightning-fast load times and SEO excellence. Built on the cutting edge of Next.js 15 and React 19, it utilizes Turbopack and Tailwind v4 to deliver a pristine user experience.',

    challenges: [
      {
        label: 'Migration to Modern Stack',
        value:
          'Migrating legacy corporate content to a strict TypeScript, server-component-first Next.js architecture.',
      },
    ],

    approach: [
      {
        icon: 'performance',
        title: 'Server Components',
        description:
          'Heavily utilized React Server Components to reduce client-side JavaScript, resulting in near-instant page loads.',
      },
    ],

    impacts: [],

    markdown: `
**RK Synthetics** is a corporate website revamp that focuses on raw performance and professional aesthetics. Built with the latest **Next.js 15** and **React 19**, the site leverages **Turbopack** for rapid development and **TailwindCSS v4** for styling.

By embracing a Server-Component-first architecture, I was able to dramatically reduce the client-side JavaScript payload. This architectural choice led to near-instant page loads, excellent SEO scores, and a significantly improved digital presence for the enterprise.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Sequelis
  // ─────────────────────────────────────────────────────────────────────────────
  sequelis: {
    id: 'sequelis',
    title: 'Sequelis',
    tagline:
      'Interactive digital experience built to captivate audiences through motion design.',
    tags: ['Creative Web', 'Interactive', 'Frontend'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Creative Web', 'Marketing'],
    deliverables: ['Interactive marketing site', 'GSAP animation timelines'],
    url: null,
    featured: false,
    period: { start: '2024', end: 'Present' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.tailwindcss,
      skills.typescript,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Delivered a highly engaging marketing platform that sets a new standard for brand presentation through motion.',

    overview:
      'Sequelis is an interactive digital experience built to captivate audiences through motion design. Leveraging Next.js 15 and React 19, the platform makes heavy use of GSAP to orchestrate intricate animation sequences that respond to user interaction.',

    challenges: [
      {
        label: 'Motion Choreography',
        value:
          'Managing complex timeline animations and ensuring smooth playback across mobile and desktop devices.',
      },
    ],

    approach: [
      {
        icon: 'animation',
        title: 'Interactive Timelines',
        description:
          'Designed sequential, interactive GSAP timelines that respond naturally to user scroll and hover events.',
      },
    ],

    impacts: [],

    markdown: `
**Sequelis** is a creative marketing platform where motion design takes center stage. Utilizing **Next.js 15** and **React 19**, I built a fast, modern foundation capable of supporting heavy visual interactions.

The standout feature of the project is its extensive use of **GSAP**. By choreographing complex timeline animations that react to user inputs—such as scrolling and hovering—I created an engaging, dynamic experience that elevates the brand's digital presence while maintaining strict performance standards.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Can
  // ─────────────────────────────────────────────────────────────────────────────
  can: {
    id: 'can-package',
    title: '@knovator/can',
    tagline: 'Role-based access control npm package for React admin panels.',
    tags: ['NPM Package', 'Open Source', 'Access Control'],
    role: 'Open Source Creator',
    platform: 'Web · Library',
    industries: ['Software Development', 'Open Source'],
    deliverables: [
      'Role-based permission checking methods',
      'Conditional JSX rendering component',
    ],
    url: 'https://github.com/knovator/Can',
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },
    skills: [skills.react, skills.javascript, skills.babel],
    tools: [tools.git, tools.github],
    impact:
      'Simplified role-based access control in multiple admin panels, abstracting complex condition logic into reusable methods and components.',
    overview:
      'In admin panels, different roles require different access to routes and functionalities. @knovator/can is an npm package I developed to simplify this process. It provides utility methods like `hasAccessOf` and `hasAccessTo`, along with a `Can` component for conditionally rendering JSX based on a standardized permission object structure.',
    challenges: [
      {
        label: 'Condition Bloat',
        value:
          'Writing multiple conditions for every role-based action clutters the codebase and increases maintenance overhead.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Declarative Access Control',
        description:
          'Abstracted permission logic into a declarative `Can` wrapper component, making role-based UI clean and readable.',
      },
    ],
    impacts: [],
    markdown: `
Developed **@knovator/can**, an open-source npm package that streamlines role-based access control in React applications. By standardizing the permission object structure, it provides an intuitive way to manage module-level and function-level access, significantly reducing conditional boilerplate across multiple admin panel codebases.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // API Wrapper
  // ─────────────────────────────────────────────────────────────────────────────
  apiwrapper: {
    id: 'api-wrapper',
    title: '@knovator/api',
    tagline:
      'Productive Axios wrapper for simplified and centralized API calls.',
    tags: ['NPM Package', 'Open Source', 'API Wrapper'],
    role: 'Open Source Creator',
    platform: 'Web · Library',
    industries: ['Software Development', 'Open Source'],
    deliverables: [
      'Centralized API configuration',
      'Automatic token injection',
      'Request caching and cancellation',
    ],
    url: 'https://github.com/knovator/api',
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2021' },
    skills: [skills.typescript, skills.javascript],
    tools: [tools.git, tools.github],
    impact:
      'Reduced boilerplate for API calls across multiple projects by centralizing token management, error handling, and request cancellation.',
    overview:
      '@knovator/api is a lightweight wrapper around Axios designed to make API calls more productive. It provides a centralized configuration method `setAPIConfig` to handle base URLs, token injection, and global error handling, alongside a streamlined `fetchUrl` method for executing requests with built-in support for request cancellation.',
    challenges: [
      {
        label: 'Redundant Configuration',
        value:
          'Passing tokens and managing base URLs individually for every API call creates redundant code and increases the risk of errors.',
      },
    ],
    approach: [
      {
        icon: 'optimization',
        title: 'Centralized Configuration & Caching',
        description:
          'Implemented a `setAPIConfig` method for global configuration and built-in request cancellation to prevent redundant API calls when endpoints match.',
      },
    ],
    impacts: [],
    markdown: `
Created **@knovator/api**, an npm package that wraps Axios to simplify HTTP requests. The package abstracts away repetitive tasks like token injection and error handling into a single global configuration. It also features automatic request cancellation to prevent race conditions and redundant network calls, significantly improving the efficiency of data fetching in complex front-end applications.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Game Design
  // ─────────────────────────────────────────────────────────────────────────────
  gamedesign: {
    id: 'game-design-platform',
    title: 'Game Design Platform',
    tagline:
      'A responsive and interactive game design interface built with React.',
    tags: ['Interactive UI', 'Responsive', 'Platform'],
    role: 'Frontend Engineer',
    platform: 'Web · Mobile-Responsive',
    industries: ['Gaming', 'Software Development'],
    deliverables: ['Responsive interactive UI', 'React component architecture'],
    url: null,
    featured: false,
    company: companies.personal,
    period: { start: '2023', end: '2023' },
    skills: [skills.react, skills.tailwindcss, skills.javascript],
    tools: [tools.git],
    impact:
      'Delivered a highly responsive and visually engaging platform interface, ensuring seamless interaction across both desktop and mobile devices.',
    overview:
      'A frontend interface for a game design platform built using modern React 18 paradigms. The project focused heavily on creating a dynamic, responsive user experience that adapts flawlessly to different screen sizes, utilizing Tailwind CSS for rapid and consistent styling.',
    challenges: [
      {
        label: 'Responsive Complexity',
        value:
          'Ensuring that interactive game design elements remain usable and visually appealing on smaller mobile screens.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Mobile-First Design',
        description:
          'Leveraged Tailwind CSS to implement a mobile-first responsive strategy, ensuring a unified experience across devices.',
      },
    ],
    impacts: [],
    markdown: `
Developed the frontend for a **Game Design Platform** using **React 18** and **Tailwind CSS**. A major focus of my work was ensuring the entire application was fully responsive, allowing users to interact with complex game design interfaces seamlessly on both mobile and desktop environments.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Digibooks
  // ─────────────────────────────────────────────────────────────────────────────
  digibooks: {
    id: 'digibooks',
    title: 'Digibooks',
    tagline: 'Comprehensive digital publishing and reading platform.',
    tags: ['EdTech', 'Digital Publishing', 'SSR'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Education', 'Publishing'],
    deliverables: [
      'Rich text editor integration (Draft.js)',
      'Secure video streaming (HLS.js)',
      'Real-time data synchronization (Firebase)',
    ],
    url: null,
    featured: true,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.redux, skills.nodejs, skills.webpack],
    tools: [tools.git, tools.github],
    impact:
      'Successfully delivered a robust digital reading experience capable of handling rich media, secure streaming, and real-time updates.',
    overview:
      'Digibooks is a sophisticated digital publishing platform designed to deliver rich, interactive reading experiences. I was responsible for architecting and implementing complex frontend modules, utilizing React and Redux.',
    challenges: [
      {
        label: 'Rich Content Authoring',
        value:
          'Integrating a robust editor capable of handling complex formatting and media for digital books.',
      },
      {
        label: 'Secure Media Delivery',
        value:
          'Preventing unauthorized downloading of premium video content embedded within the digital books.',
      },
    ],
    approach: [
      {
        icon: 'integration',
        title: 'Draft.js & HLS.js Integration',
        description:
          'Implemented Draft.js for advanced rich-text authoring and utilized HLS.js to deliver secure, chunked video streaming, preventing unauthorized downloads.',
      },
      {
        icon: 'architecture',
        title: 'Real-time Sync with Firebase',
        description:
          'Leveraged Firebase to provide real-time updates and synchronization across user sessions.',
      },
    ],
    impacts: [],
    markdown: `
As a Frontend Engineer on **Digibooks**, I tackled significant technical challenges to deliver a robust digital publishing platform. 

A key difficulty was enabling rich content authoring; I solved this by deeply integrating **Draft.js** to handle complex document structures. Additionally, to protect premium content, I implemented secure video streaming using **HLS.js**, effectively preventing unauthorized downloads. I also integrated **Firebase** to ensure real-time data synchronization, creating a seamless and secure reading experience for end users.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Digibooks Admin Panel
  // ─────────────────────────────────────────────────────────────────────────────
  digibooksadmin: {
    id: 'digibooks-admin',
    title: 'Digibooks Admin Panel',
    tagline: 'Comprehensive CMS and back-office management for Digibooks.',
    tags: ['Admin Panel', 'CMS'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Education', 'Publishing'],
    deliverables: [
      'Data-heavy management dashboards',
      'Complex form processing',
      'Large file upload integration',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.redux, skills.webpack],
    tools: [tools.git, tools.github],
    impact:
      'Streamlined content management and user administration, empowering the operations team to efficiently handle thousands of digital assets.',
    overview:
      'The back-office administration portal for the Digibooks platform. Built with React, Redux, and Ant Design, the panel provides the necessary tools for administrators to manage users, digital assets, and system configurations.',
    challenges: [
      {
        label: 'Large File Management',
        value:
          'Handling reliable uploads for large video and document files required robust upload architecture.',
      },
    ],
    approach: [
      {
        icon: 'integration',
        title: 'Fine Uploader Integration',
        description:
          'Integrated Fine Uploader to handle chunked, resumable uploads for large digital assets seamlessly within the dashboard.',
      },
    ],
    impacts: [],
    markdown: `
Developed the **Digibooks Admin Panel**, the core CMS enabling the operations team to manage the digital publishing platform. Utilizing **React, Redux, and Ant Design**, I built complex, data-heavy interfaces. A notable feature was the integration of Fine Uploader to reliably process chunked, resumable uploads for large media assets.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gateflix Admin Panel
  // ─────────────────────────────────────────────────────────────────────────────
  gateflixadmin: {
    id: 'gateflix-admin',
    title: 'Gateflix Admin Panel',
    tagline:
      'Robust administration portal for the Gateflix educational platform.',
    tags: ['EdTech', 'Admin Panel'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Education', 'E-learning'],
    deliverables: ['Content management dashboard', 'Video asset management'],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.redux, skills.webpack],
    tools: [tools.git, tools.github],
    impact:
      'Provided a stable and efficient management interface for organizing educational content and video assets.',
    overview: `The administration portal for Gateflix, built to manage course content, student data, and video assets. It utilizes a similar architectural foundation to the Digibooks admin panel, ensuring consistency and reliability across Knovator\\'s internal tools.`,
    challenges: [],
    approach: [
      {
        icon: 'architecture',
        title: 'Standardized Component Library',
        description:
          'Utilized Ant Design to rapidly build out complex data tables and forms, ensuring a consistent administrative user experience.',
      },
    ],
    impacts: [],
    markdown: `
Built the **Gateflix Admin Panel** using **React, Redux, and Ant Design**. The platform serves as the central hub for managing educational content and video assets. By standardizing the UI with a robust component library, I was able to rapidly deliver complex data-management interfaces that empowered the Gateflix team.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Stay Classy
  // ─────────────────────────────────────────────────────────────────────────────
  stayclassy: {
    id: 'stay-classy',
    title: 'Stay Classy',
    tagline: 'High-performance Next.js e-commerce platform.',
    tags: ['E-commerce', 'SSR', 'Web Platform'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['E-commerce', 'Retail'],
    deliverables: [
      'Server-Side Rendered e-commerce frontend',
      'Optimized product galleries and sliders',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },
    skills: [skills.nextjs, skills.react, skills.redux],
    tools: [tools.git, tools.github],
    impact:
      'Improved SEO and initial page load times significantly by migrating the e-commerce architecture to Server-Side Rendering via Next.js.',
    overview:
      'Stay Classy is an e-commerce platform where performance and SEO were paramount. I utilized Next.js to build a Server-Side Rendered (SSR) application, integrating rich features like product magnification, dynamic sliders, and comprehensive cart management.',
    challenges: [
      {
        label: 'SEO & Performance',
        value:
          'A traditional SPA approach was harming search engine visibility and initial load performance for product pages.',
      },
    ],
    approach: [
      {
        icon: 'optimization',
        title: 'Next.js SSR',
        description:
          'Implemented Server-Side Rendering using Next.js to ensure product pages were fully indexed by search engines and delivered instantly to users.',
      },
    ],
    impacts: [],
    markdown: `
Engineered the **Stay Classy** e-commerce platform focusing heavily on SEO and performance. By adopting **Next.js** for Server-Side Rendering (SSR), I resolved indexing issues inherent to traditional SPAs and drastically improved initial page load times. I integrated complex interactive elements like product magnification and dynamic sliders while maintaining a smooth user experience.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // WonderMD Patient Portal
  // ─────────────────────────────────────────────────────────────────────────────
  wondermdpatient: {
    id: 'wondermd-patient',
    title: 'WonderMD Patient Portal',
    tagline: 'Secure telehealth platform for patient consultations.',
    tags: ['Healthcare', 'Telemedicine', 'Patient Portal'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Healthcare', 'Telemedicine'],
    deliverables: [
      'Integrated video consultations (OpenTok)',
      'Secure payment processing (Stripe)',
      'HIPAA-compliant data handling',
    ],
    url: null,
    featured: true,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },
    skills: [skills.nextjs, skills.react, skills.tailwindcss],
    tools: [tools.git, tools.github],
    impact:
      'Enabled seamless, secure remote medical consultations by integrating robust video conferencing and payment solutions.',
    overview:
      'WonderMD is a telehealth platform designed to connect patients with medical professionals. I developed the patient-facing portal using Next.js and Tailwind CSS, focusing on a secure and accessible user experience for scheduling, payments, and video consultations.',
    challenges: [
      {
        label: 'Seamless Video Integration',
        value:
          'Providing a reliable, in-browser video consultation experience without requiring external application downloads.',
      },
    ],
    approach: [
      {
        icon: 'integration',
        title: 'OpenTok & Stripe',
        description:
          'Integrated OpenTok (Vonage) for high-quality, secure video calls directly within the portal, and Stripe for seamless consultation payments.',
      },
    ],
    impacts: [],
    markdown: `
Developed the **WonderMD Patient Portal**, a secure telemedicine platform built with **Next.js** and **Tailwind CSS**. 

The core of the application revolved around facilitating remote consultations. I successfully integrated the **OpenTok (Vonage)** API to deliver stable, browser-based video conferencing, and implemented **Stripe** to handle secure session payments. The portal provides patients with an intuitive interface for managing their medical history, appointments, and active telehealth calls.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // otp-input-react
  // ─────────────────────────────────────────────────────────────────────────────
  otpinput: {
    id: 'otp-input-react',
    title: 'otp-input-react',
    tagline: 'Open-source React component for OTP inputs.',
    tags: ['Open Source Contributor', 'React Component'],
    role: 'Open Source Contributor',
    platform: 'Web · Library',
    industries: ['Software Development', 'Open Source'],
    deliverables: [
      'Code contributions and improvements',
      'Test coverage enhancements',
    ],
    url: 'https://github.com/shubhanus/otp-input-react',
    featured: false,
    company: companies.personal,
    period: { start: '2020', end: '2020' },
    skills: [skills.react, skills.typescript, skills.jest],
    tools: [tools.git, tools.github],
    impact:
      'Contributed to the stability and feature set of a widely-used open-source OTP input component.',
    overview:
      'An open-source React functional component providing a customizable One-Time Password (OTP) input interface. I contributed to the repository to improve its functionality and reliability.',
    challenges: [],
    approach: [
      {
        icon: 'optimization',
        title: 'Open Source Collaboration',
        description:
          'Collaborated with the maintainer to refine component logic and ensure high test coverage using Jest and React Testing Library.',
      },
    ],
    impacts: [],
    markdown: `
Made significant open-source contributions to **otp-input-react**, a popular React component library for handling One-Time Passwords. My work involved refining the component's internal logic, improving TypeScript support, and enhancing test coverage using **Jest** and **React Testing Library**.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Svitae Housing Management
  // ─────────────────────────────────────────────────────────────────────────────
  svitae: {
    id: 'svitae-housing',
    title: 'Svitae Housing Management',
    tagline: 'Comprehensive dashboard for property and housing management.',
    tags: ['Property Management', 'Dashboard'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Real Estate', 'Property Management'],
    deliverables: [
      'Advanced data grid integration (Wijmo)',
      'Data visualization (Chartist)',
    ],
    url: null,
    featured: false,
    company: companies.personal,
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.typescript],
    tools: [tools.git, tools.github],
    impact:
      'Delivered complex data visualization and management tools that allowed property managers to oversee housing portfolios efficiently.',
    overview:
      'A robust housing management dashboard built with React and Material-UI. The application provides detailed analytics, financial reporting, and property oversight tools.',
    challenges: [
      {
        label: 'Complex Data Grids',
        value:
          'Handling and rendering large datasets for financial and property records required high-performance grid solutions.',
      },
    ],
    approach: [
      {
        icon: 'integration',
        title: 'Wijmo & Chartist Integration',
        description:
          'Integrated GrapeCity Wijmo for high-performance, complex data grids and Chartist for rendering responsive financial analytics dashboards.',
      },
    ],
    impacts: [],
    markdown: `
Developed the **Svitae Housing Management** dashboard, a complex administrative tool for real estate professionals. Built utilizing **React and Material-UI**, the platform required handling substantial amounts of data. I integrated **GrapeCity Wijmo** to provide advanced, high-performance data grids, and utilized **Chartist** to build responsive data visualization dashboards for financial reporting.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PropertyIQ
  // ─────────────────────────────────────────────────────────────────────────────
  propertyiq: {
    id: 'property-iq',
    title: 'PropertyIQ',
    tagline: 'High-fidelity mobile UI/UX implementation for PropTech.',
    tags: ['PropTech', 'Mobile UI/UX'],
    role: 'Frontend Engineer',
    platform: 'Mobile',
    industries: ['Real Estate', 'PropTech'],
    deliverables: [
      'Responsive mobile screen implementation',
      'Pixel-perfect UI translation from draft screens',
    ],
    url: null,
    featured: false,
    company: companies.emtec,
    period: { start: '2022', end: '2022' },
    skills: [skills.react],
    tools: [tools.git],
    impact:
      'Translated draft designs into high-fidelity, responsive mobile views for an intuitive property intelligence application.',
    overview:
      'PropertyIQ is a PropTech application focusing on intuitive property intelligence. My work involved analyzing draft screens and implementing pixel-perfect, highly responsive mobile interfaces.',
    challenges: [
      {
        label: 'Pixel-Perfect Translation',
        value:
          'Ensuring the implemented mobile UI matched the high-fidelity design drafts precisely across various device sizes.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Responsive UI Implementation',
        description:
          'Focused on precise styling and layout techniques to translate static PDF/PNG drafts into interactive, responsive mobile screens.',
      },
    ],
    impacts: [],
    markdown: `
Worked on **PropertyIQ**, a PropTech mobile application. My primary responsibility was the precise implementation of high-fidelity mobile UI/UX screens based on provided design drafts. I ensured that the application delivered an intuitive and highly responsive mobile experience tailored for property intelligence tasks.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Varni Travel
  // ─────────────────────────────────────────────────────────────────────────────
  varnitravel: {
    id: 'varni-travel',
    title: 'Varni Travel',
    tagline: 'Blazing-fast Progressive Web App for the travel industry.',
    tags: ['Travel', 'PWA', 'SSR'],
    role: 'Frontend Engineer',
    platform: 'Web · PWA',
    industries: ['Travel', 'E-commerce'],
    deliverables: [
      'Server-Side Rendering integration',
      'PWA configuration and caching',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.redux, skills.webpack],
    tools: [tools.git, tools.github],
    impact:
      'Delivered an app-like experience on the web with offline capabilities and lightning-fast load times, drastically improving user retention.',
    overview:
      'Varni Travel is a digital platform for booking travel experiences. To ensure optimal performance and SEO, the application was built as a Server-Side Rendered Progressive Web App (PWA) using React, Redux, and Laravel Mix.',
    challenges: [
      {
        label: 'App-like Performance on Web',
        value:
          'Users expected native-app speed and offline reliability from a web-based travel booking platform.',
      },
    ],
    approach: [
      {
        icon: 'optimization',
        title: 'SSR & PWA',
        description:
          'Implemented Server-Side Rendering via a custom SSR architecture (Knovator-ssr-pwa) and configured service workers to provide robust offline caching and an installable PWA experience.',
      },
    ],
    impacts: [],
    markdown: `
Engineered the frontend for **Varni Travel**, focusing on delivering an exceptional user experience through performance optimizations. I built the platform as a **Progressive Web App (PWA)** with **Server-Side Rendering (SSR)**. 

By utilizing React, Redux, and custom Webpack/Laravel Mix configurations, I ensured the platform had lightning-fast initial load times, strong SEO indexing, and the ability to function seamlessly even with unstable network connections.
    `.trim(),
  },
};

export const projectsArray = Object.values(projects);
