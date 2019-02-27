import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components';
import colors from './styled/colors';
import { auto } from 'eol';

const Header = styled.header`
  height: 100px;
  background: ${colors.blue};
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
`;

const NavbarGrid = styled.nav`
  display: grid;
  grid-template-columns: 2fr 10fr;
  align-items: center;
  grid-column-gap: 2rem;
  height: 100%;
  color: ${colors.white};
`;

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
`;

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: auto;
  background: ${colors.blue};

  & img {
    width: 100px;
    height: auto;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  padding: .5rem;
  margin-right: .5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.blue};
`;

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <Header>
        <NavbarGrid>
            <LogoLink to="/" title="Logo">
              <img src={logo} alt="Vihurmoto"/>
            </LogoLink>
          <NavMenu>
            <div>
              <NavLink to="/about">
                Meist
              </NavLink>
              <NavLink to="/products">
                Tooted
              </NavLink>
              <NavLink to="/blog">
                Uudised
              </NavLink>
              <NavLink to="/contact">
                Kontakt
              </NavLink>
              <NavLink to="/contact/examples">
                Jäta teade
              </NavLink>
            </div>
            <div>
              <a
                href="https://www.facebook.com/VihurMoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
          </NavMenu>
        </NavbarGrid>
      </Header>
    )
  }
}

export default Navbar
