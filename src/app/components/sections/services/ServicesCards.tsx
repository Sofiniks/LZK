'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';
import data from '../../../data/services.json';

const SectionWrapper = styled.div`
  margin-bottom: 70px;
`;
const HeadingWrapper = styled.div`
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  @media ${device.lg} {
    margin-bottom: 40px;
  }
  h3 {
    font-size: 24px;
    max-width: 70%;
    @media ${device.sm} {
      font-size: 20px;
      max-width: 100%;
    }
  }
`;
const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  @media ${device.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media ${device.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const CardItem = styled.li`
  background-color: #314a61;
  width: 100%;
  min-height: 460px;
  padding: 20px 50px 60px 25px;
  p {
    height: 350px;
    padding-bottom: 40px;
    border-bottom: 1px solid #fff;
    @media ${device.sm} {
      height: 250px;
      padding-bottom: 20px;
    }
  }
  @media ${device.lg} {
    min-height: 300px;
  }
  @media ${device.sm} {
    padding-bottom: 40px;
  }
`;
const IconWrapper = styled.div`
  width: 57px;
  height: 57px;
  margin-bottom: 30px;
`;
export default function ServicesCards() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>
            LZK SHIPYARD specializes in SHIP REPAIRS, SHIPBUILDING, CONVERSIONS
            and PRODUCTION OF STEEL CONSTRUCTIONS.
          </h3>
        </HeadingWrapper>
        <CardList>
          {data.infoCards.map((item) => {
            return (
              <CardItem key={item.iconKey}>
                <IconWrapper>{getIconComponent(item.iconKey)}</IconWrapper>
                <p>{item.text}</p>
              </CardItem>
            );
          })}
        </CardList>
      </ContainerLayout>
    </SectionWrapper>
  );
}
