import styled from 'styled-components';
import colors from './colors';

export const ButtonSend = styled.button`
  display: block;
  font-weight: bold;
  padding: .5rem 1rem;
  border-radius: 2rem;
  border: none;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  margin-top: .5rem;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;