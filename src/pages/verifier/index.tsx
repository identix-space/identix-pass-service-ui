import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';

export default function VerifierPage(): ReactNode {

    return (
        <>
            <Title2>Verifier</Title2>
        </>
    );
}

VerifierPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
