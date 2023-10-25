'use client';
import ServicesRequestDesktop from './ServiceRequestDesktop';
import ServiceRequestMobile from './ServiceRequestMobile';
import { TabletContainer, DesktopContainer } from '@/theme/breakpoints';

const ServicesRequest = () => {
  return (
    <>
      <DesktopContainer>
        <ServicesRequestDesktop />
      </DesktopContainer>
      <TabletContainer>
        <ServiceRequestMobile />
      </TabletContainer>
    </>
  );
};

export default ServicesRequest;
