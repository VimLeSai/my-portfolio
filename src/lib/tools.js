/**
 * tools.js
 * Master registry of dev, testing, and project-management tools.
 * Usage in projects: tools: [tools.postman, tools.jmeter]
 */

export const tools = {
  // ─── Version Control ─────────────────────────────────────────────────────────
  git: {
    label: 'Git',
    description: 'Version control.',
    href: 'https://git-scm.com/',
    group: 'vcs',
  },
  github: {
    label: 'GitHub',
    description: 'Code hosting and collaboration.',
    href: 'https://github.com/',
    group: 'vcs',
  },
  gitlab: {
    label: 'GitLab',
    description: 'Git repository management with integrated CI/CD.',
    href: 'https://gitlab.com/',
    group: 'vcs',
  },

  // ─── API & Testing ────────────────────────────────────────────────────────────
  postman: {
    label: 'Postman',
    description: 'API testing and automation.',
    href: 'https://www.postman.com/',
    group: 'testing',
  },
  jmeter: {
    label: 'Apache JMeter',
    description: 'Load and performance testing.',
    href: 'https://jmeter.apache.org/',
    group: 'testing',
  },
  k6: {
    label: 'k6',
    description: 'Developer-centric load testing tool.',
    href: 'https://k6.io/',
    group: 'testing',
  },

  // ─── Containerization & Infrastructure ───────────────────────────────────────
  docker: {
    label: 'Docker',
    description: 'Containerization.',
    href: 'https://www.docker.com/',
    group: 'infrastructure',
  },
  linux: {
    label: 'Linux',
    description: 'Server management.',
    href: 'https://www.linux.org/',
    group: 'infrastructure',
  },
  vercel: {
    label: 'Vercel',
    description: 'Frontend deployment platform.',
    href: 'https://vercel.com/',
    group: 'infrastructure',
  },
  apache: {
    label: 'Apache',
    description: 'Web server software.',
    href: 'https://httpd.apache.org/',
    group: 'infrastructure',
  },

  // ─── Project Management ───────────────────────────────────────────────────────
  openproject: {
    label: 'OpenProject',
    description: 'Task tracking.',
    href: 'https://www.openproject.org/',
    group: 'project-management',
  },
  clickup: {
    label: 'ClickUp',
    description: 'Project management.',
    href: 'https://clickup.com/',
    group: 'project-management',
  },
  jira: {
    label: 'Jira',
    description: 'Issue and project tracking.',
    href: 'https://www.atlassian.com/software/jira',
    group: 'project-management',
  },

  // ─── Communication ────────────────────────────────────────────────────────────
  slack: {
    label: 'Slack',
    description: 'Team communication.',
    href: 'https://slack.com/',
    group: 'communication',
  },

  // ─── AI & Productivity ────────────────────────────────────────────────────────
  cursorAi: {
    label: 'Cursor AI',
    description: 'AI-powered code editor.',
    href: 'https://cursor.sh/',
    group: 'ai',
  },
  openai: {
    label: 'OpenAI',
    description: 'AI APIs and integrations.',
    href: 'https://openai.com/',
    group: 'ai',
  },
};
