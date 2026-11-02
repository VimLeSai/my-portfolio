/**
 * profile.js
 * Single source of truth for personal/professional profile data.
 * Used in About, Hero, Contact, Footer, and CV sections.
 */

export const profile = {
  // ─── Identity ─────────────────────────────────────────────────────────────
  name: {
    first: 'Vimal',
    last: 'Desai',
    full: 'Vimal Desai',
    displayName: 'Vimal Desai',
  },

  title: 'Sr. Full-Stack Engineer',
  pronouns: null,

  tagline:
    'I build products people actually use — React, Node, TypeScript, and the seams between them.',

  bio: {
    short:
      'Full-stack engineer, 10+ years. React, Node, TypeScript. Right now at UpKeep I ship CMMS features, in-product AI, and an internal factory that turns tickets into reviewed PRs.',
    long: `I started in UI because that's where users feel the product. Backend work followed because that's where it breaks.

Since 2018 I've shipped ERPs, CRMs, travel flows, and a lot of unglamorous production software. Led teams, ran interviews, handed work to people who could keep it.

At UpKeep I work across web, APIs, and shared services — vendor and parts, event pipelines, in-product AI, and a ticket-to-PR factory. Same habit: understand the problem, keep the seams clean, don't merge without tests.`,
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    email: 'vimlesai@duck.com',
    phone: '+91 90333 19000',
    preferredContact: 'email',
  },

  // ─── Location & Residency ──────────────────────────────────────────────────
  location: {
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    countryCode: 'IN',
    display: 'Surat, Gujarat, India',
    timezone: 'Asia/Kolkata',
    utcOffset: '+05:30',
  },

  residency: {
    status: 'citizen', // citizen | permanent-resident | work-visa | other
    requiresSponsorship: true, // for relocation abroad
    willingToRelocate: true,
    relocationNote:
      'Would require visa sponsorship for international relocation.',
  },

  // ─── Work Preferences ─────────────────────────────────────────────────────
  workPreferences: {
    availability: 'full-time', // full-time | part-time | contract | open
    workStyle: 'remote', // remote | hybrid | onsite | flexible
    remoteNote:
      'Strong preference for remote. Can provide 4–5 hours of daily overlap with any time zone.',
    preferredEnvironment: ['MacOS', 'Linux', 'CRM', 'ERP', 'APIs'],
    openToContract: true,
  },

  // ─── Social Accounts ──────────────────────────────────────────────────────
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/VimLeSai',
      handle: 'VimLeSai',
      enabled: true,
      icon: 'github',
      snippet:
        'Shipping across frontend, backend & shared libraries — repos, packages, and experiments under VimLeSai.',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vimlesai',
      handle: 'vimlesai',
      enabled: true,
      icon: 'linkedin',
      snippet:
        'Senior Full Stack Engineer · React, Node.js, TypeScript · CMMS, in-product AI, and agent-assisted delivery at UpKeep.',
    },
    {
      id: 'upwork',
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/vimlesai',
      handle: 'vimlesai',
      enabled: true,
      icon: 'upwork',
      snippet:
        'Senior Full Stack Architect (Next.js/Node) — contract and product engineering work.',
    },
    {
      id: 'npm',
      label: 'npm',
      href: 'https://www.npmjs.com/~vimlesai',
      handle: 'vimlesai',
      enabled: true,
      icon: 'npm',
      snippet: 'Published packages and scoped modules under @vimlesai / vimlesai.',
    },
    {
      id: 'stackoverflow',
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/7801396/vimlesai',
      handle: 'vimlesai',
      enabled: true,
      icon: 'stackoverflow',
      snippet: 'Answers, questions, and profile as VimLeSai.',
    },
    {
      id: 'site',
      label: 'vimlesai.io',
      href: 'https://vimlesai.io/',
      handle: 'vimlesai',
      enabled: true,
      icon: 'globe',
      snippet:
        'Personal portfolio — selected work, process, and contact for Vimal Desai.',
    },
    {
      id: 'contra',
      label: 'Contra',
      href: 'https://contra.com/VimLeSai/about',
      handle: 'VimLeSai',
      enabled: true,
      icon: 'contra',
      snippet: 'Independent full-stack profile on Contra.',
    },
    {
      id: 'twitter',
      label: 'Twitter / X',
      href: null,
      handle: null,
      enabled: false,
      icon: 'twitter',
    },
    {
      id: 'toptal',
      label: 'Toptal',
      href: 'https://www.toptal.com/resume/vimal-desai',
      handle: 'vimal-desai',
      enabled: true,
      icon: 'toptal',
      snippet: 'Toptal resume listing for Vimal Desai.',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/vimlesai/',
      handle: 'vimlesai',
      enabled: true,
      icon: 'instagram',
      snippet: 'Personal Instagram — @vimlesai.',
    },
    {
      id: 'dribbble',
      label: 'Dribbble',
      href: null,
      handle: null,
      enabled: false,
      icon: 'dribbble',
    },
  ],

  // ─── Languages ────────────────────────────────────────────────────────────
  languages: [
    {
      language: 'Gujarati',
      proficiency: 'native', // native | fluent | professional | conversational | basic
      flag: '🇮🇳',
    },
    {
      language: 'Hindi',
      proficiency: 'native',
      flag: '🇮🇳',
    },
    {
      language: 'English',
      proficiency: 'professional',
      selfRating: '8/10',
      note: 'Strong written and verbal communication; slight accent.',
      flag: '🇬🇧',
    },
  ],

  // ─── Education ────────────────────────────────────────────────────────────
  education: [
    {
      id: 'srk-university',
      institution: 'Sarvepalli Radhakrishnan University',
      location: 'Bhopal, MP, India',
      degree: "Bachelor's Degree",
      field: 'Computer Science',
      displayDegree: 'B.Sc. Computer Science',
      period: { start: '2015', end: '2018' },
      href: null,
    },
  ],

  // ─── Certifications ───────────────────────────────────────────────────────
  certifications: [
    {
      id: 'react-testdom',
      title: 'React Certification',
      issuer: 'Testdom',
      issuedDate: 'July 2022',
      expiryDate: null,
      credentialUrl: null,
    },
  ],

  // ─── Hobbies & Interests ──────────────────────────────────────────────────
  hobbies: [
    {
      id: 'ai-tools',
      label: 'AI & Emerging Tech',
      description:
        'Agent-assisted delivery loops, evals, and in-product AI. Still the person who reviews what merges.',
      icon: '🤖',
    },
    {
      id: 'hackathons',
      label: 'Hackathons',
      description:
        'Enjoy time-boxed problem solving and rapid prototyping — secured 3rd place in an internal AI hackathon at UpKeep.',
      icon: '🏆',
    },
    {
      id: 'open-source',
      label: 'Open Source',
      description:
        'Building and sharing reusable tools and components on GitHub.',
      icon: '🐙',
    },
    {
      id: 'chess',
      label: 'Chess',
      description: 'Strategic thinking on and off the board.',
      icon: '♟️',
    },
    {
      id: 'table-tennis',
      label: 'Table Tennis',
      description:
        'Quick reflexes — useful in both ping-pong and production incidents.',
      icon: '🏓',
    },
    {
      id: 'video-production',
      label: 'Video Production',
      description:
        'Produced event videos for college festivals during early career at Codelash.',
      icon: '🎬',
    },
    {
      id: 'graphic-design',
      label: 'Graphic Design',
      description:
        'Designed promotional materials and posters in early career; still enjoy visual design.',
      icon: '🎨',
    },
  ],

  // ─── Fun / Memorable Quote ────────────────────────────────────────────────
  quote: {
    text: "I've always wanted to simplify things more than they already are. Making everything simpler for users is what ultimately inspires me to work.",
    context: 'On what drives my engineering philosophy',
  },

  // ─── Meta ─────────────────────────────────────────────────────────────────
  meta: {
    resumeUrl: null, // add link to hosted PDF resume
    calendarUrl: null, // add Calendly / cal.com link
    profilePhotoUrl: null, // add URL to profile photo
    availableForHire: true,
    memberSince: '2026-03-02', // Toptal member since
  },
};
