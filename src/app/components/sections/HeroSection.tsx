'use client';
import styled from 'styled-components';
import { device } from '@/theme/breakpoints';

const SectionWrapper = styled.section`
  height: 900px;
  margin-bottom: 80px;
  @media (min-width: 1441px) {
    height: 1080px;
  }
  @media (min-width: 1800px) {
    height: 1300px;
  }
  @media ${device.md} {
    height: 650px;
    margin-bottom: 40px;
  }
`;
const SectionBackground = styled.div<{ $url: string; $urlMobile: string }>`
  background: ${({ $url }) =>
    `linear-gradient(0deg, rgba(17,48,77,1) 0%, rgba(0,0,0,0) 20%), url(${$url})`};
  @media ${device.sm} {
    background: ${({ $urlMobile }) =>
      `linear-gradient(0deg, rgba(17,48,77,1) 0%, rgba(0,0,0,0) 20%), url(${$urlMobile})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;
const SectionContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media ${device.sm} {
    justify-content: flex-start;
    padding-top: 200px;
  }

  h1 {
    margin-bottom: 90px;
    font-size: 64px;
    text-transform: uppercase;
    position: absolute;
    bottom: 25%;

    @media ${device.md} {
      font-size: 48px;
      margin-bottom: 40px;
    }
    @media ${device.sm} {
      bottom: 37%;
      font-size: 36px;
      margin-bottom: 32px;
    }
  }
`;
export default function HeroSection({ title }: { title: string }) {
  return (
    <SectionWrapper>
      <SectionBackground
        $url="/images/heroFinalDesktop.png"
        $urlMobile="/images/heroFinalMobile.png"
      >
        <SectionContent>
          <h1>{title}</h1>
        </SectionContent>
      </SectionBackground>
    </SectionWrapper>
  );
}
