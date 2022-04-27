import {getApolloClient} from '../utils/ApolloClient';
import {ApolloProvider} from '@apollo/client';
import React, {ReactNode, ReactElement} from 'react';
import type {NextPage} from 'next';
import {AppProps} from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/fonts.scss';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout): ReactNode {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<ApolloProvider client={getApolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>);
}
