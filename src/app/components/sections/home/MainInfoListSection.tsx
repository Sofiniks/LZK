'use client';
import styled from 'styled-components';
import { device } from '@/theme/breakpoints';
import ContainerLayout from '../../layouts/ContainerLayout';
import ShipGreyGradient from '../../icons/ShipGreyGradient';
import infoData from '../../../data/aboutUs.json';

const StyledSection = styled.section`
margin-bottom: 90px;
@media ${device.md} {
  margin-bottom: 60px;
}
`;
const StyledHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  margin-bottom: 60px;
  @media ${device.sm} {
    margin-bottom: 30px;
  }
`;
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  @media ${device.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: center;
  }
  @media ${device.sm} {
    grid-template-columns: 1fr;
    gap: 30px;
    justify-items: center;
  }
`;
const StyledCard = styled.li`
  width: 270px;
  background-color: #02111e;
  padding: 28px 21px 37px 21px;
  position: relative;
  z-index: 1;
  h4 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    @media ${device.sm} {
      font-size: 20px;
    }
  }
  p {
    font-weight: 300;
  }
  &:before {
    content: '';
    background-color: #0a2135;
    width: 270px;
    height: 100%;
    position: absolute;
    z-index: -1;
    right: 10px;
    bottom: 10px;
  }
`;
const StyledIconWrapper = styled.div`
  width: 39px;
  height: 41px;
  margin-bottom: 10px;
`;

export default function MainInfoListSection() {
  return (
    <StyledSection>
      <ContainerLayout>
        <StyledHeading>Text</StyledHeading>
        <StyledList>
          {infoData.mainInfoCards.map((item) => {
            return (
              <StyledCard key={item.title}>
                <StyledIconWrapper>
                  <ShipGreyGradient />
                </StyledIconWrapper>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StyledCard>
            );
          })}
        </StyledList>
      </ContainerLayout>
    </StyledSection>
  );
}
