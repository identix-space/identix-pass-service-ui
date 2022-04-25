import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';

export default function EventLogsPage(): ReactNode {

    return (
        <>
            <Title2>Event Logs</Title2>
        </>
    );
}

EventLogsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
