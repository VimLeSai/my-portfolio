/**
 * Build public-safe text documents for Talk RAG from site content modules.
 * Used at runtime (fallback) and by scripts/talk-index.mjs.
 */

import { profile } from '@/lib/profile';
import { experience } from '@/lib/experience';
import { projects } from '@/lib/projects';
import { skills } from '@/lib/skills';
import { highlights } from '@/lib/highlights';
import pipelineSteps from '@/lib/pipeline-steps';
import { testimonials } from '@/lib/testimonials';
import recognitions from '@/lib/recognitions';
import educations from '@/lib/educations';

const BLOCKED =
  /\b(NEX|RFAC|SEC|Nova|UpkeepSpark|LangSmith|CodeRabbit|hocuspocus)\b/i;

function clean(text) {
  if (!text) return '';
  return String(text)
    .replace(/\s+/g, ' ')
    .trim();
}

function push(docs, id, source, text) {
  const t = clean(text);
  if (!t || t.length < 24) return;
  if (BLOCKED.test(t)) return;
  docs.push({ id, source, text: t });
}

function chunkLong(docs, baseId, source, text, size = 900) {
  const t = clean(text);
  if (!t) return;
  if (t.length <= size) {
    push(docs, baseId, source, t);
    return;
  }
  let i = 0;
  let part = 0;
  while (i < t.length) {
    push(docs, `${baseId}-${part}`, source, t.slice(i, i + size));
    i += size - 80;
    part += 1;
  }
}

