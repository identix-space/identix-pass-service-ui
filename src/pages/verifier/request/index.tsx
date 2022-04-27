import React, {ReactElement, ReactNode} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Body3, Title2} from '../../../utils/typography';
import {BackButton, Button} from '../../../components/elements';
import styled from 'styled-components';

export default function RequestPage(): ReactNode {

    return (
        <>
            <BackButton/>
            <Title2 margin="0 0 30px">State ID/did:ever:12345...abcd</Title2>
            <Body2 style={{textDecoration: 'underline'}}>Holder/did:ever:12345...abcd</Body2>
            <StatusCard>
                <Date>19 Nov 2022 19:55</Date>
                <Status>Processing</Status>
            </StatusCard>
            <LargeVCCard title="Everscale.id" did="did:ever:xe65...cdh764" issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg"/>
            <ButtonWrapper>
                <Button>Accept</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled>Reject</Button>
            </ButtonWrapper>
        </>
    );
}

const StatusCard = styled(Body2)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  background: #292E5B;
  border: 2px solid #3F91E9;
  border-radius: 8px;
  margin: 20px 0 12px;
  padding: 10px 15px;
`;

const Date = styled(Body2)`
  color: #FFFFFF;
`;

const Status = styled(Body3)`
  color: #999999 !important;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin: 30px auto 0;
  
  &:nth-of-type(2) {
    margin: 60px auto 0;
  }
`;

RequestPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
