import React from 'react';
import styled from 'styled-components';
import {Body1, Body3, Label2} from '../../../utils/typography';
import {RealEstateIDCardProps} from './RealEstateIDCard.props';

export const RealEstateIDCard = ({type, address, city, titledeedid, owner}: RealEstateIDCardProps): JSX.Element => {

    return (<>
        <Card>
            <ImageTitleBlock>
                <TitleDeed color="#909090" margin="2px 0 0">{titledeedid} {titledeedid} {titledeedid} {titledeedid} {titledeedid} {titledeedid} {titledeedid} {titledeedid}</TitleDeed>
                <Address fontWeight="700" color="black" margin="2px 0 0">{type} in {address}, {city} shfhjagfghjh ghjhdjkasgf hghfjghfgkjahgjlfshafklashfkls</Address>
            </ImageTitleBlock>
            <BottomLeftLabel>
                <Label2 fontWeight="600">{owner}</Label2>
            </BottomLeftLabel>
        </Card>
    </>
    );
};

const Card = styled.div`
  position: relative;
  width: 245px;
  height: 125px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 10px;
  border: 2px solid #3fd0e9;
  padding: 5px 12px 30px;
  transition: all .2s;

  &:hover {
    filter: drop-shadow(0px 4px 12px rgb(5, 5, 5));
  }

  @media(min-width: 1400px) {
    width: 265px;
  }

  @media(max-width: 600px) {
    height: 140px;
    width: 100%;
  }
`;

const ImageTitleBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;

const TitleDeed = styled(Body3)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Address = styled(Body1)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
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
