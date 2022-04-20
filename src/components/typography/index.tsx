import styled from 'styled-components';
import {COLORS} from '../../utils/colors';

type TextProps = {
    fontWeight?: string;
    color?: string;
    margin?: string;
    marginSm?: string;
    marginMd?: string;
    marginLg?: string;
    marginXl?: string;
    marginXxl?: string;
    sideColor?: string;
    textAlign?: string;
}

export const Title1 = styled.h1<TextProps>`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  background: -webkit-linear-gradient(-50deg, #FFFFFF 45%, #3ac6e7 130%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title3 = styled.h3<TextProps>`
  font-size: 16px;
  font-weight: bold;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

export const Body3 = styled.p<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLORS.black)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 21px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : props.marginSm ? props.marginSm : '15px 0')};

  @media (min-width: 992px) {
    font-size: 14px;
    margin: ${(props) => (props.marginXl ? props.marginXl : '15px 0')};
  }
`;
