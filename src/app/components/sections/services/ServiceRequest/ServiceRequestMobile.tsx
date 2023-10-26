'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../../layouts/ContainerLayout';
import TransparentLink from '../../../links/links';
import { device } from '@/theme/breakpoints';

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column;
`;

const ServiceBlock = styled.div`
  padding: 20px;
  z-index: 10;
  margin-bottom: 30px;
`;

const HeadingWrapper = styled.div`
  padding: 40px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 30px;
  h2 {
    text-align: center;
    font-size: 48px;
    text-transform: uppercase;
    @media ${device.sm} {
      font-size: 28px;
    }
  }
`;

const ServiceDarkBlueBlock = styled(ServiceBlock)`
  background-color: #0b1f31;
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
const ServiceLightBlueBlock = styled(ServiceBlock)`
  background-color: #1b3349;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media ${device.sm} {
    padding: 20px;
  }

  p {
    text-transform: uppercase;
    margin-bottom: 30px;
    max-width: 70%;
    text-align: center;

    @media ${device.sm} {
      max-width: 100%;
    }
  }
  button {
    background-color: transparent;
    width: 100%;
    max-width: 300px;
    padding: 18px 0;
    border: 2px solid #fff;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 60px;
  img {
    width: 650px;
    height: auto;
    object-fit: contain;

    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;

export default function ServiceRequestMobile() {
  return (
    <>
      <HeadingWrapper>
        <h2>Shipbuilding facilities</h2>
      </HeadingWrapper>
      <StyledContainer>
        <ServiceDarkBlueBlock>
          <h3>Comprehensive Hull Building Services</h3>
          <p>
            The company is able to build all kind of hulls from small fishing
            trawlers up to cargo vessels using 2 building workshops for
            pre-assembling of sections and blocks up to 50 tons.
          </p>
          <p>
            The final assembly including zinc metalizing, painting and
            outfitting is performed in the dry-dock. The company builds steel
            hulls including hulls with partial out-fitting as well as delivers
            turnkey vessels for our Scandinavian and European customers.
          </p>
        </ServiceDarkBlueBlock>
        <ServiceLightBlueBlock>
          <p>
            If you require any further information we shall be happy to let you
            have this, on request.
          </p>
          <TransparentLink
            text="Contact us"
            href="/contacts?contactForm=true"
          />
        </ServiceLightBlueBlock>
      </StyledContainer>
      <ImageWrapper>
        <Image
          src="/images/servicesPage.jpg"
          width={600}
          height={134}
          alt="services"
        />
      </ImageWrapper>
    </>
  );
}
