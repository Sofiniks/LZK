'use client';
import styled from 'styled-components';
import ContainerLayout from '../../../layouts/ContainerLayout';
import ServicesListMobile from './ServicesListMobile';
import { DesktopContainer, TabletContainer, device } from '@/theme/breakpoints';

const listData1 = [
  'Installation of the BWTS',
  'Repair of various piping systems, including non-ferrous pipes, hot and cold galvanized',
  'Overhauling, repair of valves',
  'Repair of all types of generators and engines',
  'Repair of all kind of deck machinery',
];
const listData2 = [
  'Repair of electro installation; ship’s automatics',
  'Rewinding of motors',
  'Repair of marine boilers, compressors and various kind of pumps',
  'Repair of various kind of hatch covers; hydraulic systems',
  'Repair of turbochargers; governors',
];

const SectionWrapper = styled.div`
  margin-bottom: 110px;
  position: relative;
  min-height: 400px;
`;

const StyledHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  @media ${device.md} {
    font-size: 20px;
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
    border-top: 400px solid transparent;
    border-right: 100px solid #314a61;
    transform: translate(-100%, 0);
  }
`;

const ServiceList = styled.ul`
  padding: 40px 55px;
  z-index: 10;
`;

const ServiceItem = styled.li`
  margin-bottom: 30px;
  list-style-type: circle;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const ServiceListLightBlue = styled(ServiceList)`
  padding-left: 100px;
`;
const ServiceListDarkBlue = styled(ServiceList)`
  padding-left: 0;
`;

export default function ServicesListDesktop() {
  return (
    <>
      <ContainerLayout>
        <StyledHeading>
          The company offers the following services:{' '}
        </StyledHeading>
      </ContainerLayout>
        <SectionWrapper>
          <SectionDark />
          <SectionLight />
          <StyledContainer>
            <ServiceListDarkBlue>
              {listData1.map((item, index) => {
                return <ServiceItem key={index}>{item}</ServiceItem>;
              })}
            </ServiceListDarkBlue>
            <ServiceListLightBlue>
              {listData2.map((item, index) => {
                return <ServiceItem key={index}>{item}</ServiceItem>;
              })}
            </ServiceListLightBlue>
          </StyledContainer>
        </SectionWrapper>
    </>
  );
}
