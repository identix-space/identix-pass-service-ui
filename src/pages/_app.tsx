import {getApolloClient} from '../utils/ApolloClient';
import {ApolloProvider} from '@apollo/client';
import React, {ReactNode, ReactElement} from 'react';
import type {NextPage} from 'next';
import {AppProps} from 'next/app';
import '../styles/globals.scss';
import '../styles/fonts.scss';
import {AuthProvider, MessageProvider} from '../components/providers';
import {privateRoutes, publicRoutes} from '../constants';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout): ReactNode {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<ApolloProvider client={getApolloClient}>
        <AuthProvider protectedRoutes={privateRoutes} publicRoutes={publicRoutes}>
            <MessageProvider>
                <Component {...pageProps} />
            </MessageProvider>
        </AuthProvider>
    </ApolloProvider>);
}
