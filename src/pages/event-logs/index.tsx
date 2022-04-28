import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Title2} from '../../utils/typography';
import data from '../../components/tables/tableEventsLog/data.json';
import {EventsLogTable} from '../../components/tables';

export default function EventLogsPage(): ReactNode {

    return (
        <>
            <Title2 margin="0 0 40px">Event Logs</Title2>
            <EventsLogTable data={data} />
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
