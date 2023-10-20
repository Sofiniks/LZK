'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import ContainerLayout from '../layouts/ContainerLayout';
import { TabletContainer, DesktopContainer, device } from '@/theme/breakpoints';
import { useState } from 'react';
import MobileBurgerMenu from './MobileBurgerMenu';
import Menu from '../icons/Menu';

const StyledHeader = styled.header`
  height: 150px;
  background: linear-gradient(
    61deg,
    rgba(0, 0, 0, 0.7) -75.08%,
    rgba(255, 255, 255, 0) 51.7%
  );
  padding: 25px 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  @media ${device.md} {
    height: 60px;
    padding: 10px 0;
  }
`;
const StyledDesktopContainer = styled(DesktopContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledTabletContainer = styled(TabletContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div``;
const Navbar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  color: #fff;
`;
const NavItem = styled.li`
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
  &::after {
    content: '';
    background-color: #fff;
    width: 50%;
    height: 1px;
    display: block;
    margin-top: 5px;
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StyledHeader>
      <ContainerLayout>
        <StyledDesktopContainer>
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
        </StyledDesktopContainer>
        <StyledTabletContainer>
          <LogoWrapper>
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          </LogoWrapper>
          <div onClick={handleToggleMenu}>
            <Menu />
          </div>
          <MobileBurgerMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
        </StyledTabletContainer>
      </ContainerLayout>
    </StyledHeader>
  );
}
