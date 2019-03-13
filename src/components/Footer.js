import React from 'react'
import { Link } from 'gatsby'

// styles
// eslint-disable-next-line
import styled, { css } from 'styled-components'
import colors from './styled/colors'
import { SocialLink } from './styled/links'

// images
import logo from '../img/logosmall.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background: ${colors.blue};
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterNavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <div
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${colors.white}
          `}
        >
          <div
            css={`
              max-width: 22rem;
              text-align: center;
            `}
          >
            <img
              src={logo}
              alt="Vihurmoto"
              css={`width: 10rem; height: 5rem;`}
            />
          </div>
        </div>
        <FooterNav>
          <FooterNavLink to="/">Avaleht</FooterNavLink>
          <FooterNavLink to="/blog">Uudised</FooterNavLink>
          <FooterNavLink to="/koolitused">Koolitused</FooterNavLink>
          {/* <FooterNavLink to="/products">Products</FooterNavLink> */}
          <FooterNavLink to="/kontakt">Kontakt</FooterNavLink>
        </FooterNav>
        <p css={`text-align: center; color: ${colors.white}`}>
          <a
            href="tel:+3725514404"
            target="_blank"
            rel="noopener noreferrer"
            css={`text-decoration: none; color: inherit;`}
          >
            <span role="img" aria-label="hand" alt="hand">🤙</span> 55 14 404
          </a><br />
          info@vihurmoto.ee
        </p>
        <div
          css={`
            display: grid;
            grid-template-columns: repeat(2, 3rem);
            align-content: center;
            justify-content: center;
          `}
        >
          <SocialLink title="facebook" href="https://facebook.com">
            <img src={facebook} alt="Facebook"/>
          </SocialLink>
          <SocialLink title="instagram" href="https://instagram.com">
            <img src={instagram} alt="Instagram"/>
          </SocialLink>
        </div>
      </StyledFooter>
    )
  }
}

export default Footer
