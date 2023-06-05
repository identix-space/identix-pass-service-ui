import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../../components/layout';
import {Body2, Body3, Body5, Title3} from '../../../utils/typography';
import {BackButton, Loader} from '../../../components/elements';
import {copyToClipboard, formatDate, startAndEnd} from '../../../utils/misc';
import {LargeEmiratesIdVCCard} from '../../../components/cards';
import {
    useGetVcLazyQuery, Vc
} from '../../../generated/graphql';
import styled from 'styled-components';
import {useMyAccountInfoStore} from '../../../store/store';
import {LargeRealEstateVCCard} from '../../../components/cards/LargeRealEstateVCCard';
import {Tooltip} from 'react-tooltip';
import {COLORS} from '../../../utils/colors';

type StatusType = {
    status: string;
}

export default function VcPage(): ReactNode {
    const router = useRouter();
    const [error, setError] = useState('');
    const [vcData, setVcData] = useState<Vc>();
    const [vcDataParams, setVcDataParams] = useState();
    const [loading, setLoading] = useState(true);
    const [getVC] = useGetVcLazyQuery();
    const {vcTypes} = useMyAccountInfoStore();

    useEffect(() => {
        (async () => {
            if (router.query.id) {
                try {
                    const getVcData = await getVC({variables: {vcDid: router.query.id.toString()}});
                    if (getVcData.data?.getVC) {
                        setVcData(getVcData.data?.getVC);
                        setVcDataParams(JSON.parse(getVcData.data?.getVC.vcParams));
                        setLoading(false);
                    }
                } catch (e) {
                    console.error(e);
                    setError(
                        'Please, try again.'
                    );
                }
            }
        })();
    }, [router.query.id]);

    return (
        <>
            {loading ? <Loader/>
                : <>
                    {vcData && vcDataParams ? <>
                        <BackButton/>
                        <HolderDid>Holder / <span data-tooltip-id="copy-tooltip" data-tooltip-place="top" onClick={() => copyToClipboard(vcData.holderDid)}>{startAndEnd(vcData.holderDid, 20)}</span></HolderDid>
                        <StatusCard>
                            <Date>{formatDate(vcData.updatedAt)}</Date>
                            {vcData.verificationCases && vcData.verificationCases.length > 0 && <Status status={vcData.verificationCases[0].verificationStatus}>{vcData.verificationCases[0].verificationStatus}</Status>}
                        </StatusCard>
                        {vcTypes && vcData.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'EMIRATES_ID')?.vcTypeDid &&
                            <LargeEmiratesIdVCCard
                                did={vcData.vcDid}
                                status="Active"
                                url={vcData.blockchain}
                                vcParams={vcDataParams}
                                rawData={vcData.vcRawText}/>
                        }
                        {vcTypes && vcData.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid &&
                            <LargeRealEstateVCCard
                                did={vcData.vcDid}
                                status="Active"
                                url={vcData.blockchain}
                                vcParams={vcDataParams}
                                rawData={vcData.vcRawText}/>
                        }
                    </> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Body5 margin="100px 0 80px">You do not have permission to view this DID.</Body5>
                    </div>
                    }
                    <Tooltip id="copy-tooltip" content="Click to copy"/>
                </>
            }
            {error && <Error>{error}</Error>}
        </>
    );
}

const StatusCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  background: #292E5B;
  border: 2px solid #3F91E9;
  border-radius: 8px;
  margin: 20px 0 22px;
  padding: 10px 15px;

  @media (max-width: 600px) {
    margin: 16px 0 20px;
    height: 45px;
    padding: 8px 12px;
    border-radius: 6px;
  }
`;

const HolderDid = styled(Body2)`
  margin-top: 30px;
  
  span {
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const Date = styled(Body2)`
  color: #FFFFFF;
`;

const Status = styled(Body3)<StatusType>`
  color: ${(props) => props.status === 'REJECTED' ? '#FF0000 !important' : props.status === 'ACCEPTED' ? '#7EF606 !important' : '#999999 !important'};
`;

const Error = styled(Title3)`
  margin: 40px auto;
  text-align: center;
  color: ${COLORS.red};
`;

VcPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
