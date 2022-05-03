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
                        <Title2 margin="0 0 40px">{data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' ? 'State ID' : 'VC Wallet'}</Title2>
                        <LargeVCCard citizenship={JSON.parse(data.getVC.vcParams).citizenship} did={data.getVC.vcDid} issued={JSON.parse(data.getVC.vcParams).dateOfIssuance} status="Active" img="/assets/everscale-land-logo.svg" firstName={JSON.parse(data.getVC.vcParams).firstName} lastName={JSON.parse(data.getVC.vcParams).lastName} dateOfBirth={JSON.parse(data.getVC.vcParams).dateOfBirth} dateOfExpiry={JSON.parse(data.getVC.vcParams).dateOfExpiry} id={JSON.parse(data.getVC.vcParams).id} rawData={data.getVC.vcRawText}/>
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
