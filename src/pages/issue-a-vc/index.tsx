import React, {ReactNode, ReactElement} from 'react';
import {IssueAVCTable} from '../../components/tables';
import Layout from '../../components/layout';
import {Body2, Title2} from '../../utils/typography';
import {Button} from '../../components/elements';
import styled from 'styled-components';
import Link from 'next/link';
import {AgentsRoles, useGetUserVCsIssuerQuery} from '../../generated/graphql';

export default function IssueAVCPage(): ReactNode {
    const data = useGetUserVCsIssuerQuery({variables: {role: AgentsRoles.Issuer}});

    return (
        <>
            <Title2>Issue a VC</Title2>
            <Body2 margin="30px 0 40px">Here you can see services where your Verifiable Credentials may be utilized. As SSI adoption grows, you will see here not only complex crypto services, but also representatives of traditional areas (banks, medical centers, entertainment services, online schools, ticket providers, etc.).</Body2>
            <IssueAVCTable data={data} />
            <ButtonWrapper>
                <Link href="/issue-a-vc/new">
                    <a>
                        <Button>
                            Issue a new VC
                        </Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </>
    );
}

const ButtonWrapper = styled.div`
  width: 50%;
  margin-top: 80px;
`;

IssueAVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
