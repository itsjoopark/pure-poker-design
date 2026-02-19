'use client';

import { useEffect, useRef, useCallback } from 'react';

const ASCII_CHARS = ' .,:;i1tfLCG08@';

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const fontSize = 14;
    const cols = Math.floor(width / (fontSize * 0.6));
    const rows = Math.floor(height / fontSize);
    const cellW = width / cols;
    const cellH = height / rows;

    // Clear
    ctx.fillStyle = '#050a18';
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px "Geist Mono", "SF Mono", "Fira Code", monospace`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const interactionRadius = 350;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellW + cellW / 2;
        const y = row * cellH + cellH / 2;

        // Compute base brightness from gradient (dark at edges, slightly brighter center-top)
        const cx = width / 2;
        const cy = height * 0.35;
        const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        const maxDist = Math.sqrt(cx ** 2 + cy ** 2);
        const normalizedDist = distFromCenter / maxDist;

        // Base gradient brightness: subtle glow from center
        let brightness = Math.max(0, 0.15 - normalizedDist * 0.12);

        // Cursor interaction — static, no animation
        const distFromMouse = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
        if (distFromMouse < interactionRadius) {
          const proximity = 1 - distFromMouse / interactionRadius;
          const easedProximity = proximity * proximity; // quadratic falloff

          // Subtle static brightening near cursor
          brightness += easedProximity * 0.35;
        }

        // Clamp brightness
        brightness = Math.max(0, Math.min(1, brightness));

        // Map brightness to ASCII character
        const charIndex = Math.floor(brightness * (ASCII_CHARS.length - 1));
        const char = ASCII_CHARS[charIndex];

        if (charIndex === 0) continue; // Skip spaces for performance

        // Color: stays close to base blue tint, slight warmth near cursor
        const cursorInfluence = distFromMouse < interactionRadius
          ? (1 - distFromMouse / interactionRadius) ** 2
          : 0;

        const r = Math.floor(30 + cursorInfluence * 60 + brightness * 40);
        const g = Math.floor(50 + cursorInfluence * 70 + brightness * 60);
        const b = Math.floor(120 + cursorInfluence * 50 + brightness * 80);
        const alpha = 0.3 + brightness * 0.7;

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillText(char, x, y);
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(ctx, window.innerWidth, window.innerHeight);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
