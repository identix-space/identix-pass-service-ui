import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../../elements';
import {NextStepProps} from './createANewVCForm.props';
import {useIssuerVCStore} from '../../../store/store';

interface InputProps {
    match: boolean;
}

export const StepOne: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    const [value, setValue] = useState('');
    const [match, setMatch] = useState(true);
    const {setHolderDid} = useIssuerVCStore();

    const goNextStep = () => {
        if (value.match(/^did:ever:*/)) {
            setMatch(true);
            setHolderDid(value);
            nextStep();
        } else {
            setMatch(false);
        }
    };

    return (
        <>
            <Form>
                <InputRow>
                    <Input match={match} id="did" type="text" value={value} onChange={(event) => {
                        setValue(event.target.value);
                    }}/>
                    <Label htmlFor="did">Insert the DID of the VC holder here.<br/>
                        Currently only <strong>did:ever</strong> method is supported.</Label>
                </InputRow>
                {!match ? <Error>Wrong DID string. Please, match the “did:method:xyz123” format</Error> : <></>}
                <ButtonWrapper>
                    <Button onClick={(event) => {
                        goNextStep();
                        event.preventDefault();
                    }}>Continue</Button>
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

const Input = styled.input<InputProps>`
  width: 60%;
  height: 56px;
  padding: 15px 22px;
  background: #FFFFFF;
  border: ${(props) => props.match ? '2px solid #FFFFFF' : '2px solid #FF0000'};
  font-size: 16px;
  font-weight: 700;
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

const Error = styled.div`
  width: fit-content;
  display: block;
  color: #FF0000;
  background: #FFFFFF;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 13px;
`;
