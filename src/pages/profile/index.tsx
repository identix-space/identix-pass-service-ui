import React, {ReactElement, ReactNode} from 'react';
import Layout from '../../components/layout';
import {Button} from '../../components/elements';
import styled from 'styled-components';
import {Body1, Body2} from '../../utils/typography';
import {RealEstateIDCard, EmiratesIDVCCard} from '../../components/cards';
import Link from 'next/link';

export default function VcWalletPage(): ReactNode {

    return (
        <>
            <Link href={'/verify-real-estate'}>
                <a>
                    <Button>Verify My Real Estate</Button>
                </a>
            </Link>
            <Divider/>
            <Link href={'/issue-emirates-vc'}>
                <a>
                    <Button>Issue Emirates VC ID</Button>
                </a>
            </Link>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Emirates ID Credentials</Body2>
            {/*<Body1>N/D</Body1>*/}
            <Cards>
                <EmiratesIDVCCard title={'Emirates ID VC'} did={'asf'}/>
                <EmiratesIDVCCard title={'Emirates ID VC'} did={'asss444f'}/>
            </Cards>
            <Divider/>
            <Link href={'/issue-real-estate-vc'}>
                <a>
                    <Button>Issue Real Estate ID</Button>
                </a>
            </Link>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Real Estate Credentials</Body2>
            {/*<Body1>N/D</Body1>*/}
            <RealEstateIDCard type={'Apartment'} address={'Business Bay, Dubai, UAE'} bedroomsNumber={1} price={'1 500 000 AED'} footage={61.5}/>
            <Divider/>
            <Body2 fontWeight="bold" margin="25px 0 20px">History</Body2>
            <Body1><span style={{color: '#7EF706'}}>27.02.2023</span> Logged in idx.Pass via UAE.PASS</Body1>
        </>
    );
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.79);
  margin: 50px 0;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
`;

VcWalletPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
