/* eslint-disable camelcase */
import React, {FC, useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import {Button, ButtonGradient, Loader} from '../../elements';
import {Body1, Body4} from '../../../utils/typography';
import {useGetVcTypesQuery, useIssuerVcMutation} from '../../../generated/graphql';
import {useMyAccountInfoStore} from '../../../store/store';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, {DayValue, utils} from '@hassanmojab/react-modern-calendar-datepicker';
import {convertDate} from '../../../utils/misc';


// eslint-disable-next-line sonarjs/cognitive-complexity
export const IssueRealEstateIDForm: FC = () => {
    const [match, setMatch] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [issuanceDate, setIssuanceDate] = useState<DayValue>(null);
    const [ownershipBeginDate, setOwnershipBeginDate] = useState<DayValue>(null);
    const {myDid, dataFromUAE} = useMyAccountInfoStore();
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
    const {data: vcTypesData} = useGetVcTypesQuery();
    const [issuerVc, {loading, data}] = useIssuerVcMutation();

    const issueVc = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (vcTypesData) {
            if (issuanceDate) {
                fields.issuance_date = convertDate(issuanceDate);
            }
            if (ownershipBeginDate) {
                fields.ownership_begin_date = convertDate(ownershipBeginDate);
            }
            if (dataFromUAE) {
                fields.owner = dataFromUAE.fullnameEN;
            }
            console.log(fields);
            if (Object.values(fields).every(x => x !== '')) {
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
            {(loading && !data) ? <Loader/>
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
                            <Input id="titledeedid" type="text" placeholder="Real Estate Gov ID" err={!match && fields.titledeedid === ''} onChange={handleFieldChange}/>
                            <Input id="city" type="text" placeholder="City" err={!match && fields.city === ''}
                                onChange={handleFieldChange}/>
                            <Input id="district" type="text" placeholder="District" err={!match && fields.district === ''}
                                onChange={handleFieldChange}/>
                            <Input id="address" type="text" placeholder="Address" err={!match && fields.address === ''}
                                onChange={handleFieldChange}/>
                            <Input id="type" type="text" placeholder="Type" err={!match && fields.type === ''} onChange={handleFieldChange}/>
                            <Input id="bedrooms" type="text" placeholder="Bedrooms" err={!match && fields.bedrooms === ''} onChange={handleFieldChange}/>
                            <Input id="livingspace" type="text" placeholder="Living space" err={!match && fields.livingspace === ''} onChange={handleFieldChange}/>
                            <Input id="owner" type="text" placeholder="Owner" value={dataFromUAE.fullnameEN} disabled/>
                            <DatePicker
                                value={ownershipBeginDate}
                                colorPrimary="#0BCDED"
                                onChange={setOwnershipBeginDate}
                                inputPlaceholder="Ownership Begin Date"
                                inputClassName={(!match && ownershipBeginDate === null) ? 'datepickerError' : ''}
                            />
                            <Input id="issuance_institution" type="text" placeholder="Issuance institution" err={!match && fields.issuance_institution === ''}
                                onChange={handleFieldChange}/>
                            <DatePicker
                                value={issuanceDate}
                                colorPrimary="#0BCDED"
                                onChange={setIssuanceDate}
                                maximumDate={utils('en').getToday()}
                                inputPlaceholder="Issuance Date"
                                inputClassName={(!match && issuanceDate === null) ? 'datepickerError' : ''}
                            />
                            <Input id="certificate_id" type="text" placeholder="Certificate ID" err={!match && fields.certificate_id === ''} onChange={handleFieldChange}/>
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
    color: #939393;
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

