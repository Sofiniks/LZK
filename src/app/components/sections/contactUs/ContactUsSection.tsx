'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';
import { scroller, Element } from 'react-scroll';
import { useSearchParams } from 'next/navigation';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device, DesktopContainer } from '@/theme/breakpoints';
import LocationIcon from '../../icons/LocationIcon';
import EmailIcon from '../../icons/EmailIcon';
import contactsData from '../../../data/contacts.json';

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
    border: 2px solid transparent;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s;
    &:hover {
      background-color: transparent;
      border: 2px solid white;
    }
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
  align-items: center;
  margin-bottom: 15px;
  p {
    margin-bottom: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin-left: 7px;
  }
`;

const ContactsList = () => {
  return contactsData.map((item, index) => {
    return (
      <ContactInfoItem key={index}>
        <h4>{item.title}</h4>
        {item.registrationNumber && <p>{item.registrationNumber}</p>}
        {item.address && (
          <InfoWithIcon>
            <LocationIcon />
            <p>{item.address}</p>
          </InfoWithIcon>
        )}
        <InfoWithIcon>
          <EmailIcon />
          <p>{item.email}</p>
        </InfoWithIcon>
      </ContactInfoItem>
    );
  });
};

export default function ContactUs() {
  const params = useSearchParams();
  const contactsParam = params.get('contactForm');

  useEffect(() => {
    if (contactsParam === 'true') {
      scroller.scrollTo('contactForm', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -100,
      });
    }
  }, [contactsParam]);
  return (
    <Element name="contactForm" className="element">
      <StyledSection>
        <StyledContainer>
          <TextBlock>
            <FormWrapper>
              <StyledSubtitle>Contact Us</StyledSubtitle>
              <StyledForm>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Name" />
                <textarea placeholder="Text" cols={30} rows={10}></textarea>
                <button type="submit">Submit</button>
              </StyledForm>
            </FormWrapper>
            <ContactInfoBlock>
              <ContactsList />
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
    </Element>
  );
}
