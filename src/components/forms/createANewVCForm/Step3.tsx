import React, {FC} from 'react';
import styled from 'styled-components';
import {Title2} from '../../../utils/typography';
import {LargeVCCard} from '../../cards';
import {Button, Loader} from '../../elements';
import {useIssuerVCStore} from '../../../store/store';
import {useIssuerVcMutation} from '../../../generated/graphql';
import {useModal} from '../../elements/Modal/useModal';
import {Modal} from '../../elements/Modal';

export const StepThree: FC = (): JSX.Element => {
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
        }
    });

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
                        status="Review"
                        img="/assets/everscale-land-logo.svg"
                        firstName={JSON.parse(vcParams).firstName}
                        lastName={JSON.parse(vcParams).lastName}
                        dateOfBirth={JSON.parse(vcParams).dateOfBirth}
                        id={JSON.parse(vcParams).id}/>
                    <ButtonWrapper>
                        <Button onClick={() => issuerVc()}>Sign and issue</Button>
                    </ButtonWrapper>
                </FinalForm>
            }
            <Modal headerText="Congrats" isShown={isShown} hide={toggle}
                modalContent={`${vcTypeTitle} for ${holderDid} has been issued!`}/>
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
