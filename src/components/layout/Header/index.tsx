import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {Title1} from '../../../utils/typography';

const Header = () => {

    return (
        <HeaderWrapper>
            <div className="container">
                <Wrapper>
                    <Link href={'/profile'}>
                        <a>
                            <Title1>Identix.Pass</Title1>
                        </a>
                    </Link>
                </Wrapper>
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
  height: 56px;
  background: linear-gradient(114.12deg, rgba(42, 63, 126, 0.5) 45.55%, rgba(58, 163, 193, 0.6) 115.21%), rgba(97, 146, 211, 0.33);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  
  @media(min-width: 1400px) {
    height: 60px;
  }
`;

const Wrapper = styled.div`
  padding-left: 260px;
  
  @media(min-width: 1400px) {
    padding-left: 300px;
  }

  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;

export default Header;
