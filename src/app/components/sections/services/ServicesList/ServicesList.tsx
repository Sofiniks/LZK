'use client';
import ServicesListDesktop from './ServicesListDesktop';
import ServicesListMobile from './ServicesListMobile';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';

export default function HistorySection() {
  return (
    <>
      <DesktopContainer>
        <ServicesListDesktop />
      </DesktopContainer>
      <TabletContainer>
        <ServicesListMobile />
      </TabletContainer>
    </>
  );
}
