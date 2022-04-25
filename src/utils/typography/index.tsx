import styled from 'styled-components';
import {COLORS} from '../colors';

type TextProps = {
    fontWeight?: string;
    fontSize?: string;
    color?: string;
    margin?: string;
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

export const Title2 = styled.h2<TextProps>`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
  z-index: 99;
`;

export const Title3 = styled.h3<TextProps>`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
  z-index: 99;
`;

export const Body1 = styled.p<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
`;

export const Body2 = styled.p<TextProps>`
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
`;

export const Body5 = styled.p<TextProps>`
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
`;

export const Label1 = styled.p<TextProps>`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;

export const Label2 = styled.p<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;

export const TextGradient = styled.div<TextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  background: -webkit-linear-gradient(0, #8F5AE0 -10.04%, #37B9C6 116.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

