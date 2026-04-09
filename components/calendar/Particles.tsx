'use client';

import { useState, useEffect, useMemo } from 'react';

interface ParticlesProps {
  colors: string[];
}

export default function Particles({ colors }: ParticlesProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [colors, mounted]);

  return (
    <div className="particles-container">
      {particles.map(p => (
        <div key={p.id} className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }} />
      ))}
    </div>
  );
}
