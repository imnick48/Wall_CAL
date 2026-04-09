import React from 'react';
import { Sparkles, Flame, Waves, TreePine } from 'lucide-react';
import { Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: 'sakura',
    label: 'Sakura',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #e1bee7 100%)',
    glassFrom: 'rgba(252,228,236,0.25)',
    glassTo: 'rgba(225,190,231,0.15)',
    accent: '#e91e63',
    accentGlow: 'rgba(233,30,99,0.4)',
    textPrimary: '#4a0e2b',
    textSecondary: '#6d2150',
    textMuted: '#9c6488',
    cardBg: 'rgba(255,255,255,0.35)',
    cardBorder: 'rgba(233,30,99,0.15)',
    particleColors: ['#f48fb1', '#f8bbd0', '#e1bee7', '#ce93d8', '#ffffff'],
    heroUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=900&q=80',
    heroAlt: 'Cherry blossoms in spring',
    icon: <TreePine size={12} />,
  },
  {
    id: 'aurora',
    label: 'Aurora',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 30%, #162447 60%, #1f4068 100%)',
    glassFrom: 'rgba(22,36,71,0.4)',
    glassTo: 'rgba(31,64,104,0.25)',
    accent: '#00e5ff',
    accentGlow: 'rgba(0,229,255,0.4)',
    textPrimary: '#e0f7fa',
    textSecondary: '#80deea',
    textMuted: '#4dd0e1',
    cardBg: 'rgba(13,27,42,0.6)',
    cardBorder: 'rgba(0,229,255,0.15)',
    particleColors: ['#00e5ff', '#76ff03', '#e040fb', '#18ffff', '#69f0ae'],
    heroUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80',
    heroAlt: 'Northern lights aurora borealis',
    icon: <Sparkles size={12} />,
  },
  {
    id: 'ocean',
    label: 'Deep Ocean',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2137 30%, #0f3460 60%, #16213e 100%)',
    glassFrom: 'rgba(15,52,96,0.35)',
    glassTo: 'rgba(22,33,62,0.2)',
    accent: '#64ffda',
    accentGlow: 'rgba(100,255,218,0.35)',
    textPrimary: '#e0f2f1',
    textSecondary: '#80cbc4',
    textMuted: '#4db6ac',
    cardBg: 'rgba(10,22,40,0.55)',
    cardBorder: 'rgba(100,255,218,0.12)',
    particleColors: ['#64ffda', '#80deea', '#4fc3f7', '#81d4fa', '#b2ebf2'],
    heroUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900&q=80',
    heroAlt: 'Deep ocean waves',
    icon: <Waves size={12} />,
  },
  {
    id: 'ember',
    label: 'Ember',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1400 30%, #4a1c00 60%, #331100 100%)',
    glassFrom: 'rgba(74,28,0,0.35)',
    glassTo: 'rgba(51,17,0,0.2)',
    accent: '#ff6d00',
    accentGlow: 'rgba(255,109,0,0.4)',
    textPrimary: '#fff3e0',
    textSecondary: '#ffcc80',
    textMuted: '#ffb74d',
    cardBg: 'rgba(26,10,0,0.55)',
    cardBorder: 'rgba(255,109,0,0.15)',
    particleColors: ['#ff6d00', '#ff9100', '#ffc107', '#ff5722', '#ffab40'],
    heroUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=900&q=80',
    heroAlt: 'Warm ember glow sunset',
    icon: <Flame size={12} />,
  },
];

export const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const HOLIDAYS: Record<string, string> = {
  '1-1': "New Year's Day",
  '1-26': 'Republic Day',
  '3-17': "St. Patrick's Day",
  '4-18': 'Good Friday',
  '8-15': 'Independence Day',
  '10-2': 'Gandhi Jayanti',
  '10-31': 'Halloween',
  '11-1': "All Saints' Day",
  '12-25': 'Christmas',
  '12-31': "New Year's Eve",
};

export const MOOD_EMOJIS = ['😊', '🔥', '💪', '🌈', '🎯', '✨', '🌙', '❤️', '🎨', '📚'];
export const EVENT_EMOJIS = ['🎂', '🎉', '💼', '✈️', '🏋️', '📅', '🎵', '💊', '🛒', '📞'];
