import React from 'react';
import styled from 'styled-components';
import {Body2, Label2} from '../../../utils/typography';
import {EmiratesIDVCCardProps} from './EmiratesIDVCCard.props';
import {startAndEnd} from '../../../utils/misc';

export const EmiratesIDVCCard = ({did, firstName, lastName}: EmiratesIDVCCardProps): JSX.Element => {

    return (
        <Card>
            <ImageTitleBlock>
                <Name fontWeight="700" color="black" margin="2px 0 0">{firstName} {lastName}</Name>
            </ImageTitleBlock>
            <BottomLeftLabel>
                <Label2 fontWeight="600">VC DID: <u>{startAndEnd(did, 6)}</u></Label2>
            </BottomLeftLabel>
        </Card>
    );
};

const Card = styled.div`
  position: relative;
  width: 245px;
  height: 125px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 8px;
  border: 2px solid #3fd0e9;
  padding: 20px 12px;
  transition: all .2s;

  &:hover {
    filter: drop-shadow(0px 4px 12px rgb(5, 5, 5));
  }

  @media(min-width: 1400px) {
    width: 265px;
  }
  
  @media(max-width: 840px) {
    height: 140px;
    width: 100%;
  }
`;

const ImageTitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-top: 11px;
`;

const Name = styled(Body2)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BottomLeftLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -4px;
  left: -1px;
  width: 200px;
  height: 27px;
  padding-left: 13px;
  background: url('/assets/card-label-left-sm.svg') center/contain no-repeat;
  
  @media(min-width: 1400px) {
    width: 220px;
    height: 29px;
    bottom: -4px;
  }

  @media(max-width: 600px) {
    width: 249px;
    height: 33px;
    padding-bottom: 2px;
  }
`;
