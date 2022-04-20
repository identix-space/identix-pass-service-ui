import React from 'react';
import {Title1} from '../typography';
import styled from 'styled-components';

const Header = () => {

    return (
        <HeaderWrapper>
            <div className="container">
                <Title1>Identix.Pass</Title1>
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
  height: 65px;
  background: linear-gradient(114.12deg, rgba(42, 63, 126, 0.5) 45.55%, rgba(58, 163, 193, 0.6) 115.21%), rgba(97, 146, 211, 0.33);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`;

export default Header;
