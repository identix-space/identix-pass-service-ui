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
            {/*{loading ? <p>Loading...</p>*/}
            {/*    : <VCCards>*/}
            {/*        {countries.length > 0*/}
            {/*            ? <>*/}
            {/*                {countries.map((country, index) => (*/}
            {/*                    <Link href="/vc-wallet/vc" passHref key={index}>*/}
            {/*                        <a>*/}
            {/*                            <SmallVCCard citizenship="Everscale.Land" title={country.name} status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>*/}
            {/*                        </a>*/}
            {/*                    </Link>*/}
            {/*                ))}*/}
            {/*            </>*/}
            {/*            : <NoVCs>*/}
            {/*                <Body4 fontWeight="700" margin="0 0 40px">You do not have Verifiable Credentials yet.<br/>*/}
            {/*                    Go to marketplace to claim your first one!</Body4>*/}
            {/*                <Link href="/marketplace">*/}
            {/*                    <a>*/}
            {/*                        <Button>Go to marketplace </Button>*/}
            {/*                    </a>*/}
            {/*                </Link>*/}
            {/*            </NoVCs>*/}
            {/*        }*/}
            {/*    </VCCards>*/}
            {/*}*/}
            <VCCards>

                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                <Link href="/vc-wallet/vc" passHref>
                    <a>
                        <SmallVCCard citizenship="Everscale.Land" title="State ID" status="Active" did="did:ever:abcd...sds34" img="/assets/everscale-land-logo.svg"/>
                    </a>
                </Link>
                {/*<NoVCs>*/}
                {/*    <Body4 fontWeight="700" margin="0 0 40px">You do not have Verifiable Credentials yet.<br/>*/}
                {/*            Go to marketplace to claim your first one!</Body4>*/}
                {/*    <Link href="/marketplace">*/}
                {/*        <a>*/}
                {/*            <Button>Go to marketplace </Button>*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</NoVCs>*/}
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

// const NoVCs = styled.div`
//   width: 60%;
//   margin: 0 auto;
//   padding: 50px 0 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 40px;
//
//   a {
//     width: 100%;
//   }
// `;

VcWalletPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

// export async function getServerSideProps() {
//     const {data, loading} = await getApolloClient.query<ExampleQueryQuery>({
//         query: ExampleQueryDocument
//     });
//     return {
//         props: {
//             data,
//             loading
//         }
//     };
// }
