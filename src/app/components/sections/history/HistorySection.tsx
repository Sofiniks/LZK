'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import WhiteShip from '../../icons/WhiteShip';

const SectionWrapper = styled.div`
  margin-bottom: 120px;
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 50%;
    background-color: #fff;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  justify-content: center;
  h5 {
    transform: translateX(-50%);
  }

  svg {
    transform: translateX(-70%);
  }
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

const History1 = styled.div`
  display: flex;
  margin-bottom: 230px;
  position: relative;
  img {
    margin-right: 10px;
    object-fit: contain;
  }
  p {
    text-align: justify;
  }
  &:before {
    content: '';
    width: 80px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    bottom: 50%;

  }
`;
const History2 = styled.div`
  margin-top: 200px;
  margin-bottom: 290px;
  h5 {
    margin-bottom: 15px;
  }
  div {
    display: flex;
    height: auto;
    position: relative;
    &:before {
      content: '';
      width: 80px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      bottom: 50%;
    }
  }
  p {
    flex: 1;
    text-align: justify;
  }
  img {
    object-fit: cover;
    height: 100%;
    flex: 1;
    margin-left: 10px;
  }
`;
const History3 = styled.div`
  display: flex;
  margin-bottom: 230px;
  height: auto;
  position: relative;
  &:before {
    content: '';
    width: 80px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    bottom: 50%;
  }
  p {
    flex: 1;
    text-align: justify;
  }
  img {
    object-fit: cover;
    height: 100%;
    flex: 1;
    margin-left: 10px;
  }
`;
const History4 = styled.div`
  display: flex;
  margin-bottom: 230px;
  height: auto;
  position: relative;
  &:before {
    content: '';
    width: 80px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    right: 0;
    transform: translateX(100%);
    bottom: 50%;
  }
  p {
    flex: 1;
    text-align: justify;
  }
  img {
    object-fit: cover;
    height: 100%;
    flex: 1;
    margin-right: 10px;
  }
`;
const History5 = styled.div`
  display: flex;
  max-width: 200px;
  margin-bottom: 210px;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
  &:before {
    content: '';
    width: 80px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    bottom: 50%;
  }
  p {
    text-align: justify;
    margin-top: 10px;
  }
`;
const History6 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  position: relative;
  &:before {
    content: '';
    width: 160px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    right: 0;
    transform: translateX(100%);
    bottom: 50%;
  }
  div {
    display: flex;
    margin-bottom: 10px;
    align-items: flex-end;
  }
  img {
    flex: 1;
    object-fit: cover;
    height: 100%;
  }
  h5 {
    margin-right: 10px;
    padding-bottom: 10px;
    width: 30%;
  }
  p {
    text-align: justify;
  }
`;

const History7 = styled.div`
  display: flex;
  max-width: 330px;
  flex-direction: column;
  position: relative;
  &:before {
    content: '';
    width: 270px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    bottom: 0;
  }
  p {
    text-align: justify;
    margin-top: 15px;
  }
`;

const StyledYear = styled.h5`
  font-size: 48px;
  color: rgba(255, 255, 255, 0.5);
`;

export default function HistorySection() {
  return (
    <SectionWrapper>
      <SectionHeading>
        <StyledYear>2023</StyledYear>
        <WhiteShip />
      </SectionHeading>
      <StyledContainer>
        <SectionLeft>
          <History2>
            <StyledYear>1936</StyledYear>
            <div>
              <p>
                In the beginning of the last century in the Yard’s workshops the
                new kind of occupation was developed - repair and recondition of
                air planes. In 1936 a whole line of planes was produced for a
                new air squadron of Aizsargs (Latvian paramilitary
                organization).
              </p>
              <Image
                src="/images/history2.png"
                width={215}
                height={134}
                alt="history"
              />
            </div>
          </History2>
          <History4>
            <Image
              src="/images/history4.png"
              width={196}
              height={103}
              alt="history"
            />
            <p>
              Various details and mechanisms have been manu- factured in
              mechanical and other workshops both for shiprepair and industrial
              sector such as farming. Also ship’s and industrial steam boilers
              have been fabricated...
            </p>
          </History4>
          <History6>
            <div>
              <StyledYear>1900</StyledYear>
              <Image
                src="/images/history6.png"
                width={206}
                height={154}
                alt="history"
              />
            </div>

            <p>
              The construction of two dry-docks into the military port’s
              territory, and named in honour of Russian Empresses Maria and
              Alexandra, was completed in 1900. Moreover new mechanical,
              ship-repair and new building workshops have started to work in the
              same year.
            </p>
          </History6>
        </SectionLeft>
        <SectionRight>
          <History1>
            <Image
              src="/images/history1.png"
              width={227}
              height={170}
              alt="history"
            />
            <p>
              In the Soviet period the Yard was the largest repair base of Navy
              fleet at the Baltic Sea. Various naval vessels, service vessels
              and submarines have been under repair in Yard’s docks or
              re-equipped at berths. About 5 thousand of workers have been
              engaged in the Yard’s workshops and repaired objects.
            </p>
          </History1>
          <History3>
            <p>
              In addition to the main activity some minor orders have been
              performed at Yard in the thirties of the last century. Under the
              order of government of the USSR about 60 goods wagons has been
              constructed.
            </p>
            <Image
              src="/images/history3.png"
              width={204}
              height={124}
              alt="history"
            />
          </History3>
          <History5>
            <Image
              src="/images/history5.png"
              width={200}
              height={149}
              alt="history"
            />
            <p>
              For many years docking of vessels at Yard has been done by the
              Maltese system.
            </p>
          </History5>
          <History7>
            <StyledYear>1893</StyledYear>
            <p>
              The formal ceremony of the foundation stone’s laying of a new
              naval base on the western outpost of the Russian Empire was held
              on 12 August 1893 at the presence of the Emperor Alexander III.
            </p>
          </History7>
        </SectionRight>
      </StyledContainer>
    </SectionWrapper>
  );
}
