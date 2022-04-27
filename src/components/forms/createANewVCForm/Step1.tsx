import React, {FC} from 'react';
import styled from 'styled-components';
import {Button} from '../../elements';

interface NextStepProps {
    nextStep: () => void;
}

export const StepOne: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    return (
        <>
            <Form>
                <InputRow>
                    <Input id="did" type="text"/>
                    <Label htmlFor="did">Insert the DID of the VC holder here.<br/>
                    Currently only <strong>did:ever</strong> method is supported.</Label>
                </InputRow>
                <ButtonWrapper>
                    <Button onClick={() => nextStep()}>Continue</Button>
                </ButtonWrapper>
            </Form>
        </>
    );
};

const Form = styled.form`
  padding: 70px 0 60px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & > * {
    flex: 0 0 auto;
  }
`;

const Input = styled.input`
  width: 60%;
  height: 56px;
  padding: 15px 22px;
  background: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  
  :active {
    outline: 0;
  }
  
  :focus {
    outline: 0;
  }
`;

const Label = styled.label`
  width: 40%;
  padding-left: 35px;
  color: #FFFFFF;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  width: 60%;
`;
