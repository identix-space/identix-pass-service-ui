import React from 'react';
import styled from 'styled-components';
import {Body1, Label2} from '../../../utils/typography';
import {RealEstateIDCardProps} from './RealEstateIDCard.props';
import {formatDate} from '../../../utils/misc';

export const RealEstateIDCard = ({type, address, city, bedroomsNumber, issuanceDate}: RealEstateIDCardProps): JSX.Element => {

    return (<>
        <Card>
            <ImageTitleBlock>
                <Body1 fontWeight="700" color="black" margin="2px 0 0">{type} in {address}, {city} {bedroomsNumber} {bedroomsNumber.toString() === '1' ? 'bedroom' : 'bedrooms'}</Body1>
            </ImageTitleBlock>
            <BottomLeftLabel>
                <Label2 fontWeight="600">{formatDate(issuanceDate)}</Label2>
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
  padding: 20px 12px;
  transition: all .2s;

  &:hover {
    filter: drop-shadow(0px 4px 12px rgb(5, 5, 5));
  }

  @media(min-width: 1400px) {
    width: 265px;
  }
`;

const ImageTitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
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
`;
