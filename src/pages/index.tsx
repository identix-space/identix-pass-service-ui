import React, {ReactNode, ReactElement} from 'react';
import Layout from '../components/layout';
import {SignInWith} from '../components/Login';

export default function IndexPage(): ReactNode {

    return (
        <SignInWith/>
    );
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
