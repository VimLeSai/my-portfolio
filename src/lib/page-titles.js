/**
 * Relative page titles for nav brand + document <title>.
 * Keep short — section first, name second.
 */

export const siteName = 'Vimal Desai';

/** Path → short section label for the header brand */
export function sectionFromPath(pathname = '/') {
  if (!pathname || pathname === '/') {
    return { section: null, label: siteName, href: '/' };
  }

  if (pathname.startsWith('/work/')) {
    return { section: 'Work', label: 'Case study', href: '/work' };
  }
  if (pathname === '/work') {
    return { section: null, label: 'Work', href: '/work' };
  }
  if (pathname.startsWith('/experience')) {
    return { section: null, label: 'Experience', href: '/experience' };
  }
  if (pathname.startsWith('/process')) {
    return { section: null, label: 'Process', href: '/process' };
  }
  if (pathname.startsWith('/about')) {
    return { section: null, label: 'About', href: '/about' };
  }
  if (pathname.startsWith('/contact')) {
    return { section: null, label: 'Contact', href: '/contact' };
  }
  if (pathname.startsWith('/studio')) {
    return { section: null, label: 'Studio', href: '/studio' };
  }
  if (pathname.startsWith('/stack')) {
    return { section: null, label: 'Stack', href: '/stack' };
  }
  if (pathname.startsWith('/impact')) {
    return { section: null, label: 'Impact', href: '/impact' };
  }
  if (pathname.startsWith('/resume')) {
    return { section: null, label: 'Resume', href: '/resume' };
  }
  if (pathname.startsWith('/archive')) {
    return { section: null, label: 'Archive', href: '/archive' };
  }

  return { section: null, label: siteName, href: '/' };
}

/** Document titles — used as metadata.title (with root template) */
export const pageTitles = {
  home: 'Home',
  work: 'Work',
  experience: 'Experience',
  process: 'Process',
  about: 'About',
  contact: 'Contact',
  studio: 'Studio',
  stack: 'Stack',
  impact: 'Impact',
  resume: 'Resume',
};
