/**
 * testimonials.js
 * Testimonials and recommendations from colleagues, managers, and clients.
 * Each entry includes the reviewer, their relation to Vimal, platform, and full review text.
 */

export const testimonials = [
  {
    id: 'jenish-paghadal',
    enabled: true,
    featured: true,

    reviewer: {
      name: 'Jenish Paghadal',
      firstName: 'Jenish',
      title: 'Chief Technology Officer',
      company: 'Knovator Technologies Pvt. Ltd.',
      linkedin: 'https://www.linkedin.com/in/jenish-paghadal', // update with real URL
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'manager', // manager | colleague | report | client
      description: 'Jenish managed Vimal directly',
      companyId: 'knovator',
    },

    platform: 'linkedin', // linkedin | upwork | email | other
    date: '2021-10-12',
    displayDate: 'October 2021',

    review:
      'Vimal is one of the best among all the people I am working with. Vimal was a very productive person — smart working, broad-minded, intelligent, ambitious, and a perfectionist. A desire for proficiency and education makes Vimal a valuable asset to our team. Working with Vimal is a sign of success.',

    tags: ['productivity', 'ambition', 'leadership', 'team player'],
  },

  {
    id: 'brijesh-chavda',
    enabled: true,
    featured: true,

    reviewer: {
      name: 'Brijesh Chavda',
      firstName: 'Brijesh',
      title: 'Senior Full-Stack Developer',
      titleDetail: 'Node.js, TypeScript, AWS | AI-Augmented Development',
      company: 'Knovator Technologies Pvt. Ltd.',
      linkedin: 'https://www.linkedin.com/in/brijesh-chavda', // update with real URL
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'colleague',
      description: 'Brijesh worked with Vimal on the same team',
      companyId: 'knovator',
    },

    platform: 'linkedin',
    date: '2022-07-04',
    displayDate: 'July 2022',

    review:
      'He did an exceptional job on recent projects. As I remember, Vimal is a very productive person and a multi-skilled individual with vast knowledge. Vimal is careful, proactive, self-motivated, and an intelligent team player. Thanks to his interpersonal skills, Vimal has great relations with both company clients and potential customers.',

    tags: ['multi-skilled', 'proactive', 'client relations', 'team player'],
  },

  {
    id: 'shalini-singh',
    enabled: true,
    featured: false,

    reviewer: {
      name: 'Shalini Singh',
      firstName: 'Shalini',
      title: 'Laravel Developer',
      titleDetail: 'PHP, MySQL, RESTful APIs, and Vue.js Enthusiast',
      company: 'Knovator Technologies Pvt. Ltd.',
      linkedin: 'https://www.linkedin.com/in/shalini-singh', // update with real URL
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'report',
      description: 'Shalini reported to Vimal directly',
      companyId: 'knovator',
    },

    platform: 'linkedin',
    date: '2022-07-25',
    displayDate: 'July 2022',

    review:
      '"Efficient" is the word that perfectly describes Vimal. I worked with him for almost 2 years. He can very easily handle multiple tasks and makes it all seem easier. He always helps everyone around. It was great to learn and work with him.',

    tags: ['efficient', 'multitasking', 'mentorship', 'approachable'],
  },

  {
    id: 'vishnu-c-upwork',
    enabled: true,
    featured: true,

    reviewer: {
      name: 'Vishnu C.',
      firstName: 'Vishnu',
      title: 'CEO & Founder',
      company: 'Social Media Platform',
      linkedin: null,
      upworkVerified: true,
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'client',
      description: 'Client on Upwork — Social Media project',
      companyId: null,
    },

    platform: 'upwork',
    date: '2023-04-01',
    displayDate: 'April 2023',

    review:
      "I have great appreciation for Vimal's expertise in front-end development. He was able to implement complex designs with ease and was always meticulous in ensuring that all features worked flawlessly. Throughout the project, he kept looking for ways to improve the product's performance and functionality, and even provided valuable suggestions for future versions. Despite tight deadlines, he remained calm and handled everything with ease and patience. He even continued to provide ongoing support months after the project's completion. I would highly recommend Vimal to anyone looking for a skilled and dedicated front-end developer. It's clear that he genuinely cares about his clients' satisfaction and the project's success.",

    tags: [
      'frontend',
      'performance',
      'communication',
      'post-launch support',
      'client satisfaction',
    ],
  },
];
