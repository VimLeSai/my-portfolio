'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUp, Mic, Volume2, VolumeX, Trash2, Mail } from 'lucide-react';
import { TALK_DISCLOSURE } from '@/lib/talk/prompt';
import {
  getOrCreateSessionId,
  setSessionId,
  loadLocalMessages,
  saveLocalMessages,
  clearLocalTalk,
  getSpeakEnabled,
  setSpeakEnabled,
  messageText,
} from '@/lib/talk/client-session';
import LeadForm from '@/components/talk/lead-form';
import { speakText, stopSpeaking, useSpeechInput } from '@/components/talk/use-voice';

const SUGGESTIONS = [
  'What are you working on at UpKeep?',
  'How do you actually ship?',
  'What’s the stack?',
  'Want to talk about a role?',
];

function stripLeadTag(text) {
  return String(text || '')
    .replace(/\[\[LEAD_FORM\]\]/g, '')
    .trim();
}

function wantsLeadForm(text) {
  return String(text || '').includes('[[LEAD_FORM]]');
}

export default function TalkThread({
  variant = 'panel', // panel | page
  initialSessionId = null,
  className = '',
}) {
  const reduce = useReducedMotion();
  const [sessionId, setSid] = useState(null);
  const [input, setInput] = useState('');
  const [configured, setConfigured] = useState(null);
  const [speakOn, setSpeakOn] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [bootstrapped, setBootstrapped] = useState(false);
  const bottomRef = useRef(null);
  const lastSpokenRef = useRef(null);
  const sessionRef = useRef(null);

  useEffect(() => {
    const id = initialSessionId || getOrCreateSessionId();
    if (initialSessionId) setSessionId(initialSessionId);
    sessionRef.current = id;
    setSid(id);
    setSpeakOn(getSpeakEnabled());

    fetch('/api/talk')
      .then((r) => r.json())
      .then((d) => setConfigured(Boolean(d.configured)))
      .catch(() => setConfigured(false));
    // configured = any of GROQ / Google / OpenAI keys (see /api/talk)
  }, [initialSessionId]);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/talk',
        prepareSendMessagesRequest: ({ messages, id, trigger, messageId }) => ({
          body: {
            id,
            trigger,
            messageId,
            messages,
            sessionId: sessionRef.current,
          },
        }),
      }),
    [],
  );

  const { messages, sendMessage, setMessages, status, error, stop } = useChat({
    transport,
  });

  // Bootstrap messages from URL session or localStorage
  useEffect(() => {
    if (!sessionId || bootstrapped) return;
    let cancelled = false;

    async function boot() {
      let remote = null;
      if (initialSessionId) {
        try {
          const res = await fetch(
            `/api/talk/session?id=${encodeURIComponent(initialSessionId)}`,
          );
          const data = await res.json();
          if (data.messages?.length) remote = data.messages;
        } catch {
          // ignore
        }
      }
      if (cancelled) return;
      if (remote?.length) {
        setMessages(remote);
        saveLocalMessages(remote);
      } else {
        const local = loadLocalMessages();
        if (local.length) setMessages(local);
      }
      setBootstrapped(true);
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, [sessionId, initialSessionId, bootstrapped, setMessages]);

  useEffect(() => {
    if (!bootstrapped) return;
    saveLocalMessages(messages);
    // opportunistic server persist when Redis exists
    if (sessionId && messages.length) {
      fetch('/api/talk/session', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, messages }),
      }).catch(() => {});
    }
  }, [messages, sessionId, bootstrapped]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'end',
    });
  }, [messages, status, reduce, showLead]);

  // Detect lead form tag on latest assistant message
  useEffect(() => {
    const last = [...messages].reverse().find((m) => m.role === 'assistant');
    if (last && wantsLeadForm(messageText(last))) {
      setShowLead(true);
    }
  }, [messages]);

  // Optional TTS after a complete reply
  useEffect(() => {
    if (!speakOn || status !== 'ready') return;
    const last = [...messages].reverse().find((m) => m.role === 'assistant');
    if (!last) return;
    const text = stripLeadTag(messageText(last));
    if (!text || lastSpokenRef.current === last.id) return;
    lastSpokenRef.current = last.id;
    speakText(text, { preferApi: true });
  }, [messages, status, speakOn]);

  const onSpeech = useCallback((text) => {
    setInput((prev) => (prev ? `${prev} ${text}` : text));
  }, []);

  const { supported: micSupported, listening, toggle: toggleMic } =
    useSpeechInput({ onResult: onSpeech });

  async function submit(text) {
    const value = (text ?? input).trim();
    if (!value || status === 'submitted' || status === 'streaming') return;
    if (configured === false) return;
    setInput('');
    await sendMessage({ text: value });
  }

  function clearThread() {
    stopSpeaking();
    stop?.();
    setMessages([]);
    clearLocalTalk();
    const fresh = getOrCreateSessionId();
    sessionRef.current = fresh;
    setSid(fresh);
    setShowLead(false);
    setShowResume(false);
    setBootstrapped(true);
  }

  function toggleSpeak() {
    const next = !speakOn;
    setSpeakOn(next);
    setSpeakEnabled(next);
    if (!next) stopSpeaking();
  }

  const busy = status === 'submitted' || status === 'streaming';
  const isPage = variant === 'page';

  return (
    <div
      className={`flex flex-col ${isPage ? 'min-h-[70vh]' : 'h-full'} ${className}`}
      style={{ backgroundColor: 'var(--color-paper, #fcf9f3)' }}
    >
      <div
        className={`border-b border-stone-200/80 px-4 py-3 ${
          isPage ? 'px-0' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-label text-outline text-[10px] tracking-[0.16em] uppercase">
              Talk
            </p>
            <p className="font-headline text-on-surface text-lg italic leading-snug sm:text-xl">
              Ask me anything
            </p>
            <p className="font-body text-outline mt-1 text-xs leading-relaxed">
              {TALK_DISCLOSURE}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={toggleSpeak}
              className="text-outline hover:text-[var(--color-accent)] rounded p-2 transition-colors"
              aria-label={speakOn ? 'Mute replies' : 'Speak replies'}
              title={speakOn ? 'Mute replies' : 'Speak replies'}
            >
              {speakOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              type="button"
              onClick={() => setShowResume((v) => !v)}
              className="text-outline hover:text-[var(--color-accent)] rounded p-2 transition-colors"
              aria-label="Email this chat"
              title="Email this chat"
            >
              <Mail size={16} />
            </button>
            <button
              type="button"
              onClick={clearThread}
              className="text-outline hover:text-[var(--color-accent)] rounded p-2 transition-colors"
              aria-label="Clear conversation"
              title="Clear conversation"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {configured === false && (
        <div className="border-b border-amber-200/80 bg-amber-50/60 px-4 py-3">
          <p className="font-body text-on-surface/80 text-sm leading-relaxed">
            Talk isn’t wired on this deploy yet. Use{' '}
            <a
              href="/contact"
              className="text-[var(--color-accent)] underline underline-offset-2"
            >
              /contact
            </a>{' '}
            and I’ll reply myself.
          </p>
        </div>
      )}

      <div
        className={`flex-1 space-y-4 overflow-y-auto px-4 py-4 ${
          isPage ? 'px-0' : ''
        }`}
      >
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="font-body text-on-surface/70 text-sm">
              Start with one of these, or type your own.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled={configured === false}
                  onClick={() => submit(s)}
                  className="font-mono text-outline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] border border-stone-300/80 bg-transparent px-3 py-1.5 text-[11px] transition-colors disabled:opacity-40"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => {
          const raw = messageText(m);
          const text = stripLeadTag(raw);
          const isUser = m.role === 'user';
          return (
            <div
              key={m.id}
              className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <span
                  className="font-headline text-[var(--color-accent)] mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--color-accent)]/30 text-sm italic"
                  aria-hidden
                >
                  V
                </span>
              )}
              <div
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary)]'
                    : 'border border-stone-200/90 text-[var(--color-ink)]'
                }`}
              >
                <p className="font-body whitespace-pre-wrap">{text}</p>
              </div>
            </div>
          );
        })}

        {busy && (
          <div className="flex items-center gap-2">
            <span className="font-headline text-[var(--color-accent)] flex h-7 w-7 items-center justify-center border border-[var(--color-accent)]/30 text-sm italic">
              V
            </span>
            <motion.span
              className="bg-[var(--color-accent)] inline-block h-4 w-px"
              animate={reduce ? undefined : { opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              aria-label="Thinking"
            />
          </div>
        )}

        {error && (
          <p className="font-body text-sm text-red-800">
            {error.message ||
              "Something glitched on my side. Try again, or use /contact."}
          </p>
        )}

        {showLead && (
          <LeadForm
            mode="lead"
            sessionId={sessionId}
            messages={messages}
            onCancel={() => setShowLead(false)}
            onDone={() => setShowLead(false)}
          />
        )}

        {showResume && (
          <LeadForm
            mode="resume"
            sessionId={sessionId}
            messages={messages}
            onCancel={() => setShowResume(false)}
            onDone={() => setShowResume(false)}
          />
        )}

        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={`border-t border-stone-200/80 p-3 ${isPage ? 'px-0' : ''}`}
      >
        <div className="flex items-end gap-2">
          {micSupported && (
            <button
              type="button"
              onClick={toggleMic}
              disabled={configured === false}
              className={`rounded p-2 transition-colors ${
                listening
                  ? 'bg-[var(--color-accent)] text-[var(--color-on-primary)]'
                  : 'text-outline hover:text-[var(--color-accent)]'
              }`}
              aria-label={listening ? 'Stop listening' : 'Speak a question'}
              title={
                micSupported
                  ? listening
                    ? 'Stop'
                    : 'Dictate'
                  : 'Speech not supported here'
              }
            >
              <Mic size={16} />
            </button>
          )}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            rows={1}
            disabled={configured === false}
            placeholder={
              listening
                ? 'Listening…'
                : configured === false
                  ? 'Talk offline — use /contact'
                  : 'Ask about work, process, stack…'
            }
            className="font-body text-on-surface placeholder:text-outline/50 max-h-28 min-h-[40px] flex-1 resize-none border border-stone-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={busy || !input.trim() || configured === false}
            className="bg-[var(--color-primary-container)] text-[var(--color-on-primary)] flex h-10 w-10 items-center justify-center disabled:opacity-40"
            aria-label="Send"
          >
            <ArrowUp size={16} />
          </button>
        </div>
        {busy && (
          <button
            type="button"
            onClick={() => stop?.()}
            className="font-label text-outline mt-2 text-[10px] tracking-[0.14em] uppercase"
          >
            Stop
          </button>
        )}
      </form>
    </div>
  );
}
