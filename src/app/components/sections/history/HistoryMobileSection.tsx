'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../layouts/ContainerLayout';
import historyData from '../../../data/history.json';
import WhiteShip from '../../icons/WhiteShip';
import Anchor from '../../icons/Anchor';
import { device } from '@/theme/breakpoints';

const SectionWrapper = styled.div``;
const StyledContainer = styled(ContainerLayout)`
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 400px;
  @media ${device.sm} {
    max-width: 300px;
  }
  &:before {
    content: '';
    width: 1px;
    height: calc(100% - 570px);
    color: white;
    background-color: #fff;
    position: absolute;
    top: 50px;
    bottom: 500px;
    left: 0;
    @media ${device.sm} {
      left: -20px;
    }
  }
`;
const HistoryItem = styled.div`
  margin-bottom: 60px;
  max-width: 400px;
  position: relative;
  p,
  img {
    margin-bottom: 15px;
  }
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
    top: 0;
    left: -68px;
    transform: translate(-50%, 50%);
    @media ${device.sm} {
      left: -38px;
    }
  }
  &:before {
    content: '';
    width: 90%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: -68px;
    top: 25px;
    @media ${device.sm} {
      left: -38px;
      width: 80%;
    }
  }
  &:last-of-type {
    &:before {
      width: 60%;
    }
  }
  @media ${device.sm} {
    max-width: 300px;
  }
`;
const HistoryItemWithoutYear = styled(HistoryItem)`
  svg {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    top: unset;
    bottom: 50%;
    width: 80px;
    z-index: -1;
  }
`;
const StyledHeading = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  transform: translate(-50px, -5px);
  z-index: 15;
  @media ${device.sm} {
    transform: translate(-70px, -5px);
  }
`;

const StyledYear = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-size: 32px;
  font-weight: 500;
  text-align: right;
  margin-bottom: 10px;
`;

export default function HistoryMobileSection() {
  return (
    <SectionWrapper>
      <StyledContainer>
        <StyledHeading>
          <WhiteShip />
        </StyledHeading>
        <HistoryItem>
          <StyledYear>{historyData[0].year}</StyledYear>
          <Image
            src={`/images/${historyData[0].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[0].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[1].year}</StyledYear>
          <Image
            src={`/images/${historyData[1].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[1].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[2].year}</StyledYear>
          <Image
            src={`/images/${historyData[2].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[2].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[3].year}</StyledYear>
          <Image
            src={`/images/${historyData[3].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[3].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[4].year}</StyledYear>
          <Image
            src={`/images/${historyData[4].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[4].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[5].year}</StyledYear>
          <Image
            src={`/images/${historyData[5].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[5].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItemWithoutYear>
          <StyledYear>{historyData[6].year}</StyledYear>
          <Image
            src={`/images/${historyData[6].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[6].text}</p>
          <Anchor />
        </HistoryItemWithoutYear>
        <HistoryItemWithoutYear>
          <StyledYear>{historyData[7].year}</StyledYear>
          <Image
            src={`/images/${historyData[7].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[7].text}</p>
          <Anchor />
        </HistoryItemWithoutYear>
        <HistoryItem>
          <StyledYear>{historyData[8].year}</StyledYear>
          <Image
            src={`/images/${historyData[8].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[8].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[9].year}</StyledYear>
          <Image
            src={`/images/${historyData[9].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[9].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[10].year}</StyledYear>
          <Image
            src={`/images/${historyData[10].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[10].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItemWithoutYear>
          <StyledYear>{historyData[11].year}</StyledYear>
          <Image
            src={`/images/${historyData[11].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[11].text}</p>
          <Anchor />
        </HistoryItemWithoutYear>
        <HistoryItemWithoutYear>
          <StyledYear>{historyData[12].year}</StyledYear>
          <Image
            src={`/images/${historyData[12].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[12].text}</p>
          <Anchor />
        </HistoryItemWithoutYear>
        <HistoryItem>
          <StyledYear>{historyData[13].year}</StyledYear>
          <Image
            src={`/images/${historyData[13].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[13].text}</p>
          <Anchor />
        </HistoryItem>
        <HistoryItem>
          <StyledYear>{historyData[14].year}</StyledYear>
          <Image
            src={`/images/${historyData[14].image}`}
            width={227}
            height={170}
            alt="history"
          />
          <p>{historyData[14].text}</p>
          <Anchor />
        </HistoryItem>
      </StyledContainer>
    </SectionWrapper>
  );
}
