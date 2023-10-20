'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { device, DesktopContainer, TabletContainer } from '@/theme/breakpoints';
import ContainerLayout from './layouts/ContainerLayout';
import EmailIcon from './icons/EmailIcon';

const menuLinks = [
  {
    title: 'About us',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'History',
    href: '/history',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
];

const StyledFooter = styled.footer`
  min-height: max-content;
  background-color: #071420;
  @media ${device.md} {
    width: 100%;
  }
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  padding: 40px 0 40px 0;
  justify-content: space-between;
  align-items: center;
  @media ${device.md} {
    flex-direction: column;
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  @media ${device.md} {
    margin-right: 40px;
  }
`;
const NavTop = styled.div`
  display: flex;
  align-items: center;
  @media ${device.md} {
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
`;
const NavBottom = styled.div`
  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media ${device.sm} {
    flex-direction: column;
  }
`;
const Navbar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${device.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-items: flex-start;
  }
`;
const NavItem = styled.li`
  margin-bottom: 30px;
  text-transform: uppercase;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const ContactList = styled.ul`
  @media ${device.sm} {
    margin-bottom: 20px;
  }
`;
const ContactItem = styled.li`
  margin-bottom: 35px;
  @media ${device.md} {
    margin-bottom: 20px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 20px;
    @media ${device.md} {
      margin-bottom: 10px;
    }
  }
`;
const CopyrightBlock = styled.div`
  @media ${device.md} {
    display: flex;
    flex-direction: column;
  }
`;
const CertificationWrapper = styled.div`
  margin-bottom: 38px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`;
const EmailBlock = styled.div`
  display: flex;
  p {
    margin-left: 5px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <DesktopContainer>
        <StyledContainer>
          <LogoWrapper>
            <Image src="/images/logo.png" width={106} height={100} alt="logo" />
          </LogoWrapper>
          <Navbar>
            <NavList>
              {menuLinks.map((item) => (
                <NavItem key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </NavItem>
              ))}
            </NavList>
          </Navbar>
          <ContactList>
            <ContactItem>
              <h4>SHIPREPAIR AND CONVERSION</h4>
              <EmailBlock>
                <EmailIcon />
                <p>office@lzk.lv</p>
              </EmailBlock>
            </ContactItem>
            <ContactItem>
              <h4>SHIP AGENT ALVINA Ship Agency Ltd.</h4>
              <EmailBlock>
                <EmailIcon />
                <p>alvinaship@gmail.com</p>
              </EmailBlock>
            </ContactItem>
          </ContactList>
          <CopyrightBlock>
            <CertificationWrapper>
              <Image
                src="/images/logo2.png"
                width={225}
                height={98}
                alt="certification"
              />
            </CertificationWrapper>
            <p>©2023 Liepaja Northern Shipyard</p>
          </CopyrightBlock>
        </StyledContainer>
      </DesktopContainer>
      <TabletContainer>
        <StyledContainer>
          <NavTop>
            <LogoWrapper>
              <Image
                src="/images/logo.png"
                width={106}
                height={100}
                alt="logo"
              />
            </LogoWrapper>
            <Navbar>
              <NavList>
                {menuLinks.map((item) => (
                  <NavItem key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </NavItem>
                ))}
              </NavList>
            </Navbar>
          </NavTop>
          <NavBottom>
            <ContactList>
              <ContactItem>
                <h4>SHIPREPAIR AND CONVERSION</h4>
                <EmailBlock>
                  <EmailIcon />
                  <p>office@lzk.lv</p>
                </EmailBlock>
              </ContactItem>
              <ContactItem>
                <h4>SHIP AGENT ALVINA Ship Agency Ltd.</h4>
                <EmailBlock>
                  <EmailIcon />
                  <p>alvinaship@gmail.com</p>
                </EmailBlock>
              </ContactItem>
            </ContactList>
            <CopyrightBlock>
              <CertificationWrapper>
                <Image
                  src="/images/logo2.png"
                  width={225}
                  height={98}
                  alt="certification"
                />
              </CertificationWrapper>
              <p>©2023 Liepaja Northern Shipyard</p>
            </CopyrightBlock>
          </NavBottom>
        </StyledContainer>
      </TabletContainer>
    </StyledFooter>
  );
}
