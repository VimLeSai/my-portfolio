"use client";
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function ImageGallery({ images, title }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mb-24">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p
          className="font-label text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: 'var(--color-outline)' }}
        >
          Visual Documentation
        </p>
        <p className="text-xs tracking-wider" style={{ color: 'var(--color-on-surface-variant)' }}>
          Click an image to expand. Swipe or use arrow keys to navigate.
        </p>
      </div>
      <PhotoProvider
        speed={() => 300}
        maskOpacity={0.85}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((img, i) => (
            <PhotoView key={i} src={img}>
              <div
                className="overflow-hidden cursor-pointer group"
                style={{ borderRadius: 'var(--radius-xl)' }}
              >
                <img
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] object-top"
                  style={{ height: '320px', pointerEvents: 'none' }}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
