export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface JournalEntry {
  mood: string;
  note: string;
}

export interface EventEntry {
  title: string;
  emoji: string;
  date: string;
}

export interface Theme {
  id: string;
  label: string;
  gradient: string;
  glassFrom: string;
  glassTo: string;
  accent: string;
  accentGlow: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  cardBg: string;
  cardBorder: string;
  particleColors: string[];
  heroUrl: string;
  heroAlt: string;
  icon: React.ReactNode;
}
