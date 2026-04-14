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
        title: 'Release Engineering Leadership',
        description:
          'Served as the primary Release Engineer, leading platform-wide releases and ensuring smooth, zero-downtime deployments while actively supporting product planning and technical execution.',
      },
       {
        title: 'Recognition & Innovation',
        description:
          'Recognized twice as "Leader of the Month" for exceptional performance; secured 3rd place in an internal AI hackathon for developing a POC that substantially improved data consistency across services.',
      },
      {
        title: 'Full-Stack Contributions',
        description:
          'Contributed across the entire ecosystem — frontend, backend, shared component libraries, and consumer services — delivering scalable solutions for high-traffic platforms.',
      },
      {
        title: 'Preventive Maintenance Module',
        description:
          'Acted as a key contributor to the Preventive Maintenance module, optimizing performance, reducing architectural complexity, and significantly improving workflow efficiency for end-users.',
      },
      {
        title: 'Velocity & AI Integration',
        description:
          'Leveraged cutting-edge AI tools and workflow automation to increase team sprint velocity from 16 to over 40 story points without compromising code quality or stability.',
      },
      {
        title: 'Strategic Planning',
        description:
          'Supported the Product Manager in requirement clarification, technical planning, sprint organization, and cross-team coordination to ensure alignment with business goals.',
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
      tools.slack,
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
        title: 'Application Development',
        description:
          'Built highly scalable and responsive applications using React.js, Next.js, and TypeScript, backed by comprehensive testing coverage using Cypress and Jest.',
      },
      {
        title: 'API Architecture',
        description:
          'Designed and maintained high-performance Node.js/NestJS APIs integrated with MongoDB and PostgreSQL to support scalable, production-grade systems.',
      },
      {
        title: 'Pipeline Optimization',
        description:
          'Optimized automated testing and performance pipelines using Apache Kafka, k6, JMeter, and Postman, significantly reducing execution time and improving the overall release cycle.',
      },
      {
        title: 'Operational Excellence',
        description:
          'Improved operational efficiency by 11% through proactive bug resolution, the establishment of code standardization, and rigorous enforcement of engineering best practices.',
      },
      {
        title: 'Leadership Collaboration',
        description:
          'Collaborated directly with engineering leadership and the CTO to deliver performance-critical features for a high-traffic rental platform based in the United States.',
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
        title: 'Flagship Product Development',
        description:
          'Architected and built StringERP from the ground up using React, Node.js, and TypeScript, establishing a scalable micro-services architecture and a modular frontend framework.',
      },
      {
        title: 'Product Scaling',
        description:
          'Successfully launched "Implr" as a standalone micro-service product, demonstrating high levels of service-level scalability and code reusability.',
      },
      {
        title: 'Career Growth & Project Scope',
        description:
          'Advanced from intern to Tech Lead over 4+ years, contributing to over 50 projects across multiple industries while expanding expertise into system architecture and product leadership.',
      },
      {
        title: 'Team Leadership',
        description:
          'Managed cross-functional teams of 11–20 members — including Frontend, Backend, and Flutter developers as well as Business Analysts — while fulfilling the roles of Scrum Master and Product Lead.',
      },
      {
        title: 'Talent Development',
        description:
          'Conducted over 40 technical interviews for frontend roles, directly contributing to the scaling of the engineering team and maintaining high hiring standards.',
      },
      {
        title: 'Client & Project Management',
        description:
          'Managed end-to-end client communication, requirement gathering, sprint planning, and deployments while overseeing high-level technical execution.',
      },
      {
        title: 'Efficiency Innovation',
        description:
          'Designed a reusable, module-based frontend architecture that reduced the integration time for new modules to under 10 minutes.',
      },
      {
        title: 'Industry Adaptation',
        description:
          'Delivered tailored technical solutions for diverse industries including textiles, healthcare, job portals, travel, diamond trade, and real estate.',
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
          'Joined as a Java intern, learning core Java and JSP fundamentals during the 3-month programme.',
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
        title: 'Web Development',
        description:
          'Developed multiple customer-facing websites using a variety of technologies including HTML, CSS, SASS, LESS, PHP, and JavaScript.',
      },
      {
        title: 'Startup Growth',
        description:
          'Contributed to the foundational growth of the startup and assisted the CEO in offline marketing and increasing awareness for the in-house product "Helping Hand".',
      },
      {
        title: 'Creative Contributions',
        description:
          'Beyond core development, contributed to graphic design by creating promotional posters for college festival events.',
      },
      {
        title: 'Event Media',
        description:
          'Supported and managed video production for high-profile MSU college events including Paramarsh, Junoon, Footprints, and Prerna.',
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
