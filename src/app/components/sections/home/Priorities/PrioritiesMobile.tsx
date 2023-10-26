'use client';
import styled from 'styled-components';
import ContainerLayout from '../../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';

const SectionWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledContainer = styled(ContainerLayout)`
  display: flex;
  flex-direction: column;
`;

const PriorityList = styled.ul`
  padding: 40px;
  position: relative;
  min-height: 330px;
  background: linear-gradient(-80deg, #11304d 10%, transparent 0%);
  @media ${device.sm} {
    min-height: 400px;
    background: linear-gradient(-86deg, #11304d 10%, transparent 0%);
  }
`;
const PriorityListDark = styled(PriorityList)`
  background-color: #0b1f31;
  margin-bottom: 20px;
`;
const PriorityListLight = styled(PriorityList)`
  background-color: #314a61;
  @media ${device.md} {
    padding-right: 120px;
  }
  @media ${device.sm} {
    padding-right: 40px;
  }
  p {
    margin-bottom: 25px;
    &:last-of-type {
      margin-bottom: 0;
    }
    @media ${device.sm} {
      margin-bottom: 18px;
    }
  }
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

export default function PrioritiesMobile() {
  return (
    <SectionWrapper>
      <StyledContainer>
        <PriorityListDark>
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
        </PriorityListDark>
        <PriorityListLight>
          {' '}
          <p>
            Our development goal is to become a leading company in the field of
            ship repair, shipbuilding, and metal structure fabrication on the
            eastern coast of the Baltic Sea.
          </p>
          <p>
            Our skilled staff has good experience in repair of different type of
            vessels such as general cargo, reefers, tugs, trawlers, tankers and
            Ro-Ro vessels.
          </p>
          <p>
            Liepaja Northern Shipyard provides to their Customers a 24 hour
            service 7 days a week for qualitative repair maintenance.
          </p>
        </PriorityListLight>
      </StyledContainer>
    </SectionWrapper>
  );
}
