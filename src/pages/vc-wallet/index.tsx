import React, {ReactNode, ReactElement} from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import {SmallVCCard} from '../../components/cards';
import {Title2} from '../../utils/typography';
import styled from 'styled-components';
import {ServicesBlock} from '../../components/cards/ServicesBlock';

export default function VcWalletPage(): ReactNode {

    return (
        <>
            <Title2>VC Wallet</Title2>
            <VCCards>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="Proof of residency" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Academy" title="Financial Literacy Certificate" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-academy-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="SumSub" title="Basic KYC credential" status="Expired" did="did:ever:abcd...sds34" img="/assets/sumsub-logo.svg"/>
                    </a>
                </Link>
            </VCCards>
            <ServicesBlock/>
        </>
    );
}

const VCCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0;
  width: 100%;
  margin-top: 40px;
  
  @media(min-width: 1400px) {
    gap: 25px 0;
  }
`;

VcWalletPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
