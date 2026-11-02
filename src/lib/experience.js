/**
 * experience.js
 * Work history as a timeline, linked to companies.js entries.
 * Each entry references companies[id] and its skills/tools/highlights
 * so the experience timeline and the company detail page share one source of truth.
 *
 * Import pattern:
 *   import { experience } from './experience';
 *   import { companies }  from './companies';
 *   // then: companies[entry.companyId]  → full company object
 */

import { skills } from './skills';
import { tools } from './tools';
import { companies } from './companies';

export const experience = [
  {
    id: 'exp-upkeep',
    companyId: 'upkeep',
    company: companies.upkeep, // full object — skills, tools, highlights all here
    role: 'Sr. Software Engineer',
    type: 'full-time',
    period: { start: '2023-11-01', end: null }, // null = Present
    displayPeriod: { start: 'November 2023', end: 'Present' },
    location: 'Remote, India',
    isCurrent: true,
    accentColor: 'var(--color-primary-container)',
    order: 1, // 1 = most recent
    side: 'right',
    highlights: [
      {
        title: 'Full-Stack CMMS Delivery',
        description:
          'Most tickets touch more than one repo — web, APIs, sometimes an event path. Vendor and parts, webhooks, everyday CMMS UI.',
      },
      {
        title: 'AI Product Engineering',
        description:
          'In-product AI: who gets access, how credits work, how output gets scored, and a board for humans to review it.',
      },
      {
        title: 'Agent-Assisted Delivery',
        description:
          'Internal ticket-to-PR factory — intake, implementation, review, QA. On factory weeks that’s typically 5–8 PRs a day. I still review what merges.',
      },
      {
        title: 'QA & Review',
        description:
          'Test plans and Playwright sit in the same loop as the PR. Review isn’t a ceremony after shipping.',
      },
      {
        title: 'Preventive Maintenance & Releases',
        description:
          'Earlier: a lot of time in Preventive Maintenance, and a stretch owning platform releases with no downtime window.',
      },
      {
        title: 'Recognition',
        description:
          'Leader of the Month twice. 3rd in an internal AI hackathon for a data-consistency POC.',
      },
    ],

    skills: [
      skills.javascript,
      skills.typescript,
      skills.react,
      skills.nextjs,
      skills.angular,
      skills.nodejs,
      skills.postgresql,
      skills.mongodb,
      skills.express,
      skills.trpc,
      skills.apacheKafka,
      skills.docker,
      skills.cypress,
      skills.playwright,
      skills.jest,
      skills.awsSns,
      skills.awsSqs,
      skills.openai,
      skills.langgraph,
    ],

    tools: [
      tools.git,
      tools.github,
      tools.vercel,
      tools.postman,
      tools.slack,
      tools.jira,
      tools.cursorAi,
      tools.openai,
    ],
  },
  {
    id: 'exp-emtec',
    companyId: 'emtec',
    company: companies.emtec,
    role: 'Sr. Software Development Engineer',
    type: 'full-time',
    period: { start: '2023-11-01', end: '2022-09-01' },
    displayPeriod: { start: 'September 2022', end: 'November 2023' },
    location: 'Remote, India',
    isCurrent: false,
    order: 2,
    accentColor: 'var(--color-secondary)',
    side: 'left',
    highlights: [
      {
        title: 'Rental platform UI',
        description:
          'Built the web app for a US rental platform — React, Next.js, TypeScript — with Cypress and Jest covering the paths that actually broke.',
      },
      {
        title: 'APIs',
        description:
          'Owned NestJS services on MongoDB and PostgreSQL. GraphQL where the UI needed it, REST everywhere else.',
      },
      {
        title: 'Test pipelines',
        description:
          'Cut the wait on automated tests with Cypress, k6, and JMeter so releases didn’t sit in a queue.',
      },
      {
        title: 'Working with the CTO',
        description:
          'Sat with engineering leadership on the features that had to hold under load. Coding standards work later showed up as about an 11% efficiency gain.',
      },
    ],

    skills: [
      skills.react,
      skills.nextjs,
      skills.typescript,
      skills.javascript,
      skills.nodejs,
      skills.nestjs,
      skills.postgresql,
      skills.mongodb,
      skills.graphql,
      skills.apacheKafka,
      skills.docker,
      skills.cypress,
      skills.jest,
    ],

    tools: [
      tools.git,
      tools.github,
      tools.postman,
      tools.jmeter,
      tools.k6,
      tools.docker,
      tools.vercel,
      tools.slack,
    ],
  },
  {
    id: 'exp-knovator',
    companyId: 'knovator',
    company: companies.knovator,
    role: 'Tech Lead & Sr. Front-End Developer',
    type: 'full-time',
    period: { start: '2018-06-02', end: '2022-07-02' },
    displayPeriod: { start: 'June 2018', end: 'July 2022' },
    location: 'Surat, Gujarat, India',
    isCurrent: false,
    accentColor: 'var(--color-tertiary-container)',
    order: 3,
    side: 'right',
    highlights: [
      {
        title: 'StringERP',
        description:
          'Built StringERP from scratch — React, Node, TypeScript. Modular frontend, services behind it, releases every couple of weeks.',
      },
      {
        title: 'Implr',
        description:
          'Split one module out as its own product. Same codebase habits, its own deploy.',
      },
      {
        title: 'Intern → Tech Lead',
        description:
          'Four years, intern to Tech Lead. 50+ projects across textiles, healthcare, travel, real estate, and a few others.',
      },
      {
        title: 'The team',
        description:
          'Ran a mixed team of 11–20 — frontend, backend, Flutter, BAs. Interviews (40+ frontend), sprints, client calls, deploys.',
      },
      {
        title: 'Module kit',
        description:
          'Reusable frontend modules so a new domain didn’t take days of wiring. New ones landed in under 10 minutes.',
      },
    ],

    skills: [
      skills.react,
      skills.nextjs,
      skills.typescript,
      skills.javascript,
      skills.nodejs,
      skills.mongodb,
      skills.tailwindcss,
      skills.redux,
      skills.angular,
      skills.jquery,
      skills.vite,
      skills.laravel,
      skills.aws,
      skills.docker,
      skills.rabbitMq,
      skills.scss,
    ],

    tools: [
      tools.git,
      tools.gitlab,
      tools.openproject,
      tools.clickup,
      tools.slack,
      tools.postman,
      tools.docker,
      tools.linux,
    ],
  },

  {
    id: 'exp-croods',
    companyId: 'croods',
    company: companies.croods,
    role: 'Java Intern',
    type: 'internship',
    period: { start: '2018-04-01', end: '2018-06-01' },

    displayPeriod: { start: 'April 2018', end: 'June 2018' },
    location: 'Vadodara, Gujarat, India',
    isCurrent: false,
    order: 4,
    accentColor: 'var(--color-primary-container)',
    side: 'left',

    highlights: [
      {
        title: 'Internship',
        description:
          'Three-month Java intern. Core Java and JSP — the first job that wasn’t HTML.',
      },
    ],

    skills: [skills.java],

    tools: [],
  },

  {
    id: 'exp-codelash',
    companyId: 'codelash',
    company: companies.codelash,
    role: 'Web Developer',
    type: 'full-time',
    period: { start: '2017-04-01', end: '2018-05-01' },
    displayPeriod: { start: 'April 2017', end: 'May 2018' },
    isCurrent: false,
    order: 5,
    side: 'right',
     accentColor: 'var(--color-secondary)',
    location: 'Vadodara, Gujarat, India',
    highlights: [
      {
        title: 'Websites',
        description:
          'Client sites in HTML, CSS, SASS, PHP, and JavaScript. First time shipping for someone who wasn’t me.',
      },
      {
        title: 'The startup',
        description:
          'Helped the CEO with the in-house product and the unglamorous offline marketing that came with a college-born shop.',
      },
      {
        title: 'Posters and video',
        description:
          'Festival posters, and video for MSU events — Paramarsh, Junoon, Footprints, Prerna.',
      },
    ],

    skills: [
      skills.javascript,
      skills.html5,
      skills.css3,
      skills.scss,
      skills.less,
      skills.php,
      skills.jquery,
    ],

    tools: [tools.git, tools.github],
  },
];
