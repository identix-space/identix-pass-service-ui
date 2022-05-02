import React, {ReactElement, ReactNode, useEffect} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Title2} from '../../../utils/typography';
import {BackButton, Loader} from '../../../components/elements';
import {ServicesBlock} from '../../../components/cards/ServicesBlock';
import {useRouter} from 'next/router';
import {useGetVcLazyQuery} from '../../../generated/graphql';
// import {GetVcDocument} from '../../../generated/graphql';
// import {getApolloClient} from '../../../utils/ApolloClient';

export default function VcCardPage(): ReactNode {
    const router = useRouter();
    const [getVC, {data, loading}] = useGetVcLazyQuery();

    useEffect(() => {
        if (router.query.id) {
            getVC({variables: {vcDid: router.query.id.toString()}});
        }
    }, [router.query.id]);

    return (
        <>
            {loading ? <Loader/>
                : <>
                    {data ? <>
                        <BackButton/>
                        <Title2 margin="0 0 40px">VC Wallet</Title2>
                        <LargeVCCard citizenship="Everscale.id" did={data.getVC.vcDid} issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg" firstName="J" lastName="M" dateOfBirth="260797" id="12312321" rawData={data.getVC.vcRawText}/>
                        <ServicesBlock/>
                    </> : null
                    }
                </>
            }
        </>
    );
}

// export async function getServerSideProps(context) {
//     const {id} = context.params;
//     const {data} = await getApolloClient.query({
//         query: GetVcDocument,
//         variables: {vcDid: id}
//     });
//
//     return {
//         props: {
//             vc: data
//         }
//     };
// }

VcCardPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
