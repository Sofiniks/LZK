'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import { DesktopContainer, device, TabletContainer } from '@/theme/breakpoints';

const StyledSection = styled.section`
  margin-bottom: 30px;
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

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: center;
`;

export default function LocationSection() {
  return (
    <StyledSection>
      <StyledContainer>
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
