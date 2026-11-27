import React from 'react';
import Button from '@/components/ui/Button';

const ScheduleConsultationCTA = () => {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden px-12 py-20 text-center"
      style={{
        backgroundColor: 'var(--color-primary-container)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <div
        className="absolute top-1/2 right-16 h-72 w-72 -translate-y-1/2 rounded-full opacity-10"
        style={{ border: '1px solid var(--color-on-primary)' }}
      />
      <h2
        className="font-headline text-5xl italic"
        style={{ color: 'var(--color-on-primary)' }}
      >
        Let&apos;s talk
      </h2>
      <p
        className="font-body mt-4 text-base opacity-80"
        style={{ color: 'var(--color-on-primary)' }}
      >
        Open to full-time roles and a few well-scoped projects. Remote, with
        overlap.
      </p>
      <Button
        href="/contact"
        icon="arrow_forward"
        size="lg"
        className="mt-10"
        style={{
          backgroundColor: 'white',
          color: 'var(--color-primary-container)',
          borderRadius: 'var(--radius-full)',
        }}
      >
        Get in touch
      </Button>
    </section>
  );
};

export default ScheduleConsultationCTA;
