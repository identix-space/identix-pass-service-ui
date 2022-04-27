import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Title3, Body2} from '../../../utils/typography';

interface CardProps {
    title: string;
    description: string;
    img: string;
}

export const ServiceCard = ({title, description, img}: CardProps): JSX.Element => {
    return (
        <Card>
            <ImgWrapper>
                <Image src={img} layout="fill" objectFit="contain"/>
            </ImgWrapper>
            <div style={{flex: '1 1 auto'}}>
                <Title3 color="black" margin="0">{title}</Title3>
                <Body2 color="black" margin="10px 0">{description}</Body2>
            </div>
            <BottomRightLabel/>
        </Card>
    );
};

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 180px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 10px;
  border: 2px solid #3fd0e9;
  padding: 25px;
  margin-top: 25px;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 4px 12px rgb(5, 5, 5));
    transform: scale(0.99)
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 184px;
  height: 100%;
  margin-right: 25px;
  flex: 1 0 auto;
`;

const BottomRightLabel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -1px;
  right: -1px;
  width: 320px;
  height: 32px;
  padding-left: 18px;
  background: url('/assets/card-label-right-bottom-lg.svg') center/contain no-repeat;
`;
