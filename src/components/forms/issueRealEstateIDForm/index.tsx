import React, {FC} from 'react';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import {Button} from '../../elements';
import {Body4} from '../../../utils/typography';
import {useGetVcTypesQuery, useIssuerVcMutation} from '../../../generated/graphql';
import {useMyAccountInfoStore} from '../../../store/store';

export const IssueRealEstateIDForm: FC = () => {
    const {myDid, dataFromUAE} = useMyAccountInfoStore();
    /* eslint-disable */
    const [fields, handleFieldChange] = useFormFields({
        titledeedid: '',
        city: '',
        district: '',
        address: '',
        type: '',
        bedrooms: '',
        livingspace: '',
        owner: '',
        ownership_begin_date: '',
        issuance_institution: '',
        issuance_date: '',
        certificate_id: ''
    });
    /* eslint-enable */
    const {data: vcTypesData} = useGetVcTypesQuery();
    const [issuerVc] = useIssuerVcMutation();

    const issueVc = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (vcTypesData) {
            issuerVc({
                variables: {
                    holderDid: myDid,
                    vcTypeDid: vcTypesData.getVcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid || '',
                    vcParams: JSON.stringify(fields)
                }
            });
        }
    };

    return (
        <Form>
            <Body4 fontWeight={'bold'}>Real Estate ID issuance</Body4>
            <Input id="titledeedid" type="text" placeholder="Real Estate Gov ID" onChange={handleFieldChange}/>
            <Input id="city" type="text" placeholder="City" onChange={handleFieldChange}/>
            <Input id="district" type="text" placeholder="District" onChange={handleFieldChange}/>
            <Input id="address" type="text" placeholder="Address" onChange={handleFieldChange}/>
            <Input id="type" type="text" placeholder="Type" onChange={handleFieldChange}/>
            <Input id="bedrooms" type="text" placeholder="Bedrooms" onChange={handleFieldChange}/>
            <Input id="livingspace" type="text" placeholder="Living space" onChange={handleFieldChange}/>
            <Input id="owner" type="text" placeholder="Owner" value={dataFromUAE.fullnameEN} disabled/>
            <Input id="ownership_begin_date" type="text" placeholder="Ownership Begin Date" onChange={handleFieldChange}/>
            <Input id="issuing_institution" type="text" placeholder="Issuing institution" onChange={handleFieldChange}/>
            <Input id="issuance_date" type="text" placeholder="Issuance date" onChange={handleFieldChange}/>
            <Input id="certificate_id" type="text" placeholder="Certificate ID" onChange={handleFieldChange}/>
            <ButtonWrapper>
                <Button onClick={(e) => issueVc(e)}>Issue VC on behalf of Dubai Land Department</Button>
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
