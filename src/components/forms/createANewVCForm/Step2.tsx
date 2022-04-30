import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../../elements';
import {NextStepProps} from './createANewVCForm.props';
import {useIssuerVCStore} from '../../../store/store';
import {useFormFields} from './useFormHook';
import Select, {StylesConfig} from 'react-select';

export const StepTwo: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const {holderDid, setVcParams, setVcTypeDid, setVcTypeTitle} = useIssuerVCStore();
    const [fields, handleFieldChange] = useFormFields({
        firstName: '',
        lastName: '',
        citizenship: '',
        dateOfBirth: '',
        id: '',
        dateOfIssuance: '',
        dateOfExpiry: ''
    });

    const goNextStep = () => {
        setVcTypeDid(value);
        setVcTypeTitle(title);
        setVcParams(JSON.stringify(fields));
        nextStep();
    };

    type MyOptionType = {
        label: string;
        value: string;
    };

    const options: MyOptionType[] = [
        {value: 'did:ever:88888', label: 'State ID'},
        {value: 'did:ever:99999', label: 'Proof of Residency'}
    ];

    type IsMulti = false;


    const customStyles: StylesConfig<MyOptionType, IsMulti> = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: 'black',
            padding: 20,
            backgroundColor: state.isSelected ? 'rgba(143, 90, 224, 0.1)' : '#FFFFFF'
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            height: '55px',
            border: '2px solid #0BCDED'
        }),
        container: (provided) => ({
            ...provided,
            width: '100%'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#FFFFFF',
            fontWeight: '700'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '2px 22px'
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            color: '#0BCDED'
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#0BCDED',
            fontWeight: '700'
        })
    };

    return (
        <>
            <Form>
                <InputCol>
                    <InputReadOnly id="did" type="text" value={holderDid} readOnly/>
                    <Select styles={customStyles} options={options} placeholder="Choose VC Type" onChange={(option) => {
                        setValue(option!.value);
                        setTitle(option!.label);
                    }}/>
                    <Label>Fill in all fields of the VC</Label>
                    <Input id="firstName" type="text" placeholder="Name" onChange={handleFieldChange}/>
                    <Input id="lastName" type="text" placeholder="Last Name" onChange={handleFieldChange}/>
                    <Input id="citizenship" type="text" placeholder="Citizenship" onChange={handleFieldChange}/>
                    <Input id="dateOfBirth" type="text" placeholder="Date of birth" onChange={handleFieldChange}/>
                    <Input id="id" type="text" placeholder="ID" onChange={handleFieldChange}/>
                    <Input id="dateOfIssuance" type="text" placeholder="Date of issuance" onChange={handleFieldChange}/>
                    <Input id="dateOfExpiry" type="text" placeholder="Date of expiry" onChange={handleFieldChange}/>
                </InputCol>
                <ButtonWrapper>
                    <Button onClick={() => goNextStep()}>Continue</Button>
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
