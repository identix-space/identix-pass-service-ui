import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Body2, Label1, Label2} from '../../../utils/typography';
import {SmallVCCardProps} from './SmallVCCard.props';
import {startAndEnd} from '../../../utils/misc';

export const SmallVCCard = ({citizenship, title, did, status, img, verificationStatus}: SmallVCCardProps): JSX.Element => {

    return (
        <Card>
            <Label1 color="black">{citizenship}</Label1>
            <ImageTitleBlock>
                <Image src={img} width="62" height="62"/>
                <Body2 fontWeight="700" color="black" margin="2px 0 0">{title}</Body2>
            </ImageTitleBlock>
            {verificationStatus && <VerificationLabel>
                <Label2 fontWeight="600" color={verificationStatus === 'approved' ? '#7EF606' : verificationStatus === 'rejected' ? '#FF0000' : verificationStatus === 'pendingApproval' ? '#999999' : '#FFFFFF'}>{verificationStatus === 'pendingApproval' ? 'Pending' : verificationStatus}</Label2>
            </VerificationLabel>}
            <TopRightLabel>
                <Label2 fontWeight="600">{status}</Label2>
            </TopRightLabel>
            <BottomLeftLabel>
                <Label2 fontWeight="600">VC DID: <u>{startAndEnd(did, 7)}</u></Label2>
            </BottomLeftLabel>
            {/*<SendToVerifier>*/}
            {/*    <Body3 fontWeight="700" color="black">Send to verifier</Body3>*/}
            {/*</SendToVerifier>*/}
        </Card>
    );
};

const Card = styled.div`
  position: relative;
  width: 355px;
  height: 165px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 10px;
  border: 2px solid #3fd0e9;
  padding: 18px 20px;
  transition: all .2s;

  &:hover {
    filter: drop-shadow(0px 4px 12px rgb(5, 5, 5));
  }

  @media (min-width: 1400px) {
    width: 410px;
    height: 185px;
  }
`;

const ImageTitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-top: 11px;
`;

const VerificationLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1px;
  right: 50px;
  width: 160px;
  height: 32px;
  padding-right: 15px;
  text-transform: capitalize;
  padding-bottom: 2px;
  background: url('/assets/service-card-label.svg') center/contain no-repeat;
`;

const TopRightLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: -1px;
  right: -1px;
  width: 88px;
  height: 32px;
  padding-left: 29px;
  padding-bottom: 2px;
  background: url('/assets/card-label-right-sm.svg') center/contain no-repeat;
`;

const BottomLeftLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -4px;
  left: -3px;
  width: 250px;
  height: 32px;
  padding-left: 13px;
  background: url('/assets/card-label-left-sm.svg') center/contain no-repeat;
`;

// const SendToVerifier = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 16px;
//   color: black;
//   text-decoration: underline;
//
//   &:hover {
//     text-decoration: none;
//   }
// `;
