import React, {ReactElement, ReactNode, useState} from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {Breadcrumbs, Loader, QrCodeScanner} from '../../components/elements';
import {useVerifyVcMutation} from '../../generated/graphql';
import {Title3} from '../../utils/typography';
import {COLORS} from '../../utils/colors';
import {Button, Modal, Typography} from 'antd';

export default function VerifyRealEstatePage(): ReactNode {
    const [verifyVc, {data, error, loading}] = useVerifyVcMutation();
    const [modalOpened, setModalOpened] = useState(false);

    const onVerify = async (verificationData: string) => {
        try {
            const {data} = await verifyVc({variables: {verificationData: verificationData}});
            if (data && data.verifyVC) {
                setModalOpened(true);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Breadcrumbs
                items={[
                    {
                        label: 'Profile',
                        path: '/profile'
                    },
                    {
                        label: 'Real Estate ownership verification',
                        path: '/verify-real-estate'
                    }
                ]}
            />

            <Wrapper>
                <QrCodeScanner onSuccess={onVerify} />

                <SuccessModal
                    open={modalOpened}
                    onClose={() => setModalOpened(false)}
                />
                <VerifyResultWrapper>
                    {loading && <Loader />}
                    {data && !data.verifyVC && <Title3 color={COLORS.red}>Verification failed</Title3>}
                    {error && <Title3 color={COLORS.red}>Something went wrong</Title3>}
                </VerifyResultWrapper>
            </Wrapper>
        </>
    );
}

interface ModalPropTypes {
    open: boolean,
    onClose: () => void
}

const SuccessModal = ({open, onClose}: ModalPropTypes) => (
    <Modal
        open={open}
        onCancel={onClose}
        footer={null}
    >
        <SuccessWrapper>
            <SuccessTitle level={2}>TrustEstate</SuccessTitle>
            <SuccessDescription level={5}>Verification Passed</SuccessDescription>

            <SuccessButton
                onClick={onClose}
                type={'primary'}
                size={'large'}
            >
                Ok
            </SuccessButton>

            <Logo />
        </SuccessWrapper>
    </Modal>
);

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  
  section {
    div {
      padding-top: 90% !important;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
const VerifyResultWrapper = styled.div`
    margin-top: 40px;
`;
const SuccessWrapper = styled.div`
  text-align: center;
`;
const SuccessTitle = styled(Typography.Title)`
  margin: 0 0 16px 0!important;
`;
const SuccessDescription = styled(Typography.Title)`
  margin: 0 0 30px 0!important;
  color: ${COLORS.grey}!important;
`;
const SuccessButton = styled(Button)`
  display: block;
  margin: 0 auto 32px auto;
  width: 100%;
  max-width: 250px;
`;
const Logo = styled.div`
  width: 180px;
  height: 47px;
  background: url("/assets/land-department-logo.svg") center/contain no-repeat;
  display: inline-block;
`;

VerifyRealEstatePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
