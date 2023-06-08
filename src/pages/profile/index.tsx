import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import {Button, Loader} from '../../components/elements';
import styled from 'styled-components';
import {Body1, Body2, Body3, Title3} from '../../utils/typography';
import {EmiratesIDVCCard, RealEstateIDCard} from '../../components/cards';
import {AgentsRoles, useGetEventLogEntriesQuery, useGetUserVCsLazyQuery, Vc} from '../../generated/graphql';
import {useMyAccountInfoStore} from '../../store/store';
import {formatDate} from '../../utils/misc';
import {COLORS} from '../../utils/colors';

export default function ProfilePage(): ReactNode {
    const [error, setError] = useState('');
    const [realEstateVCs, setRealEstateVCs] = useState<Vc[]>();
    const [emiratesIDVCs, setEmiratesIDVCs] = useState<Vc[]>();
    const [isEmiratesAvailable, setIsEmiratesAvailable] = useState<boolean>(false);
    const [isVerifyAvailable, setIsVerifyAvailable] = useState<boolean>(false);
    const [loadingVCs, setLoadingVCs] = useState<boolean>(true);
    const [getVCs] = useGetUserVCsLazyQuery({variables: {role: AgentsRoles.Issuer}});
    const {data: dataLogs} = useGetEventLogEntriesQuery({fetchPolicy: 'cache-and-network', variables: {count: 10}});
    const {vcTypes} = useMyAccountInfoStore();

    useEffect(() => {
        if (vcTypes.length > 0) {
            (async () => {
                try {
                    const dataGetVCs = await getVCs();
                    if (dataGetVCs.data?.getUserVCs) {
                        const REVCs = dataGetVCs.data?.getUserVCs.filter(x => x.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid);
                        const EIDVCs = dataGetVCs.data?.getUserVCs.filter(x => x.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'EMIRATES_ID')?.vcTypeDid);
                        setRealEstateVCs(REVCs);
                        if (REVCs.length > 0) {
                            setIsVerifyAvailable(true);
                        }
                        setEmiratesIDVCs(EIDVCs);
                        if (EIDVCs.length === 0) {
                            setIsEmiratesAvailable(true);
                        }
                        setLoadingVCs(false);
                    }
                } catch (e) {
                    console.error(e);
                    setError(
                        'Please, try again.'
                    );
                    setLoadingVCs(false);
                }
            })();
        }
    }, [vcTypes]);

    return (
        <>
            <ButtonLink disabled={!isEmiratesAvailable}>
                <Link href={'/issue-emirates-vc'}>
                    <a>
                        <Button disabled={!isEmiratesAvailable}>Issue Emirates ID VC</Button>
                    </a>
                </Link>
            </ButtonLink>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Emirates ID Credentials</Body2>
            {loadingVCs ? <Loader/>
                : <>
                    {emiratesIDVCs && emiratesIDVCs.length > 0
                        ? <Cards>
                            {emiratesIDVCs.map((vc: Vc, index: number) => (
                                <Link href={`/vc/${vc.vcDid}`} key={index} passHref>
                                    <a>
                                        <EmiratesIDVCCard did={vc.vcDid} firstName={JSON.parse(vc.vcParams).firstNameEN}
                                            lastName={JSON.parse(vc.vcParams).lastNameEN}/>
                                    </a>
                                </Link>
                            ))}
                        </Cards> : <Body1>None available</Body1>
                    }
                </>
            }
            {error && <Error>{error}</Error>}
            <Divider/>
            <Link href={'/issue-real-estate-vc'}>
                <a>
                    <Button>Issue Real Estate ID</Button>
                </a>
            </Link>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Real Estate Credentials</Body2>
            {loadingVCs ? <Loader/>
                : <>
                    {realEstateVCs && realEstateVCs.length > 0
                        ? <Cards>
                            {realEstateVCs.map((vc: Vc, index: number) => (
                                <Link href={`/vc/${vc.vcDid}`} key={index} passHref>
                                    <a>
                                        <RealEstateIDCard key={index} titledeedid={JSON.parse(vc.vcParams).titledeedid}
                                            type={JSON.parse(vc.vcParams).type}
                                            address={JSON.parse(vc.vcParams).address}
                                            city={JSON.parse(vc.vcParams).city}
                                            owner={JSON.parse(vc.vcParams).owner}/>
                                    </a>
                                </Link>
                            ))}
                        </Cards> : <Body1>None available</Body1>
                    }
                </>
            }
            {error && <Error>{error}</Error>}
            <Divider/>
            <ButtonLink disabled={!isVerifyAvailable}>
                <Link href={'/verify-real-estate'}>
                    <a>
                        <Button disabled={!isVerifyAvailable}>Verify My Real Estate</Button>
                    </a>
                </Link>
            </ButtonLink>
            <Divider/>
            <Body2 fontWeight="bold" margin="25px 0 20px">Logs</Body2>
            {dataLogs && dataLogs.getEventLogEntries.length > 0
                ? <Logs>
                    {dataLogs.getEventLogEntries.map((log, index) => (
                        <Body3 key={index}><span
                            style={{color: '#7EF706'}}>{formatDate(log.eventDate)}</span> {log.message}</Body3>
                    ))}
                </Logs>
                : <Body1>None available</Body1>
            }
        </>
    );
}

const ButtonLink = styled.div<{disabled: boolean}>`    
    a {
      pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
    }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.79);
  margin: 50px 0;

  @media (max-width: 1000px) {
    margin: 35px 0;
  }

  @media (max-width: 600px) {
    margin: 27px 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 24px;
  
  a {
    @media (max-width: 840px) {
      width: 100%;
    }
  }
`;

const Logs = styled.div`
  overflow: hidden;
  
  p {
    word-wrap: break-word;
  }
`;

const Error = styled(Title3)`
  margin: 40px auto;
  text-align: center;
  color: ${COLORS.red};
`;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
