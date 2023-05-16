import React, {FC} from 'react';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import {Button} from '../../elements';
import {Body4} from '../../../utils/typography';
import {useGetVcTypesQuery} from '../../../generated/graphql';

export const IssueRealEstateIDForm: FC = () => {
    //const {myDid} = useMyDidStore();
    const [handleFieldChange] = useFormFields({
        city: '',
        district: '',
        type: '',
        address: '',
        realEstateGovID: ''
    });
    const {data: vcTypesData} = useGetVcTypesQuery();
    // const [issuerVc, {loading, error}] = useIssuerVcMutation({
    //     variables: {
    //         holderDid: myDid,
    //         vcTypeDid: vcTypeDid,
    //         vcParams: vcParams
    //     }
    // });
    console.log(vcTypesData);

    return (
        <Form>
            <Body4 fontWeight={'bold'}>Real Estate ID issuance</Body4>
            <Input id="city" type="text" placeholder="City" onChange={() => handleFieldChange}/>
            <Input id="district" type="text" placeholder="District" onChange={() => handleFieldChange}/>
            <Input id="type" type="text" placeholder="Type" onChange={() => handleFieldChange}/>
            <Input id="address" type="text" placeholder="Address" onChange={() => handleFieldChange}/>
            <Input id="realEstateGovID" type="text" placeholder="Real Estate Gov ID" onChange={() => handleFieldChange}/>
            <ButtonWrapper>
                <Button onClick={(event) => {
                    event.preventDefault();
                }}>Issue VC on behalf of Dubai Land Department</Button>
            </ButtonWrapper>
        </Form>
    );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 22px;
  background: #FFFFFF;
  font-family: 'Gilroy', sans-serif;
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

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;
