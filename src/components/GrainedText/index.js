import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
`;

const StyledCanvas = styled.canvas`
  max-width: 100%;
  height: auto;
`;

const GrainedText = ({ text, fontSize = 120, color = '#F4F4F4' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let particles = [];
    let animationId;

    const init = () => {
      const isMobile = window.innerWidth < 768;
      const currentFontSize = isMobile ? fontSize * 0.5 : fontSize;
      const fontName = 'Space Mono, monospace';
      ctx.font = `bold ${currentFontSize}px ${fontName}`;
      const textWidth = ctx.measureText(text).width;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (textWidth + 40) * dpr;
      canvas.height = (currentFontSize * 1.5) * dpr;
      ctx.scale(dpr, dpr);
      
      ctx.fillStyle = color;
      ctx.textBaseline = 'middle';
      ctx.font = `bold ${currentFontSize}px ${fontName}`;
      ctx.fillText(text, 20, canvas.height / (2 * dpr));

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = [];
      const step = isMobile ? 3 : 2;

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            particles.push({
              x: x / dpr,
              y: y / dpr,
              originX: x / dpr,
              originY: y / dpr,
              size: Math.random() * 1.2 + 0.3,
              vx: 0,
              vy: 0,
              accX: 0,
              accY: 0,
              friction: Math.random() * 0.05 + 0.92,
              color: color,
            });
          }
        }
      }
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (100 - distance) / 100;

        if (distance < 100) {
          p.accX = (dx / distance) * force * 15;
          p.accY = (dy / distance) * force * 15;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      
      particles.forEach((p, i) => {
        // Subtle breathing + glitch effect
        const noiseX = Math.sin(time * 2 + i) * 0.2;
        const noiseY = Math.cos(time * 1.5 + i) * 0.2;
        
        if (Math.random() > 0.995) { // Occasional jitter
          p.accX += (Math.random() - 0.5) * 5;
          p.accY += (Math.random() - 0.5) * 5;
        }

        p.accX += noiseX;
        p.accY += noiseY;

        p.accX += (p.originX - p.x) * 0.1;
        p.accY += (p.originY - p.y) * 0.1;

        p.vx += p.accX;
        p.vy += p.accY;
        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        p.accX = 0;
        p.accY = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', init);
    };
  }, [text, fontSize, color]);

  return (
    <CanvasWrapper ref={containerRef}>
      <StyledCanvas ref={canvasRef} />
    </CanvasWrapper>
  );
};

export default GrainedText;
