import styled from 'styled-components';
import screen from './screen';

const HeroBackground = styled.section`
  height: 75vh;
  width: 100vw;
  padding: 0;
  background-image: ${props => props.backgroundImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  ${screen.small`
    height: 31.4rem;
    background-position: left center;
  `}
`;

export default HeroBackground;