import React, {FC, ReactElement, ReactNode, useEffect} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Body3, Title2} from '../../../utils/typography';
import {BackButton, Button, Loader} from '../../../components/elements';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useGetVcLazyQuery} from '../../../generated/graphql';
import {startAndEnd} from '../../../utils/misc';

export default function IssuerVCPage(): ReactNode {

    const router = useRouter();
    const [getVC, {data, loading}] = useGetVcLazyQuery();

    useEffect(() => {
        if (router.query.id) {
            getVC({variables: {vcDid: router.query.id.toString()}});
        }
    }, [router.query.id]);

    const ChooseStatus: FC<{status: string}> = ({status}): JSX.Element => {
        switch (status) {
            case 'approved':
                return (
                    <Status color="#7EF606"/>
                );
            case 'rejected':
                return (
                    <Status color="#FF0000"/>
                );
            case 'pendingApproval':
                return (
                    <Status color="#999999"/>
                );
            default:
                return (
                    <Status color="#FFFFFF"/>
                );
        }
    };

    return (
        <>
            {loading ? <Loader/>
                : <>
                    {data ? <>
                        <BackButton/>
                        <Title2 margin="0 0 30px">State ID/did:ever:12345...abcd</Title2>
                        <Body2 style={{textDecoration: 'underline'}}>Holder/{startAndEnd(data.getVC.holderDid, 12)}</Body2>
                        <StatusCard>
                            <Date>19 Nov 2022 19:55</Date>
                            <ChooseStatus status={data.getVC.verificationCases[0].status}/>
                        </StatusCard>
                        <LargeVCCard citizenship="Everscale.id" did={data.getVC.vcDid} issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg" firstName="J" lastName="M" dateOfBirth="260797" id="12312321"/>

                        {data.getVC.verificationCases[0].status === 'pendingApproval'
                            ? <>
                                <ButtonWrapper>
                                    <Button>Accept</Button>
                                </ButtonWrapper>
                                <ButtonWrapper>
                                    <Button disabled>Reject</Button>
                                </ButtonWrapper>
                            </> : null
                        }
                    </> : null
                    }
                </>
            }
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
  text-transform: capitalize;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin: 30px auto 0;
  
  &:nth-of-type(2) {
    margin: 60px auto 0;
  }
`;

IssuerVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
