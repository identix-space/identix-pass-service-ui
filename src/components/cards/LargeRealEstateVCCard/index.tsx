import React from 'react';
import styled from 'styled-components';
import {Title3, Body1, Body2, Body5, Label2, TextGradient} from '../../../utils/typography';
import {LargeRealEstateVCCardProps, Status} from './LargeRealEstateVCCard.props';
import {RawDataModal} from '../../elements/RawDataModal';
import {useModal} from '../../hooks/useModal';
import {copyToClipboard, startAndEnd} from '../../../utils/misc';
import {Tooltip} from 'react-tooltip';

export const LargeRealEstateVCCard = ({did, status, vcParams, rawData}: LargeRealEstateVCCardProps): JSX.Element => {
    const {isShown, toggle} = useModal();

    function getJSON(json: string) {
        return JSON.stringify(JSON.parse(json), undefined, 2);
    }

    return (<>
        <Card status={status}>
            <TopInfo>
                <Title3 fontWeight="700" color="black" margin="3px 0 8px">Real Estate VC</Title3>
                {/*<a href={`https://ever.live/accounts/accountDetails?id=0%3A${did.slice(12)}`} target={'_blank'} rel="noreferrer">*/}
                <TextGradient fontSize="16px" color="black">{vcParams && vcParams.titledeedid && vcParams.titledeedid}</TextGradient>
                {/*</a>*/}
            </TopInfo>
            {vcParams
                ? <BottomInfo>
                    {(vcParams.city || vcParams.district || vcParams.address) &&
                    <Column>
                        {vcParams.city && <ColItem>
                            <Label2 color="#9E9E9E">City</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.city}</Body1>
                        </ColItem>}
                        {vcParams.district && <ColItem>
                            <Label2 color="#9E9E9E">District</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.district}</Body1>
                        </ColItem>}
                        {vcParams.address && <ColItem>
                            <Label2 color="#9E9E9E">Address</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.address}</Body1>
                        </ColItem>}
                    </Column>
                    }
                    {(vcParams.type || vcParams.bedrooms || vcParams.livingspace) &&
                    <Column>
                        {vcParams.type && <ColItem>
                            <Label2 color="#9E9E9E">Type</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.type}</Body1>
                        </ColItem>}
                        {vcParams.bedrooms && <ColItem>
                            <Label2 color="#9E9E9E">Bedrooms number</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.bedrooms}</Body1>
                        </ColItem>}
                        {vcParams.livingspace && <ColItem>
                            <Label2 color="#9E9E9E">Living space</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.livingspace}</Body1>
                        </ColItem>}
                    </Column>
                    }
                    {(vcParams.owner || vcParams.ownership_begin_date || vcParams.issuing_institution) &&
                    <Column>
                        {vcParams.owner && <ColItem>
                            <Label2 color="#9E9E9E">Owner</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.owner}</Body1>
                        </ColItem>}
                        {vcParams.ownership_begin_date && <ColItem>
                            <Label2 color="#9E9E9E">Ownership begin date</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.ownership_begin_date}</Body1>
                        </ColItem>}
                        {vcParams.issuing_institution && <ColItem>
                            <Label2 color="#9E9E9E">Issuing institution</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.issuing_institution}</Body1>
                        </ColItem>}
                    </Column>
                    }
                    {(vcParams.issuance_date || vcParams.certificate_id) &&
                    <Column>
                        {vcParams.issuance_date && <ColItem>
                            <Label2 color="#9E9E9E">Issuance date</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.issuance_date}</Body1>
                        </ColItem>}
                        {vcParams.certificate_id && <ColItem>
                            <Label2 color="#9E9E9E">Certificate id</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.certificate_id}</Body1>
                        </ColItem>}
                        {vcParams.issuing_institution && <ColItem>
                            <Label2 color="#9E9E9E">Issuing institution</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.issuing_institution}</Body1>
                        </ColItem>}
                    </Column>
                    }
                </BottomInfo> : <></>
            }
            <TopRightLabel status={status}>
                <Body5 fontWeight="700">{status}</Body5>
            </TopRightLabel>
            <BottomLeftLabel status={status}>
                <Body2 fontWeight="700">VC DID: <VcDid data-tooltip-id="copy-tooltip" data-tooltip-place="bottom" onClick={() => copyToClipboard(did)}>{startAndEnd(did, 13)}</VcDid></Body2>
            </BottomLeftLabel>
            <RawData onClick={toggle}>
                Raw data
            </RawData>
        </Card>
        {rawData && <RawDataModal headerText="Raw Data" isShown={isShown} hide={toggle} modalContent={getJSON(rawData)}/>}
        <Tooltip id="copy-tooltip" content="Click to copy"/>
    </>
    );
};


const Card = styled.div<Status>`
  position: relative;
  width: 100%;
  height: 400px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 8px;
  border: ${(props) => props.status ? '4px solid #3fd0e9' : '4px solid #74ACC9'};
  padding: 22px;

  @media(min-width: 1400px) {
    height: 420px;
  }
`;

const TopInfo = styled.div`
  position: relative;
  padding: 0 0 28px 20px;
`;

const BottomInfo = styled.div`
  position: relative;
  display: flex;
  padding: 28px 0 30px 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    background: url('/assets/gradient-line.svg') center/cover no-repeat;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 21%;
  gap: 20px;
  margin-right: 4%;
`;

const ColItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRightLabel = styled.div<Status>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.status === 'Review' ? '-3px' : '-2px'};
  right: ${(props) => props.status === 'Review' ? '-6px' : '-2px'};
  width: ${(props) => props.status === 'Review' ? '182px' : '192px'};
  height: 56px;
  padding-left: 29px;
  padding-bottom: 2px;
  background: ${(props) => props.status === 'Review' ? 'url(\'/assets/card-label-right-review.svg\') center/contain no-repeat' : 'url(\'/assets/card-label-right-lg.svg\') center/contain no-repeat'};
`;

const BottomLeftLabel = styled.div<Status>`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: ${(props) => props.status === 'Review' ? '-1px' : '-2px'};
  left: -1px;
  width: 400px;
  height: 55px;
  padding-left: 18px;
  background: ${(props) => props.status === 'Review' ? 'url(\'/assets/card-label-left-lg-review.svg\') center/contain no-repeat' : 'url(\'/assets/card-label-left-lg.svg\') center/contain no-repeat'};
`;

const RawData = styled.div`
  position: absolute;
  right: 35px;
  bottom: 25px;
  color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`;

const VcDid = styled.span`
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
