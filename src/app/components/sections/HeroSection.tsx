'use client';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  min-height: 100vh;
  height: 100vh;
  margin-bottom: 80px;
`;
const SectionBackground = styled.div<{ $url: string }>`
  background: ${({ $url }) =>
    `linear-gradient(0deg, rgba(17,48,77,1) 0%, rgba(0,0,0,0) 20%), url(${$url})`};
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

  h1 {
    margin-bottom: 90px;
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
  }
`;
export default function HeroSection() {
  return (
    <SectionWrapper>
      <SectionBackground $url="/images/hero.png">
        <SectionContent>
          <h1>LZK - TITLE</h1>
          <button>CTA</button>
        </SectionContent>
      </SectionBackground>
    </SectionWrapper>
  );
}
