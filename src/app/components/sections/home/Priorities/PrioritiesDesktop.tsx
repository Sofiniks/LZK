'use client';
import styled from 'styled-components';
import ContainerLayout from '../../../layouts/ContainerLayout';

const SectionWrapper = styled.div`
  margin-bottom: 110px;
  position: relative;
  min-height: 380px;
`;

const StyledContainer = styled(ContainerLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
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

const PriorityList = styled.ul`
  padding: 40px 55px;
  z-index: 10;
`;

const PriorityItem = styled.li`
  margin-bottom: 25px;
  list-style-type: circle;
  &:first-of-type {
    list-style-type: none;
  }
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

export default function PrioritiesDesktop() {
  return (
    <>
      <SectionWrapper>
        <DiagonalDividerBackground />
        <StyledContainer>
          <PriorityListDarkBlue>
            <PriorityItem>
              We are a reliable partner for shipowners in the fields of ship
              repair, shipbuilding, and metal structure fabrication. Our values:
            </PriorityItem>
            <PriorityItem>Our employees are our greatest asset</PriorityItem>
            <PriorityItem>
              Compliance with international and national legislation and other
              mandatory requirements
            </PriorityItem>
            <PriorityItem>
              Environmentally responsible and resource-efficient practices
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
              Our skilled staff has good experience in repair of different type
              of vessels such as general cargo, reefers, tugs, trawlers, tankers
              and Ro-Ro vessels.
            </p>
            <p>
              Liepaja Northern Shipyard provides to their Customers a 24 hour
              service 7 days a week for qualitative repair maintenance.
            </p>
          </PriorityListLightBlue>
        </StyledContainer>
      </SectionWrapper>
    </>
  );
}
