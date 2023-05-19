import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { Breadcrumbs, Loader, QrCodeScanner } from "../../components/elements";
import { useVerifyVcMutation } from "../../generated/graphql";
import { Title3 } from "../../utils/typography";
import { COLORS } from "../../utils/colors";

export default function VerifyRealEstatePage(): ReactNode {
    const [verifyVc, { data, error, loading }] = useVerifyVcMutation();

    const onVerify = async (data: string) => {
        try {
            const res = await verifyVc({ variables: { verificationData: data } });
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Breadcrumbs
                items={[
                    {
                        label: "Profile",
                        path: "/profile"
                    },
                    {
                        label: "Real Estate ownership verification",
                        path: "/verify-real-estate"
                    }
                ]}
            />
            <Wrapper>
                <QrCodeScanner onSuccess={onVerify} />

                <VerifyResultWrapper>
                    {loading && <Loader />}
                    {data && data.verifyVC && <Title3 color={COLORS.green}>Verify passed</Title3>}
                    {data && !data.verifyVC && <Title3 color={COLORS.red}>Verified failed</Title3>}
                    {error && <Title3 color={COLORS.red}>Something went wrong</Title3>}
                </VerifyResultWrapper>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  
  section {
    div {
      padding-top: 90% !important;
    }
  }
`;
const VerifyResultWrapper = styled.div`
    margin-top: 40px;
`;

VerifyRealEstatePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
