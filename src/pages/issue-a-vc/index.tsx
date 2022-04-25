import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';

export default function IssueAVCPage(): ReactNode {

    return (
        <>
            <Title2>Issue a VC</Title2>
        </>
    );
}

IssueAVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
