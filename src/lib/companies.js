/**
 * companies.js
 * Master registry of all companies worked at.
 * Includes cross-referenced skills, tools, and role highlights.
 *
 * Usage in projects: company: companies.upkeep
 * Usage in experience UI: companies.upkeep.highlights, companies.upkeep.skills
 */

import { skills } from './skills';
import { tools } from './tools';

export const companies = {
  // ─────────────────────────────────────────────────────────────────────────────
  // UpKeep  |  2023 – Present
  // ─────────────────────────────────────────────────────────────────────────────
  upkeep: {
    id: 'upkeep',
    name: 'UpKeep',
    description:
      'A leading mobile-first CMMS and asset operations platform helping maintenance and reliability teams work smarter.',
    href: 'https://www.upkeep.com/',
    industries: ['Software', 'Enterprise Resource Planning (ERP)', 'CMMS'],
    role: 'Sr. Software Development Engineer',

    isCurrent: true,
    accentColor: 'var(--color-primary-container)',
    order: 1, // 1 = most recent
    side: 'right',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Emtec  |  2022 – 2023
  // ─────────────────────────────────────────────────────────────────────────────
  emtec: {
    id: 'emtec',
    name: 'Emtec Inc.',
    description:
      'A global IT services and custom software development firm delivering digital transformation for enterprise clients.',
    href: 'https://www.emtecinc.com/',
    industries: ['Business Services', 'Custom Software', 'IT Services'],
    role: 'Sr. Software Development Engineer',

    location: 'Remote',
    order: 2,
    accentColor: 'var(--color-secondary)',
    side: 'left',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Knovator  |  2018 – 2022
  // ─────────────────────────────────────────────────────────────────────────────
  knovator: {
    id: 'knovator',
    name: 'Knovator Technologies Pvt. Ltd.',
    description:
      'A software product and services company building solutions across healthcare, textiles, real estate, education, and more.',
    href: 'https://knovator.com/',
    industries: [
      'Healthcare',
      'Travel',
      'Education',
      'Textiles',
      'Consulting',
      'Real Estate',
      'eCommerce',
      'IT Services',
    ],
    role: 'Tech Lead & Sr. Front-End Developer',
    location: 'Surat, Gujarat, India',
    accentColor: 'var(--color-tertiary)',
    order: 3,
    side: 'left',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Codelash  |  April 2017 – May 2018
  // ─────────────────────────────────────────────────────────────────────────────
  codelash: {
    id: 'codelash',
    name: 'Codelash',
    description:
      'A college-born startup providing web development, graphic design, and video production services.',
    href: 'https://codelash.com/',
    industries: ['Web Development', 'Graphic Design', 'Media'],
    role: 'Web Developer',
    location: 'Vadodara, Gujarat, India',
    accentColor: 'var(--color-tertiary)',
    order: 4,
    side: 'left',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Croods Consolidate  |  April 2018 – June 2018
  // ─────────────────────────────────────────────────────────────────────────────
  croods: {
    id: 'croods',
    name: 'Croods Consolidate',
    description:
      'An IT firm based in Vadodara where foundational Java and JSP skills were developed.',
    href: null,
    industries: ['IT Services'],
    
  },
};
