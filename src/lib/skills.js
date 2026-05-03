/**
 * skills.js
 * Master registry of all technical skills.
 * Usage in projects: skills: [skills.react, skills.typescript]
 */

export const skills = {
  // ─── Languages ───────────────────────────────────────────────────────────────
  javascript: {
    label: 'JavaScript',
    description:
      'High-level, dynamic language powering both browser and server-side development.',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    group: 'language',
    yearsOfExperience: 8,
  },
  typescript: {
    label: 'TypeScript',
    description:
      'Strongly typed superset of JavaScript enabling safer, more maintainable codebases.',
    href: 'https://www.typescriptlang.org/',
    group: 'language',
    yearsOfExperience: 7,
  },
  html5: {
    label: 'HTML5',
    description: 'Semantic markup language for structuring web content.',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    group: 'language',
    yearsOfExperience: 8,
  },
  css3: {
    label: 'CSS3',
    description:
      'Stylesheet language for designing responsive and visually rich web interfaces.',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    group: 'language',
    yearsOfExperience: 8,
  },
  graphql: {
    label: 'GraphQL',
    description:
      'Query language for APIs enabling precise, efficient data fetching.',
    href: 'https://graphql.org/',
    group: 'language',
    yearsOfExperience: 3,
  },
  php: {
    label: 'PHP',
    description:
      'Server-side scripting language widely used for web development.',
    href: 'https://www.php.net/',
    group: 'language',
    yearsOfExperience: 2,
  },
  java: {
    label: 'Java',
    description:
      'Object-oriented programming language used for backend and enterprise development.',
    href: 'https://www.java.com/',
    group: 'language',
    yearsOfExperience: 1,
  },

  // ─── Styling ─────────────────────────────────────────────────────────────────
  tailwindcss: {
    label: 'Tailwind CSS',
    description:
      'Utility-first CSS framework for building modern, responsive UIs rapidly.',
    href: 'https://tailwindcss.com/',
    group: 'styling',
    yearsOfExperience: 5,
  },
  scss: {
    label: 'SCSS / SASS',
    description:
      'CSS preprocessor adding variables, nesting, and mixins for maintainable styles.',
    href: 'https://sass-lang.com/',
    group: 'styling',
    yearsOfExperience: 6,
  },
  less: {
    label: 'LESS',
    description:
      'CSS preprocessor with dynamic behavior such as variables and operations.',
    href: 'https://lesscss.org/',
    group: 'styling',
    yearsOfExperience: 3,
  },
  materialUi: {
    label: 'Material UI',
    description:
      "React component library implementing Google's Material Design system.",
    href: 'https://mui.com/',
    group: 'styling',
    yearsOfExperience: 4,
  },

  // ─── Frontend Frameworks & Libraries ─────────────────────────────────────────
  react: {
    label: 'React',
    description:
      'Component-based JavaScript library for building interactive user interfaces.',
    href: 'https://react.dev/',
    group: 'frontend',
    yearsOfExperience: 8,
  },
  nextjs: {
    label: 'Next.js',
    description:
      'React framework with SSR, SSG, and App Router for production-grade web apps.',
    href: 'https://nextjs.org/',
    group: 'frontend',
    yearsOfExperience: 5,
  },
  angular: {
    label: 'Angular',
    description: 'Full-featured TypeScript-based frontend framework by Google.',
    href: 'https://angular.dev/',
    group: 'frontend',
    yearsOfExperience: 3,
  },
  redux: {
    label: 'Redux',
    description:
      'Predictable state container for JavaScript apps with a centralized store.',
    href: 'https://redux.js.org/',
    group: 'frontend',
    yearsOfExperience: 6,
  },
  reduxToolkit: {
    label: 'Redux Toolkit',
    description:
      'Official, opinionated toolset for efficient Redux development.',
    href: 'https://redux-toolkit.js.org/',
    group: 'frontend',
    yearsOfExperience: 4,
  },
  jquery: {
    label: 'jQuery',
    description:
      'Fast, feature-rich JavaScript library for DOM manipulation and AJAX.',
    href: 'https://jquery.com/',
    group: 'frontend',
    yearsOfExperience: 4,
  },
  vite: {
    label: 'Vite',
    description:
      'Next-generation frontend build tool offering lightning-fast HMR.',
    href: 'https://vitejs.dev/',
    group: 'frontend',
    yearsOfExperience: 3,
  },

  // ─── Backend Frameworks & Runtimes ───────────────────────────────────────────
  nodejs: {
    label: 'Node.js',
    description:
      'JavaScript runtime for building scalable server-side and network applications.',
    href: 'https://nodejs.org/',
    group: 'backend',
    yearsOfExperience: 4,
  },
  nestjs: {
    label: 'NestJS',
    description:
      'Progressive Node.js framework for building efficient, modular server-side applications.',
    href: 'https://nestjs.com/',
    group: 'backend',
    yearsOfExperience: 3,
  },
  laravel: {
    label: 'Laravel',
    description:
      'Elegant PHP framework for web artisans with expressive syntax.',
    href: 'https://laravel.com/',
    group: 'backend',
    yearsOfExperience: 2,
  },

  // ─── Databases ────────────────────────────────────────────────────────────────
  postgresql: {
    label: 'PostgreSQL',
    description:
      'Powerful, open-source relational database with advanced querying and indexing.',
    href: 'https://www.postgresql.org/',
    group: 'database',
    yearsOfExperience: 4,
  },
  mongodb: {
    label: 'MongoDB',
    description:
      'Document-oriented NoSQL database for flexible, high-volume data storage.',
    href: 'https://www.mongodb.com/',
    group: 'database',
    yearsOfExperience: 4,
  },
  mysql: {
    label: 'MySQL',
    description:
      'Widely used open-source relational database management system.',
    href: 'https://www.mysql.com/',
    group: 'database',
    yearsOfExperience: 3,
  },

  // ─── Testing ─────────────────────────────────────────────────────────────────
  cypress: {
    label: 'Cypress',
    description:
      'End-to-end testing framework for modern web applications with real browser automation.',
    href: 'https://www.cypress.io/',
    group: 'testing',
    yearsOfExperience: 4,
  },
  jest: {
    label: 'Jest',
    description:
      'Delightful JavaScript testing framework with a focus on simplicity.',
    href: 'https://jestjs.io/',
    group: 'testing',
    yearsOfExperience: 4,
  },
  playwright: {
    label: 'Playwright',
    description:
      'Reliable end-to-end testing for modern web apps across all major browsers.',
    href: 'https://playwright.dev/',
    group: 'testing',
    yearsOfExperience: 2,
  },

  // ─── Infrastructure & DevOps ──────────────────────────────────────────────────
  docker: {
    label: 'Docker',
    description:
      'Platform for building, shipping, and running containerized applications.',
    href: 'https://www.docker.com/',
    group: 'infrastructure',
    yearsOfExperience: 5,
  },
  git: {
    label: 'Git',
    description:
      'Distributed version control system for tracking changes in source code.',
    href: 'https://git-scm.com/',
    group: 'infrastructure',
    yearsOfExperience: 8,
  },
  gitlabCiCd: {
    label: 'GitLab CI/CD',
    description:
      'Integrated CI/CD pipelines within GitLab for automated build, test, and deploy.',
    href: 'https://docs.gitlab.com/ee/ci/',
    group: 'infrastructure',
    yearsOfExperience: 3,
  },
  vercel: {
    label: 'Vercel',
    description:
      'Cloud platform for frontend frameworks with instant global deployment.',
    href: 'https://vercel.com/',
    group: 'infrastructure',
    yearsOfExperience: 3,
  },
  linux: {
    label: 'Linux',
    description:
      'Open-source OS used for server management, deployment, and DevOps workflows.',
    href: 'https://www.linux.org/',
    group: 'infrastructure',
    yearsOfExperience: 5,
  },
  aws: {
    label: 'AWS',
    description:
      'Amazon Web Services cloud platform for scalable infrastructure and services.',
    href: 'https://aws.amazon.com/',
    group: 'infrastructure',
    yearsOfExperience: 4,
  },
  awsSns: {
    label: 'Amazon SNS',
    description:
      'Fully managed pub/sub messaging service for decoupled microservices.',
    href: 'https://aws.amazon.com/sns/',
    group: 'infrastructure',
    yearsOfExperience: 2,
  },
  awsSqs: {
    label: 'Amazon SQS',
    description:
      'Fully managed message queuing service for reliable async communication.',
    href: 'https://aws.amazon.com/sqs/',
    group: 'infrastructure',
    yearsOfExperience: 2,
  },
  apacheKafka: {
    label: 'Apache Kafka',
    description:
      'Distributed event streaming platform for high-throughput, fault-tolerant pipelines.',
    href: 'https://kafka.apache.org/',
    group: 'infrastructure',
    yearsOfExperience: 2,
  },
  rabbitMq: {
    label: 'RabbitMQ',
    description: 'Open-source message broker for reliable async task queuing.',
    href: 'https://www.rabbitmq.com/',
    group: 'infrastructure',
    yearsOfExperience: 2,
  },

  // ─── AI / Emerging ───────────────────────────────────────────────────────────
  openai: {
    label: 'OpenAI',
    description:
      'AI APIs including GPT and embedding models for intelligent feature integration.',
    href: 'https://openai.com/',
    group: 'ai',
    yearsOfExperience: 2,
  },
  cursorAi: {
    label: 'Cursor AI',
    description:
      'AI-powered code editor that accelerates development with context-aware suggestions.',
    href: 'https://cursor.sh/',
    group: 'ai',
    yearsOfExperience: 1,
  },

  // ─── Tools & Build ───────────────────────────────────────────────────────────
  babel: {
    label: 'Babel',
    description: 'JavaScript compiler for using next-generation JS today.',
    href: 'https://babeljs.io/',
    group: 'tools',
    yearsOfExperience: 5,
  },
  webpack: {
    label: 'Webpack',
    description: 'Static module bundler for modern JavaScript applications.',
    href: 'https://webpack.js.org/',
    group: 'tools',
    yearsOfExperience: 5,
  },
};
