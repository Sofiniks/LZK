'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';
import TransparentLink from '../../../links/links';

const SectionWrapper = styled.div`
  margin-bottom: 60px;
  position: relative;
  min-height: 400px;
`;

const HeadingWrapper = styled.div`
  padding: 50px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 70px;
  h2 {
    text-align: center;
    font-size: 48px;
    text-transform: uppercase;
  }
`;

const DiagonalDividerBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    80deg,
    #0b1f31,
    #0b1f31 50%,
    #314a61 50%,
    #314a61
  );
  /* background: linear-gradient(
    -80deg,
    #314a61,
    #314a61 50%,
    #0b1f31 50%,
    #0b1f31
  ); */
`;

const StyledContainer = styled(ContainerLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

const ServiceBlock = styled.div`
  padding: 60px 55px;
  z-index: 10;
`;

const ServiceDarkBlueBlock = styled(ServiceBlock)`
  padding-left: 100px;
  p {
    text-transform: uppercase;
    margin-bottom: 30px;
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

    @media ${device.lg} {
      width: 300px;
      padding: 20px;
    }
  }
`;
const ServiceLightBlueBlock = styled(ServiceBlock)`
  padding-left: 0;
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

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 60px;
  img {
    width: 700px;
    height: auto;
    object-fit: contain;
  }
`;

export default function ServicesRequestDesktop() {
  return (
    <>
      <HeadingWrapper>
        <h2>Shipbuilding facilities</h2>
      </HeadingWrapper>
      <SectionWrapper>
        <DiagonalDividerBackground />
        <StyledContainer>
          <ServiceLightBlueBlock>
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
          </ServiceLightBlueBlock>
          <ServiceDarkBlueBlock>
            <p>
              If you require any further information we shall be happy to let
              you have this, on request.
            </p>
            <TransparentLink
              href="/contacts?contactForm=true"
              text="Contact us"
            />
          </ServiceDarkBlueBlock>
        </StyledContainer>
      </SectionWrapper>
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
