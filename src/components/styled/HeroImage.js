import styled from 'styled-components';
import screen from './screen';

const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 100vw;
  line-height: 1;
  background-image: ${props => props.backgroundImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  ${screen.small`
    height: 31.4rem;
    background-position: left center;
  `}
`;

export default HeroImage;