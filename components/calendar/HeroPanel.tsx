'use client';

import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { Theme } from './types';
import { MONTH_NAMES } from './constants';

interface HeroPanelProps {
  theme: Theme;
  viewMonth: number;
  viewYear: number;
  customHero: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function HeroPanel({ theme, viewMonth, viewYear, customHero, onImageUpload }: HeroPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const heroSrc = customHero || theme.heroUrl;

  return (
    <div className="wc-glass-panel wc-hero-panel">
      <div className="wc-hero-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroSrc} alt={theme.heroAlt} className="wc-hero-img" crossOrigin="anonymous" />
        <div className="wc-hero-gradient" style={{
          background: `linear-gradient(180deg, transparent 30%, ${theme.gradient.includes('#0') ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)'} 100%)`
        }} />
        <div className="wc-hero-month-badge" style={{ background: theme.accent, boxShadow: `0 4px 20px ${theme.accentGlow}` }}>
          <span className="wc-hero-year">{viewYear}</span>
          <span className="wc-hero-month">{MONTH_NAMES[viewMonth]}</span>
        </div>
        <button className="wc-upload-btn" onClick={() => fileInputRef.current?.click()}
          style={{ borderColor: `${theme.accent}60`, color: theme.accent }}>
          <Camera size={13} />
          {customHero ? 'Change' : 'Upload'}
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onImageUpload} />
      </div>
    </div>
  );
}
