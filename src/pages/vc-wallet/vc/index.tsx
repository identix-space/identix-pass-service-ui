import React, {ReactElement, ReactNode} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';

export default function VcCardPage(): ReactNode {

    return (
        <>
            <LargeVCCard title="Everscale.id" did="did:ever:xe65...cdh764" issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg"/>
        </>
    );
}

VcCardPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
