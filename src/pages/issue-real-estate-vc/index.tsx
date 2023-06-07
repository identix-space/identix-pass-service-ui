import React, {ReactElement, ReactNode} from 'react';
import Layout from '../../components/layout';
import {Breadcrumbs} from '../../components/elements';
import {IssueRealEstateIDForm} from '../../components/forms/issueRealEstateIDForm';

export default function IssueRealEstateVCPage(): ReactNode {
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
            <IssueRealEstateIDForm/>
        </>
    );
}

IssueRealEstateVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
