import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Body2, Label1, Label2} from '../../../utils/typography';

interface CardProps {
    citizenship: string;
    title: string;
    did: string;
    status: 'Active' | 'Expired';
    img: string;
}

export const SmallVCCard = ({citizenship, title, did, status, img}: CardProps): JSX.Element => {
    return (
        <Card>
            <Label1 color="black">{citizenship}</Label1>
            <ImageTitleBlock>
                <Image src={img} width="62" height="62"/>
                <Body2 fontWeight="700" color="black" margin="2px 0 0">{title}</Body2>
            </ImageTitleBlock>
            <TopRightLabel>
                <Label2 fontWeight="700">{status}</Label2>
            </TopRightLabel>
            <BottomLeftLabel>
                <Label2 fontWeight="700">VC DID: {did}</Label2>
            </BottomLeftLabel>
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
    transform: scale(0.99)
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
  bottom: -1px;
  left: -1px;
  width: 320px;
  height: 32px;
  padding-left: 18px;
  background: url('/assets/card-label-left-sm.svg') center/contain no-repeat;
`;
