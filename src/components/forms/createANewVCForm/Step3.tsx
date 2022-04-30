import React, {FC} from 'react';
import styled from 'styled-components';
import {Title2} from '../../../utils/typography';
import {LargeVCCard} from '../../cards';
import {Button} from '../../elements';
import {useIssuerVCStore} from '../../../store/store';
import {useIssuerVcMutation} from '../../../generated/graphql';

export const StepThree: FC = (): JSX.Element => {
    const {holderDid, vcTypeDid, vcTypeTitle, vcParams} = useIssuerVCStore();
    const [issuerVc, {loading, error}] = useIssuerVcMutation({variables: {holderDid: holderDid, vcTypeDid: vcTypeDid, vcParams: vcParams}});

    console.log(vcTypeDid);
    if (loading) {
        return <p>Submitting...</p>;
    }
    if (error) {
        return <p>{`Submission error! ${error.message}`}</p>;
    }

    return (
        <FinalForm>
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
