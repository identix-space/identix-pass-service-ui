import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import styles from './Buttons.module.scss';
import {ButtonProps} from './Buttons.props';

export const Button = ({children, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={styles.button} {...props}>{children}</button>
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
  font-size: 14px;
  color: #FFFFFF;
  background: none;
  padding: 0 0 0 20px;
  top: 95px;
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
    top: 0;
    left: 0;
    background: url('/assets/arrow-back.svg') center/contain no-repeat;

    @media(min-width: 1400px) {
      width: 9px;
      height: 14px;
      top: 1px;
    }
  }

  @media(min-width: 1400px) {
    top: 100px;
    font-size: 16px;
  }
`;
