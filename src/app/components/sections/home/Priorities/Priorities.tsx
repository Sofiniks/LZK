'use client';
import PrioritiesDesktop from './PrioritiesDesktop';
import PrioritiesMobile from './PrioritiesMobile';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';

export default function HistorySection() {
  return (
    <>
      <DesktopContainer>
        <PrioritiesDesktop />
      </DesktopContainer>
      <TabletContainer>
        <PrioritiesMobile />
      </TabletContainer>
    </>
  );
}
