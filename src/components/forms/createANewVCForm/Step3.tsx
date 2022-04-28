import React, {FC} from 'react';
import styled from 'styled-components';
import {Title2} from '../../../utils/typography';
import {LargeVCCard} from '../../cards';
import {Button} from '../../elements';

export const StepThree: FC = (): JSX.Element => {
    return (
        <FinalForm>
            <Title2 margin="0 0 45px">State ID</Title2>
            <LargeVCCard title="Everscale.id" did="did:ever:xe65...cdh764" issued="18 Nov 2022 17:15" status="Active" img="/assets/everscale-land-logo.svg"/>
            <ButtonWrapper>
                <Button>Sign and issue</Button>
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
