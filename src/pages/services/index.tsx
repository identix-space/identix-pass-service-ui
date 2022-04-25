import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';

export default function ServicesPage(): ReactNode {

    return (
        <>
            <Title2>Services</Title2>
        </>
    );
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
