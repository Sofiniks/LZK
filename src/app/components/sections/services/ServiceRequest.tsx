'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import { DesktopContainer, TabletContainer, device } from '@/theme/breakpoints';
import ServiceRequestMobile from './ServiceRequestMobile';
import TransparentLink from '../../links/links';

const SectionWrapper = styled.div`
  margin-bottom: 110px;
  position: relative;
  min-height: 400px;
`;

const HeadingWrapper = styled.div`
  padding: 50px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
    padding: 40px 0;
  }
  h2 {
    text-align: center;
    font-size: 48px;
    text-transform: uppercase;
    @media ${device.sm} {
      font-size: 32px;
    }
  }
`;

const StyledContainer = styled(ContainerLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

const SectionDark = styled.div`
  background-color: #0b1f31;
  width: 50%; 
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  &:before {
    content: '';
    background-color: transparent;
    height: 0;
    width: 0;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    border-top: 400px solid transparent;
    border-left: 100px solid #314a61;
    @media ${device.lg} {
      display: none;
    }
  }
`;

const SectionLight = styled.div`
  background-color: #314a61;
  width: 50%; 
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
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

export default function ServicesRequest() {
  return (
    <>
      <HeadingWrapper>
        <h2>Shipbuilding facilities</h2>
      </HeadingWrapper>
      <DesktopContainer>
        <SectionWrapper>
          <SectionLight />
          <SectionDark />
          <StyledContainer>
            <ServiceLightBlueBlock>
              <h3>Title</h3>
              <p>
                The company is able to build all kind of hulls from small
                fishing trawlers up to cargo vessels using 2 building workshops
                for pre-assembling of sections and blocks up to 50 tons.
              </p>
              <p>
                The final assembly including zinc metalizing, painting and
                outfitting is performed in the dry-dock. The company builds
                steel hulls including hulls with partial out-fitting as well as
                delivers turnkey vessels for our Scandinavian and European
                customers.
              </p>
            </ServiceLightBlueBlock>
            <ServiceDarkBlueBlock>
              <p>
                If you require any further information we shall be happy to let
                you have this, on request.
              </p>
              <TransparentLink href="/contacts?contactForm=true" text="CTA" />
            </ServiceDarkBlueBlock>
          </StyledContainer>
        </SectionWrapper>
      </DesktopContainer>
      <TabletContainer>
        <ServiceRequestMobile />
      </TabletContainer>
    </>
  );
}
