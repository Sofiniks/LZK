'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import WhiteShip from '../../icons/WhiteShip';
import Anchor from '../../icons/Anchor';
import { DesktopContainer, TabletContainer } from '@/theme/breakpoints';
import HistoryMobileSection from './HistoryMobileSection';
import historyData from '../../../data/history.json';
import { device } from '@/theme/breakpoints';

const SectionWrapper = styled.div`
  margin-bottom: 80px;
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: calc(100% - 320px);
    top: 0;
    bottom: 0;
    right: 50%;
    background-color: #fff;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  justify-content: center;
`;
const SectionLeft = styled.div`
  padding-right: 80px;
  width: 50%;
  font-size: 14px;
  line-height: 155%;
`;
const SectionRight = styled.div`
  padding-left: 80px;
  width: 50%;
  font-size: 14px;
  line-height: 155%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;

const HistoryItem = styled.div`
  margin-bottom: 120px;
  position: relative;
  img {
    width: 300px;
    height: auto;
    object-fit: contain;
  }
  p {
    text-align: justify;
    max-width: 300px;
  }
  svg {
    position: absolute;
    z-index: 15;
    top: 50%;
    left: -300px;
    transform: translate(-50%, -50%);
    @media ${device.lg} {
      left: -182px;
    }
  }
  &:before {
    content: '';
    width: 300px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    bottom: 50%;
    @media ${device.lg} {
      width: 180px;
    }
  }
`;
const HistoryItemLeft = styled(HistoryItem)`
  &:before {
    content: '';
    right: 0;
    left: unset;
    transform: translateX(80px);
  }
  svg {
    position: absolute;
    z-index: 15;
    top: 50%;
    right: -80px;
    left: unset;
    transform: translate(50%, -50%);
  }
`;
const HistoryItem2 = styled(HistoryItemLeft)`
  margin-top: 230px;
`;

const HistoryItem4 = styled(HistoryItemLeft)`
  margin-bottom: 200px;
`;

const HistoryItem10 = styled(HistoryItemLeft)`
  margin-bottom: 200px;
`;

const StyledYear = styled.h5`
  font-size: 40px;
  color: rgba(255, 255, 255, 0.5);
`;

export default function HistorySection() {
  return (
    <>
      <DesktopContainer>
        <SectionWrapper>
          <SectionHeading>
            <WhiteShip />
          </SectionHeading>
          <StyledContainer>
            <SectionLeft>
              <HistoryItem2>
                <StyledYear>{historyData[1].year}</StyledYear>
                <Image
                  src={`/images/${historyData[1].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[1].text}</p>
                <Anchor />
              </HistoryItem2>
              <HistoryItem4>
                <StyledYear>{historyData[3].year}</StyledYear>
                <Image
                  src={`/images/${historyData[3].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[3].text}</p>
                <Anchor />
              </HistoryItem4>
              <HistoryItemLeft>
                <StyledYear>{historyData[5].year}</StyledYear>
                <Image
                  src={`/images/${historyData[5].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[5].text}</p>
                <Anchor />
              </HistoryItemLeft>
              <HistoryItemLeft>
                <StyledYear>{historyData[7].year}</StyledYear>
                <Image
                  src={`/images/${historyData[7].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[7].text}</p>
                <Anchor />
              </HistoryItemLeft>
              <HistoryItem10>
                <StyledYear>{historyData[9].year}</StyledYear>
                <Image
                  src={`/images/${historyData[9].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[9].text}</p>
                <Anchor />
              </HistoryItem10>
              <HistoryItemLeft>
                <StyledYear>{historyData[11].year}</StyledYear>
                <Image
                  src={`/images/${historyData[11].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[11].text}</p>
                <Anchor />
              </HistoryItemLeft>
              <HistoryItemLeft>
                <StyledYear>{historyData[13].year}</StyledYear>
                <Image
                  src={`/images/${historyData[13].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[13].text}</p>
                <Anchor />
              </HistoryItemLeft>
            </SectionLeft>
            <SectionRight>
              <HistoryItem>
                <StyledYear>{historyData[0].year}</StyledYear>
                <Image
                  src={`/images/${historyData[0].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[0].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[2].year}</StyledYear>
                <Image
                  src={`/images/${historyData[2].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[2].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[4].year}</StyledYear>
                <Image
                  src={`/images/${historyData[4].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[4].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[6].year}</StyledYear>
                <Image
                  src={`/images/${historyData[6].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[6].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[8].year}</StyledYear>
                <Image
                  src={`/images/${historyData[8].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[8].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[10].year}</StyledYear>
                <Image
                  src={`/images/${historyData[10].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[10].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[12].year}</StyledYear>
                <Image
                  src={`/images/${historyData[12].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[12].text}</p>
                <Anchor />
              </HistoryItem>
              <HistoryItem>
                <StyledYear>{historyData[14].year}</StyledYear>
                <Image
                  src={`/images/${historyData[14].image}`}
                  width={215}
                  height={134}
                  alt="history"
                />
                <p>{historyData[14].text}</p>
                <Anchor />
              </HistoryItem>
            </SectionRight>
          </StyledContainer>
        </SectionWrapper>
      </DesktopContainer>
      <TabletContainer>
        <HistoryMobileSection />
      </TabletContainer>
    </>
  );
}
