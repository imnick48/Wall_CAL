'use client';

import { useState } from 'react';
import { JournalEntry } from './types';
import { MOOD_EMOJIS } from './constants';

interface JournalModalProps {
  date: Date;
  existing?: JournalEntry;
  accent: string;
  accentGlow: string;
  textPrimary: string;
  textMuted: string;
  cardBg: string;
  cardBorder: string;
  onSave: (mood: string, note: string) => void;
  onClose: () => void;
}

export default function JournalModal({
  date, existing, accent, accentGlow, textPrimary, textMuted, cardBg, cardBorder, onSave, onClose,
}: JournalModalProps) {
  const [mood, setMood] = useState(existing?.mood || '');
  const [note, setNote] = useState(existing?.note || '');

  return (
    <div className="journal-overlay" onClick={onClose}>
      <div className="journal-modal" onClick={e => e.stopPropagation()}
        style={{ background: cardBg, borderColor: cardBorder, color: textPrimary }}>
        <div className="journal-title">Daily Journal</div>
        <div className="journal-date" style={{ color: textMuted }}>
          {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="journal-mood-label" style={{ color: textMuted }}>How are you feeling?</div>
        <div className="journal-mood-row">
          {MOOD_EMOJIS.map(em => (
            <button key={em} className={`journal-mood-btn ${mood === em ? 'active' : ''}`}
              onClick={() => setMood(em)}
              style={mood === em ? { borderColor: accent, background: `${accent}25`, boxShadow: `0 0 8px ${accentGlow}` } : {}}>
              {em}
            </button>
          ))}
        </div>
        <textarea className="journal-textarea" placeholder="Write a quick note…"
          value={note} onChange={e => setNote(e.target.value)}
          style={{ borderColor: cardBorder, color: textPrimary }} />
        <div className="journal-actions">
          <button className="journal-cancel" onClick={onClose} style={{ color: textMuted }}>Cancel</button>
          <button className="journal-save" onClick={() => onSave(mood, note)}
            style={{ background: accent, boxShadow: `0 2px 12px ${accentGlow}` }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
