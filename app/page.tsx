import WallCalendar from '@/components/WallCalendar';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 30%, #162447 60%, #1f4068 100%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <WallCalendar />
    </main>
  );
}
