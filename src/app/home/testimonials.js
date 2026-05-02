'use client';

import { testimonials } from '@/lib/testimonials';
import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  // Duplicate array for infinite scroll
  const marqueeItems = [...featuredTestimonials, ...featuredTestimonials];

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollRef.current.scrollLeft += 0.5;
        
        // Reset to beginning when halfway through (seamless loop)
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="bg-surface-container-lowest border-outline-variant/10 border-y px-4 py-32 md:px-8">
      <div className="mx-auto max-w-screen-2xl py-12 md:py-24">
        <p className="font-label text-outline mb-16 text-center text-sm tracking-[0.2em] uppercase">
          Echoes of Success
        </p>
        
        <div className="relative w-full">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[var(--color-surface-container-lowest)] to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[var(--color-surface-container-lowest)] to-transparent md:w-32" />

          {/* Native scroll container */}
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto overflow-y-visible pt-48 pb-32 -my-32 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {marqueeItems.map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`} 
                className="relative flex flex-col justify-between w-[320px] shrink-0 mr-12 md:mr-16 md:w-[400px]"
              >
                <span className="font-headline text-surface-container absolute -top-6 -left-4 text-8xl italic opacity-50">
                  "
                </span>
                
                <div className="relative z-10 mb-8">
                  <p className="font-body text-on-surface text-lg italic whitespace-pre-wrap leading-relaxed">
                    {testimonial.shortReview || testimonial.review}
                    {' '}
                    <span className="group relative inline-block whitespace-nowrap text-primary font-bold text-sm cursor-help">
                      read original →
                      
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 md:w-[450px] rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-50">
                        <span className="font-body text-[15px] font-normal italic leading-relaxed whitespace-pre-wrap">
                          "{testimonial.review}"
                        </span>
                        {/* Tooltip caret */}
                        <svg className="absolute left-1/2 top-full -mt-[1px] h-4 w-4 -translate-x-1/2 fill-inverse-surface" viewBox="0 0 24 24">
                          <path d="M12 24l12-24H0z" />
                        </svg>
                      </span>
                    </span>
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-stone-200 flex items-center justify-center">
                    {testimonial.reviewer.avatarUrl ? (
                      <img
                        alt={testimonial.reviewer.name}
                        src={testimonial.reviewer.avatarUrl}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-on-surface-variant font-label font-bold uppercase">
                        {testimonial.reviewer.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold tracking-widest uppercase">
                      {testimonial.reviewer.name}
                    </p>
                    <p className="font-label text-outline text-[10px] tracking-wider uppercase">
                      {testimonial.reviewer.title}
                      {testimonial.reviewer.company ? `, ${testimonial.reviewer.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
