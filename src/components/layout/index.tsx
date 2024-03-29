import React, {ReactNode} from 'react';
import Head from 'next/head';
import Header from './Header';
import SidePanel from './SidePanel';
import styled from 'styled-components';
import {ApolloProvider} from '@apollo/client';
import {getApolloClient} from '../../utils/ApolloClient';

type Props = {
    children: ReactNode;
    title?: string;
};

const Layout = ({children, title = 'Identix.Pass'}: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <Main>
                <Header/>
                <div className="container">
                    <ApolloProvider client={getApolloClient}>
                        <Workplace>
                            <SidePanel/>
                            <Content>
                                {children}
                            </Content>
                        </Workplace>
                    </ApolloProvider>
                </div>
            </Main>
        </>
    );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: url('/assets/bg.webp') center/cover no-repeat;
`;

const Workplace = styled.div`
  overflow-y: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(179.18deg, #2A3F7E 6.96%, rgba(58, 163, 193, 0.6) 174.88%);
`;

const Content = styled.div`
  overflow-y: auto;
  height: 100vh;
  height: 100dvh;
  position: relative;
  padding: 100px 40px 80px 260px;

  &::-webkit-scrollbar {
    width: 12px;     
  }

  &::-webkit-scrollbar-track {
    background: #2A3F7E;
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb { 
    border-radius: 20px;  
    background: rgba(255, 255, 255, 0.23);
  }
  
  @media(min-width: 1400px) {
    padding: 110px 40px 80px 300px;
  }

  @media (max-width: 1000px) {
    padding: 90px 30px 60px 210px;
  }

  @media (max-width: 600px) {
    padding: 146px 15px 30px 15px;
  }
`;

export default Layout;
