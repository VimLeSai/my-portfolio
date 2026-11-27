'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useSpeechInput({ onResult, enabled = true }) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const recRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSupported(Boolean(Ctor));
  }, []);

  const stop = useCallback(() => {
    try {
      recRef.current?.stop();
    } catch {
      // ignore
    }
    setListening(false);
  }, []);

  const start = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return false;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return false;
    const rec = new Ctor();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (event) => {
      const text = event.results?.[0]?.[0]?.transcript || '';
      if (text) onResult?.(text);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recRef.current = rec;
    try {
      rec.start();
      setListening(true);
      return true;
    } catch {
      setListening(false);
      return false;
    }
  }, [enabled, onResult]);

  const toggle = useCallback(() => {
    if (listening) {
      stop();
      return;
    }
    start();
  }, [listening, start, stop]);

  useEffect(() => () => stop(), [stop]);

  return { supported, listening, start, stop, toggle };
}

export async function speakText(text, { preferApi = true } = {}) {
  const clean = String(text || '')
    .replace(/\[\[LEAD_FORM\]\]/g, '')
    .trim();
  if (!clean || typeof window === 'undefined') return;

  if (preferApi) {
    try {
      const res = await fetch('/api/talk/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: clean.slice(0, 1800) }),
      });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        const blob = new Blob([buf], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        await audio.play();
        audio.onended = () => URL.revokeObjectURL(url);
        return;
      }
    } catch {
      // fall through
    }
  }

  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  u.rate = 1;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

export function stopSpeaking() {
  if (typeof window === 'undefined') return;
  window.speechSynthesis?.cancel();
}
