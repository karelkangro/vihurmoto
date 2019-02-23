import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import logo from '../img/logo.svg'

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
      <header>
        <nav>
          <div>
            <Link to="/" title="Logo">
              <img src={logo} alt="Vihurmoto"/>
            </Link>
            <div className="nav-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="menu nav__menu">
            <div>
              <Link to="/about">
                Meist
              </Link>
              <Link to="/products">
                Tooted
              </Link>
              <Link to="/blog">
                Uudised
              </Link>
              <Link to="/contact">
                Kontakt
              </Link>
              <Link to="/contact/examples">
                Jäta teade
              </Link>
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
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
