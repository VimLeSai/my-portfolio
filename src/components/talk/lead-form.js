'use client';

import { useState } from 'react';

export default function LeadForm({
  sessionId,
  messages,
  mode = 'lead',
  onDone,
  onCancel,
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [info, setInfo] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setInfo('');
    try {
      const res = await fetch('/api/talk/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          sessionId,
          messages,
          mode,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setStatus('done');
      setInfo(data.message || 'Sent.');
      onDone?.(data);
    } catch (err) {
      setStatus('error');
      setInfo(err.message || 'Could not send.');
    }
  }

  return (
    <form
      onSubmit={submit}
      className="border-stone-300/80 bg-[var(--color-paper)] mt-3 space-y-3 border px-4 py-3"
    >
      <p className="font-label text-outline text-[10px] tracking-[0.16em] uppercase">
        {mode === 'resume' ? 'Email this chat' : 'Leave a note'}
      </p>
      <p className="font-body text-on-surface/80 text-sm leading-relaxed">
        {mode === 'resume'
          ? 'I’ll send a transcript and a private resume link to your inbox.'
          : 'Drop an email — I’ll get a short transcript in my inbox.'}
      </p>
      {mode === 'lead' && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="font-body text-on-surface placeholder:text-outline/50 w-full border border-stone-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      )}
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="font-body text-on-surface placeholder:text-outline/50 w-full border border-stone-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending' || status === 'done'}
          className="font-label bg-[var(--color-primary-container)] px-4 py-2 text-[10px] tracking-[0.14em] text-[var(--color-on-primary)] uppercase disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : status === 'done' ? 'Sent' : 'Send'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="font-label text-outline text-[10px] tracking-[0.14em] uppercase"
          >
            Cancel
          </button>
        )}
      </div>
      {info && (
        <p
          className={`font-body text-sm ${
            status === 'error' ? 'text-red-800' : 'text-on-surface/70'
          }`}
        >
          {info}
        </p>
      )}
    </form>
  );
}
