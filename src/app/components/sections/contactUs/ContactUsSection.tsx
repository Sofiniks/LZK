'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device, TabletContainer, DesktopContainer } from '@/theme/breakpoints';
import LocationIcon from '../../icons/LocationIcon';
import EmailIcon from '../../icons/EmailIcon';

const StyledSection = styled.section`
  margin-bottom: 120px;
  @media ${device.md} {
    margin-bottom: 40px;
  }
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextBlock = styled.div`
  @media ${device.lg} {
    width: 45%;
  }
  @media ${device.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

  }
`;
const StyledSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 50px;
`;
const ImagesBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
`;
const ImageWrapper = styled.div`
@media ${device.lg} {
  img {
    width: 450px;
    height: auto;
  }
}
`;
const FormWrapper = styled.div`
  margin-bottom: 60px;
  @media ${device.lg} {
    margin-bottom: 30px;
  }
  @media ${device.sm} {
    margin-bottom: 50px;
  }
  
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  
  input,
  textarea {
    background-color: transparent;
    border: 1px solid #fff;
    padding: 24px;
    margin-bottom: 20px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  textarea {
    height: 130px;
  }
  button {
    padding: 24px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    text-align: left;
  }
`;
const ContactInfoBlock = styled.div``;
const ContactInfoItem = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    margin-bottom: 15px;
  }
`;
const InfoWithIcon = styled.div`
  display: flex;
  /* margin-bottom: 15px; */
  &:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin-left: 7px;
  }
`;

export default function ContactUs() {
  return (
    <StyledSection>
      <StyledContainer>
        <TextBlock>
          <FormWrapper>
            <StyledSubtitle>Subtitle</StyledSubtitle>
            <StyledForm>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Name" />
              <textarea placeholder="Text" cols={30} rows={10}></textarea>
              <button>Submit</button>
            </StyledForm>
          </FormWrapper>
          <ContactInfoBlock>
            <ContactInfoItem>
              <h4>Liepaja Northen Shipyard Ltd</h4>
              <p>Reg. Nr. LV42103093384</p>
              <InfoWithIcon>
                <LocationIcon />
                <p>44D, Generala Baloza Str. Liepaja, LV-3402, Latvia</p>
              </InfoWithIcon>
              <InfoWithIcon>
                <EmailIcon />
                <p>office@lzk.lv</p>
              </InfoWithIcon>
            </ContactInfoItem>
            <ContactInfoItem>
              <h4>SHIP AGENT ALVINA Ship Agency Ltd</h4>
              <InfoWithIcon>
                <EmailIcon />
                <p>alvinaship@gmail.com</p>
              </InfoWithIcon>
            </ContactInfoItem>
          </ContactInfoBlock>
        </TextBlock>
        <DesktopContainer>
          <ImagesBlock>
            <ImageWrapper>
              <Image
                src="/images/contact_us_1.png"
                width={630}
                height={345}
                alt="airfoto"
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="/images/contact_us_2.png"
                width={630}
                height={345}
                alt="airfoto"
              />
            </ImageWrapper>
          </ImagesBlock>
        </DesktopContainer>
      </StyledContainer>
    </StyledSection>
  );
}
