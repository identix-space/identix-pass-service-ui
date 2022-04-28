import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';

export default function MarketplacePage(): ReactNode {

    return (
        <>
            <Title2>Marketplace</Title2>
        </>
    );
}

MarketplacePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
