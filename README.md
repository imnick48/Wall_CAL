# Lumina Calendar

An interactive, glassmorphic wall calendar built with Next.js 16, React 19, and TypeScript.

## Why this implementation

This project is structured around a single interactive client component with modular UI panels so iteration stays fast while keeping responsibilities separated.

### Design choices

- **Next.js App Router + TypeScript**
  - Uses `app/` routing with typed components for a clean baseline and good DX.
- **Client-side interactivity**
  - The main calendar (`components/calendar/WallCalendar.tsx`) is a client component because it manages rich UI state (date range selection, theme switching, events, journal modal, hover interactions, month navigation).
- **Component decomposition**
  - Calendar UI is split into focused modules:
    - `HeroPanel` for hero image and month badge
    - `AnalogClock` for live clock display
    - `EventsPanel` for month-scoped event management
    - `JournalModal` for daily mood + note capture
    - `Particles` for animated background visuals
- **Data model clarity**
  - Types are centralized in `components/calendar/types.ts` (`DateRange`, `EventEntry`, `JournalEntry`, `Theme`) to keep state contracts explicit.
- **Pure utility functions**
  - Date logic lives in `components/calendar/utils.ts` (calendar grid generation, range math, formatting), which keeps rendering code simpler.
- **Theme system**
  - Multiple predefined themes are declared in `components/calendar/constants.tsx` with gradients, accent colors, and hero imagery for quick visual customization.
- **CSS-driven visuals**
  - Styling is primarily custom CSS (`app/globals.css` + calendar styles) to support the glassmorphic and animated look without introducing an additional UI framework.
- **In-memory state (intentional)**
  - Events/journal/theme state currently lives in React state only, which keeps the prototype lightweight and avoids backend/storage complexity.

## Features

- Monthly wall calendar with previous/next navigation
- Date-range selection (with live preview while hovering)
- Holiday markers and “today” highlighting
- Event creation/removal with emoji tags
- Daily journal modal (double-click a day)
- Theme switcher (Sakura, Aurora, Deep Ocean, Ember)
- Hero image upload override
- Ambient particle background + analog clock

## Tech stack

- **Framework:** Next.js `16.2.2`
- **UI:** React `19.2.4`
- **Language:** TypeScript
- **Icons:** `lucide-react`
- **Linting:** ESLint 9 + `eslint-config-next`

## Run locally

### 1) Prerequisites

- Node.js **20+** recommended
- npm (comes with Node)

### 2) Install dependencies

```bash
npm install