import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import {Button} from '../../components/elements';
import styled from 'styled-components';
import {Body1, Body2, Body3} from '../../utils/typography';
import {EmiratesIDVCCard, RealEstateIDCard} from '../../components/cards';
import {AgentsRoles, useGetEventLogEntriesQuery, useGetUserVCsLazyQuery, Vc} from '../../generated/graphql';
import {useMyAccountInfoStore} from '../../store/store';
import {formatDate} from '../../utils/misc';

export default function ProfilePage(): ReactNode {
    const [realEstateVCs, setRealEstateVCs] = useState<Vc[]>();
    const [emiratesIDVCs, setEmiratesIDVCs] = useState<Vc[]>();
    const [isEmiratesAvailable, setIsEmiratesAvailable] = useState(false);
    const [getVCs] = useGetUserVCsLazyQuery({variables: {role: AgentsRoles.Issuer}});
    const {data: dataLogs} = useGetEventLogEntriesQuery({fetchPolicy: 'cache-and-network', variables: {count: 10}});
    const {vcTypes} = useMyAccountInfoStore();

    useEffect(() => {
        if (vcTypes.length > 0) {
            (async () => {
                const dataGetVCs = await getVCs();
                if (dataGetVCs.data?.getUserVCs) {
                    setRealEstateVCs(dataGetVCs.data?.getUserVCs.filter(x => x.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid));
                    const EIDVCs = dataGetVCs.data?.getUserVCs.filter(x => x.vcTypeDid === vcTypes.find(z => z.vcTypeTag === 'EMIRATES_ID')?.vcTypeDid);
                    setEmiratesIDVCs(EIDVCs);
                    if (EIDVCs.length === 0) {
                        setIsEmiratesAvailable(true);
                    }
                }
            })();
        }
    }, [vcTypes]);

    return (
        <>
            <Link href={'/verify-real-estate'}>
                <a>
                    <Button>Verify My Real Estate</Button>
                </a>
            </Link>
            <Divider/>
            <ButtonLink disabled={!isEmiratesAvailable}>
                <Link href={'/issue-emirates-vc'}>
                    <a>
                        <Button disabled={!isEmiratesAvailable}>Issue Emirates ID VC</Button>
                    </a>
                </Link>
            </ButtonLink>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Emirates ID Credentials</Body2>
            {emiratesIDVCs && emiratesIDVCs.length > 0
                ? <Cards>
                    {emiratesIDVCs.map((vc: Vc, index: number) => (
                        <Link href={`/vc/${vc.vcDid}`} key={index} passHref>
                            <a>
                                <EmiratesIDVCCard did={vc.vcDid}/>
                            </a>
                        </Link>
                    ))}
                </Cards> : <Body1>N/D</Body1>
            }
            <Divider/>
            <Link href={'/issue-real-estate-vc'}>
                <a>
                    <Button>Issue Real Estate ID</Button>
                </a>
            </Link>
            <Body2 fontWeight="bold" margin="25px 0 20px">Your Real Estate Credentials</Body2>
            {realEstateVCs && realEstateVCs.length > 0
                ? <Cards>
                    {realEstateVCs.map((vc: Vc, index: number) => (
                        <Link href={`/vc/${vc.vcDid}`} key={index} passHref>
                            <a>
                                <RealEstateIDCard key={index} issuanceDate={JSON.parse(vc.vcParams).issuance_date} type={JSON.parse(vc.vcParams).type} address={JSON.parse(vc.vcParams).address} city={JSON.parse(vc.vcParams).city} bedroomsNumber={JSON.parse(vc.vcParams).bedrooms}/>
                            </a>
                        </Link>
                    ))}
                </Cards> : <Body1>N/D</Body1>
            }
            <Divider/>
            <Body2 fontWeight="bold" margin="25px 0 20px">Logs</Body2>
            {dataLogs
                ? <>
                    {dataLogs.getEventLogEntries.map((log, index) => (
                        <Body3 key={index}><span style={{color: '#7EF706'}}>{formatDate(log.eventDate)}</span> {log.message}</Body3>
                    ))}
                </>
                : <></>
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
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 24px;
`;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
