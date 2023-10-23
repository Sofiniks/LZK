'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import PrioritiesMobile from './PrioritiesMobile';
import { DesktopContainer, TabletContainer, device } from '@/theme/breakpoints';

const SectionWrapper = styled.div`
  margin-bottom: 110px;
  position: relative;
  min-height: 380px;
`;

const StyledHeading = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  h3 {
    text-align: center;
    max-width: 70%;
    font-size: 24px;
    @media ${device.md} {
      font-size: 20px;
    }
    @media ${device.sm} {
        max-width: 100%;
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
  left: 0;
  z-index: -1;
`;

const SectionLight = styled.div`
  background-color: #314a61;
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
    border-top: 380px solid transparent;
    border-right: 100px solid #314a61;
    transform: translate(-100%, 0);
  }
  @media ${device.lg} {
    &:before {
        display: none;
    }
  }
`;

const PriorityList = styled.ul`
  padding: 40px 55px;
  z-index: 10;
`;

const PriorityItem = styled.li`
  margin-bottom: 25px;
  list-style-type: circle;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const PriorityListLightBlue = styled(PriorityList)`
  padding-left: 100px;
  p {
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
const PriorityListDarkBlue = styled.div`
  padding: 40px 55px;
  z-index: 10;
  padding-left: 0;
`;

export default function Priorities() {
  return (
    <>
      <ContainerLayout>
        <StyledHeading>
          <h3>
            We are a reliable partner for shipowners in the fields of ship
            repair, shipbuilding, and metal structure fabrication. Our values:
          </h3>
        </StyledHeading>
      </ContainerLayout>

      <DesktopContainer>
        <SectionWrapper>
          <SectionDark />
          <SectionLight />
          <StyledContainer>
            <PriorityListDarkBlue>
              <PriorityItem>Our employees are our greatest asset</PriorityItem>
              <PriorityItem>
                Compliance with international and national legislation and other
                mandatory requirements
              </PriorityItem>
              <PriorityItem>
                Environmentally responsible and resource-efficient practices
              </PriorityItem>
              <PriorityItem>
                Striving to reduce environmental pollution
              </PriorityItem>
              <PriorityItem>
                Embracing new technologies and developing enterprise management
                systems
              </PriorityItem>
            </PriorityListDarkBlue>
            <PriorityListLightBlue>
              <p>
                Our development goal is to become a leading company in the field
                of ship repair, shipbuilding, and metal structure fabrication on
                the eastern coast of the Baltic Sea.
              </p>
              <p>
                Our skilled staff has good experience in repair of different
                type of vessels such as general cargo, reefers, tugs, trawlers,
                tankers and Ro-Ro vessels.
              </p>
              <p>
                Liepaja Northern Shipyard provides to their Customers a 24 hour
                service 7 days a week for qualitative repair maintenance.
              </p>
            </PriorityListLightBlue>
          </StyledContainer>
        </SectionWrapper>
      </DesktopContainer>
      <TabletContainer>
        <PrioritiesMobile />
      </TabletContainer>
    </>
  );
}