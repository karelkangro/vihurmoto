import styled from 'styled-components';
import colors from './colors';
import screen from './screen';

export const H1 = styled.h1`
  font-size: 2.639rem;
  font-weight: 700;
  ${screen.small`font-size: 3.157rem;`}
  padding: 1.333rem;
  color: ${colors.white};
  background: ${colors.blue};
  border-radius: .75rem;
`;

export const H2 = styled.h1`
  font-size: 1.777rem;
  font-weight: 700;
  padding: 1rem;
  color: ${colors.blue};
  ${screen.small`font-size: 2.369rem;`}
`;
