import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <img
            src={logo}
            alt="Vihurmoto"
          />
        </div>
        <div>
          <div>
              <div >
                <div>
                <section>
                    <ul>
                      <li><Link to="/">Avaleht</Link></li>
                      <li><Link to="/about">Meist</Link></li>
                      <li><Link to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                    <Link to="/contact/examples">
                      Kontakt
                    </Link>
                    </li>
                    <li><a
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a></li>
                    </ul>
                  </section>
                </div>
                <div>
                <section>
                  <ul >
                  <li>
                    <Link to="/blog">
                      Viimased postitused
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      Kontakt
                    </Link>
                  </li>
                  </ul>
                </section>
                </div>
                <div>
                  <a title="facebook" href="https://facebook.com">
                    <img 
                      src={facebook}
                      alt="Facebook"
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                    src={instagram}
                    alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
