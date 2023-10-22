'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';

const StyledSection = styled.section`
  height: 600px;
  margin-bottom: 60px;
  @media ${device.md} {
    height: 900px;
  }
  @media ${device.sm} {
    height: 700px;
  }
`;
const SectionBackground = styled.div<{ $url: string }>`
  background: ${({ $url }) =>
    `linear-gradient(0deg, rgba(17,48,77, 1) 0%, rgba(0,0,0,0) 50%, rgba(17,48,77,1) 100%), url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  @media ${device.md} {
    height: 900px;
  }
  @media ${device.sm} {
    height: 700px;
  }
`;
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  justify-items: center;
  padding: 80px 0;
  @media ${device.lg} {
    padding: 60px 0;
    gap: 30px;
  }
  @media ${device.md} {
    grid-template-columns: 1fr;
  }
  @media ${device.sm} {
    gap: 20px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }
  @media ${device.lg} {
    img {
      width: 400px;
      height: 400px;
    }

    @media ${device.sm} {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;
const StyledHeading = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  white-space: nowrap;
  z-index: 15;
  @media ${device.sm} {
    font-size: 30px;
  }
  &::after {
    content: '';
    background-color: #fff;
    width: 50%;
    height: 1px;
    display: block;
    margin-top: 5px;
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export default function ServicesSection() {
  return (
    <StyledSection>
      <SectionBackground $url="/images/sea.png">
        <ContainerLayout>
          <SectionContent>
            <Link href="/services">
              <ImageWrapper>
                <Image
                  src="/images/services1.jpg"
                  height={500}
                  width={500}
                  alt="Our services"
                />

                <StyledHeading>Services</StyledHeading>
              </ImageWrapper>
            </Link>
            <Link href="/contacts">
              <ImageWrapper>
                <Image
                  src="/images/services2.jpg"
                  height={500}
                  width={500}
                  alt="Our services"
                />

                <StyledHeading>Contacts</StyledHeading>
              </ImageWrapper>
            </Link>
          </SectionContent>
        </ContainerLayout>
      </SectionBackground>
    </StyledSection>
  );
}
