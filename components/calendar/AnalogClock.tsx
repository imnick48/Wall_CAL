'use client';

import { useState, useEffect } from 'react';

interface AnalogClockProps {
  accent: string;
  textPrimary: string;
}

export default function AnalogClock({ accent, textPrimary }: AnalogClockProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return <div className="analog-clock" />;

  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hr = time.getHours() % 12;
  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = hr * 30 + min * 0.5;

  return (
    <div className="analog-clock">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="46" fill="none" stroke={accent} strokeWidth="1" opacity="0.3" />
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 50 + 40 * Math.cos(angle);
          const y1 = 50 + 40 * Math.sin(angle);
          const x2 = 50 + (i % 3 === 0 ? 35 : 37) * Math.cos(angle);
          const y2 = 50 + (i % 3 === 0 ? 35 : 37) * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={textPrimary} strokeWidth={i % 3 === 0 ? 2 : 1} opacity={0.5} strokeLinecap="round" />
          );
        })}
        <line x1="50" y1="50" x2="50" y2="25"
          stroke={textPrimary} strokeWidth="2.5" strokeLinecap="round"
          transform={`rotate(${hrDeg} 50 50)`} />
        <line x1="50" y1="50" x2="50" y2="18"
          stroke={textPrimary} strokeWidth="1.8" strokeLinecap="round"
          transform={`rotate(${minDeg} 50 50)`} />
        <line x1="50" y1="55" x2="50" y2="15"
          stroke={accent} strokeWidth="0.8" strokeLinecap="round"
          transform={`rotate(${secDeg} 50 50)`} />
        <circle cx="50" cy="50" r="3" fill={accent} />
        <circle cx="50" cy="50" r="1.5" fill={textPrimary} />
      </svg>
    </div>
  );
}