export function getIdentityCard() {
  const socials = (profile.socials || [])
    .filter((s) => s.enabled && s.href)
    .map((s) => `${s.label}: ${s.href}`)
    .join(' · ');

  return [
    `Name: ${profile.name.full}`,
    `Title: ${profile.title}`,
    `Tagline: ${profile.tagline}`,
    `Bio: ${profile.bio.short}`,
    `Location: ${profile.location.display} (${profile.location.timezone})`,
    `Work: ${profile.workPreferences.workStyle}, ${profile.workPreferences.availability}. ${profile.workPreferences.remoteNote}`,
    `Relocation: ${profile.residency.relocationNote}`,
    `Email: ${profile.contact.email}`,
    `Preferred contact: ${profile.contact.preferredContact}`,
    `Site: https://vimlesai.io`,
    socials ? `Links: ${socials}` : '',
    'Now at UpKeep: CMMS features, in-product AI, ticket-to-PR factory. Public language only — no internal product or ticket names.',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildDocuments() {
  const docs = [];

  push(docs, 'identity', 'profile', getIdentityCard());
  chunkLong(docs, 'bio-long', 'profile', profile.bio.long);

  push(
    docs,
    'languages',
    'profile',
    `Languages: ${(profile.languages || [])
      .map((l) => `${l.language} (${l.proficiency})`)
      .join(', ')}`,
  );

  for (const edu of profile.education || []) {
    push(
      docs,
      `edu-${edu.id}`,
      'profile',
      `${edu.displayDegree || edu.degree} in ${edu.field} — ${edu.institution}, ${edu.location}. ${edu.period?.start}–${edu.period?.end}.`,
    );
  }

  for (const h of profile.hobbies || []) {
    push(
      docs,
      `hobby-${h.id}`,
      'profile',
      `${h.label}: ${h.description}`,
    );
  }

  if (profile.quote?.text) {
    push(
      docs,
      'quote',
      'profile',
      `Quote: "${profile.quote.text}" — ${profile.quote.context || ''}`,
    );
  }

  for (const entry of experience || []) {
    const companyName =
      entry.company?.name || entry.companyId || 'Company';
    const period = entry.displayPeriod
      ? `${entry.displayPeriod.start} – ${entry.displayPeriod.end || 'Present'}`
      : '';
    const skillNames = (entry.skills || [])
      .map((s) => s?.name || s?.label)
      .filter(Boolean)
      .slice(0, 16)
      .join(', ');

    push(
      docs,
      `exp-${entry.id}-role`,
      'experience',
      `${entry.role} at ${companyName}. ${period}. ${entry.location || ''}. ${entry.isCurrent ? 'Current role.' : ''}`,
    );

    for (const [i, h] of (entry.highlights || []).entries()) {
      push(
        docs,
        `exp-${entry.id}-h${i}`,
        'experience',
        `${companyName} — ${h.title}: ${h.description}`,
      );
    }

    if (skillNames) {
      push(
        docs,
        `exp-${entry.id}-skills`,
        'experience',
        `Skills used at ${companyName}: ${skillNames}`,
      );
    }
  }

  for (const [key, project] of Object.entries(projects || {})) {
    if (!project?.title) continue;
    const companyName = project.company?.name || '';
    push(
      docs,
      `proj-${key}-overview`,
      'projects',
      [
        `${project.title}${companyName ? ` (${companyName})` : ''}`,
        project.tagline,
        project.role,
        project.overview,
        project.impact,
        project.url ? `URL: ${project.url}` : '',
        Array.isArray(project.tags) ? `Tags: ${project.tags.join(', ')}` : '',
      ]
        .filter(Boolean)
        .join(' '),
    );

    for (const [i, c] of (project.challenges || []).entries()) {
      push(
        docs,
        `proj-${key}-c${i}`,
        'projects',
        `${project.title} — ${c.label}: ${c.value}`,
      );
    }
  }

  const skillList = Object.values(skills || {})
    .map((s) => s?.label || s?.name)
    .filter(Boolean);
  if (skillList.length) {
    chunkLong(
      docs,
      'skills',
      'skills',
      `Technical skills: ${skillList.join(', ')}`,
      700,
    );
  }

  for (const h of highlights || []) {
    push(
      docs,
      `highlight-${h.id}`,
      'highlights',
      `${h.value} — ${h.label}. ${h.sublabel || ''}. ${h.description || ''}`,
    );
  }

  for (const step of pipelineSteps || []) {
    push(
      docs,
      `process-${step.num}`,
      'process',
      `Process ${step.num}: ${step.title}. ${step.desc}. ${(step.bullets || []).join('; ')}`,
    );
  }

  for (const t of (testimonials || []).filter((x) => x.enabled !== false)) {
    const name = t.reviewer?.name || t.name || 'Colleague';
    const role = t.reviewer?.title || t.relation?.description || '';
    const company = t.reviewer?.company || '';
    const quote = t.shortReview || t.review || t.quote || t.text || '';
    push(
      docs,
      `testimonial-${t.id || name}`,
      'testimonials',
      `${name}${role ? `, ${role}` : ''}${company ? ` at ${company}` : ''}: "${quote}"`,
    );
  }

  for (const [i, r] of (recognitions || []).entries()) {
    push(
      docs,
      `recog-${i}`,
      'recognitions',
      `${r.title}: ${r.org || ''}`,
    );
  }

  for (const [i, e] of (educations || []).entries()) {
    push(
      docs,
      `education-${i}`,
      'education',
      `${e.label || e.degree || ''} ${e.field || ''} — ${e.institution || ''}. ${e.year || ''}. ${e.emphasis || ''}`,
    );
  }

  push(
    docs,
    'site-nav',
    'site',
    'Portfolio site vimlesai.io — Work (case studies), Experience, Process (Listen → Sketch → Build → Harden), About, Contact, Talk (this chatbot), Resume, Stack, Impact. Prefer /contact for formal hiring notes.',
  );

  // Page copy that lives in components (not only src/lib modules)
  push(
    docs,
    'about-traits',
    'about',
    'About traits: Own the seam — frontend alone is half a product, pull backend when the seam breaks. Ship under constraint — small teams, legacy, tight deadlines. Raise the floor — reviews and pairing so the next person moves faster. AI as a tool — agents for ticket-to-PR; I still review, test, and decide what merges.',
  );
  push(
    docs,
    'home-pitch',
    'home',
    'Home pitch: I build products people actually use. Ten years shipping React, Next.js, Node, and TypeScript — CMMS platforms, rental CRMs, travel booking, ERPs. Based in Surat, remote. Now at UpKeep: CMMS and in-product AI.',
  );

  return docs;
}
