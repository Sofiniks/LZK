import type { Metadata } from 'next';
import HeroSection from '../components/sections/HeroSection';
import HistorySection from '../components/sections/history/HistorySection';

export const metadata: Metadata = {
  title: 'Services',
  description: 'LZK',
};

export default function HistoryPage() {
  return (
    <main>
      <HeroSection title="History" />
      <HistorySection />
    </main>
  );
}
