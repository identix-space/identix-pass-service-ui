import React, {ReactElement, ReactNode, useState} from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {Breadcrumbs} from '../../components/elements';
import {IssueRealEstateIDForm} from '../../components/forms/issueRealEstateIDForm';

export default function IssueRealEstateVCPage(): ReactNode {
    const [isSuccess] = useState(false);

    return (
        <>
            <Breadcrumbs
                items={[
                    {
                        label: 'Profile',
                        path: '/profile'
                    },
                    {
                        label: 'Real Estate ID Issuance',
                        path: '/issue-real-estate-vc'
                    }
                ]}
            />
            <Wrapper isSuccess={isSuccess}>
                <IssueRealEstateIDForm/>
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

IssueRealEstateVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
