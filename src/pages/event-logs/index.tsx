import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';
import {EventsLogTable} from '../../components/tables';
import {useGetEventLogEntriesQuery} from '../../generated/graphql';

export default function EventLogsPage(): ReactNode {

    const data = useGetEventLogEntriesQuery({variables: {startIndex: 0, count: 10}});

    return (
        <>
            <Title2 margin="0 0 40px">Event Logs</Title2>
            <EventsLogTable data={data} />
            {/*Comment*/}
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
