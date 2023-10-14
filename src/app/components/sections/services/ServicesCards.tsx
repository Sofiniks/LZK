'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device } from '@/theme/breakpoints';

interface ServiceCardsData {
  iconKey: string;
  text: string;
}

const data: ServiceCardsData[] = [
  {
    iconKey: 'SafetySertificate',
    text: 'The company is certified with Quality Management System Standard ISO 9001:2015 and Environmental Management System Standard ISO 14001:2015. Company implements Qualityand Safety Management System (HSEQ). All the works are carried out in accordance with the IACS requirements.',
  },
  {
    iconKey: 'Wrench',
    text: 'The company is able to repair on around 60-70 seagoing vessels per yearas well as perform all kindsof conversions of wide range of vessels such as dry cargo, trawlers, tugboats, tankers, reefers, gas carriers, Ro-Ro vessels and etc.',
  },
  {
    iconKey: 'Partnership',
    text: 'We with proud can inform you, that our main business partners are: Wagenborg Shipping B.V. (Netherlands), AS Wilson Ship Management (Norway), RIX Shipmanagement SIA (Latvia) and so on.',
  },
  {
    iconKey: 'ShipDarkBlue',
    text: 'The company owns 2 dry docks and 1 floating dock (SWL 3500 tons) and 3 repair berths with total length more than 550 mtrs properly equipped with facilities such as electricity, fresh water, gas oxygen, compressed air and shore cranes.',
  },
];

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
  background-color: #1b3349;
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
          {data.map((item) => {
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
