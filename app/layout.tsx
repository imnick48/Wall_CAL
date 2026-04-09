import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumina Calendar — Interactive Wall Calendar',
  description: 'A stunning glassmorphic wall calendar with mood journal, event planner, live clock, and beautiful aurora themes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
