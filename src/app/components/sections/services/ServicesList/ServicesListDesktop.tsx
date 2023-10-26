'use client';
import styled from 'styled-components';
import ContainerLayout from '../../../layouts/ContainerLayout';
import servicesListData from '../../../../data/services.json';

const SectionWrapper = styled.div`
  margin-bottom: 60px;
  position: relative;
  min-height: 350px;
  overflow: hidden;
`;

const DiagonalDividerBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -80deg,
    #314a61,
    #314a61 50%,
    #0b1f31 50%,
    #0b1f31
  );
`;
const StyledHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
`;

const StyledContainer = styled(ContainerLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
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

export default function ServicesListDesktop() {
  return (
    <>
      <ContainerLayout>
        <StyledHeading>
          The company offers the following services:{' '}
        </StyledHeading>
      </ContainerLayout>
      <SectionWrapper>
        <DiagonalDividerBackground />
        <StyledContainer>
          <ServiceList>
            {servicesListData.servicesLists.list1.map((item, index) => {
              return <ServiceItem key={index}>{item}</ServiceItem>;
            })}
          </ServiceList>
          <ServiceList>
            {servicesListData.servicesLists.list2.map((item, index) => {
              return <ServiceItem key={index}>{item}</ServiceItem>;
            })}
          </ServiceList>
        </StyledContainer>
      </SectionWrapper>
    </>
  );
}
