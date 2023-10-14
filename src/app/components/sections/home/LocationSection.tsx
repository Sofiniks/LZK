'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import { DesktopContainer, MobileContainer, device, TabletContainer } from '@/theme/breakpoints';

const StyledSection = styled.section`
  margin-bottom: 60px;
  height: 700px;
  @media ${device.md} {
    height: unset;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  height: auto;
  @media ${device.lg} {
    width: 900px;
  }
  @media ${device.md} {
    width: 600px;
  }
  @media ${device.sm} {
    width: 300px;
  }
`;

// const StyledBackground = styled.div<{ $url: string; $urlMobile: string }>`
//   background: ${({ $url }) => `url(${$url})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   height: 100%;
//   img {
//     object-fit: cover;
//   }
//   @media ${device.sm} {
//     background: ${({ $urlMobile }) => `url(${$urlMobile})`};
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     width: 300px;
//   }
// `;

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: center;
`;

export default function LocationSection() {
  return (
    <StyledSection>
      <StyledContainer>
        {/* <StyledBackground $url="/images/mapBig.png" $urlMobile="/images/map.png"/> */}
        <DesktopContainer>
          <StyledImage
            src="/images/mapBig.png"
            alt="map"
            width={1200}
            height={700}
          />
        </DesktopContainer>
        <TabletContainer>
          <StyledImage
            src="/images/map.png"
            alt="map"
            width={600}
            height={500}
          />
        </TabletContainer>
      </StyledContainer>
    </StyledSection>
  );
}
