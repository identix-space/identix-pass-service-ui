import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Body2, Title2} from '../../../utils/typography';
import {LargeVCCard} from '../../cards';
import {Button, Loader} from '../../elements';
import {useIssuerVCStore} from '../../../store/store';
import {useIssuerVcMutation} from '../../../generated/graphql';
import {useModal} from '../../hooks/useModal';
import {Modal} from '../../elements/Modal';
import {startAndEnd} from '../../../utils/misc';

export const StepThree: FC = (): JSX.Element => {
    const [status, setStatus] = useState('Review');
    const {isShown, toggle} = useModal();
    const {holderDid, vcTypeDid, vcTypeTitle, vcParams} = useIssuerVCStore();
    const [issuerVc, {loading, error}] = useIssuerVcMutation({
        variables: {
            holderDid: holderDid,
            vcTypeDid: vcTypeDid,
            vcParams: vcParams
        },
        onCompleted: () => {
            toggle();
            setStatus('Active');
        }
    });

    console.log(vcParams);

    if (error) {
        return <p>{`Submission error! ${error.message}`}</p>;
    }

    return (
        <>
            {loading ? <Loader/>
                : <FinalForm>
                    <Title2 margin="0 0 45px">{vcTypeTitle}</Title2>
                    <LargeVCCard
                        citizenship={JSON.parse(vcParams).citizenship}
                        did={holderDid}
                        issued={JSON.parse(vcParams).dateOfIssuance}
                        status={status}
                        img="/assets/everscale-land-logo.svg"
                        firstName={JSON.parse(vcParams).firstName}
                        lastName={JSON.parse(vcParams).lastName}
                        dateOfBirth={JSON.parse(vcParams).dateOfBirth}
                        dateOfExpiry={JSON.parse(vcParams).dateOfExpiry}
                        id={JSON.parse(vcParams).id}
                        rawData={vcParams}/>
                    {status !== 'Review'
                        ? <ButtonWrapper>
                            <Button onClick={() => issuerVc()}>Sign and issue</Button>
                        </ButtonWrapper>
                        : <Body2 fontWeight="700" margin="50px 0 0">`The VC has been issued to user <u>{startAndEnd(holderDid, 11)}</u></Body2>
                    }
                </FinalForm>
            }
            <Modal modalTitle={`${vcTypeTitle}`} isShown={isShown} hide={toggle}
                modalContent={`${startAndEnd(holderDid, 7)}`}/>
        </>
    );
};

const FinalForm = styled.div`
  padding: 50px 0 70px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin-top: 60px;
`;
