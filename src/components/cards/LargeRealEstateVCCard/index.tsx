import React from 'react';
import styled from 'styled-components';
import {Title3, Body1, Body2, Body5, Label2, TextGradient} from '../../../utils/typography';
import {LargeRealEstateVCCardProps} from './LargeRealEstateVCCard.props';
import {RawDataModal} from '../../elements/RawDataModal';
import {useModal} from '../../hooks/useModal';
import {formatDate, startAndEnd} from '../../../utils/misc';
import {Tooltip} from 'react-tooltip';

export const LargeRealEstateVCCard = ({did, url, vcParams, rawData}: LargeRealEstateVCCardProps): JSX.Element => {
    const {isShown, toggle} = useModal();

    function getJSON(json: string) {
        return JSON.stringify(JSON.parse(json), undefined, 2);
    }

    return (<>
        <Card>
            <TopInfo>
                <Title3 fontWeight="700" color="black" margin="3px 0 8px">Real Estate VC</Title3>
                {/*<a href={`https://ever.live/accounts/accountDetails?id=0%3A${did.slice(12)}`} target={'_blank'} rel="noreferrer">*/}
                <DidTextDesktop fontSize="16px" color="black">{vcParams && vcParams.titledeedid && startAndEnd(vcParams.titledeedid, 20)}</DidTextDesktop>
                <DidTextMobile fontSize="16px" color="black">{vcParams && vcParams.titledeedid && startAndEnd(vcParams.titledeedid, 15)}</DidTextMobile>
                {/*</a>*/}
            </TopInfo>
            {vcParams
                ? <BottomInfo>
                    {(vcParams.city || vcParams.district || vcParams.address || vcParams.type || vcParams.owner || vcParams.ownership_begin_date || vcParams.issuing_institution || vcParams.bedrooms || vcParams.issuance_date || vcParams.certificate_id || vcParams.issuing_institution || vcParams.livingspace) &&
                    <Column>
                        {vcParams.address && <ColItem>
                            <Label2 color="#9E9E9E">Address</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.address}</Body1>
                        </ColItem>}
                        {vcParams.city && <ColItem>
                            <Label2 color="#9E9E9E">City</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.city}</Body1>
                        </ColItem>}
                        {vcParams.district && <ColItem>
                            <Label2 color="#9E9E9E">District</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.district}</Body1>
                        </ColItem>}
                        {vcParams.type && <ColItem>
                            <Label2 color="#9E9E9E">Type</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.type}</Body1>
                        </ColItem>}
                        {vcParams.owner && <ColItem>
                            <Label2 color="#9E9E9E">Owner</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.owner}</Body1>
                        </ColItem>}
                        {vcParams.ownership_begin_date && <ColItem>
                            <Label2 color="#9E9E9E">Ownership begin date</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{formatDate(vcParams.ownership_begin_date)}</Body1>
                        </ColItem>}
                        {vcParams.issuing_institution && <ColItem>
                            <Label2 color="#9E9E9E">Issuing institution</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.issuing_institution}</Body1>
                        </ColItem>}
                        {vcParams.bedrooms && <ColItem>
                            <Label2 color="#9E9E9E">Bedrooms</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.bedrooms}</Body1>
                        </ColItem>}
                        {vcParams.issuance_date && <ColItem>
                            <Label2 color="#9E9E9E">Issuance date</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{formatDate(vcParams.issuance_date)}</Body1>
                        </ColItem>}
                        {vcParams.certificate_id && <ColItem>
                            <Label2 color="#9E9E9E">Certificate id</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.certificate_id}</Body1>
                        </ColItem>}
                        {vcParams.issuing_institution && <ColItem>
                            <Label2 color="#9E9E9E">Issuing institution</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.issuing_institution}</Body1>
                        </ColItem>}
                        {vcParams.livingspace && <ColItem>
                            <Label2 color="#9E9E9E">Living space</Label2>
                            <Body1 color="black" fontWeight="700" margin="0">{vcParams.livingspace}</Body1>
                        </ColItem>}
                    </Column>
                    }
                </BottomInfo> : <></>
            }
            <TopRightLabel>
                <Body5 fontWeight="700">Active</Body5>
            </TopRightLabel>
            <BottomLeftLabel>
                <Body2 fontWeight="700">VC DID: <a href={url} target="_blank" rel="noreferrer"><VcDidDesktop>{startAndEnd(did, 16)}</VcDidDesktop><VcDidMobile>{startAndEnd(did, 8)}</VcDidMobile></a></Body2>
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


const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 340px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 10px;
  border: 4px solid #74ACC9;
  padding: 22px 25px;

  @media (max-width: 840px) {
    padding: 18px;
  }
  
  @media (max-width: 600px) {
    min-height: 300px;
    border-radius: 8px;
    padding: 15px;
  }
`;

const DidTextDesktop = styled(TextGradient)`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

const DidTextMobile = styled(TextGradient)`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const TopInfo = styled.div`
  position: relative;
  padding: 0 0 28px 20px;

  @media (max-width: 840px) {
    padding: 0 0 21px 0;
  }

  @media (max-width: 600px) {
    padding: 0 0 21px 0;
  }
`;

const BottomInfo = styled.div`
  position: relative;
  display: flex;
  padding: 33px 0 65px 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    background: url('/assets/gradient-line.svg') center/cover no-repeat;
  }

  @media (max-width: 840px) {
    padding: 22px 0 58px 0;
  }
  
  @media (max-width: 600px) {
    padding: 20px 0 65px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 60px;

  @media (max-width: 840px) {
    gap: 25px 50px;
  }
  
  @media (max-width: 600px) {
    gap: 30px 60px;
  }
`;

const ColItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
`;

const TopRightLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -2px;
  right: -2px;
  width: 192px;
  height: 56px;
  padding-left: 29px;
  padding-bottom: 2px;
  background: url('/assets/card-label-right-lg.svg') center/contain no-repeat;

  @media (max-width: 840px) {
    height: 45px;
    width: 154px;
    top:-1px;
    right: -2px;
  }
  
  @media (max-width: 600px) {
    height: 38px;
    width: 132px;
    top: -1px;
    right: -2px;
  }
`;

const BottomLeftLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -1px;
  left: -1px;
  width: 430px;
  height: 59px;
  padding-left: 18px;
  background: url('/assets/card-label-left-lg.svg') bottom left/contain no-repeat;

  a {
    color: #FFFFFF;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 840px) {
    width: 290px;
    height: 40px;
    padding-left: 14px;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 34.4px;
    padding-left: 14px;
  }
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

  @media (max-width: 840px) {
    right: 15px;
    bottom: 12px;
    font-size: 14px;
  }
  
  @media (max-width: 600px) {
    right: 12px;
    bottom: 9px;
    font-size: 13px;
  }
`;

const VcDidDesktop = styled.span`
  display: inline;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const VcDidMobile = styled.span`
  text-decoration: none;
  cursor: pointer;
  display: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 840px) {
    display: inline;
  }
`;
