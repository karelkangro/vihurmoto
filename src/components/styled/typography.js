import styled, { css } from 'styled-components';
import colors from './colors';
import screen from './screen';

export const sharedH1Styles = css`
  font-size: 1.777rem;
  font-weight: 700;
  padding: 1rem;
  text-align: center;
  border-radius: 2.369rem;
  color: ${colors.white};
  ${screen.small`
    font-size: 2.639rem;
    text-align: left;
    padding: 1.333rem;
  `}
  ${screen.medium`font-size: 3.157rem`}
`;

export const sharedH2Styles = css`
  font-size: 1.777rem;
  font-weight: 700;
  padding: 1rem;
  margin: 0;
  color: ${props => props.color};
  ${screen.small`
    font-size: 2.369rem;
  `};
`;

export const sharedBorderStyles = css`
  box-shadow: ${props => props.borderheight} ${props => props.border};
  ${screen.small`
    box-shadow: ${props => props.borderheight} ${props => props.border};
  `};
`;

export const H1 = styled.h1`${sharedH1Styles}`;

export const H1WidthBackground = styled.h1`
  ${sharedH1Styles}
  background: ${colors.blue};
`

export const H2WidthBoxShadow = styled.h2`
  ${sharedH2Styles}
  ${sharedBorderStyles}
  margin-bottom: .5rem;
`
export const H2 = styled.h2`
  ${sharedH2Styles}
`