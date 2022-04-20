import React, {ReactNode} from 'react';
import Head from 'next/head';
import Header from '../Header';
import styled from 'styled-components';

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
            <div>
                <Header/>
                <Main>
                    {children}
                </Main>
            </div>
        </>
    );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
  width: 100vw;
  height: 100vh;
  background: url('/assets/bg.png') center/cover no-repeat;
`;

export default Layout;
