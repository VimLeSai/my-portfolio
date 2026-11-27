import nodemailer from 'nodemailer';
import { sanitize } from '@/lib/talk/sanitize';

function transporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_PORT) === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function receiver() {
  return process.env.CONTACT_EMAIL || 'vimlesai@duck.com';
}

export function mailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendTalkLead({
  email,
  name,
  messages = [],
  sessionId,
}) {
  const safeEmail = sanitize(email);
  const safeName = sanitize(name) || 'Visitor';
  const transcript = messages
    .slice(-10)
    .map((m) => {
      const role = m.role === 'assistant' ? 'Vimal' : 'Visitor';
      const text =
        typeof m.content === 'string'
          ? m.content
          : (m.parts || [])
              .filter((p) => p.type === 'text')
              .map((p) => p.text)
              .join('');
      return `${role}: ${sanitize(text)}`;
    })
    .join('\n\n');

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://vimlesai.io';
  const resumeLink = sessionId ? `${site}/talk?t=${sessionId}` : `${site}/talk`;

  await transporter().sendMail({
    from: `Talk — Portfolio <${process.env.SMTP_USER || receiver()}>`,
    replyTo: safeEmail,
    to: receiver(),
    subject: `Talk — from ${safeName} <${safeEmail}>`,
    text: `
Someone left a note via Talk on your portfolio.

Name: ${safeName}
Email: ${safeEmail}
Session: ${sessionId || 'n/a'}
Resume link: ${resumeLink}

=========================================
TRANSCRIPT (last messages)
=========================================
${transcript || '(empty)'}
`,
  });

  return { resumeLink };
}

export async function emailTranscriptToVisitor({
  email,
  messages = [],
  sessionId,
}) {
  const safeEmail = sanitize(email);
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://vimlesai.io';
  const resumeLink = sessionId ? `${site}/talk?t=${sessionId}` : `${site}/talk`;

  const transcript = messages
    .slice(-30)
    .map((m) => {
      const role = m.role === 'assistant' ? 'Vimal' : 'You';
      const text =
        typeof m.content === 'string'
          ? m.content
          : (m.parts || [])
              .filter((p) => p.type === 'text')
              .map((p) => p.text)
              .join('');
      return `${role}: ${sanitize(text)}`;
    })
    .join('\n\n');

  await transporter().sendMail({
    from: `Vimal Desai <${process.env.SMTP_USER || receiver()}>`,
    to: safeEmail,
    bcc: receiver(),
    subject: 'Your chat with Vimal — vimlesai.io/talk',
    text: `
Here's a copy of your chat, plus a private resume link (anyone with the link can read this thread):

${resumeLink}

=========================================
TRANSCRIPT
=========================================
${transcript || '(empty)'}

— Vimal (via Talk on vimlesai.io)
`,
  });

  return { resumeLink };
}
