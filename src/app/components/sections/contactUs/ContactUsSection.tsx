'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { scroller, Element } from 'react-scroll';
import { useSearchParams } from 'next/navigation';
import ContainerLayout from '../../layouts/ContainerLayout';
import { device, DesktopContainer, TabletContainer } from '@/theme/breakpoints';
import LocationIcon from '../../icons/LocationIcon';
import EmailIcon from '../../icons/EmailIcon';
import { Phone } from '../../icons/Phone';
import contactsData from '../../../data/contacts.json';
import FormModal from './FormModal';

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
  @media ${device.md} {
    flex-direction: column;
  }
`;
const StyledTabletContainer = styled(TabletContainer)`
  width: 100%;
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
  font-size: 22px;
  margin-bottom: 50px;
`;
const ImagesBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: flex-start;
`;
const ImageWrapper = styled.div`
  @media ${device.lg} {
    img {
      width: 450px;
      height: auto;
      max-height: 270px;
    }
  }
`;
const GoogleMapWrapper = styled.div`
  width: 630px;
  height: 345px;
  @media ${device.lg} {
    width: 450px;
    height: 290px;
  }
  @media ${device.md} {
    width: 100%;
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
const ContactInfoBlock = styled.div`
  @media ${device.md} {
    margin-bottom: 50px;
  }
`;
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
  p,
  a {
    margin-bottom: 0;
    margin-left: 7px;
  }
  &:last-of-type {
    margin-bottom: 0;
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
        {item.phone.map((phoneItem, phoneIndex) => {
          return (
            <InfoWithIcon key={phoneIndex}>
              <Phone />
              <a href={`tel:${phoneItem}`}>{phoneItem}</a>
            </InfoWithIcon>
          );
        })}
      </ContactInfoItem>
    );
  });
};

export default function ContactUs() {
  const params = useSearchParams();
  const contactsParam = params.get('contactForm');
  const [state, handleSubmit] = useForm('mqkvnpoe');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsModalOpen(true);
  };
  return (
    <Element name="contactForm" className="element">
      <StyledSection>
        <StyledContainer>
          <TextBlock>
            <FormWrapper>
              <StyledSubtitle>Feel free to contact us any time</StyledSubtitle>
              <StyledForm onSubmit={handleFormSubmit} id="form">
                <input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>

                {state.succeeded && (
                  <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                )}
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
                  src="/images/contact_us_2.jpg"
                  width={630}
                  height={345}
                  alt="airfoto"
                />
              </ImageWrapper>
              <GoogleMapWrapper>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?width=100%25&amp;height=340&amp;hl=en&amp;q=44D,%20Generala%20Baloza%20Str.%20Liepaja,%20Latvia+(LZK)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </GoogleMapWrapper>
            </ImagesBlock>
          </DesktopContainer>
          <StyledTabletContainer>
            <GoogleMapWrapper>
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%25&amp;height=340&amp;hl=en&amp;q=44D,%20Generala%20Baloza%20Str.%20Liepaja,%20Latvia+(LZK)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </GoogleMapWrapper>
          </StyledTabletContainer>
        </StyledContainer>
      </StyledSection>
    </Element>
  );
}
