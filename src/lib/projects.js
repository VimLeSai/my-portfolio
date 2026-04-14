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
  },
};
