import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <HeaderWrapper>
            <div className="container">
                <Title>Identix.Pass</Title>
            </div>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  padding-left: 330px;
  background: linear-gradient(114.12deg, rgba(42, 63, 126, 0.5) 45.55%, rgba(58, 163, 193, 0.6) 115.21%), rgba(97, 146, 211, 0.33);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  z-index: 9999;
`;

const Title = styled.p`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  background: -webkit-linear-gradient(-50deg, #FFFFFF 45%, #3ac6e7 130%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
`;

export default Header;
