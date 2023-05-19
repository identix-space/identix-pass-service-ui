import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import {Button, ButtonGradient, Loader} from '../../elements';
import {Body1, Body4} from '../../../utils/typography';
import {useGetVcTypesQuery, useIssuerVcMutation} from '../../../generated/graphql';
import {useMyAccountInfoStore} from '../../../store/store';
import Link from 'next/link';

export const IssueRealEstateIDForm: FC = () => {
    const [match, setMatch] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
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
    const [issuerVc, {loading, data}] = useIssuerVcMutation();

    const issueVc = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (vcTypesData) {
            if (fields.city !== '' && fields.district !== '' && fields.address !== '') {
                (async () => {
                    const issueVCData = await issuerVc({
                        variables: {
                            holderDid: myDid,
                            vcTypeDid: vcTypesData.getVcTypes.find(z => z.vcTypeTag === 'REAL_ESTATE')?.vcTypeDid || '',
                            vcParams: JSON.stringify(fields)
                        }
                    });
                    if (issueVCData.data?.issueVC) {
                        setIsSuccess(true);
                        setMatch(true);
                    }
                })();
            } else {
                setMatch(false);
            }
        }
    };

    return (
        <Wrapper isSuccess={isSuccess}>
            {loading ? <Loader/>
                : <Form isSuccess={data && isSuccess}>
                    <Body4 fontWeight={'bold'}>Real Estate ID issuance</Body4>
                    {data && isSuccess
                        ? <>
                            <Body1>Success!</Body1>
                            <Link href={'/profile'}>
                                <a>
                                    <ButtonGradient>Back</ButtonGradient>
                                </a>
                            </Link>
                        </>
                        : <>
                            <Input id="titledeedid" type="text" placeholder="Real Estate Gov ID" onChange={handleFieldChange}/>
                            <Input id="city" type="text" placeholder="City" err={!match && fields.city === ''}
                                onChange={handleFieldChange}/>
                            <Input id="district" type="text" placeholder="District" err={!match && fields.district === ''}
                                onChange={handleFieldChange}/>
                            <Input id="address" type="text" placeholder="Address" err={!match && fields.address === ''}
                                onChange={handleFieldChange}/>
                            <Input id="type" type="text" placeholder="Type" onChange={handleFieldChange}/>
                            <Input id="bedrooms" type="text" placeholder="Bedrooms" onChange={handleFieldChange}/>
                            <Input id="livingspace" type="text" placeholder="Living space" onChange={handleFieldChange}/>
                            <Input id="owner" type="text" placeholder="Owner" value={dataFromUAE.fullnameEN} disabled/>
                            <Input id="ownership_begin_date" type="text" placeholder="Ownership Begin Date"
                                onChange={handleFieldChange}/>
                            <Input id="issuing_institution" type="text" placeholder="Issuing institution"
                                onChange={handleFieldChange}/>
                            <Input id="issuance_date" type="text" placeholder="Issuance date" onChange={handleFieldChange}/>
                            <Input id="certificate_id" type="text" placeholder="Certificate ID" onChange={handleFieldChange}/>
                            <ButtonWrapper>
                                {!match ? <Error>Please, fill in required fields</Error> : <></>}
                                <Button onClick={(e) => issueVc(e)}>Issue VC on behalf of Dubai Land Department</Button>
                            </ButtonWrapper>
                        </>
                    }
                </Form>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div<{isSuccess?: boolean | null}>`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  background: ${(props) => (props.isSuccess ? 'rgba(93,255,80,0.35)' : 'rgba(208, 208, 208, 0.23)')};
  border-radius: 10px;
  padding: 60px 50px;
  margin-top: 25px;
  
  p {
    text-align: center;
    margin-top: 0;
  }
`;

const Form = styled.form<{isSuccess?: boolean | null}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.isSuccess ? '45px' : '10px'};
  
  a {
    width: 100%;
  }
`;

const Input = styled.input<{err?: boolean}>`
  width: 100%;
  height: 55px;
  padding: 14px 21px;
  background: ${props => props.err ? '#ffefef' : '#FFFFFF'};
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  font-weight: 700;
  border: ${props => props.err ? '2px solid #FF5959' : '2px solid #FFFFFF'};
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
  margin-top: 15px;
`;

const Error = styled.div`
  width: 100%;
  display: block;
  color: #ffb0b0;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 13px;
  margin-bottom: 15px;
`;

