import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components';
import colors from './styled/colors';
import screen from './styled/screen';
import { SocialLink } from './styled/links'

const Header = styled.header`
  height: 5.61rem;
  background: ${colors.blue};
  width: 100%;
  ${screen.medium`
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;`}
`;

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  ${screen.medium`
    width: 12rem;
  `}
  height: auto;
  background: ${colors.blue};

  img {
    width: auto;
    height: 5.61rem;
  }

  .is-active & {
    display: none;
  }
`;

const NavbarGrid = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  ${screen.medium`grid-template-columns: 2fr 10fr;`}
  color: ${colors.white};
    .is-active {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${colors.blue};
      align-items: center;
    }
`;

const NavMenu = styled.div`
  transform: translateX(-100vw) translateY(-100vh);
  .is-active & {
    transform: translateX(0) translateY(0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  ${screen.medium`
    transform: translateX(0) translateY(0);
    display: grid;
    grid-template-columns: 11fr 1fr;
    justify-content: center;
    align-items: center;
  `}
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${screen.medium`
    flex-direction: row;
    justify-content: start;
  `}
`;

const SocialControl = styled.div`
  margin-top: 1rem;
  ${screen.medium`
    display: block;
    margin-top: 0;
  `}
`;

const NavLink = styled(Link)`
  font-size: 2rem;
  padding: .5rem;
  margin-right: 0;
  ${screen.medium`
    font-size: 1rem;
    margin-right: 1rem;
  `}
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};
  background: ${colors.blue};
`;

const NavBurger = styled.button`
  position: fixed;
  bottom: 1rem;
  right: .75rem;
  background-color: ${colors.red};
  border-radius: 50%;
  width: 3.4rem;
  height: 3.4rem;
  color: ${colors.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  cursor: pointer;
  z-index: 2;
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <Header
        role="navigation"
        aria-label="main-navigation"
      >
        <NavbarGrid className={`${this.state.navBarActiveClass}`}>
          <LogoLink to="/" title="Logo">
            <img src={logo} alt="Vihurmoto"/>
          </LogoLink>
          <NavMenu
            id="navMenu"
            className={`${this.state.navBarActiveClass}`}
          >
            <NavLinkWrapper>
              {/* <NavLink className="navbar-item" to="/">
                AVALEHT
              </NavLink> */}
              <NavLink className="navbar-item" to="/blog">
                UUDISED
              </NavLink>
              <NavLink className="navbar-item" to="/koolitused">
                KOOLITUSED
              </NavLink>
              <NavLink className="navbar-item" to="/treeningud">
                TREENINGUD
              </NavLink>
              <NavLink className="navbar-item" to="/trackday">
                TRACKDAY
              </NavLink>
              <NavLink className="navbar-item" to="/kontakt">
                KONTAKT
              </NavLink>
            </NavLinkWrapper>
            <SocialControl>
              <SocialLink
                href="https://www.facebook.com/VihurMoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </SocialLink>
            </SocialControl>
          </NavMenu>
        </NavbarGrid>
        <NavBurger
          className={`hamburger hamburger--vortex ${this.state.navBarActiveClass}`}
          type="button"
          onClick={() => this.toggleHamburger()}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </NavBurger>
      </Header>
    );
  }
};

export default Navbar