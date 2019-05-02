import styled from 'styled-components';
import screen from './screen';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-items: flex-start;
  grid-gap: 1rem;
  justify-content: center;
  ${screen.medium`grid-template-columns: 768px;`};
`;