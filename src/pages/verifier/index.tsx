import React, {ReactElement, ReactNode} from 'react';
import Layout from '../../components/layout';
import {Body2, Title2} from '../../utils/typography';
import {VerificationRequestsTable} from '../../components/tables';
import {AgentsRoles, useGetUserVCsVerifierQuery} from '../../generated/graphql';
import {Loader} from '../../components/elements';

export default function VerifierPage(): ReactNode {

    const {data, loading} = useGetUserVCsVerifierQuery({variables: {role: AgentsRoles.Verifier}});

    return (
        <>
            <Title2>Verification requests</Title2>
            <Body2 margin="30px 0 40px">Here are the verification requests sent to your DID. Select a request in the table and process it by accepting or rejecting the verifiable credential.</Body2>
            {loading ? <Loader/>
                : <>{data ? <VerificationRequestsTable data={data}/> : null}</>
            }
        </>
    );
}

VerifierPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
