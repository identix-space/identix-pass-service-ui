import React, {ReactNode, ReactElement} from 'react';
import {SmallVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Title2, Body2} from '../../../utils/typography';
import styled from 'styled-components';
import Link from 'next/link';

export default function FlatQubeServicePage(): ReactNode {

    return (
        <>
            <Title2>FlatQube</Title2>
            <Body2 margin="30px 0">Leading DeFi platform for Everscale. DEX, liquidity and farming pools - all within one platform.</Body2>
            <VCCards>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <SmallVCCard citizenship="Everscale.Land" title="Proof of residency" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                <SmallVCCard citizenship="Everscale.Academy" title="Financial Literacy Certificate" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-academy-logo.svg"/>
                <SmallVCCard citizenship="SumSub" title="Basic KYC credential" status="Expired" did="did:ever:abcd...sds34" img="/assets/sumsub-logo.svg"/>
            </VCCards>
        </>
    );
}

const VCCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  margin-top: 40px;
`;

FlatQubeServicePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
