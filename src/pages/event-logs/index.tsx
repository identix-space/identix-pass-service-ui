import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';
import {EventsLogTable} from '../../components/tables';
import {useGetEventLogEntriesQuery} from '../../generated/graphql';
import {Loader} from '../../components/elements';

export default function EventLogsPage(): ReactNode {

    const {data, loading} = useGetEventLogEntriesQuery({variables: {startIndex: 0, count: 10}});

    return (
        <>
            <Title2 margin="0 0 40px">Event Logs</Title2>
            {loading ? <Loader/>
                : <>{data ? <EventsLogTable data={data} /> : null}</>
            }
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
