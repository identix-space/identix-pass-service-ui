import React, {ReactElement, ReactNode, useEffect} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Title2} from '../../../utils/typography';
import {BackButton, Loader} from '../../../components/elements';
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

    return (
        <>
            {loading ? <Loader/>
                : <>
                    {data ? <>
                        <BackButton/>
                        <Title2 margin="0 0 30px">{data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' ? 'State ID/did:ever:12345...abcd' : 'VC'}</Title2>
                        <Body2 style={{textDecoration: 'underline'}}>Holder/{startAndEnd(data.getVC.holderDid, 12)}</Body2>
                        <StatusCard>
                            <Date>19 Nov 2022 19:55</Date>
                        </StatusCard>
                        <LargeVCCard
                            citizenship={JSON.parse(data.getVC.vcParams).citizenship}
                            did={data.getVC.vcDid}
                            status="Active"
                            issued={JSON.parse(data.getVC.vcParams).dateOfIssuance}
                            img="/assets/everscale-land-logo.svg"
                            firstName={JSON.parse(data.getVC.vcParams).firstName}
                            lastName={JSON.parse(data.getVC.vcParams).lastName}
                            dateOfBirth={JSON.parse(data.getVC.vcParams).dateOfBirth}
                            dateOfExpiry={JSON.parse(data.getVC.vcParams).dateOfExpiry}
                            id={JSON.parse(data.getVC.vcParams).id}
                            rawData={data.getVC.vcRawText}/>
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


IssuerVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
