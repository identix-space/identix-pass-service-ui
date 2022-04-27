import React, {FC} from 'react';
import styled from 'styled-components';
import {Button} from '../../elements';

interface NextStepProps {
    nextStep: () => void;
}

export const StepTwo: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    return (
        <>
            <Form>
                <InputCol>
                    <InputReadOnly id="did" type="text" value="did:ever:12345" readOnly/>
                    <Input id="VCType" type="text" placeholder="Choose VC Type" readOnly/>
                    <Label>Fill in all fields of the VC</Label>
                    <Input id="firstName" type="text" placeholder="Name"/>
                    <Input id="lastName" type="text" placeholder="Last Name"/>
                    <Input id="citizenship" type="text" placeholder="Citizenship"/>
                    <Input id="dateOfBirth" type="text" placeholder="Date of birth"/>
                    <Input id="id" type="text" placeholder="ID"/>
                    <Input id="dateOfIssuance" type="text" placeholder="Date of issuance"/>
                    <Input id="dateOfExpiry" type="text" placeholder="Date of expiry"/>
                </InputCol>
                <ButtonWrapper>
                    <Button onClick={() => nextStep()}>Continue</Button>
                </ButtonWrapper>
            </Form>
        </>
    );
};

const Form = styled.form`
  padding: 70px 0 30px;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 15px; 
  
  & > * {
    flex: 0 0 auto;
  }
`;

const InputReadOnly = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 22px;
  background: transparent;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  border: 2px solid #0BCDED;
  border-radius: 5px;
  
  :active {
    outline: 0;
  }
  
  :focus {
    outline: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 22px;
  background: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  
  ::placeholder {
    font-weight: 400;
  }
  
  :active {
    outline: 0;
  }
  
  :focus {
    outline: 0;
  }
`;

const Label = styled.label`
  align-self: flex-start;
  color: #FFFFFF;
  margin: 18px 0 0 18px;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;
