import React from 'react'
// import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import { H2WidthBoxShadow } from '../../components/styled/typography'
// eslint-disable-next-line
import { css } from 'styled-components'
import colors from '../../components/styled/colors';
import { navigate } from 'gatsby-link'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-bottom: 4rem;
            padding-top: 1rem;
          `}
        >
          <p>Asume kaasaegsel Auto 24 Ring ringrajal Pärnu külje all Audrus.</p>
          <H2WidthBoxShadow color={colors.blue} borderheight={`0px 0.333rem 0px 0px`} border={colors.red}>Vihurmoto Motorsport MTÜ</H2WidthBoxShadow>
          <div
            css={`
              max-width: 22rem;
              text-align: center;
            `}
          >
            <p>
              <a
                href="tel:+3725514404"
                target="_blank"
                rel="noopener noreferrer"
                css={`text-decoration: none; color: inherit;`}
              >
                Tel: 5514404
              </a>| E-mail: motosport@vihurmoto.ee
            </p>
            <p>Registri number:<br/> 12948879</p>
            <a
              href="https://goo.gl/maps/fmwDWKi54Gv"
              target="_blank"
              rel="noopener noreferrer"
              css={`text-decoration: none; color: inherit;`}
            >
              <p>Juriidiline ja tegevuse aadress: <br />Audru ringrada, Papsaare küla
            Audru vald, Pärnu maakond, 88137</p>
            </a>
          </div>
          <H2WidthBoxShadow color={colors.blue} borderheight={`0px 0.333rem 0px 0px`} border={colors.red}>Vihurmoto OÜ</H2WidthBoxShadow>
          <div
            css={`
              max-width: 22rem;
              text-align: center;
            `}
          >
            <p>
              <a
                href="tel:+3725514404"
                target="_blank"
                rel="noopener noreferrer"
                css={`text-decoration: none; color: inherit;`}
              >
                Tel: 5514404
                </a>| E-mail: info@vihurmoto.ee</p>
              <p>Registri number:<br/> 12948879</p>
              <p>Juriidiline aadress: <br/>Sakala tn 12-11, Tallinn, 10141</p>
          </div>
        </section>
        <section css={`
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          padding-top: 2rem;
          padding-bottom: 2rem;
        `}>
          <h1>Jäta teade</h1>
          <form
            name="kontakt"
            method="post"
            action="/kontakt/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Ära seda täida:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label htmlFor={'name'}>
                Sinu nimi
                  </label>
              <div>
                <input
                  type={'text'}
                  name={'name'}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label htmlFor={'email'}>
                E-mail
                  </label>
              <div>
                <input
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label htmlFor={'message'}>
                Sõnum
                  </label>
              <div cl>
                <textarea
                  name={'message'}
                  onChange={this.handleChange}
                  id={'message'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <button type="submit">
                Saada
                  </button>
            </div>
          </form>
        </section>
      </Layout>
    )
  }
}
