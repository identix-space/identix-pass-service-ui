import React, {ReactNode, ReactElement} from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import {SmallVCCard} from '../../components/cards';
import {Title2} from '../../utils/typography';
import styled from 'styled-components';

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

VcWalletPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
