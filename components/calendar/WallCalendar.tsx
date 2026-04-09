'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DateRange, JournalEntry, EventEntry } from './types';
import { THEMES, DAYS, MONTH_NAMES, HOLIDAYS } from './constants';
import { isSameDay, isBetween, daysBetween, formatDate, getCalendarDays, dateToKey } from './utils';
import { calendarStyles } from './CalendarStyles';
import Particles from './Particles';
import AnalogClock from './AnalogClock';
import HeroPanel from './HeroPanel';
import EventsPanel from './EventsPanel';
import JournalModal from './JournalModal';

export default function WallCalendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [themeIdx, setThemeIdx] = useState(1);
  const [customHero, setCustomHero] = useState<string | null>(null);
  const [selecting, setSelecting] = useState(false);
  const [flipDir, setFlipDir] = useState<'left' | 'right'>('right');
  const [flipKey, setFlipKey] = useState(0);
  const [journal, setJournal] = useState<Record<string, JournalEntry>>({});
  const [activeJournalDay, setActiveJournalDay] = useState<Date | null>(null);
  const [events, setEvents] = useState<EventEntry[]>([]);

  const theme = THEMES[themeIdx];
  const calDays = getCalendarDays(viewYear, viewMonth);

  const navigate = (dir: number) => {
    setFlipDir(dir > 0 ? 'right' : 'left');
    setFlipKey(k => k + 1);
    let m = viewMonth + dir;
    let y = viewYear;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setViewMonth(m);
    setViewYear(y);
  };

  const handleDayClick = useCallback((date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    if (!selecting || !range.start) {
      setRange({ start: date, end: null });
      setSelecting(true);
    } else {
      const start = range.start;
      if (date < start) {
        setRange({ start: date, end: start });
      } else {
        setRange({ start, end: date });
      }
      setSelecting(false);
    }
  }, [selecting, range.start]);

  const handleDayDoubleClick = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    setActiveJournalDay(date);
  };

  const clearRange = () => {
    setRange({ start: null, end: null });
    setSelecting(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCustomHero(URL.createObjectURL(file));
  };

  const saveJournal = (mood: string, note: string) => {
    if (!activeJournalDay) return;
    setJournal(prev => ({ ...prev, [dateToKey(activeJournalDay)]: { mood, note } }));
    setActiveJournalDay(null);
  };

  const getDayClasses = (date: Date, isCurrentMonth: boolean): string => {
    const classes: string[] = ['day-cell'];
    if (!isCurrentMonth) { classes.push('other-month'); return classes.join(' '); }
    const dow = (date.getDay() + 6) % 7;
    if (dow >= 5) classes.push('weekend-day');
    if (isSameDay(date, today)) classes.push('today');
    const { start, end } = range;
    const effectiveEnd = selecting && hoverDate ? hoverDate : end;
    if (start && isSameDay(date, start)) classes.push('range-start');
    if (effectiveEnd && isSameDay(date, effectiveEnd)) classes.push('range-end');
    if (start && effectiveEnd) {
      const lo = start < effectiveEnd ? start : effectiveEnd;
      const hi = start < effectiveEnd ? effectiveEnd : start;
      if (isBetween(date, lo, hi)) classes.push('in-range');
    }
    return classes.join(' ');
  };

  const getHolidayKey = (date: Date) => `${date.getMonth() + 1}-${date.getDate()}`;

  return (
    <div className="wc-root">
      <Particles colors={theme.particleColors} />

      <div className="wc-main-grid">
        <div className="wc-left-col">
          <HeroPanel
            theme={theme}
            viewMonth={viewMonth}
            viewYear={viewYear}
            customHero={customHero}
            onImageUpload={handleImageUpload}
          />

          <div className="wc-glass-panel wc-clock-panel" style={{ borderColor: theme.cardBorder }}>
            <AnalogClock accent={theme.accent} textPrimary={theme.textPrimary} />
            <div className="wc-clock-label" style={{ color: theme.textMuted }}>
              {today.toLocaleDateString('en-US', { weekday: 'long' })}
            </div>
          </div>

          <EventsPanel
            theme={theme}
            events={events}
            viewMonth={viewMonth}
            viewYear={viewYear}
            onAddEvent={ev => setEvents(prev => [...prev, ev])}
            onRemoveEvent={idx => setEvents(prev => prev.filter((_, i) => i !== idx))}
          />
        </div>

        <div className="wc-right-col">
          <div className="wc-glass-panel wc-calendar-panel" style={{ borderColor: theme.cardBorder }}>
            <div className="wc-nav-row">
              <button className="wc-nav-btn" onClick={() => navigate(-1)}
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}>
                <ChevronLeft size={18} />
              </button>
              <div className="wc-nav-title" key={flipKey}
                style={{ color: theme.textPrimary, animationName: flipDir === 'right' ? 'slideInRight' : 'slideInLeft' }}>
                {MONTH_NAMES[viewMonth]} <span style={{ fontWeight: 300, opacity: 0.6 }}>{viewYear}</span>
              </div>
              <button className="wc-nav-btn" onClick={() => navigate(1)}
                style={{ borderColor: theme.cardBorder, color: theme.textPrimary }}>
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="wc-day-headers">
              {DAYS.map(d => (
                <div key={d} className="wc-day-header"
                  style={{ color: d === 'SAT' || d === 'SUN' ? theme.accent : theme.textMuted }}>
                  {d}
                </div>
              ))}
            </div>

            <div className="wc-days-grid" key={flipKey}
              style={{ animationName: flipDir === 'right' ? 'slideInRight' : 'slideInLeft' }}>
              {calDays.map(({ date, isCurrentMonth }, idx) => {
                const holKey = getHolidayKey(date);
                const hasHoliday = isCurrentMonth && HOLIDAYS[holKey];
                const jEntry = journal[dateToKey(date)];
                const hasEvent = isCurrentMonth && events.some(ev => {
                  const d = new Date(ev.date + 'T00:00:00');
                  return isSameDay(d, date);
                });
                const cls = getDayClasses(date, isCurrentMonth);
                const isRangeEdge = cls.includes('range-start') || cls.includes('range-end');
                const isInRange = cls.includes('in-range');
                const isWeekend = isCurrentMonth && (date.getDay() === 0 || date.getDay() === 6);
                const isToday = isCurrentMonth && isSameDay(date, today);

                let cellStyle: React.CSSProperties = {};
                if (isRangeEdge) {
                  cellStyle = { background: theme.accent, color: '#fff', boxShadow: `0 2px 12px ${theme.accentGlow}` };
                } else if (isInRange) {
                  cellStyle = { background: `${theme.accent}15`, color: theme.textPrimary };
                } else if (!isCurrentMonth) {
                  cellStyle = { color: `${theme.textMuted}40` };
                } else if (isToday) {
                  cellStyle = { color: theme.accent, fontWeight: 800 };
                } else if (isWeekend) {
                  cellStyle = { color: theme.accent };
                } else {
                  cellStyle = { color: theme.textPrimary };
                }

                return (
                  <div key={idx} className={cls} style={cellStyle}
                    onClick={() => handleDayClick(date, isCurrentMonth)}
                    onDoubleClick={() => handleDayDoubleClick(date, isCurrentMonth)}
                    onMouseEnter={() => selecting && setHoverDate(date)}
                    onMouseLeave={() => setHoverDate(null)}
                    title={hasHoliday ? HOLIDAYS[holKey] : undefined}>
                    <span className="wc-day-num">{date.getDate()}</span>
                    {isToday && <span className="wc-today-ring" style={{ borderColor: theme.accent, boxShadow: `0 0 8px ${theme.accentGlow}` }} />}
                    {hasHoliday && <span className="wc-holiday-dot" style={{ background: '#ff5252' }} />}
                    {hasEvent && <span className="wc-event-indicator" style={{ background: theme.accent }} />}
                    {jEntry && <span className="wc-mood-badge">{jEntry.mood}</span>}
                    <span className="wc-ripple" />
                  </div>
                );
              })}
            </div>

            {range.start && (
              <div className="wc-range-info" style={{ background: `${theme.accent}15`, borderColor: `${theme.accent}30` }}>
                <div className="wc-range-label" style={{ color: theme.accent }}>
                  {range.end ? 'Selected Range' : 'Pick end date…'}
                </div>
                <div className="wc-range-dates" style={{ color: theme.textPrimary }}>
                  {formatDate(range.start)}{range.end ? ` → ${formatDate(range.end)}` : ''}
                </div>
                {range.end && (
                  <div className="wc-range-count" style={{ color: theme.textMuted }}>
                    {daysBetween(range.start, range.end)} night{daysBetween(range.start, range.end) !== 1 ? 's' : ''}
                  </div>
                )}
                <button className="wc-clear-btn" onClick={clearRange} style={{ color: theme.accent }}>
                  <X size={12} /> Clear
                </button>
              </div>
            )}

            <div className="wc-legend" style={{ color: theme.textMuted }}>
              <div className="wc-legend-item">
                <span className="wc-legend-dot" style={{ background: theme.accent }} />
                Selected
              </div>
              <div className="wc-legend-item">
                <span className="wc-legend-dot" style={{ background: '#ff5252' }} />
                Holiday
              </div>
              <div className="wc-legend-item">
                <span className="wc-legend-ring" style={{ borderColor: theme.accent }} />
                Today
              </div>
              <div className="wc-legend-item" style={{ opacity: 0.7 }}>
                Double-click → Journal
              </div>
            </div>
          </div>

          <div className="wc-theme-bar">
            {THEMES.map((t, i) => (
              <button key={t.id} className={`wc-theme-pill ${i === themeIdx ? 'active' : ''}`}
                onClick={() => setThemeIdx(i)}
                style={i === themeIdx
                  ? { background: t.accent, color: '#fff', boxShadow: `0 2px 12px ${t.accentGlow}` }
                  : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }
                }>
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeJournalDay && (
        <JournalModal
          date={activeJournalDay}
          existing={journal[dateToKey(activeJournalDay)]}
          accent={theme.accent}
          accentGlow={theme.accentGlow}
          textPrimary={theme.textPrimary}
          textMuted={theme.textMuted}
          cardBg={theme.cardBg}
          cardBorder={theme.cardBorder}
          onSave={saveJournal}
          onClose={() => setActiveJournalDay(null)}
        />
      )}

      <style>{calendarStyles}</style>
    </div>
  );
}
