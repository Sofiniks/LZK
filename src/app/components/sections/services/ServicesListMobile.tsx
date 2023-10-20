'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';

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
  margin-bottom: 30px;
`;

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column;
`;

const ServiceList = styled.ul`
  padding: 40px;
  position: relative;
  height: 400px;
  &:before {
    content: '';
    background-color: transparent;
    height: 0;
    width: 0;
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0;
    border-top: 400px solid transparent;
    border-right: 50px solid #11304d;
    transform: translate(0, 0);
    @media ${device.sm} {
      border-right: 30px solid #11304d;
    }
  }
`;
const ServiceListDark = styled(ServiceList)`
background-color: #0b1f31;
margin-bottom: 20px;
`;
const ServiceListLight = styled(ServiceList)`
  background-color: #314a61;
`;
const ServiceItem = styled.li`
  margin-bottom: 30px;
  list-style-type: circle;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default function ServicesListMobile() {
  return (
    <SectionWrapper>
      <StyledContainer>
        <ServiceListDark>
          {listData1.map((item, index) => {
            return <ServiceItem key={index}>{item}</ServiceItem>;
          })}
        </ServiceListDark>
        <ServiceListLight>
          {listData2.map((item, index) => {
            return <ServiceItem key={index}>{item}</ServiceItem>;
          })}
        </ServiceListLight>
      </StyledContainer>
    </SectionWrapper>
  );
}