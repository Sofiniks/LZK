'use client';
import HistoryDesktopSection from './HistoryDesktopSection';
import HistoryMobileSection from './HistoryMobileSection';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';

export default function HistorySection() {
  return (
    <>
      <DesktopContainer>
        <HistoryDesktopSection />
      </DesktopContainer>
      <TabletContainer>
        <HistoryMobileSection />
      </TabletContainer>
    </>
  );
}
