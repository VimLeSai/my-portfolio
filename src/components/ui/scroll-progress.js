'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-0.5 origin-left"
      style={{
        scaleX,
        width: '100%',
        backgroundColor: 'var(--color-primary-container)',
      }}
      aria-hidden
    />
  );
}
