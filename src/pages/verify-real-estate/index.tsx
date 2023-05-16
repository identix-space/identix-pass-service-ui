import React, {ReactElement, ReactNode, useState} from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {Breadcrumbs} from '../../components/elements';
import {QrReader} from 'react-qr-reader';

export default function VerifyRealEstatePage(): ReactNode {
    const [data, setData] = useState('No result');

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
                <QrReader
                    onResult={(result: any, error) => {
                        if (result) {
                            setData(result?.text);
                        }

                        if (error) {
                            console.info(error);
                        }
                    }}
                    constraints={{facingMode: 'user'}}/>
                <p>{data}</p>
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

VerifyRealEstatePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
