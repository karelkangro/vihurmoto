import styled from 'styled-components';
import screen from './screen';

const SectionWithBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 100vw;
  padding: 0;
  background-image: ${props => props.backgroundImage};
  background-position: center center;
  background-position: ${props => props.backgroundPosition};
  background-attachment: ${props => props.backgroundAttachment};
  background-repeat: no-repeat;
  background-size: cover;
  ${screen.small`
    height: 31.4rem;
    background-position: ${props => props.backgroundPositionScreenSmall};
    background-attachment: fixed;
  `}
`;

export default SectionWithBackground;