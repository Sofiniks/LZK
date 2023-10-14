'use client';
import styled from 'styled-components';
import { device } from '@/theme/breakpoints';

const SectionWrapper = styled.section`
  height: 1080px;
  margin-bottom: 80px;
  @media ${device.sm} {
    height: 100vh;
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
  @media ${device.sm} {
    justify-content: flex-start;
    padding-top: 200px;
  }

  h1 {
    margin-bottom: 90px;
    font-size: 64px;
    @media ${device.md} {
      font-size: 48px;
      margin-bottom: 40px;
    }
    @media ${device.sm} {
      font-size: 36px;
      margin-bottom: 32px;
    }
  }
  button {
    background-color: transparent;
    width: 447px;
    padding: 29px 0 30px 0;
    border: 2px solid #fff;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    @media ${device.md} {
      width: 290px;
      padding: 18px 0;
      font-size: 20px;
    }
  }
`;
export default function HeroSection() {
  return (
    <SectionWrapper>
      <SectionBackground $url="/images/hero.png" $urlMobile="/images/mobile_hero.png">
        <SectionContent>
          <h1>LZK - TITLE</h1>
          <button>CTA</button>
        </SectionContent>
      </SectionBackground>
    </SectionWrapper>
  );
}
