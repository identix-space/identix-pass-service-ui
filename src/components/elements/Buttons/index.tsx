import styled from 'styled-components';
import React, {ReactNode} from 'react';
import {useRouter} from 'next/router';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({children}: ButtonProps): JSX.Element => {
    return (
        <ButtonBlock>{children}</ButtonBlock>
    );
};

export const ButtonTransparent = ({children}: ButtonProps): JSX.Element => {
    return (
        <ButtonTransparentBlock>{children}</ButtonTransparentBlock>
    );
};

export const BackButton = (): JSX.Element => {
    const router = useRouter();
    return (
        <BackButtonBlock onClick={() => router.back()}>Back</BackButtonBlock>
    );
};

export const ButtonBlock = styled.button`
  position: relative;
  border: 0;
  width: 100%;
  height: 40px;
  font-weight: 700;
  font-size: 15px;
  color: #FFFFFF;
  background: linear-gradient(92.25deg, #8F5AE0 -10.04%, #37B9C6 116.12%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
  transition: all .1s ease-in;
  z-index: 99;

  &:hover {
    transform: scale(0.99);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
  }
  
  &[disabled] {
    pointer-events: none;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(92.25deg, #8F5AE0 -10.04%, #37B9C6 116.12%);
  }
`;

export const ButtonTransparentBlock = styled.button`
  position: relative;
  border: 0;
  width: 100%;
  height: 40px;
  font-weight: 700;
  font-size: 15px;
  color: #FFFFFF;
  background: url('/assets/button-gradient-bg.svg') center/contain no-repeat;
  border-radius: 8px;
  cursor: pointer;
  transition: all .1s ease-in;
  z-index: 99;
  
  span {
    background: linear-gradient(92.25deg, #8F5AE0 -10.04%, #37B9C6 116.12%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: scale(1.02);
  }
  
  &[disabled] {
    pointer-events: none;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(92.25deg, #8F5AE0 -10.04%, #37B9C6 116.12%);
  }
`;

export const BackButtonBlock = styled.button`
  position: absolute;
  border: 0;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background: none;
  padding: 0 0 0 20px;
  top: 100px;
  cursor: pointer;
  transition: all .1s ease-in;
  z-index: 99;

  &:hover {
    text-decoration: underline;
  }
  
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 16px;
    top: 4px;
    left: 0;
    background: url('/assets/arrow-back.svg') center/contain no-repeat;
  }
`;
