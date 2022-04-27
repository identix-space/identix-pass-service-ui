import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Body2, Title2} from '../../utils/typography';
import data from '../../components/tables/tableVerificationRequests/data.json';
import {VerificationRequestsTable} from '../../components/tables';

export default function VerifierPage(): ReactNode {

    return (
        <>
            <Title2>Verification requests</Title2>
            <Body2 margin="30px 0 40px">Here are the verification requests sent to your DID. Select a request in the table and process it by accepting or rejecting the verifiable credential.</Body2>
            <VerificationRequestsTable data={data}/>
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
