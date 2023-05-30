import React, {ReactElement, ReactNode, useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {MessageContext} from '../../components/providers';
import Layout from '../../components/layout';
import {Breadcrumbs, ButtonGradient, Loader} from '../../components/elements';
import {Body1, Body4} from '../../utils/typography';
import {useMyAccountInfoStore} from '../../store/store';
import {AgentsRoles, useCheckUserVCsLazyQuery, useIssuerVcMutation} from '../../generated/graphql';
import router from 'next/router';
import { getApolloError } from '../../utils/misc';

export default function IssueEmiratesVCPage(): ReactNode {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const {dataFromUAE, myDid, vcTypes} = useMyAccountInfoStore();
    const messageApi = useContext(MessageContext);

    const [checkUserVCs] = useCheckUserVCsLazyQuery();
    const [issuerVc, {loading, data}] = useIssuerVcMutation({
        variables: {
            holderDid: myDid,
            vcTypeDid: 'did:ever:emirates-id-12345',
            vcParams: JSON.stringify({
                firstNameAR: '',
                lastNameAR: '',
                firstNameEN: dataFromUAE.firstnameEN,
                lastNameEN: dataFromUAE.lastnameEN,
                gender: dataFromUAE.gender,
                nationalityAR: '',
                nationalityEN: '',
                idcardIssuanceDate: '',
                idcardExpirationDate: '',
                idcardIssuer: ''
            })
        },
        onError: (e) => {
            messageApi?.error(getApolloError(e));
        }
    });

    useEffect(() => {
        if (vcTypes.length > 0) {
            (async () => {
                const dataCheckVCs = await checkUserVCs({variables: {role: AgentsRoles.Issuer, vcType: vcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid}});
                if (dataCheckVCs.data?.getUserVCs && dataCheckVCs.data?.getUserVCs.length === 0) {
                    setIsDisabled(false);
                }
            })();
        }
    }, [vcTypes]);

    const issueVC = () => {
        issuerVc();
        setIsSuccess(true);
    };

    return (
        <>
            <Breadcrumbs
                items={[
                    {
                        label: 'Profile',
                        path: '/profile'
                    },
                    {
                        label: 'Emirates ID Issuance',
                        path: '/issue-emirates-vc'
                    }
                ]}
            />
            {dataFromUAE &&
            <Wrapper isSuccess={data && isSuccess}>
                {loading ? <Loader/>
                    : <>
                        <Body4 fontWeight="bold">Emirates ID issuance</Body4>
                        {data && isSuccess
                            ? <>
                                <Body1>Success!</Body1>
                                <ButtonGradient onClick={() => router.back()}>Back</ButtonGradient>
                            </>
                            : <>
                                <Body1>Explaining message</Body1>
                                <ButtonGradient disabled={isDisabled} onClick={() => issueVC()}>Accept</ButtonGradient></>
                        }
                    </>
                }
            </Wrapper>
            }
        </>
    );
}

const Wrapper = styled.div<{isSuccess?: boolean | null}>`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  background: ${(props) => (props.isSuccess ? 'rgba(93,255,80,0.35)' : 'rgba(208, 208, 208, 0.23)')};
  border-radius: 10px;
  padding: 60px 50px;
  margin-top: 25px;
  
  p {
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: 840px) {
    gap: 30px;
    min-height: 300px;
    padding: 20px 15px;
  }
`;

IssueEmiratesVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
