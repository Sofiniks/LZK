'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../layouts/ContainerLayout';

const SectionWrapper = styled.div``;
const StyledContainer = styled(ContainerLayout)`
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 270px;
  &:before {
    content: '';
    width: 1px;
    height: calc(100% - 330px);
    color: white;
    background-color: #fff;
    position: absolute;
    top: 50px;
    bottom: 400px;
    left: 0;
  }
`;
const HistoryItem = styled.div`
    margin-bottom: 60px;
    max-width: 240px;
    p, img {
        margin-bottom: 15px;
    }
`;
const StyledHeading = styled.div`
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const StyledYear = styled.h3`
color: rgba(255,255,255,0.5);
font-size: 32px;
font-weight: 500;
`;

export default function HistoryMobileSection() {
  return (
    <SectionWrapper>
      <StyledContainer>
        <StyledHeading>
            <StyledYear>2023</StyledYear>
        </StyledHeading>
        <HistoryItem>
          <Image
            src="/images/history1.png"
            width={227}
            height={170}
            alt="history"
          />
          <p>
            In the Soviet period the Yard was the largest repair base of Navy
            fleet at the Baltic Sea. Various naval vessels, service vessels and
            submarines have been under repair in Yard’s docks or re-equipped at
            berths. About 5 thousand of workers have been engaged in the Yard’s
            workshops and repaired objects.
          </p>
        </HistoryItem>
        <HistoryItem>
          <p>
            In the beginning of the last century in the Yard’s workshops the new
            kind of occupation was developed - repair and recondition of air
            planes. In 1936 a whole line of planes was produced for a new air
            squadron of Aizsargs (Latvian paramilitary organization).
          </p>
          <Image
            src="/images/history2.png"
            width={238}
            height={148}
            alt="history"
          />
        </HistoryItem>
        <HistoryItem>
          <p>
            In addition to the main activity some minor orders have been
            performed at Yard in the thirties of the last century. Under the
            order of government of the USSR about 60 goods wagons has been
            constructed.
          </p>
          <Image
            src="/images/history3.png"
            width={242}
            height={147}
            alt="history"
          />
        </HistoryItem>
        <HistoryItem>
          <p>
            Various details and mechanisms have been manu- factured in
            mechanical and other workshops both for shiprepair and industrial
            sector such as farming. Also ship’s and industrial steam boilers
            have been fabricated...
          </p>
          <Image
            src="/images/history4.png"
            width={242}
            height={127}
            alt="history"
          />
        </HistoryItem>
        <HistoryItem>
          <p>
            For many years docking of vessels at Yard has been done by the
            Maltese system.
          </p>
          <Image
            src="/images/history5.png"
            width={200}
            height={149}
            alt="history"
          />
        </HistoryItem>
        <HistoryItem>
          <Image
            src="/images/history6.png"
            width={206}
            height={154}
            alt="history"
          />
          <p>
            The construction of two dry-docks into the military port’s
            territory, and named in honour of Russian Empresses Maria and
            Alexandra, was completed in 1900. Moreover new mechanical,
            ship-repair and new building workshops have started to work in the
            same year.
          </p>
        </HistoryItem>
        <HistoryItem>
          <p>
            The formal ceremony of the foundation stone’s laying of a new naval
            base on the western outpost of the Russian Empire was held on 12
            August 1893 at the presence of the Emperor Alexander III.
          </p>
        </HistoryItem>
      </StyledContainer>
    </SectionWrapper>
  );
}
