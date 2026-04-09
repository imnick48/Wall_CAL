import { MONTH_NAMES } from './constants';

export function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

export function isBetween(date: Date, start: Date, end: Date) {
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

export function daysBetween(a: Date, b: Date) {
  return Math.round(Math.abs((b.getTime() - a.getTime()) / 86400000));
}

export function formatDate(d: Date) {
  return `${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
}

export function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startDow = (first.getDay() + 6) % 7;
  const days: { date: Date; isCurrentMonth: boolean }[] = [];

  for (let i = startDow - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), isCurrentMonth: false });
  }
  for (let d = 1; d <= last.getDate(); d++) {
    days.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }
  const trailing = 7 - (days.length % 7 === 0 ? 7 : days.length % 7);
  if (trailing < 7) {
    for (let d = 1; d <= trailing; d++) {
      days.push({ date: new Date(year, month + 1, d), isCurrentMonth: false });
    }
  }
  return days;
}

export function dateToKey(d: Date) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
