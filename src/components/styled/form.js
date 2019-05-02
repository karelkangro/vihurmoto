import styled from 'styled-components'
import screen from './screen';
import colors from './colors';

export const StyledForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 16rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 2rem;
  z-index: 10;
  box-shadow: 0 3rem 5rem 0 ${colors.blueShadow};
  ${screen.medium``};
`;