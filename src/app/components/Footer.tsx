'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
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
  min-height: 270px;
  background-color: #071420;
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  padding: 40px 0 40px 0;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div``;
const Navbar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;

`;
const NavItem = styled.li`
margin-bottom: 30px;
text-transform: uppercase;
&:last-of-type {
  margin-bottom: 0;
}
`;
const ContactList = styled.ul``;
const ContactItem = styled.li`
  margin-bottom: 35px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 20px;
  }
`;
const CopyrightBlock = styled.div``;
const CertificationWrapper = styled.div`
margin-bottom: 38px;
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
    </StyledFooter>
  );
}
