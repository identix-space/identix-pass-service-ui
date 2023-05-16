import React, {ReactElement, ReactNode, useState} from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {Breadcrumbs, ButtonGradient} from '../../components/elements';
import {Body1, Body4} from '../../utils/typography';

export default function IssueEmiratesVCPage(): ReactNode {
    const [isSuccess, setIsSuccess] = useState(false);

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
            <Wrapper isSuccess={isSuccess}>
                <Body4 fontWeight="bold">Emirates ID issuance</Body4>
                {isSuccess
                    ? <>
                        <Body1>Success!</Body1>
                        <ButtonGradient onClick={() => setIsSuccess(false)}>Back</ButtonGradient>
                    </>
                    : <>
                        <Body1>Explaining messageExplaining messageExplaining message
                            Explaining messageExplaining messageExplaining message</Body1>
                        <ButtonGradient onClick={() => setIsSuccess(true)}>Accept</ButtonGradient></>
                }
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div<{isSuccess: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: ${(props) => (props.isSuccess ? 'rgba(93,255,80,0.35)' : 'rgba(208, 208, 208, 0.23)')};
  border-radius: 10px;
  padding: 70px 30px;
  margin-top: 25px;
  
  p {
    text-align: center;
    margin-top: 0;
  }
`;

IssueEmiratesVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
