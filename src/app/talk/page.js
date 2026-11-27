import TalkContent from './talk-content';

export const metadata = {
  title: 'Talk',
  description:
    'Ask Vimal about his work, process, and stack — an AI speaking as Vimal from his public portfolio.',
};

export default function TalkPage({ searchParams }) {
  // Next 16 may pass searchParams as a promise — handle both
  return <TalkContentBridge searchParams={searchParams} />;
}

async function TalkContentBridge({ searchParams }) {
  const sp = typeof searchParams?.then === 'function' ? await searchParams : searchParams;
  const t = sp?.t || null;
  return <TalkContent resumeId={t} />;
}
