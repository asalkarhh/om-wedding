import React, { useEffect, useRef } from 'react';

/**
 * Ambient, delicate floating Akshata & Marigold petals canvas.
 * Adds an authentic, celebratory Maharashtrian wedding atmosphere.
 * Respects prefers-reduced-motion and automatically pauses when hidden.
 */
export default function PetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palette inspired by marigold (झेंडू) and gold (स्वर्ण अक्षता)
    const petalColors = [
      'rgba(235, 170, 40, 0.28)',  // Soft warm Marigold
      'rgba(215, 160, 45, 0.25)',  // Subtle Antique Gold
      'rgba(228, 140, 25, 0.22)',  // Muted Turmeric
      'rgba(240, 195, 75, 0.24)',  // Gentle Golden Amber
    ];

    // Create 16 floating particles
    const particleCount = Math.min(18, Math.floor(width / 70));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 5 + Math.random() * 7,
      speedY: 0.4 + Math.random() * 0.7,
      speedX: -0.2 + Math.random() * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      isAkshata: Math.random() > 0.65, // Some are tiny golden rice grains
      swingFactor: 0.5 + Math.random() * 1.5,
      oscillation: Math.random() * Math.PI * 2,
    }));

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.oscillation += 0.02 * p.swingFactor;
          p.x += p.speedX + Math.sin(p.oscillation) * 0.5;
          p.y += p.speedY;
          p.rotation += p.rotationSpeed;

          // Wrap around edges
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          if (p.isAkshata) {
            // Tiny golden grain (ellipse)
            ctx.fillStyle = 'rgba(218, 165, 32, 0.5)';
            ctx.beginPath();
            ctx.ellipse(0, 0, 2.5, 5, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Soft marigold petal curve
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(p.size, -p.size * 0.5, p.size * 1.2, p.size * 0.8, 0, p.size * 1.4);
            ctx.bezierCurveTo(-p.size * 1.2, p.size * 0.8, -p.size, -p.size * 0.5, 0, 0);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="petals-canvas" aria-hidden="true" />;
}
