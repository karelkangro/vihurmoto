import styled, { css } from 'styled-components';
import colors from './colors';
import screen from './screen';

export const H1 = styled.h1`
  font-size: 1.777rem;
  font-weight: 700;
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
  background: ${colors.blue};
  border-radius: 2.369rem;
  ${screen.small`font-size: 2.639rem; padding: 2.369rem; text-align: left;`}
  ${screen.medium`font-size: 3.157rem`}
`;

export const sharedH2Styles = css`
  font-size: 1.777rem;
  font-weight: 700;
  padding: 1rem;
  color: ${props => props.color};
  ${screen.small`font-size: 2.369rem;`};
`;


export const H2 = styled.h2`
  ${sharedH2Styles}
`;