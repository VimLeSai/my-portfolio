/**
 * testimonials.js
 * Testimonials and recommendations from colleagues, managers, and clients.
 * Each entry includes the reviewer, their relation to Vimal, platform, and full review text.
 */

export const testimonials = [
  {
    id: 'vidur-s-upwork',
    enabled: true,
    featured: true,

    reviewer: {
      name: 'Vidur S.',
      firstName: 'Vidur',
      title: 'Head of Product/Co-founder',
      company: '',
      linkedin: null,
      upworkVerified: true,
      upworkProfile: null,
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'client',
      description: 'Client on Upwork',
      companyId: null,
    },

    platform: 'upwork',
    date: '2026-03-01',
    displayDate: 'March 2026',

    review:
      "I've worked with Vimal across multiple product builds, and he's been a consistently reliable engineering partner. Delivery is always on time and high quality. Whether it's architecting component structures, reasoning about data flow, or making decisions that account for the full stack, he brings a builder's mindset to everything he touches. He's also genuinely easy to work with, communicative, collaborative across design and product, and the kind of engineer who makes the whole team move faster.",
    
    shortReview: "Consistently reliable engineering partner. Delivery is always on time and high quality. Brings a full-stack builder's mindset and accelerates the entire team.",

    tags: ['reliable', 'architecture', 'full-stack', 'communicative'],
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
      upworkProfile: 'https://www.upwork.com/freelancers/vishnu-c',
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
      "I have great appreciation for Vimal's expertise in front-end development. He was able to implement complex designs with ease and was always meticulous in ensuring that all features worked flawlessly. Throughout the project, he just kept looking for ways to improve the product’s performance and functionality and even provided valuable suggestions for future versions to help improve the final product. Despite tight deadlines, he remained calm and handled everything with ease and patience. He even continued to provide ongoing support even after months of the project's completion. I would highly recommend Vimal to anyone looking for a skilled and dedicated front-end developer. It’s clear that he genuinely cares about his clients' satisfaction and the project's success.",

    shortReview: "Expert front-end developer who implements complex designs flawlessly. Constantly improves performance, stays calm under tight deadlines, and deeply cares about client success.",

    tags: [
      'frontend',
      'performance',
      'communication',
      'post-launch support',
      'client satisfaction',
    ],
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
      "He did an exceptional job on recent projects. As I remember, vimal is a very productive person and is a multi-skilled person with vast knowledge. Vimal is careful, proactive, self motivated and intelligent team player. Thanks to interpersonal skills, vimal has great relations with both company clients and potential customers",

    shortReview: "Exceptional and highly productive full-stack developer. Proactive, multi-skilled, and an intelligent team player with great client relations.",

    tags: ['multi-skilled', 'proactive', 'client relations', 'team player'],
  },

  {
    id: 'mayur-vadher',
    enabled: true,
    featured: true,

    reviewer: {
      name: 'Mayur Vadher',
      firstName: 'Mayur',
      title: 'React Developer',
      company: 'TCS',
      linkedin: null, // real URL could be added later
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'colleague',
      description: 'Mayur was senior to Vimal but didn’t manage Vimal directly',
      companyId: null,
    },

    platform: 'linkedin',
    date: '2022-07-03',
    displayDate: 'July 2022',

    review:
      "Vimal is one of my best colleague. He is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. His expertise in Javascript and leader is considerable, and it helped our team come up with more efficient solutions on different projects. His contribution is valuable to the side, and I highly recommend vimal and would love to work with him again. Vimal will be a valuable asset to any company.",

    shortReview: "One of the most dedicated professionals I’ve worked with. Considerable JavaScript expertise that brings efficient solutions and valuable leadership to any project.",

    tags: ['dedicated', 'javascript', 'leadership', 'helpful'],
  },

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
      "Vimal is one of the best among all the people I am working with. Vimal was a very productive person, is a smart working, broad-minded individual. Intelligent, ambitious, and perfectionist. A desire for proficiency and education makes Vimal a valuable asset to our team. Working with Vimal is a sign of success.",

    shortReview: "Smart, productive, and a perfectionist. His ambition and desire for proficiency make him a highly valuable asset to the team.",

    tags: ['productivity', 'ambition', 'leadership', 'team player'],
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
      '"Efficient" is the word that perfectly describes Vimal. I had worked with him for almost 2 years. He can very easily handle multiple tasks and makes it all seems easier. He always help around everyone. It was great to learn and work with him.',

    shortReview: "Highly efficient and easily handles multiple complex tasks simultaneously. Always helpful and a pleasure to learn and work with.",

    tags: ['efficient', 'multitasking', 'mentorship', 'approachable'],
  },

  {
    id: 'dhruvit-patel',
    enabled: true,
    featured: false,

    reviewer: {
      name: 'Dhruvit Patel',
      firstName: 'Dhruvit',
      title: 'Student',
      company: 'IU Berlin',
      linkedin: null,
      email: null,
      avatarUrl: null,
    },

    relation: {
      type: 'colleague',
      description: 'Dhruvit worked with Vimal on the same team',
      companyId: null,
    },

    platform: 'linkedin',
    date: '2022-07-04',
    displayDate: 'July 2022',

    review:
      "He is very supportive person. Whenever I need to solution of any issue I always ask to vimal and he teach me in easy way. He like to share his knowledge with other people.",

    shortReview: "Very supportive mentor who happily shares his knowledge and explains complex issues in an easy-to-understand way.",

    tags: ['supportive', 'mentorship', 'knowledge sharing'],
  },
];
