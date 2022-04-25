import styled from 'styled-components';

export const Button = styled.button`
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
