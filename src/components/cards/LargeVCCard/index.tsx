import React from 'react';
import styled from 'styled-components';
import {Title3, Body1, Body2, Body5, Label2, TextGradient} from '../../../utils/typography';
import Image from 'next/image';
import {LargeVCCardProps} from './LargeVCCard.props';

export const LargeVCCard = ({title, did, status, issued, img}: LargeVCCardProps): JSX.Element => {
    return (
        <Card>
            <TopInfo>
                <Image src={img} width="92" height="92"/>
                <MainInfo>
                    <Title3 fontWeight="700" color="black" margin="3px 0 0">{title}</Title3>
                    <TextGradient fontSize="16px" color="black">{did}</TextGradient>
                    <Body1 color="black" margin="16px 0 0"><strong>Issued:</strong> {issued}</Body1>
                </MainInfo>
            </TopInfo>
            <BottomInfo>
                <Column>
                    <ColItem>
                        <Label2 color="#9E9E9E">Name</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">Test</Body1>
                    </ColItem>
                    <ColItem>
                        <Label2 color="#9E9E9E">Last Name</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">Test</Body1>
                    </ColItem>
                </Column>
                <Column>
                    <ColItem>
                        <Label2 color="#9E9E9E">Citizenship</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">Everscale.Land</Body1>
                    </ColItem>
                    <ColItem>
                        <Label2 color="#9E9E9E">Date of birth</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">01 Jan 1970</Body1>
                    </ColItem>
                </Column>
            </BottomInfo>
            <TopRightLabel>
                <Body5 fontWeight="700">{status}</Body5>
            </TopRightLabel>
            <BottomLeftLabel>
                <Body2 fontWeight="700">VC DID: {did}</Body2>
            </BottomLeftLabel>
            <RawData>
                Raw data
            </RawData>
        </Card>
    );
};

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 8px;
  border: 4px solid #3fd0e9;
  padding: 22px;

  @media(min-width: 1400px) {
    height: 420px;
  }
`;

const TopInfo = styled.div`
  position: relative;
  display: flex;
  padding: 0 0 28px 30px;
`;

const MainInfo = styled.div`
  padding-left: 65px;
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
  gap: 20px;
  margin-right: 118px;
`;

const ColItem = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const BottomLeftLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -1px;
  left: -1px;
  width: 400px;
  height: 55px;
  padding-left: 18px;
  background: url('/assets/card-label-left-lg.svg') center/contain no-repeat;
`;

const RawData = styled.div`
  position: absolute;
  right: 35px;
  bottom: 45px;
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
