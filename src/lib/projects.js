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
      'Textile ERP I built from scratch — ledgers, orders, inventory, and a module kit.',
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
      'New modules went from days of wiring to under 10 minutes. Concurrent order edits stopped corrupting rows after we put MongoDB transactions and locks on the writes.',

    overview:
      'StringERP is a textile ERP I built from zero — marketing site, the product, and Implr as a spin-out. Ledgers, purchase and sales orders, inventory. Thousands of transactions a day. Releases every two weeks.',

    challenges: [
      {
        label: 'Two people, one order',
        value:
          'As the client grew, two people would edit the same purchase or sales order at once. Rows went stale or wrong. MongoDB transactions and distributed locks made those writes atomic.',
      },
      {
        label: 'CSV dumps',
        value:
          'Clients needed to import legacy Excel/CSV without taking the app down. A RabbitMQ queue processed uploads one at a time and emailed when they finished.',
      },
      {
        label: 'New modules took days',
        value:
          'Adding a domain meant wiring folders by hand. I made a copy-paste module shape so a new one landed in under 10 minutes.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Copy-paste modules',
        description:
          'Same folder shape, same hooks, same routes. A new domain didn’t mean a new architecture conversation.',
      },
      {
        icon: 'lock',
        title: 'Locks on the writes',
        description:
          'MongoDB transactions so two people couldn’t corrupt the same order.',
      },
      {
        icon: 'queue',
        title: 'Imports off the request',
        description:
          'CSV jobs went to RabbitMQ. The browser didn’t wait. Email when it was done.',
      },
      {
        icon: 'rocket_launch',
        title: 'Docker + GitLab CI',
        description:
          'I ran the boxes, the containers, and a pipeline that shipped every two weeks.',
      },
    ],

    impacts: [
      { label: 'Module Integration Time', before: 'Days of manual wiring', after: 'Under 10 minutes' },
      { label: 'Data Integrity', before: 'Race-condition corruption', after: 'Locked writes — no more stale orders' },
      { label: 'CSV Import Workflow', before: 'Blocking synchronous uploads', after: 'Async RabbitMQ processing' }
    ],

    markdown: `
**StringERP** is a textile ERP I built from scratch with React and Next.js. Client calls, sprints, deploys every 15 days. ESLint, Prettier, Commitlint, Docker — the boring stuff that keeps a small team honest.

The interesting bits: a live ledger, a RabbitMQ import queue, Mongo locks so concurrent orders didn’t eat each other, and **Implr** as a module we later shipped on its own.
    `.trim(),

    image: '/assets/projects/string-erp/thumbnail.png',
    showcaseImages: [
      '/assets/projects/string-erp/dashboard.png',
      '/assets/projects/string-erp/sales-order.png',
    ],
    webViewDemo: '',
    mobileViewDemo: '',

    featured: true,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Mastery Logistics System (Mastery Cloud TMS)
  // ─────────────────────────────────────────────────────────────────────────────
  masterylogistics: {
    id: 'mastery-logistics',
    title: 'Mastery Logistics System',
    tagline:
      'Logistics TMS — I moved production from MySQL to PostgreSQL without taking the site down.',
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
      'Moved production logistics data MySQL → PostgreSQL with a TypeScript script that compared both sides live. No hand-checking thousands of rows. Nothing dropped.',

    overview:
      'Mastery Cloud TMS is a logistics platform that has to stay up. I did frontend work in TypeScript and Redux Toolkit, NestJS APIs, and the MySQL → PostgreSQL move while customers were still using the product.',

    challenges: [
      {
        label: 'Move the database, keep the site up',
        value:
          'Production logistics data, MySQL to PostgreSQL, no downtime window. Both databases had to be true at the same time until cutover.',
      },
      {
        label: 'Nobody can eyeball thousands of rows',
        value:
          'Manual QA before cutover wasn’t a plan. We needed a script that told us what didn’t match.',
      },
      {
        label: 'APIs under load',
        value:
          'P90 latency had a number attached. NestJS endpoints needed JMeter, not hope.',
      },
    ],

    approach: [
      {
        icon: 'moving',
        title: 'Phased cutover',
        description:
          'Wrote the migration maps, including the messy geo fields, and moved in pieces instead of a big bang.',
      },
      {
        icon: 'auto_awesome',
        title: 'Compare both databases',
        description:
          'A TypeScript script queried MySQL and Postgres together, diffed records, and printed the mismatches.',
      },
      {
        icon: 'data_object',
        title: 'Leaner GraphQL',
        description:
          'Dropped unused fields, added indexes. Postgres ended up faster than the old MySQL queries.',
      },
      {
        icon: 'bolt',
        title: 'JMeter on P90',
        description:
          'Load-tested the endpoints that would feel it, not a vanity homepage.',
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
**Mastery Cloud TMS** — logistics SaaS. TypeScript + Redux Toolkit on the UI, NestJS in a monorepo.

The job that mattered: **MySQL → PostgreSQL** while the product stayed live. I wrote the maps, trimmed GraphQL, indexed Postgres, and a TypeScript script that queried both databases and reported diffs. Cutover didn’t wait on someone reading a spreadsheet.
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
      'US rental leads CRM — portal, NestJS API, TransUnion screening, and marketing site for a 3-person team.',
    tags: ['Real Estate', 'CRM', 'PropTech', 'Startup'],
    role: 'Senior Full-Stack Engineer',
    platform: 'Web · SaaS',
    industries: ['Real Estate', 'PropTech', 'CRM'],
    deliverables: [
      'Agent portal (React + TypeScript) — leads, listings, landlords, renters, team',
      'NestJS + MongoDB API — auth, listings, screening, HubSpot, payments',
      'TransUnion rental screening: shareable landlords/properties, webhooks, reports',
      'Admin panel (React + Ant Design / Material UI)',
      'Marketing site (Next.js + Contentful + HubSpot + SendGrid)',
      'Postman + Cypress coverage for multi-role onboarding flows',
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
      skills.nextjs,
      skills.cypress,
    ],
    tools: [tools.postman, tools.git, tools.github],

    impact:
      'Cut manual QA on multi-role flows by ~70% with Postman lifecycle scripts. Shipped TransUnion screening end-to-end so agents could run credit/background checks inside the product instead of juggling vendor portals.',

    overview:
      'RentBase connects landlords, agents, and renters around listings and lead qualification. Lean 3-person core team; I worked directly with the CEO (ex-Zillow lead). Owned the React/TypeScript portal, built NestJS modules for screening and related domain APIs, and helped keep the marketing site and admin panel in sync with product reality.',

    challenges: [
      {
        label: 'No QA seat',
        value:
          'Onboarding spans agent → landlord → listing → renter → screening report. Manual regression before every deploy was eating the whole week.',
      },
      {
        label: 'TransUnion screening',
        value:
          'PII-heavy flow: shareable landlord/property records, renter validation exams, status/delivery webhooks, IP-guarded notification endpoints, and report UI that agents actually trust.',
      },
      {
        label: 'Many surfaces, one product',
        value:
          'Portal, Nest API, admin, and Next.js marketing site had to stay consistent for leads, listings, follow-ups, and HubSpot sync without a large platform team.',
      },
    ],

    approach: [
      {
        icon: 'integration_instructions',
        title: 'Screening domain in NestJS',
        description:
          'Implemented rental screening APIs — shareable landlords/properties, renter payloads, TransUnion notification handlers with IP guards — and surfaced TenantScreenings / ScreeningReports in the portal.',
      },
      {
        icon: 'architecture',
        title: 'Portal ownership',
        description:
          'Built TypeScript React flows for leads, listings, landlords, renters, team dashboard, follow-ups, Cognito/SAML auth hooks, and Google Maps listing context.',
      },
      {
        icon: 'auto_awesome',
        title: 'Lifecycle automation',
        description:
          'Postman pre/post scripts walked renter → agent → listing → interest → report. Cypress covered critical UI paths so a 3-person team could ship without a dedicated QA hire.',
      },
    ],

    impacts: [
      {
        label: 'Manual QA',
        before: 'Hours of hand-testing per release',
        after: '~70% less via Postman + Cypress',
      },
      {
        label: 'Screening',
        before: 'Off-platform vendor tooling',
        after: 'In-product TransUnion credit & background checks',
      },
      {
        label: 'Product surface',
        before: 'Fragmented tools for CRM + marketing',
        after: 'Portal + API + admin + Next.js site as one system',
      },
    ],

    markdown: `
**RentBase** is a US rental leads CRM. Three-person core team; CEO was a former Zillow lead. I owned the **React + TypeScript** agent portal and worked deep in the **NestJS + MongoDB** API.

**Backend work that mattered:** rental screening module (shareable landlords/properties, renter payloads, TransUnion status/delivery webhooks with IP guards), plus domain APIs around listings, landlords, renters, agents, HubSpot, payments, and follow-ups.

**Frontend:** leads/listings/landlord/renter/team flows, screening report UI, Cognito/SAML auth pieces, Google Maps. Also touched the **admin panel** and the **Next.js** marketing site (Contentful, HubSpot, SendGrid).

With no QA hire, I wrote **Postman** lifecycle automation and **Cypress** coverage so multi-role onboarding could ship without weekly regression theater. Manual QA time dropped ~**70%**.
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
      "ETK's first product — React + NestJS so a new country was config, not a rewrite.",
    tags: ['Enterprise', 'Cross-Border Operations', 'Dashboard'],
    role: 'Senior Full-Stack Engineer',
    platform: 'Web · Enterprise SaaS',
    industries: ['Business Services', 'Cross-Border Trade', 'Enterprise'],
    deliverables: [
      'Cross-border operations dashboard',
      'Reusable React components',
      'Folder layout and lint rules the next person could follow',
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
      "ETK's first digital product. I put the component kit and folder rules in place so the next country didn't mean a rewrite.",

    overview:
      "ETK needed a first product for companies doing business in and out of Africa. I built the console — React, TypeScript, NestJS — knowing rules and currencies would change by country.",

    challenges: [
      {
        label: 'Every country is a little different',
        value:
          'Currency, compliance, paperwork. The UI had to bend without a fork per market.',
      },
      {
        label: 'First product, so the habits stick',
        value:
          'Whatever we put in the repo would be the template. Folder layout and components had to be copyable.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Components you can reuse',
        description:
          'Same pieces, different country config. New screens didn’t start from a blank file.',
      },
      {
        icon: 'verified',
        title: 'Boring structure',
        description:
          'Folders, names, lint. Not exciting. The next engineer can find things.',
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
**Africa Business Console** — ETK's first digital product for companies working across African markets.

React, TypeScript, NestJS. I spent the time on components and folder rules so a new country was config, not a rewrite.
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
  // 5. UpKeep Platform (CMMS, AI product, agent-assisted delivery)
  // ─────────────────────────────────────────────────────────────────────────────
  upkeepplatform: {
    id: 'upkeep-platform',
    title: 'UpKeep Platform',
    tagline:
      'Full-stack CMMS delivery, in-product AI, and an internal ticket-to-PR factory.',
    tags: ['CMMS', 'Enterprise SaaS', 'AI Product', 'Agent Delivery'],
    role: 'Sr. Software Engineer',
    platform: 'Web · SaaS',
    industries: ['Software', 'CMMS', 'Enterprise Resource Planning'],
    deliverables: [
      'Vendor and parts workflows across web and APIs',
      'Event-driven webhook paths (work-order feedback and similar)',
      'In-product AI: access, credits, scoring, admin review',
      'Internal ticket-to-PR factory with review and Playwright in the loop',
      'Preventive Maintenance module work and a release-engineering stretch',
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
      skills.express,
      skills.trpc,
      skills.angular,
      skills.postgresql,
      skills.mongodb,
      skills.apacheKafka,
      skills.docker,
      skills.cypress,
      skills.playwright,
      skills.jest,
      skills.awsSns,
      skills.awsSqs,
      skills.openai,
      skills.langgraph,
      skills.cursorAi,
    ],
    tools: [
      tools.git,
      tools.github,
      tools.jira,
      tools.postman,
      tools.cursorAi,
      tools.openai,
      tools.slack,
      tools.docker,
    ],

    impact:
      'On factory weeks, typically 5–8 reviewed PRs a day. Earlier: sprint velocity 16 → 40+ story points; Leader of the Month (2×); 3rd place in an internal AI hackathon.',

    overview:
      'UpKeep is a mobile-first CMMS and asset operations platform. As a Sr. Software Engineer I ship full-stack tickets across web, APIs, and shared services — vendor and parts workflows, event pipelines, in-product AI, and an internal factory that turns tickets into reviewed PRs. Earlier work includes the Preventive Maintenance module and a stretch as Release Engineer.',

    challenges: [
      {
        label: 'Work spans more than one repo',
        value:
          'A typical ticket touches UI, API routes, and sometimes an event consumer. The job is to keep those changes consistent without leaking unfinished work across services.',
      },
      {
        label: 'AI features need product rails, not demos',
        value:
          'In-product AI needs access control, credits, scoring, and a place for humans to review output. Shipping the model call is the easy part; the rails around it are the work.',
      },
      {
        label: 'Speed without skipping the loop',
        value:
          'An internal factory can draft a lot of PRs. The constraint is keeping review, Playwright, and merge hygiene attached so volume does not become noise.',
      },
    ],

    approach: [
      {
        icon: 'layers',
        title: 'Full-stack tickets',
        description:
          'Own the path from UI through API and events: vendor/parts flows, webhook paths, feature flags, and the shared pieces those features sit on.',
      },
      {
        icon: 'smart_toy',
        title: 'In-product AI',
        description:
          'Trial access, shared credits, scoring pipelines, and admin review boards — Next.js surfaces, TypeScript APIs, and prompt/eval loops.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Ticket-to-PR factory',
        description:
          'Intake, implementation, review, and QA in one loop. On factory weeks that usually means 5–8 PRs a day. I still review what merges.',
      },
      {
        icon: 'verified',
        title: 'QA attached to shipping',
        description:
          'Structured test plans and Playwright coverage sit in the same loop as the PR — not a pass after the fact.',
      },
    ],

    impacts: [
      {
        label: 'Factory throughput',
        before: 'One-ticket, one-PR days',
        after: 'Typically 5–8 PRs a day on factory weeks, still reviewed',
      },
      {
        label: 'Sprint velocity (earlier)',
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
At **UpKeep** I ship full-stack work on a CMMS used by maintenance and reliability teams. A typical change can span the web app, API services, and an event consumer — vendor and parts workflows, webhook paths, and in-product AI (access, credits, scoring, admin review).

I also run an internal **ticket-to-PR factory**: intake, implementation, review, QA. On factory weeks throughput is typically **5–8 PRs a day**. That is a loop with Playwright and review attached, not a personal coding speedrun.

Earlier on this team I was a key contributor to **Preventive Maintenance**, served a stretch as **Release Engineer** for zero-downtime platform deploys, helped lift sprint velocity from **16 to 40+ story points**, and was recognised twice as **Leader of the Month** (plus 3rd place in an internal AI hackathon for a data-consistency POC).
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
      'Quiz-first social app — typed polls in the feed, chat, campaigns, and EC2/pm2 deploys.',
    tags: ['Social Media', 'Quizzes', 'Community'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Social Media', 'EdTech'],
    deliverables: [
      'Next.js app: welcome, feed, create-poll, chat, search, profile, notifications',
      'Poll types: single choice, short/long text, star rating, currency, date-time',
      'Mentions, media crop/upload, saved posts, interest tags, campaigns',
      'iron-session auth cookies + next-translate i18n',
      'EC2 + Apache + pm2 production pipeline',
    ],
    url: null,
    featured: true,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },

    skills: [
      skills.react,
      skills.nextjs,
      skills.javascript,
      skills.scss,
      skills.aws,
    ],
    tools: [tools.git, tools.github],

    impact:
      'Shipped a social feed where the unit of content is a question — with answer distributions inline — plus DMs and campaigns, not another photo wall.',

    overview:
      'Micqro (codebase lived under affy-frontend) is a quiz-first social product. Posts are polls and questions; the feed shows how people answered. Built the Next.js client end-to-end: auth, feed, poll composer, chat, search, profiles, notifications, and campaign surfaces, then wired EC2/pm2 deploys.',

    challenges: [
      {
        label: 'Many poll shapes, one feed',
        value:
          'Star rating, currency, date-time, short/long text, and choice polls each need distinct composers and result UIs without turning the feed into a mess.',
      },
      {
        label: 'Social chrome on top of quizzes',
        value:
          'Mentions, media cropping, chat attachments, saved posts, and interest tags had to feel native next to analytics in the same scroll.',
      },
    ],

    approach: [
      {
        icon: 'web',
        title: 'Next.js product surface',
        description:
          'Pages for welcome, feed, create-poll, chat, search, profile, notifications, campaigns. iron-session for cookie auth; next-translate for locale strings.',
      },
      {
        icon: 'tune',
        title: 'Typed poll system',
        description:
          'Built composers and feed renderers per question type so answer distributions stay readable instead of dumping raw JSON into cards.',
      },
      {
        icon: 'cloud',
        title: 'Ops that stuck',
        description:
          'yarn build + pm2 on EC2 behind Apache — init once, serve for subsequent deploys — so product updates landed without heroics.',
      },
    ],

    impacts: [
      {
        label: 'Content model',
        before: 'Image / status feed',
        after: 'Interactive quiz & poll feed with distributions',
      },
      {
        label: 'Engagement tools',
        before: 'Post and hope',
        after: 'Chat, mentions, campaigns, saved posts, interest tags',
      },
    ],

    markdown: `
**Micqro** (affy-frontend repo) is a quiz-first social app. Feed posts are polls and questions — single choice, short/long text, star rating, currency, date-time — with answer distributions in-line.

I built the **Next.js** client: welcome onboarding, feed, poll creator, chat (attachments), search, profiles, notifications, campaigns, media crop, mentions, saved posts, interest tags. Auth via **iron-session**; copy via **next-translate**.

Deployed on **EC2** with Apache + **pm2** (\`yarn init\` / \`yarn serve\`). Goal was simple: social product where the interesting bit is what people answer, not what they upload.
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
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // (not)Loco — Mental Health Therapy Platform
  // ─────────────────────────────────────────────────────────────────────────────
  notloco: {
    id: 'not-loco',
    title: '(not)Loco',
    tagline:
      'Therapy site from Figma — calm type and spacing, not a clinic brochure.',
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
      'A therapy marketing site that doesn’t look like a clinic brochure. Figma → Next.js + Tailwind, with type and spacing doing the work.',

    overview:
      '(not)Loco connects people with licensed therapists over voice notes and video. I took the Figma and built the site. The brief was: don’t look clinical, don’t look loud.',

    challenges: [
      {
        label: 'Tone',
        value:
          'People arriving here are not shopping. Type, space, and color had to feel quiet without going cold.',
      },
    ],

    approach: [
      {
        icon: 'design_services',
        title: 'Figma → Next.js',
        description:
          'Next.js + Tailwind. Match the file. Don’t invent a second design on the way to production.',
      },
    ],

    impacts: [
      {
        label: 'Brand Trust',
        before: 'Generic clinical design',
        after: 'Quiet type, real spacing',
      },
      {
        label: 'Build',
        before: 'Figma',
        after: 'Shipped Next.js site',
      },
    ],

    markdown: `
**(not)Loco** — therapy over voice notes and video. I built the site from Figma in **Next.js + Tailwind**. Quiet type, real spacing. Not a clinic template.
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
      'Four UIs, one frontend engineer: landing page, checkout widget, merchant dashboard, admin. Wired to live payment APIs and webhooks.',

    overview:
      'Rampnow lets merchants take payments. I was the only frontend person. Four surfaces — public site, checkout widget, merchant console, internal admin — from wireframes to live APIs.',

    challenges: [
      {
        label: 'Four UIs, one of me',
        value:
          'Visitor, customer, merchant, admin. Different APIs, different permissions, same calendar.',
      },
      {
        label: 'Payments fail in the edges',
        value:
          'Gateway APIs, hosted checkout, webhooks. Most of the work was the states between “pay” and “paid”.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'One kit, four apps',
        description:
          'Shared components so the landing page and the admin didn’t look like two companies.',
      },
      {
        icon: 'integration_instructions',
        title: 'Wire the money path',
        description:
          'Gateway calls, webhooks, merchant and admin consoles on live services. Errors on screen, not in a log nobody reads.',
      },
      {
        icon: 'devices',
        title: 'Match the designs',
        description:
          'Desktop, tablet, phone. If it broke at 375px, it wasn’t done.',
      },
    ],

    impacts: [
      {
        label: 'Modules Delivered',
        before: 'Conceptual wireframes',
        after: '4 distinct production-ready modules',
      },
      {
        label: 'Engineering Execution',
        before: 'Multi-developer scope',
        after: 'Delivered as sole frontend engineer',
      },
    ],

    markdown: `
**Rampnow** — payments. I was the only frontend engineer: landing page, checkout widget, merchant dashboard, admin.

Gateway APIs, webhooks, live consoles. Four surfaces. The interesting work was the error states.
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
      'Zari, thread, and yarn shop — homepage and products come from the admin, not a deploy.',
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
      'First project I ran end to end. Admin could change the landing page, categories, and product fields without a deploy. Also the project that taught me to check before you ship.',

    overview:
      'Store for Zari, threads, and yarn. Shop plus admin. The homepage, which categories showed, and which fields a product had — all from the admin, not a deploy. First time I owned the whole thing.',

    challenges: [
      {
        label: 'Admin owns the homepage',
        value:
          'Layout, categories, product fields. If the client wanted a new block, it couldn’t wait on me.',
      },
    ],

    approach: [
      {
        icon: 'dynamic_feed',
        title: 'Config, not deploys',
        description:
          'The storefront read config from the admin. Content changes didn’t need a release.',
      },
    ],

    impacts: [
      {
        label: 'Storefront Management',
        before: 'Developer-dependent updates',
        after: '100% admin-driven dynamic UI',
      },
      {
        label: 'Project Ownership',
        before: 'Contributor',
        after: 'End-to-end frontend management',
      },
    ],

    markdown: `
**Textile Aadhar** — shop for Zari, threads, yarn. I built the store and the admin. Homepage and product fields came from config, not a deploy.

First project I ran end to end. Also the one that taught me: check it before you ship it.
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
      'Mill ERP — designs, recipes, warp/weft math, inventory, orders. The formulas had to match the floor.',
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
      'Textile ERP from design recipes through warp/weft math, inventory, and sales. The formulas came from sitting with the mill, not from a spec.',

    overview:
      'ERP for a fabric mill: designs, recipes (the cloth pattern), warp and weft calculations, manufacturing, inventory, sales and purchase orders.',

    challenges: [
      {
        label: 'The math is the product',
        value:
          'Warp and weft aren’t generic inventory. Get the formula wrong and the mill wastes yarn. I sat with the client until the numbers matched the shop floor.',
      },
    ],

    approach: [
      {
        icon: 'domain',
        title: 'Ask the mill',
        description:
          'Walk the workflow, then write the modules. The formulas aren’t in a textbook.',
      },
    ],

    impacts: [
      {
        label: 'Domain Workflow',
        before: 'Manual fabric calculations',
        after: 'Automated Warp & Weft engine',
      },
      {
        label: 'Process Integration',
        before: 'Siloed data',
        after: 'Unified design-to-sales pipeline',
      },
    ],

    markdown: `
**Textile ERP** — designs, recipes, warp/weft calculations, inventory, sales and purchase orders.

The work was sitting with the mill until the formulas matched what they actually do.
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
      'Jobs, interviews, agencies — first Redux I actually understood, plus the animated About page.',
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
      'Recruitment admin + job site. First time I really used Redux in production. Also built the animated About page.',

    overview:
      'Tatkal Jobs — consultancy. Admin for jobs, interviews, students, agencies, employees, plus the public job site. I also made the About page infographics. This is where Redux stopped being a tutorial.',

    challenges: [
      {
        label: 'Too many entities in one admin',
        value:
          'Jobs, interviews, agencies, students, employees. Without a store that made sense, the UI fought itself.',
      },
    ],

    approach: [
      {
        icon: 'account_tree',
        title: 'Redux, for real',
        description:
          'Normalized state, selectors, and a smaller bundle. Learned it here, not in a course.',
      },
      {
        icon: 'animation',
        title: 'Animated About page',
        description:
          'Custom SVG/CSS infographics. The bit people actually screenshot.',
      },
    ],

    impacts: [
      {
        label: 'State Complexity',
        before: 'Scattered UI state',
        after: 'Disciplined Redux architecture',
      },
      {
        label: 'User Engagement',
        before: 'Static About page',
        after: 'Custom animated infographics',
      },
    ],

    markdown: `
**Tatkal Jobs** — recruitment admin and public job site. Jobs, interviews, students, agencies, employees.

First production **Redux** I actually understood. Also built the animated About page.
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
      'UK flight booking site — tore out a filter loop that grew with every click and rewrote search results.',
    tags: ['Travel', 'Performance', 'Refactor'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Travel', 'E-commerce'],
    deliverables: [
      'Search results rewrite (SearchResult/New — hooks for flights, price, bound-time)',
      'Filter state remodel: array → keyed object (368× loops → flat 33)',
      'Sidebar filters: stops, airlines, price & time sliders',
      'Booking / passenger / Stripe checkout path hardening',
    ],
    url: 'https://www.flightstravel.co.uk/',
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },

    skills: [
      skills.react,
      skills.javascript,
      skills.redux,
      skills.scss,
    ],
    tools: [tools.git, tools.github],

    impact:
      'One filter click used to run 368 iterations and roughly double with each extra filter. After the rewrite: flat 33 — search stayed usable under real filter stacks.',

    overview:
      'FlightsTravel.co.uk (Flights & Travels Ltd) had a search UX that melted under filters. Legacy results page mixed branching and array-shaped filter state. A previous engineer spent about a month on it. I rebuilt the results layer and fixed the filter model.',

    challenges: [
      {
        label: 'Filter loops that compound',
        value:
          'First filter → ~368 iterations. Second → ~700. Third → ~1,300. Every click made the page slower.',
      },
      {
        label: 'Legacy results spaghetti',
        value:
          'Filter options lived as selected arrays, so every change rescanned everything. Hard to fix without rewriting how selection was represented.',
      },
    ],

    approach: [
      {
        icon: 'handyman',
        title: 'Keyed filter state',
        description:
          'Switched selected filters from arrays to keyed objects. Lookups stopped scanning the whole option list on every change — iterations dropped to a flat 33 no matter how many filters were on.',
      },
      {
        icon: 'bolt',
        title: 'New results module',
        description:
          'Day one: map the real behavior. Day two: ship SearchResult/New with useFlights, price/bound-time hooks, and a sidebar that applies filters without the old cascade.',
      },
    ],

    impacts: [
      {
        label: 'Filter work per click',
        before: '368+ (doubling with each filter)',
        after: '33 — constant',
      },
      {
        label: 'Time to fix',
        before: '~1 month (prior attempt)',
        after: '2 days (understand + ship)',
      },
    ],

    markdown: `
**FlightsTravel.co.uk** — UK flight booking. Search filters were broken: one selection looped **368** times and roughly doubled with each extra filter. Prior engineer spent a month; problem stayed.

I spent a day reading the real flow, then remodelled filter selection from arrays to keyed objects and landed a new results stack (\`SearchResult/New\` — \`useFlights\`, price/time sliders, sidebar). Iterations fell to a flat **33**. Booking/passenger/Stripe paths stayed in the same React client (Material UI, Formik).
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
      'Phone and laptop cases you can customize — shop and admin in Next.js, Vercel + AWS.',
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
      'Phone and laptop accessory shop with live customization, plus an admin. Next.js on Vercel, APIs on AWS.',

    overview:
      'ZovilStore — pick a case, pick the options, see it. Storefront and admin in Next.js + Tailwind. Vercel for the site, AWS for the rest.',

    challenges: [
      {
        label: 'See it before you buy it',
        value:
          'Accessory options had to update on the product, not after a refresh.',
      },
    ],

    approach: [
      {
        icon: 'web',
        title: 'Next.js + Tailwind',
        description:
          'Same stack for the shop and the admin. Fewer surprises.',
      },
      {
        icon: 'admin_panel_settings',
        title: 'Carbon admin',
        description:
          'IBM Carbon for the product/category screens. Catalog isn’t hardcoded.',
      },
    ],

    impacts: [
      {
        label: 'Hosting Architecture',
        before: 'Single environment',
        after: 'Dual Vercel + AWS stack',
      },
      {
        label: 'Admin Capabilities',
        before: 'Hardcoded products',
        after: 'Carbon admin for products and categories',
      },
    ],

    markdown: `
**ZovilStore** — customize phone and laptop accessories. I built the shop and the admin in **Next.js + Tailwind**. Site on Vercel, rest on AWS.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Thomas Cook
  // ─────────────────────────────────────────────────────────────────────────────
  thomascook: {
    id: 'thomas-cook',
    title: 'Thomas Cook Admin Panel',
    tagline:
      'Thomas Cook ops admin — I wrote the calendar because nothing off the shelf did overlaps and ranges.',
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
      'Internal Thomas Cook admin. The calendar — overlapping tours, date ranges — didn’t exist in a library, so I wrote it.',

    overview:
      'Internal ops panel for Thomas Cook: who is on which tour, when they’re free. The calendar had to show overlapping events and let you pick ranges. Off-the-shelf widgets couldn’t.',

    challenges: [
      {
        label: 'The calendar was the job',
        value:
          'Overlapping events and range select at the same time. Every library we tried failed one of those.',
      },
    ],

    approach: [
      {
        icon: 'dashboard_customize',
        title: 'Write the calendar',
        description:
          'Custom React calendar. Overlaps, ranges, employee schedules. No wrapper around a plugin that almost worked.',
      },
    ],

    impacts: [
      {
        label: 'Calendar UI',
        before: 'Off-the-shelf limitations',
        after: 'Bespoke overlapping-event calendar',
      },
      {
        label: 'Schedule Management',
        before: 'Manual tracking',
        after: 'Automated multi-date selections',
      },
    ],

    markdown: `
**Thomas Cook** internal admin — tour schedules and who is free. I wrote a **custom calendar**: overlapping events, date ranges. Libraries couldn’t do both.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Implr (Standalone Micro-Service Product)
  // ─────────────────────────────────────────────────────────────────────────────
  implr: {
    id: 'implr',
    title: 'Implr',
    tagline:
      'A StringERP module we pulled out and shipped as its own product.',
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
      'Took a StringERP module, cut the shared bits, gave it its own deploy. StringERP kept working.',

    overview:
      'Implr started as a folder inside StringERP. It was useful on its own, so I pulled it out — own API, own pipeline — without breaking the ERP.',

    challenges: [
      {
        label: 'Cut it out without the ERP falling over',
        value:
          'Shared code, shared assumptions. Needed a real boundary and a contract, not a copy-paste of the folder.',
      },
    ],

    approach: [
      {
        icon: 'account_tree',
        title: 'Own deploy, same habits',
        description:
          'Clear edges, fewer shared imports, its own pipeline. The ERP still used it as a module.',
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
**Implr** was a StringERP module. I pulled it out as its own product — own API, own deploy — without breaking the ERP.

That’s why the StringERP module kit exists: if a folder might become a product, don’t weld it to the rest.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gatflix
  // ─────────────────────────────────────────────────────────────────────────────
  gatflix: {
    id: 'gatflix',
    title: 'Gatflix',
    tagline:
      'GATE coaching — chunked lecture uploads, streams that don’t leak the file URL, Express SSR.',
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
      'Six months on a GATE coaching site: chunked video uploads, streams that didn’t leak the file URL, and SSR the hard way — compile React to JS, serve it with Express.',

    overview:
      'Gatflix — GATE coaching: live classes, lectures, tests. I was on it for 6+ months. Videos were huge and people tried to steal them. Next.js SSR wasn’t a given yet, so we compiled React and served HTML from Express.',

    challenges: [
      {
        label: 'Don’t leak the video URL',
        value:
          'Lectures had to play without a URL you could paste into another tab, and without a download button that actually worked.',
      },
      {
        label: 'Files that don’t fit in one request',
        value:
          'A single PUT of a lecture would die. Chunk it, resume it.',
      },
      {
        label: 'SSR without a framework for it',
        value:
          'SEO wanted HTML. We compiled the React app to vanilla JS and let Express serve it.',
      },
    ],

    approach: [
      {
        icon: 'security',
        title: 'Hide the file',
        description:
          'Stream the lecture. Don’t put the source URL in the page.',
      },
      {
        icon: 'upload',
        title: 'Chunk the upload',
        description:
          'Split the file. Resume if the network flakes.',
      },
      {
        icon: 'dns',
        title: 'SSR via Express',
        description:
          'Compile React, serve HTML. Before App Router made this a checkbox.',
      },
    ],

    impacts: [
      {
        label: 'Video Security',
        before: 'Exposed source URLs',
        after: 'URL-concealed streaming',
      },
      {
        label: 'Large File Support',
        before: 'Unreliable single uploads',
        after: 'Chunked, resumable uploads',
      },
      {
        label: 'SEO & Performance',
        before: 'Client-side rendering',
        after: 'Manual Express-based SSR',
      },
    ],

    markdown: `
**Gatflix** — GATE coaching. Six months. **Chunked uploads** for big lectures, streams that **don’t leak the file URL**, and SSR by compiling React and serving it with Express. This was before that was a framework default.
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
        icon: 'menu_book',
        title: 'Learn While Shipping',
        description:
          'Learned Fabric.js, the Canvas API, and web storage from scratch while delivering production features — the challenge that most accelerated early career growth.',
      },
    ],

    impacts: [
      {
        label: 'eBook Creation',
        before: 'No web solution',
        after: 'Canvas-based cover designer',
      },
      {
        label: 'Skill Acquisition',
        before: 'Zero Canvas/Fabric.js knowledge',
        after: 'Shipped production Canvas editor',
      },
    ],

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
      'Marketing site with GSAP timelines — Next.js 15, React 19, keep it at 60fps.',
    tags: ['Frontend', 'Animation', 'Web', 'Performance'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Creative Web', 'Design'],
    deliverables: [
      'React 19 frontend',
      'GSAP scroll timelines',
      'Next.js 15 App Router',
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
      'Scroll-driven GSAP timelines that stay at 60fps. Next.js 15 / React 19, not a slideshow that janks on a phone.',

    overview:
      'Laahchee is a marketing site that lives or dies on motion. Next.js 15, React 19, Tailwind v4, GSAP timelines on scroll. If it dropped frames, it wasn’t done.',

    challenges: [
      {
        label: 'Motion vs the main thread',
        value:
          'Lots of scroll-triggered timelines. Easy to thrash layout. Had to keep 60fps.',
      },
      {
        label: 'GSAP + React 19',
        value:
          'Client animations next to server components. Don’t fight the new React, don’t freeze the page.',
      },
    ],

    approach: [
      {
        icon: 'animation',
        title: 'GSAP timelines',
        description:
          'One timeline per scene, tied to scroll. Measure, then add the next beat.',
      },
      {
        icon: 'bolt',
        title: 'Keep the JS small',
        description:
          'Next.js 15 and Tailwind v4. Animation is the feature; the bundle isn’t.',
      },
    ],

    impacts: [
      {
        label: 'Animation Performance',
        before: 'Janky scroll effects',
        after: '60fps GSAP timelines',
      },
      {
        label: 'Architecture',
        before: 'Legacy React',
        after: 'React 19 & Next.js 15 App Router',
      },
    ],

    markdown: `
**Laahchee** — marketing site that has to move. **Next.js 15**, **React 19**, **Tailwind v4**, **GSAP** on scroll.

The job: keep it at **60fps**. If a timeline janked on a phone, it went back.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Jivita Design
  // ─────────────────────────────────────────────────────────────────────────────
  jivitadesign: {
    id: 'jivita-design',
    title: 'Jivita Design',
    tagline:
      'Next.js storefront — SSR for SEO, Mongo behind it, Tailwind + Alpine for the bits that need to move.',
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
      'Storefront that search engines can actually index. Interactivity stayed on Alpine so Next didn’t ship a SPA to shop.',

    overview:
      'Jivita is a Next.js storefront. SSR for product pages, Mongo for data, Tailwind for layout, Alpine.js for the small client bits. Shopping pages that load as HTML, not a spinner.',

    challenges: [
      {
        label: 'SSR vs clicky UI',
        value:
          'Needed product pages as HTML. Also needed hover, drawers, small interactions. Alpine, not a second React tree.',
      },
      {
        label: 'Mongo without waiting',
        value:
          'Catalog from Mongo. Don’t make the first paint wait on a fat client fetch.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'SSR first, Alpine second',
        description:
          'Next.js SSR/SSG for pages. Alpine only where something has to move. Mongo on the server.',
      },
    ],

    impacts: [
      {
        label: 'Rendering Strategy',
        before: 'Pure Client-Side (SPA)',
        after: 'Hybrid Next.js SSR/SSG',
      },
      {
        label: 'Time-to-Interactive',
        before: 'Heavy initial payload',
        after: 'Deferred non-critical components',
      },
    ],

    markdown: `
**Jivita Design** — Next.js storefront. **SSR** so product pages are HTML. **Mongo** for the catalog. **Tailwind** for layout, **Alpine** for the bits that need to move.

Not a SPA with a loading screen. Shoppers get a page; search engines get markup.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DS Universe
  // ─────────────────────────────────────────────────────────────────────────────
  dsuniverse: {
    id: 'ds-universe',
    title: 'DS Universe',
    tagline:
      'Scroll site with Lenis + GSAP — Next.js 16, React 19, motion tied to the wheel.',
    tags: ['Creative Web', 'Animation', 'Immersive'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Creative Web', 'Design'],
    deliverables: [
      'Lenis smooth scrolling',
      'GSAP scroll-tied scenes',
      'React 19 / Next.js 16 frontend',
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
      'Lenis scroll + GSAP ScrollTrigger so scenes fire on the wheel, not on a timer. Works on a phone, not just a 27-inch demo.',

    overview:
      'DS Universe is a scroll-driven marketing site. Next.js 16, React 19, Lenis for momentum scroll, GSAP for the scenes. If the animation doesn’t match the scroll, it’s wrong.',

    challenges: [
      {
        label: 'Scroll has to match the scene',
        value:
          'Different screens, different refresh rates. ScrollTrigger and Lenis had to stay in lockstep.',
      },
    ],

    approach: [
      {
        icon: 'bolt',
        title: 'Lenis + ScrollTrigger',
        description:
          'Lenis owns the scroll. GSAP ScrollTrigger owns the beats. One source of progress.',
      },
    ],

    impacts: [
      {
        label: 'Scroll Experience',
        before: 'Native scrolling',
        after: 'Lenis momentum-based fluid scroll',
      },
      {
        label: 'Visual Immersion',
        before: 'Static pages',
        after: 'Scroll-synchronized GSAP choreography',
      },
    ],

    markdown: `
**DS Universe** — scroll site. **Next.js 16**, **React 19**. **Lenis** for the wheel, **GSAP ScrollTrigger** for the scenes.

If a beat fired late on a phone, it went back. Motion is the product here.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Creg Caribbean
  // ─────────────────────────────────────────────────────────────────────────────
  cregcaribbean: {
    id: 'creg-caribbean',
    title: 'Creg Caribbean',
    tagline:
      'Caribbean listings on a Mapbox map — React, Redux, Ant Design for the dashboard.',
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
      'Listings live on the map, not in a table you scroll forever. Hundreds of pins, Redux keeps filters and the map in the same state.',

    overview:
      'Creg Caribbean is a listings product for the Caribbean. Mapbox-GL is the search. React + Redux hold pins and filters. Ant Design is the back-office for the listings themselves.',

    challenges: [
      {
        label: 'Too many pins',
        value:
          'Mapbox + React will stall if you dump every listing as a React node. Pins had to stay in the map layer.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Map first',
        description:
          'Mapbox owns the pins. Redux owns the filters. The list is a view of the same state, not a second source.',
      },
    ],

    impacts: [
      {
        label: 'Property Discovery',
        before: 'List-based search',
        after: 'Mapbox-GL map with Redux filters',
      },
      {
        label: 'Data Rendering',
        before: 'Browser lag on large sets',
        after: 'Optimized Redux synchronization',
      },
    ],

    markdown: `
**Creg Caribbean** — listings for the Caribbean. You search on a **Mapbox-GL** map, not a spreadsheet.

**React** + **Redux** for filters and pins. **Ant Design** for the dashboard that actually edits the listings. If the map lagged, the pins were in the wrong place.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gateflix
  // ─────────────────────────────────────────────────────────────────────────────
  gateflix: {
    id: 'gateflix',
    title: 'Gateflix',
    tagline:
      'GATE video courses — HLS.js so lectures adapt to the network, Redux for progress.',
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
      'Lectures stream as HLS, not a single MP4 that buffers on a 3G train. Progress and catalogs live in Redux.',

    overview:
      'Gateflix is GATE coaching in a browser. Video is the product. HLS.js for adaptive bitrate, Redux for courses and progress, a rich editor for notes.',

    challenges: [
      {
        label: 'Video on bad networks',
        value:
          'Students weren’t all on office wifi. A single MP4 meant a spinner. HLS had to pick a bitrate that fit.',
      },
    ],

    approach: [
      {
        icon: 'bolt',
        title: 'HLS.js',
        description:
          'Adaptive bitrate. The player drops quality before it stalls. Redux keeps which lecture you were on.',
      },
    ],

    impacts: [
      {
        label: 'Video Delivery',
        before: 'Buffering on slow networks',
        after: 'Adaptive bitrate HLS streaming',
      },
      {
        label: 'State Management',
        before: 'Prop drilling',
        after: 'Complex Redux store for study materials',
      },
    ],

    markdown: `
**Gateflix** — GATE lectures in a browser. **React** + **Redux** for catalogs, progress, tests.

Video is **HLS.js**. If the network dropped, the player dropped quality — not a 20-minute rebuffer.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HK Analytics
  // ─────────────────────────────────────────────────────────────────────────────
  hkanalytics: {
    id: 'hk-analytics',
    title: 'HK Analytics',
    tagline:
      'Analytics dashboard — AG-Grid for the tables, Highcharts for the graphs, Next.js around it.',
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
      'Thousands of rows without locking the tab. AG-Grid virtualizes the table; Highcharts only redraws when the data actually changed.',

    overview:
      'HK Analytics is a dashboard for people who live in tables. Next.js + Tailwind. AG-Grid for the grids. Highcharts for the charts. If you dump 10k rows into a <table>, the browser dies. We didn’t.',

    challenges: [
      {
        label: 'Too many rows',
        value:
          'Thousands of rows plus charts. A naive table froze the tab. Charts re-rendering on every parent update made it worse.',
      },
    ],

    approach: [
      {
        icon: 'architecture',
        title: 'Virtualize the grid',
        description:
          'AG-Grid only paints what’s on screen. Memo on the chart wrappers so Highcharts doesn’t redraw for a sort on another column.',
      },
    ],

    impacts: [
      {
        label: 'Data Grid Rendering',
        before: 'Browser crash on thousands of rows',
        after: 'AG-Grid DOM virtualization',
      },
      {
        label: 'Chart Performance',
        before: 'Unnecessary re-renders',
        after: 'Strict React memoization',
      },
    ],

    markdown: `
**HK Analytics** — Next.js dashboard. **AG-Grid** for the tables (virtualized — the DOM doesn’t get 10k rows). **Highcharts** for the graphs, memoized so a sort doesn’t redraw every chart.

People used it to look at numbers, not to wait on a spinner.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // RK Synthetics
  // ─────────────────────────────────────────────────────────────────────────────
  rksynthetics: {
    id: 'rk-synthetics',
    title: 'RK Synthetics',
    tagline:
      'B2B corporate site — Next.js 15 server components, less JS on the wire.',
    tags: ['Corporate Website', 'B2B', 'Performance'],
    role: 'Frontend Engineer',
    platform: 'Web',
    industries: ['Manufacturing', 'Corporate'],
    deliverables: [
      'B2B corporate site',
      'Next.js 15 server components',
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
      'Corporate pages as server components. Smaller JS, faster first paint, search engines get HTML.',

    overview:
      'RK Synthetics is a B2B company site. Next.js 15, React 19, Tailwind v4, Turbopack in dev. Server components first so the marketing pages aren’t a 400kb SPA.',

    challenges: [
      {
        label: 'Old content, new stack',
        value:
          'Legacy pages into TypeScript + server components. Don’t ship a client bundle for a brochure.',
      },
    ],

    approach: [
      {
        icon: 'bolt',
        title: 'Server components',
        description:
          'HTML from the server. Client JS only where a form or a menu needs it.',
      },
    ],

    impacts: [
      {
        label: 'Client-Side Payload',
        before: 'Heavy JS bundles',
        after: 'Near-instant Server Components',
      },
      {
        label: 'Build Performance',
        before: 'Slow Webpack builds',
        after: 'Rapid Turbopack compilation',
      },
    ],

    markdown: `
**RK Synthetics** — B2B site. **Next.js 15**, **React 19**, **Tailwind v4**. **Turbopack** in dev.

Server components by default. A brochure page doesn’t need a client runtime. First paint got faster because we stopped shipping one.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Sequelis
  // ─────────────────────────────────────────────────────────────────────────────
  sequelis: {
    id: 'sequelis',
    title: 'Sequelis',
    tagline:
      'Marketing site where GSAP timelines react to scroll and hover — Next.js 15.',
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
      'GSAP timelines that fire on scroll and hover. Same motion on a phone as on a desktop — scaled, not stripped.',

    overview:
      'Sequelis is a marketing site that sells with motion. Next.js 15, React 19, GSAP timelines on scroll and hover. If it only worked on a desktop, it wasn’t shipped.',

    challenges: [
      {
        label: 'Motion on a phone',
        value:
          'Timelines that look fine on a 27-inch screen will hitch on a mid-range Android. Had to test both.',
      },
    ],

    approach: [
      {
        icon: 'animation',
        title: 'GSAP on the gesture',
        description:
          'Scroll and hover drive the timelines. Shorter beats on small screens, not a second site.',
      },
    ],

    impacts: [
      {
        label: 'Motion Integration',
        before: 'Static marketing',
        after: 'Interactive GSAP timelines',
      },
      {
        label: 'Device Support',
        before: 'Desktop-only animations',
        after: 'Smooth playback on mobile & desktop',
      },
    ],

    markdown: `
**Sequelis** — marketing site. **Next.js 15**, **React 19**, **GSAP** on scroll and hover.

Motion is the point. I tested it on a phone. If a timeline hitched, it went back.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Can
  // ─────────────────────────────────────────────────────────────────────────────
  can: {
    id: 'can-package',
    title: '@knovator/can',
    tagline:
      'npm package — `<Can>` and `hasAccessOf` so admin UIs stop sprinkling role ifs.',
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
      'Admin screens stopped growing a forest of `role ===`. One permission object, a `<Can>` wrap, done.',
    overview:
      'Admin panels have roles. We were writing the same ifs on every button. `@knovator/can` is a small npm package: `hasAccessOf` / `hasAccessTo` for logic, a `<Can>` component for JSX. One permission shape.',
    challenges: [
      {
        label: 'Ifs everywhere',
        value:
          'Every action had its own role check. Miss one and a button shows up for the wrong person.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: '<Can> wrap',
        description:
          'Permission object in, JSX in. If they don’t have it, it doesn’t render. Same helpers for routes.',
      },
    ],
    impacts: [
      {
        label: 'Access Control',
        before: 'Scattered condition checks',
        after: 'Declarative <Can> component',
      },
      {
        label: 'Maintenance Overhead',
        before: 'High boilerplate',
        after: 'Standardized permission objects',
      },
    ],
    markdown: `
**@knovator/can** — small npm package. Permission object, hasAccessOf / hasAccessTo, a Can wrap for JSX.

Used it on more than one admin panel so we weren’t copying role ifs between repos.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // API Wrapper
  // ─────────────────────────────────────────────────────────────────────────────
  apiwrapper: {
    id: 'api-wrapper',
    title: '@knovator/api',
    tagline:
      'Axios wrapper — one `setAPIConfig`, tokens and cancel-in-flight live there.',
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
      'One config for base URL, token, errors. Duplicate in-flight calls cancel. Less copy-paste Axios in every screen.',
    overview:
      '`@knovator/api` wraps Axios. `setAPIConfig` once — base URL, token, errors. `fetchUrl` for the call. If you fire the same endpoint twice, the first one cancels.',
    challenges: [
      {
        label: 'Token on every call',
        value:
          'Every screen was passing the token and the base URL. Easy to miss. Easy to double-fetch.',
      },
    ],
    approach: [
      {
        icon: 'speed',
        title: 'Config once',
        description:
          '`setAPIConfig` holds the token and the host. Matching in-flight requests cancel so you don’t race.',
      },
    ],
    impacts: [
      {
        label: 'API Configuration',
        before: 'Redundant setup per call',
        after: 'Centralized global config',
      },
      {
        label: 'Network Efficiency',
        before: 'Race conditions & duplicates',
        after: 'Automatic request cancellation',
      },
    ],
    markdown: `
**@knovator/api** — Axios with the boring parts in one place. setAPIConfig for host, token, errors. fetchUrl for the call. Same endpoint twice → first request dies.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Game Design
  // ─────────────────────────────────────────────────────────────────────────────
  gamedesign: {
    id: 'game-design-platform',
    title: 'Game Design Platform',
    tagline:
      'React 18 UI for a game-design tool — Tailwind, actually usable on a phone.',
    tags: ['Interactive UI', 'Responsive', 'Platform'],
    role: 'Frontend Engineer',
    platform: 'Web · Mobile-Responsive',
    industries: ['Gaming', 'Software Development'],
    deliverables: ['Responsive interactive UI', 'React component architecture'],
    url: null,
    featured: false,
    period: { start: '2023', end: '2023' },
    skills: [skills.react, skills.tailwindcss, skills.javascript],
    tools: [tools.git],
    impact:
      'Design tools that still work on a phone. Tailwind breakpoints, not a hidden desktop-only canvas.',
    overview:
      'Frontend for a game-design tool. React 18, Tailwind. The hard part wasn’t the look — it was keeping editors and palettes usable when the screen is 375px.',
    challenges: [
      {
        label: 'Editors on a phone',
        value:
          'Design UIs assume a mouse and a wide canvas. Had to collapse tools without losing the actual job.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Mobile first',
        description:
          'Tailwind breakpoints. If it didn’t work at 375px, the desktop version wasn’t done either.',
      },
    ],
    impacts: [
      {
        label: 'Interface Adaptability',
        before: 'Desktop-bound design',
        after: 'Mobile-first responsive architecture',
      },
      {
        label: 'Styling Velocity',
        before: 'Custom CSS files',
        after: 'Rapid Tailwind UI consistency',
      },
    ],
    markdown: `
**Game Design Platform** — **React 18**, **Tailwind**. Editors and palettes that still work at phone width. If a control disappeared on 375px, it wasn’t done.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Digibooks
  // ─────────────────────────────────────────────────────────────────────────────
  digibooks: {
    id: 'digibooks',
    title: 'Digibooks',
    tagline:
      'Digital books — Draft.js for authoring, HLS.js so video isn’t a downloadable MP4.',
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
      'Authors get Draft.js. Readers get HLS chunks, not an MP4 URL. Firebase keeps sessions in sync.',
    overview:
      'Digibooks is a reading product. React + Redux on the frontend. I owned the hard modules: a real editor, video that isn’t a stealable file, and live sync.',
    challenges: [
      {
        label: 'Books aren’t a textarea',
        value:
          'Authors needed formatting, embeds, structure. A contenteditable with hope wasn’t going to ship.',
      },
      {
        label: 'Don’t leak the video',
        value:
          'Premium lectures inside books. A direct MP4 is a download. Chunk it.',
      },
    ],
    approach: [
      {
        icon: 'integration_instructions',
        title: 'Draft.js + HLS.js',
        description:
          'Draft.js for the document. HLS.js for video so the file URL never sits in the player.',
      },
      {
        icon: 'architecture',
        title: 'Firebase for live state',
        description:
          'Progress and session bits over Firebase so two tabs don’t fight.',
      },
    ],
    impacts: [
      {
        label: 'Content Authoring',
        before: 'Basic text inputs',
        after: 'Draft.js rich-text integration',
      },
      {
        label: 'Media Security',
        before: 'Direct MP4 links',
        after: 'HLS secure chunked streaming',
      },
    ],
    markdown: `
**Digibooks** — digital books. **React** + **Redux**.

**Draft.js** for authors. **HLS.js** for video so the MP4 isn’t sitting in the network tab. **Firebase** so two sessions don’t overwrite each other.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Digibooks Admin Panel
  // ─────────────────────────────────────────────────────────────────────────────
  digibooksadmin: {
    id: 'digibooks-admin',
    title: 'Digibooks Admin Panel',
    tagline:
      'Digibooks CMS — React, Redux, Ant Design. Fine Uploader so a 2GB lecture doesn’t time out.',
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
      'Ops upload lectures in chunks. If the wifi dies at 80%, they resume — they don’t start over.',
    overview:
      'Back office for Digibooks. React, Redux, Ant Design. Users, books, configs. The painful part was video: a single POST of a lecture file would time out.',
    challenges: [
      {
        label: 'Huge files',
        value:
          'Lectures and PDFs are big. A naive upload dies halfway. Need chunks and a resume.',
      },
    ],
    approach: [
      {
        icon: 'integration_instructions',
        title: 'Fine Uploader',
        description:
          'Chunked, resumable uploads in the dashboard. The browser doesn’t sit on one request for ten minutes.',
      },
    ],
    impacts: [
      {
        label: 'Media Uploads',
        before: 'Timeouts on large files',
        after: 'Chunked, resumable uploads via Fine Uploader',
      },
      {
        label: 'Data Management',
        before: 'Manual operations',
        after: 'Comprehensive CMS dashboard',
      },
    ],
    markdown: `
**Digibooks Admin** — React, Redux, Ant Design. Tables, forms, users.

The thing that actually broke: big video. **Fine Uploader** — chunk it, resume it, don’t make ops sit on a spinner for twenty minutes.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Gateflix Admin Panel
  // ─────────────────────────────────────────────────────────────────────────────
  gateflixadmin: {
    id: 'gateflix-admin',
    title: 'Gateflix Admin Panel',
    tagline:
      'Gateflix CMS — same Ant Design stack as Digibooks admin, courses and video assets.',
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
      'Ops manage courses and video from one panel. Same Ant Design patterns as Digibooks, so we weren’t inventing a second admin language.',
    overview:
      'Admin for Gateflix — courses, students, video. Same React / Redux / Ant Design shape as Digibooks admin. That’s the point: two products, one way to build a table.',
    challenges: [
      {
        label: 'Don’t fork the admin',
        value:
          'A second custom table kit would have doubled the bugs. Reuse the Digibooks patterns.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Ant Design, same as Digibooks',
        description:
          'Tables and forms from Ant Design. Faster to ship, and ops already knew the chrome.',
      },
    ],
    impacts: [
      {
        label: 'UI Consistency',
        before: 'Custom scattered components',
        after: 'Standardized Ant Design library',
      },
      {
        label: 'Development Speed',
        before: 'Slow bespoke tables',
        after: 'Rapid complex data-grid deployment',
      },
    ],
    markdown: `
**Gateflix Admin** — React, Redux, Ant Design. Courses and video.

Same admin shape as Digibooks. I wasn’t going to invent a second table kit for the same company.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Stay Classy
  // ─────────────────────────────────────────────────────────────────────────────
  stayclassy: {
    id: 'stay-classy',
    title: 'Stay Classy',
    tagline:
      'Shop with Next.js SSR — product pages as HTML, zoom and sliders on top.',
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
      'Product pages as HTML. Google can index them. Shoppers don’t wait on a blank SPA.',
    overview:
      'Stay Classy is a shop. SPA product pages weren’t showing up in search and first paint was a spinner. Next.js SSR for the pages. Zoom, sliders, and cart still on the client.',
    challenges: [
      {
        label: 'SPA vs search',
        value:
          'Client-rendered product pages were invisible to crawlers and slow on a cheap phone.',
      },
    ],
    approach: [
      {
        icon: 'speed',
        title: 'Next.js SSR',
        description:
          'Render the product on the server. Zoom and sliders hydrate after. Cart still works.',
      },
    ],
    impacts: [
      {
        label: 'SEO Visibility',
        before: 'Poor SPA indexing',
        after: 'Fully indexed Next.js SSR pages',
      },
      {
        label: 'Initial Load Time',
        before: 'Blank loading screens',
        after: 'Instant server-rendered product views',
      },
    ],
    markdown: `
**Stay Classy** — shop. **Next.js SSR** so product pages are HTML. Zoom, sliders, cart still on the client.

A SPA here meant a blank first paint and pages Google couldn’t see. SSR fixed both.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // WonderMD Patient Portal
  // ─────────────────────────────────────────────────────────────────────────────
  wondermdpatient: {
    id: 'wondermd-patient',
    title: 'WonderMD Patient Portal',
    tagline:
      'Patient portal — OpenTok in the browser, Stripe for the visit, Next.js + Tailwind.',
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
      'Visit happens in the tab. OpenTok for video, Stripe for the bill. No Zoom download, no invoice later.',
    overview:
      'WonderMD is telehealth. I built the patient portal in Next.js and Tailwind — book, pay, sit in the call. History and appointments in the same app.',
    challenges: [
      {
        label: 'Video in the browser',
        value:
          'Patients weren’t going to install another app for a 15-minute visit. The call had to live in the page.',
      },
    ],
    approach: [
      {
        icon: 'integration_instructions',
        title: 'OpenTok + Stripe',
        description:
          'Vonage OpenTok in the portal. Stripe for the session. Book → pay → join, one flow.',
      },
    ],
    impacts: [
      {
        label: 'Video Consultations',
        before: 'External apps required',
        after: 'In-browser OpenTok integration',
      },
      {
        label: 'Telehealth Workflow',
        before: 'Manual billing',
        after: 'Integrated Stripe payments',
      },
    ],
    markdown: `
**WonderMD** patient portal — **Next.js**, **Tailwind**. Book, pay, talk.

**OpenTok (Vonage)** in the tab so nobody installs Zoom. **Stripe** for the visit. History and appointments live here too.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // otp-input-react
  // ─────────────────────────────────────────────────────────────────────────────
  otpinput: {
    id: 'otp-input-react',
    title: 'otp-input-react',
    tagline:
      'OSS — I helped on otp-input-react: logic, TypeScript, Jest coverage.',
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
    period: { start: '2020', end: '2020' },
    skills: [skills.react, skills.typescript, skills.jest],
    tools: [tools.git, tools.github],
    impact:
      'PRs on a public OTP input — tests and TypeScript so paste / backspace don’t fall over.',
    overview:
      'otp-input-react is a small React OTP field. I wasn’t the author. I sent PRs: logic, types, Jest + Testing Library so the edge cases stayed covered.',
    challenges: [
      {
        label: 'OTP is fiddly',
        value:
          'Paste, backspace, autofill. Easy to break if you only test the happy path.',
      },
    ],
    approach: [
      {
        icon: 'speed',
        title: 'Tests with the maintainer',
        description:
          'Jest + Testing Library on the weird keys. TypeScript so the props aren’t a guess.',
      },
    ],
    impacts: [
      {
        label: 'Open Source Footprint',
        before: 'Internal projects only',
        after: 'Contributions to widely-used package',
      },
      {
        label: 'Component Reliability',
        before: 'Uncovered edge cases',
        after: 'Enhanced Jest test coverage',
      },
    ],
    markdown: `
**otp-input-react** — not my repo. I sent PRs: component logic, TypeScript, **Jest** + Testing Library.

OTP fields break on paste and backspace. That’s what the tests were for.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Svitae Housing Management
  // ─────────────────────────────────────────────────────────────────────────────
  svitae: {
    id: 'svitae-housing',
    title: 'Svitae Housing Management',
    tagline:
      'Housing dashboard — Wijmo grids for the tables, Chartist for the money.',
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
    period: { start: '2019', end: '2020' },
    skills: [skills.react, skills.typescript],
    tools: [tools.git, tools.github],
    impact:
      'Property tables that don’t choke. Wijmo for the grids, Chartist for the money charts.',
    overview:
      'Housing dashboard. React, Material-UI, TypeScript. Managers live in tables — rent, units, ledgers. Native <table> wasn’t going to hold it.',
    challenges: [
      {
        label: 'Fat tables',
        value:
          'Financial and unit rows in volume. A DOM table stalls. Need a real grid.',
      },
    ],
    approach: [
      {
        icon: 'integration_instructions',
        title: 'Wijmo + Chartist',
        description:
          'GrapeCity Wijmo for the grids. Chartist for the finance charts that have to fit a laptop and a tablet.',
      },
    ],
    impacts: [
      {
        label: 'Data Management',
        before: 'Basic tables',
        after: 'Wijmo grids that virtualize rows',
      },
      {
        label: 'Financial Reporting',
        before: 'Static spreadsheets',
        after: 'Responsive Chartist dashboards',
      },
    ],
    markdown: `
**Svitae** — housing dashboard. **React**, Material-UI, TypeScript.

**Wijmo** for the tables so rent rolls don’t freeze the tab. **Chartist** for the finance charts.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PropertyIQ
  // ─────────────────────────────────────────────────────────────────────────────
  propertyiq: {
    id: 'property-iq',
    title: 'PropertyIQ',
    tagline:
      'PropTech mobile screens — I turned drafts into React views that fit real phones.',
    tags: ['PropTech', 'Mobile UI/UX'],
    role: 'Frontend Engineer',
    platform: 'Mobile',
    industries: ['Real Estate', 'PropTech'],
    deliverables: [
      'React mobile screens from drafts',
      'Layouts that hold on more than one phone size',
    ],
    url: null,
    featured: false,
    company: companies.emtec,
    period: { start: '2022', end: '2022' },
    skills: [skills.react],
    tools: [tools.git],
    impact:
      'Drafts became screens you can tap. Same layout on a SE and a Pro Max, not a stretched PNG.',
    overview:
      'PropertyIQ is property intel on a phone. My job was the UI: take the drafts, make them React, make them fit more than one viewport.',
    challenges: [
      {
        label: 'Drafts aren’t a layout',
        value:
          'PDFs and PNGs at one size. Real phones are many sizes. Spacing had to hold.',
      },
    ],
    approach: [
      {
        icon: 'architecture',
        title: 'Build the screens',
        description:
          'Measure the draft, then flex. If it only matched iPhone 12, it wasn’t done.',
      },
    ],
    impacts: [
      {
        label: 'UI Implementation',
        before: 'Static draft screens',
        after: 'React screens that match the drafts',
      },
      {
        label: 'Device Responsiveness',
        before: 'Inconsistent scaling',
        after: 'Fluid adaptation across mobile sizes',
      },
    ],
    markdown: `
**PropertyIQ** — PropTech on a phone. I took the drafts and built the React screens.

If it only looked right on one viewport, it went back.
    `.trim(),
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Varni Travel
  // ─────────────────────────────────────────────────────────────────────────────
  varnitravel: {
    id: 'varni-travel',
    title: 'Varni Travel',
    tagline:
      'Travel booking stack — React SSR/PWA client plus Sails.js APIs for air, hotel, insurance, and visa.',
    tags: ['Travel', 'PWA', 'SSR', 'Full-Stack'],
    role: 'Full-Stack Engineer',
    platform: 'Web · PWA',
    industries: ['Travel', 'E-commerce'],
    deliverables: [
      'React SSR + PWA client (Laravel Mix / Webpack, Redux) — flights, hotels, insurance, visa, payment',
      'Sails.js + MongoDB API — auth, booking, TravelPort/Galileo air search, hotel suppliers',
      'Supplier sync scripts (Agoda / Rezlive city IDs)',
      'Admin panel for ops (bookings, masters, services)',
      'Service workers + Apache SSR/CSR virtual-host setup',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2019', end: '2020' },
    skills: [
      skills.react,
      skills.redux,
      skills.nodejs,
      skills.mongodb,
      skills.webpack,
    ],
    tools: [tools.git, tools.github, tools.apache],
    impact:
      'Shipped bookable travel flows with SSR for SEO and a PWA shell for flaky networks — backed by real GDS/hotel supplier APIs, not a brochure site.',

    overview:
      'Varni Travel is a booking platform for flights, hotels, insurance, visas, and related documents. Frontend is a custom SSR Progressive Web App (Knovator-ssr-pwa). Backend is Sails.js on MongoDB with TravelPort/Galileo air search, hotel payment/booking services, and Agoda/Rezlive city ID sync. I owned the client booking UX and worked across the Node API and admin panel so supplier data actually powered the UI.',

    challenges: [
      {
        label: 'SSR + PWA on a real booking funnel',
        value:
          'Needed crawlable first paint and offline-tolerant shell while still supporting multi-step flight/hotel/insurance/visa booking.',
      },
      {
        label: 'Supplier-backed inventory',
        value:
          'Air search via TravelPort/Galileo and hotel suppliers (Agoda, Rezlive) meant city IDs, fare rules, and booking states had to stay consistent between API and UI.',
      },
      {
        label: 'Ops surface',
        value:
          'Agents needed an admin panel for bookings, masters, and service checklists — not only a consumer PWA.',
      },
    ],

    approach: [
      {
        icon: 'speed',
        title: 'SSR PWA client',
        description:
          'React + Redux with custom SSR compile path, service worker caching, and Apache virtual hosts split for CSR vs HTTPS SSR. Containers for Flight/Hotel/Insurance/Visa/Payment/Profile.',
      },
      {
        icon: 'integration_instructions',
        title: 'Sails.js domain services',
        description:
          'Worked AirSearch, Flight, Hotel, Insurance, Visa, Passport, PaymentGateway, PromoCode, and TravelPort controllers — JWT auth, Mongo models for reservations and booking detail.',
      },
      {
        icon: 'sync',
        title: 'Supplier ID hygiene',
        description:
          'Maintained store-city scripts for Agoda and Rezlive IDs so hotel search mapped cleanly to supplier catalogs.',
      },
    ],

    impacts: [
      {
        label: 'Delivery shape',
        before: 'Brochure / CSR-only travel UI',
        after: 'SSR PWA + bookable multi-product funnel',
      },
      {
        label: 'Inventory',
        before: 'Static or mocked catalogs',
        after: 'TravelPort/Galileo air + Agoda/Rezlive hotel wiring',
      },
      {
        label: 'Scope',
        before: 'Frontend-only narrative',
        after: 'Client + Sails API + admin in one delivery story',
      },
    ],

    markdown: `
**Varni Travel** — book flights, hotels, insurance, visas. Not a marketing site.

**Frontend:** React SSR Progressive Web App (Knovator-ssr-pwa) with Redux, Laravel Mix/Webpack, service workers, Apache SSR/CSR hosts. Booking containers for Flight, Hotel, Insurance, Visa, Passport docs, and Payment.

**Backend (Sails.js + MongoDB):** Auth (JWT/Passport), TravelPort controllers, AirSearch / Galileo / Flight / Hotel / Insurance / Visa / PaymentGateway / PromoCode services, reservation and booking models. Scripts to store Agoda and Rezlive city IDs. Separate **admin panel** for ops.

I led the client experience and stayed in the Node API and admin so supplier responses, booking state, and UI stayed aligned — full-stack delivery on a real travel stack, not FE-only polish.
    `.trim(),
  },

  orbitlms: {
    id: 'orbit-lms',
    title: 'Orbit LMS',
    tagline:
      'Learning platform — Next.js client + Node API for courses, assessments, and orgs.',
    tags: ['EdTech', 'LMS', 'SaaS'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['Education', 'Enterprise Learning'],
    deliverables: [
      'Next.js LMS frontend (i18n, auth cookies)',
      'Orbit LMS Node API',
      'Course / assessment flows across Orbit suite',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },
    skills: [skills.nextjs, skills.react, skills.nodejs],
    tools: [tools.git, tools.github],
    impact:
      'Shipped learner-facing LMS surfaces with a matching Node backend in the Orbit product family.',
    overview:
      'Orbit LMS is the learning hub in a broader Orbit suite (LMS, jobs, SSO, works). Built the Next.js app and contributed to the Node API — courses, locales, and sessioned access for multi-tenant learning orgs.',
    challenges: [
      {
        label: 'Suite consistency',
        value:
          'Had to stay compatible with Orbit SSO and sister apps without forking auth/session patterns.',
      },
    ],
    approach: [
      {
        icon: 'school',
        title: 'Next.js + Node slice',
        description:
          'Pages/API client on Next; Orbit LMS Node for domain endpoints. i18n via locale files.',
      },
    ],
    impacts: [
      {
        label: 'Surface',
        before: 'Fragmented learning tools',
        after: 'Unified Orbit LMS web experience',
      },
    ],
    markdown: `
**Orbit LMS** — Next.js learning frontend + Node API inside the Orbit suite. Courses, assessments, org access, shared SSO patterns with sibling Orbit apps.
    `.trim(),
  },

  domus: {
    id: 'domus',
    title: 'Domus',
    tagline:
      'Property / assurer platform — Next.js UI, Stripe payments, Express API.',
    tags: ['PropTech', 'Payments', 'SaaS'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['Real Estate', 'Insurance'],
    deliverables: [
      'Next.js app (layouts, i18n, Stripe Elements)',
      'Express API (controllers, models, emails)',
      'Charts / assurer operational views',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },
    skills: [skills.nextjs, skills.react, skills.nodejs],
    tools: [tools.git, tools.github],
    impact:
      'Connected assurer workflows to live Stripe checkout instead of offline payment handoffs.',
    overview:
      'Domus covers property/assurer operations. Owned Next.js surfaces (Headless UI, Highcharts, Stripe) and worked the Express API for domain routes, mail, and payment wiring.',
    challenges: [
      {
        label: 'Payments in ops flows',
        value:
          'Assurer journeys needed reliable Stripe Elements without breaking multi-step forms.',
      },
    ],
    approach: [
      {
        icon: 'payments',
        title: 'Stripe + Next',
        description:
          'Integrated @stripe/react-stripe-js on the client; Express handlers for intent/confirm paths.',
      },
    ],
    impacts: [
      {
        label: 'Checkout',
        before: 'Manual / offline payment steps',
        after: 'In-product Stripe payment flow',
      },
    ],
    markdown: `
**Domus** — Next.js + Express property/assurer product. Stripe Elements on the client, Express for APIs/email, Highcharts for ops views.
    `.trim(),
  },

  sparrowhealth: {
    id: 'sparrow-health',
    title: 'Sparrow Health',
    tagline:
      'Health ops web app — Next.js + Tailwind frontend, Express API, Stripe.',
    tags: ['Healthcare', 'SaaS', 'Payments'],
    role: 'Full-Stack Engineer',
    platform: 'Web',
    industries: ['Healthcare'],
    deliverables: [
      'Next.js + Tailwind patient/ops UI',
      'Express API (jobs, uploads, models)',
      'Stripe billing hooks',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2021', end: '2022' },
    skills: [skills.nextjs, skills.react, skills.tailwindcss, skills.nodejs],
    tools: [tools.git, tools.github],
    impact:
      'Gave clinic/ops users a single web surface for health workflows plus billing.',
    overview:
      'Sparrow Health is a healthcare ops product. Built Next.js/Tailwind screens (Headless UI, Heroicons, Stripe) and worked Express services for uploads, jobs, and domain models.',
    challenges: [
      {
        label: 'Ops + billing together',
        value:
          'Clinical/admin flows and Stripe had to share the same sessioned Next app without leaking PII in client bundles.',
      },
    ],
    approach: [
      {
        icon: 'health_and_safety',
        title: 'Next + Express split',
        description:
          'UI in Next/Tailwind; sensitive writes through Express controllers and job workers.',
      },
    ],
    impacts: [
      {
        label: 'Product shape',
        before: 'Split tools for ops vs billing',
        after: 'One Sparrow web app + API',
      },
    ],
    markdown: `
**Sparrow Health** — Next.js/Tailwind frontend + Express API. Stripe on the client; uploads/jobs/models on the Node side for healthcare ops.
    `.trim(),
  },

  likita: {
    id: 'likita',
    title: 'Likita',
    tagline:
      'Healthcare platform — Next admin, patient apps, and Express API with rate limits + i18n.',
    tags: ['Healthcare', 'Admin', 'API'],
    role: 'Full-Stack Engineer',
    platform: 'Web · Admin',
    industries: ['Healthcare'],
    deliverables: [
      'Next.js admin panel (Tailwind, Highcharts)',
      'Likita Express API (rate limit, i18n, uploads)',
      'Shared API used by Flutter companion apps',
    ],
    url: null,
    featured: false,
    company: companies.knovator,
    period: { start: '2020', end: '2021' },
    skills: [skills.nextjs, skills.react, skills.nodejs, skills.tailwindcss],
    tools: [tools.git, tools.github],
    impact:
      'Stood up admin analytics + API foundation used by patient and Flutter clients.',
    overview:
      'Likita is a multi-surface health product (admin web, patient, Flutter). Built the Next admin (charts, Tailwind) and contributed to the Express API — i18n middleware, uploads, rate limiting, seeders.',
    challenges: [
      {
        label: 'Multi-client API',
        value:
          'Admin web and mobile clients shared one API — needed stable contracts and i18n from day one.',
      },
    ],
    approach: [
      {
        icon: 'monitoring',
        title: 'Admin + API core',
        description:
          'Highcharts dashboards in Next admin; Express routes/models with i18next and upload pipelines.',
      },
    ],
    impacts: [
      {
        label: 'Ops visibility',
        before: 'Limited admin insight',
        after: 'Charted admin panel on shared API',
      },
    ],
    markdown: `
**Likita** — healthcare suite. Next.js admin + Express API (i18n, uploads, rate limits). Same backend family as patient/Flutter clients.
    `.trim(),
  },
};

export const projectsArray = [
  projects.upkeepplatform,
  ...Object.values(projects).filter((p) => p.id !== 'upkeep-platform'),
];
