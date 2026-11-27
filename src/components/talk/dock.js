'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import TalkThread from '@/components/talk/thread';

export default function TalkDock() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const hide = pathname === '/talk';

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (hide) return null;

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="talk-panel"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex h-[min(640px,78vh)] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden border border-stone-300/80 shadow-[0_20px_60px_rgba(88,65,65,0.14)]"
            style={{ backgroundColor: '#fcf9f3' }}
          >
            <TalkThread variant="panel" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto font-label flex items-center gap-2 bg-[var(--color-primary-container)] px-4 py-3 text-[11px] tracking-[0.16em] text-[var(--color-on-primary)] uppercase shadow-[0_12px_40px_rgba(128,0,32,0.28)]"
        whileHover={reduce ? undefined : { y: -1 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        aria-expanded={open}
        aria-label={open ? 'Close Talk' : 'Open Talk'}
      >
        {open ? <X size={16} /> : <MessageCircle size={16} />}
        <span>{open ? 'Close' : 'Talk'}</span>
      </motion.button>
    </div>
  );
}
