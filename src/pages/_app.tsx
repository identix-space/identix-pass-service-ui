import {getApolloClient} from '../utils/ApolloClient';
import {ApolloProvider} from '@apollo/client';
import React, {ReactNode} from 'react';
import type {NextPage} from 'next';
import {AppProps} from 'next/app';
import '../styles/globals.scss';
import '../styles/fonts.scss';
import {AuthProvider, MessageProvider, PrivateRoute} from '../components/providers';
import {privateRoutes} from '../constants';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout): ReactNode {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (<ApolloProvider client={getApolloClient}>
        <AuthProvider>
            <PrivateRoute privateRoutes={privateRoutes}>
                <MessageProvider>
                    {getLayout(<Component {...pageProps} />)}
                </MessageProvider>
            </PrivateRoute>
        </AuthProvider>
    </ApolloProvider>);
}
