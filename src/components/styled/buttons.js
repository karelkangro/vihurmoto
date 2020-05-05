import styled from 'styled-components';
import colors from './colors';
import { Link } from 'gatsby'

export const ButtonLink = styled(Link)`
  font-weight: bold;
  padding: 2rem;
  border-radius: 2rem;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;

export const ButtonSend = styled.button`
  display: block;
  font-weight: bold;
  padding: 1rem 1rem;
  min-width: 100px;
  border-radius: 2rem;
  border: none;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  margin-top: .5rem;
  cursor: pointer;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;

export const ButtonContact = styled.button`
  display: block;
  font-weight: bold;
  padding: 1.5rem;
  border-radius: 2rem;
  border: none;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  },
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: .5rem;
  top: 1rem;
  border: none;
  background: none;
  cursor: pointer;
`