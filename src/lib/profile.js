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
    'I build scalable, high-performance web applications — and quietly obsess over reusable architecture.',

  bio: {
    short:
      'Full-stack engineer with 9+ years of experience across ERP, CRM, logistics, real estate, and healthcare. I specialize in React, Node.js, and TypeScript, and care deeply about clean architecture, team velocity, and thoughtful engineering.',
    long: `A few years ago, I set out to find my niche in software by exploring different languages and fields.
I found it in front-end development, fell deep into the React ecosystem, and never looked back.

Since 2018, I've been fully immersed in building everything from single-page apps to large-scale ERP systems
and micro-service architectures. Along the way I've led teams, managed products, conducted 40+ technical
interviews, and shipped 50+ projects across 7+ industries.

My approach is always the same: understand the problem thoroughly, design for reusability and maintainability,
and iterate fast. In my free time I stay sharp by experimenting with new tools, AI workflows, and
the occasional hackathon.`,
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
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vimal-desai', // update with real slug
      handle: 'vimal-desai',
      enabled: true,
      icon: 'linkedin',
    },
    {
      id: 'upwork',
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/vimaldesai', // update with real URL
      handle: 'vimaldesai',
      enabled: true,
      icon: 'upwork',
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
      href: 'https://www.toptal.com/resume/vimal-desai', // update with real URL
      handle: 'vimal-desai',
      enabled: true,
      icon: 'toptal',
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
        'Experimenting with new AI tools, workflows, and integrations. Built a POC at an internal hackathon that improved cross-service data consistency.',
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
