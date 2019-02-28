import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import { SocialLink } from './styled/links'
import colors from './styled/colors'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
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
        <div>
          <img
            src={logo}
            alt="Vihurmoto"
          />
        </div>
        <FooterNav>
          <FooterNavLink to="/">Avaleht</FooterNavLink>
          <FooterNavLink to="/about">Meist</FooterNavLink>
          <FooterNavLink to="/products">Products</FooterNavLink>
          <FooterNavLink to="/blog">Viimased postitused</FooterNavLink>
          <FooterNavLink to="/kontakt/examples">Kontakt examples</FooterNavLink>
          <FooterNavLink to="/kontakt">Kontakt</FooterNavLink>
          <a
            css={`
              color: ${colors.white};
              text-decoration: none;
            `}
            href="/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </FooterNav>
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
