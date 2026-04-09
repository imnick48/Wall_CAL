'use client';

import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Theme, EventEntry } from './types';
import { EVENT_EMOJIS } from './constants';
import { isSameDay } from './utils';

interface EventsPanelProps {
  theme: Theme;
  events: EventEntry[];
  viewMonth: number;
  viewYear: number;
  onAddEvent: (event: EventEntry) => void;
  onRemoveEvent: (idx: number) => void;
}

export default function EventsPanel({ theme, events, viewMonth, viewYear, onAddEvent, onRemoveEvent }: EventsPanelProps) {
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', emoji: '📅', date: '' });

  const currentMonthEvents = events.filter(ev => {
    const d = new Date(ev.date);
    return d.getMonth() === viewMonth && d.getFullYear() === viewYear;
  });

  const handleAdd = () => {
    if (!newEvent.title || !newEvent.date) return;
    onAddEvent({ ...newEvent });
    setNewEvent({ title: '', emoji: '📅', date: '' });
    setShowForm(false);
  };

  return (
    <div className="wc-glass-panel wc-events-panel" style={{ borderColor: theme.cardBorder }}>
      <div className="wc-section-header">
        <span style={{ color: theme.textSecondary }}>Events</span>
        <button className="wc-icon-btn" onClick={() => setShowForm(!showForm)}
          style={{ background: theme.accent, boxShadow: `0 2px 8px ${theme.accentGlow}` }}>
          <Plus size={12} color="#fff" />
        </button>
      </div>

      {showForm && (
        <div className="wc-event-form" style={{ borderColor: theme.cardBorder }}>
          <div className="wc-emoji-picker">
            {EVENT_EMOJIS.map(em => (
              <button key={em} className={`wc-emoji-btn ${newEvent.emoji === em ? 'active' : ''}`}
                onClick={() => setNewEvent(p => ({ ...p, emoji: em }))}
                style={newEvent.emoji === em ? { background: theme.accent, boxShadow: `0 0 8px ${theme.accentGlow}` } : {}}>
                {em}
              </button>
            ))}
          </div>
          <input className="wc-event-input" placeholder="Event title"
            value={newEvent.title} onChange={e => setNewEvent(p => ({ ...p, title: e.target.value }))}
            style={{ color: theme.textPrimary, borderColor: theme.cardBorder }} />
          <input className="wc-event-input" type="date"
            value={newEvent.date} onChange={e => setNewEvent(p => ({ ...p, date: e.target.value }))}
            style={{ color: theme.textPrimary, borderColor: theme.cardBorder }} />
          <button className="wc-add-event-btn" onClick={handleAdd}
            style={{ background: theme.accent, boxShadow: `0 2px 12px ${theme.accentGlow}` }}>
            Add Event
          </button>
        </div>
      )}

      <div className="wc-event-list">
        {currentMonthEvents.length === 0 && (
          <div className="wc-empty-text" style={{ color: theme.textMuted }}>No events this month</div>
        )}
        {currentMonthEvents.map((ev, i) => (
          <div key={i} className="wc-event-item" style={{ borderColor: theme.cardBorder }}>
            <span className="wc-event-emoji">{ev.emoji}</span>
            <div className="wc-event-info">
              <span style={{ color: theme.textPrimary }}>{ev.title}</span>
              <span style={{ color: theme.textMuted, fontSize: '0.65rem' }}>
                {new Date(ev.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
            <button className="wc-delete-event" onClick={() => onRemoveEvent(events.indexOf(ev))}
              style={{ color: theme.textMuted }}>
              <Trash2 size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
