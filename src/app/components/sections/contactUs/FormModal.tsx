'use client';
import styled from 'styled-components';
import { useEffect } from 'react';
import { device } from '@/theme/breakpoints';
import { TickGreen } from '../../icons/TickGreen';
import { Cross } from '../../icons/Cross';

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #2c384c;
  box-shadow: 0 4px 10px rgba(black, 0.5);
  position: fixed;
  padding: 25px 80px 40px 80px;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  @media ${device.sm} {
    padding: 25px 60px 40px 60px;
    width: 300px;
    height: 500px;
  }
  h3 {
    font-size: 24px;
  }
  
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 3px;
    padding: 20px 50px;
  }
`;
const CrossIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const TickIconWrapper = styled.div``;
const StyledText = styled.p`
  font-size: 14px;
  line-height: 20px;
`;
const Overlay = styled.div<{ $isHidden: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'unset')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

const FormModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (_: boolean) => void;
}) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };
   useEffect(() => {
     // Set the body's overflow property directly
     if (isOpen) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = 'auto';
     }

     // Cleanup the effect when the component unmounts
     return () => {
       document.body.style.overflow = 'auto';
     };
   }, [isOpen]);

  return (
    <Overlay $isHidden={!isOpen} onClick={handleModalClose}>
      <ModalWrapper>
        <CrossIconWrapper onClick={handleModalClose}>
          <Cross />
        </CrossIconWrapper>
        <h3>Message sent!</h3>
        <TickIconWrapper>
          <TickGreen />
        </TickIconWrapper>
        <StyledText>
          We have received your message and will contact you within the next 24
          hours!
        </StyledText>
        <ButtonWrapper>
          <button onClick={handleModalClose}>OK</button>
        </ButtonWrapper>
      </ModalWrapper>
    </Overlay>
  );
};

export default FormModal;
