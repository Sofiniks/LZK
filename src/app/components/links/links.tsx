'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '@/theme/breakpoints';

interface ButtonProps {
  href: string;
  text: string;
}

const StyledLink = styled(Link)`
  display: block;
  background-color: transparent;
  width: 350px;
  padding: 20px 0 30px 0;
  border: 2px solid #fff;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.28);
    border: 2px solid transparent;
  }
  @media ${device.md} {
    width: 290px;
    padding: 18px 0;
    font-size: 20px;
  }
`;

export default function TransparentLink({ href, text }: ButtonProps) {
  return <StyledLink href={href}>{text}</StyledLink>;
}
