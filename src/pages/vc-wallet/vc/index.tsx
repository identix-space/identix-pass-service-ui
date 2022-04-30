import React, {ReactElement, ReactNode} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Title2} from '../../../utils/typography';
import {BackButton} from '../../../components/elements';
import {ServicesBlock} from '../../../components/cards/ServicesBlock';

export default function VcCardPage(): ReactNode {

    return (
        <>
            <BackButton/>
            <Title2 margin="0 0 40px">VC Wallet</Title2>
            <LargeVCCard citizenship="Everscale.id" did="did:ever:xe65...cdh764" issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg" firstName="J" lastName="M" dateOfBirth="260797" id="12312321"/>
            <ServicesBlock/>
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
