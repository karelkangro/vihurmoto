import React from 'react'
// import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import { H1, H2 } from '../../components/styled/typography'
import { css } from 'styled-components'
import colors from '../../components/styled/colors';

export default class Index extends React.Component {
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
          <H1>Kontakt 📬</H1>
          <p>Asume kaasaegsel Auto 24 Ring ringrajal Pärnu külje all Audrus.</p>
          <H2 color={colors.blue} boxShadow={colors.red}>Vihurmoto Motorsport MTÜ</H2>
            <div
              css={`
                max-width: 22rem;
                text-align: center;
              `}
            >
              <p>Registri number:<br/> 12948879</p>
              <p>Juriidiline aadress: <br/>Audru ringrada, Papsaare küla</p>
              <p>Audru vald, Pärnu maakond, 88137</p>
              <p>
                <a
                  href="tel:+3725514404"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={`text-decoration: none; color: inherit;`}
                >
                  Tel: 5514404
                </a>| E-mail: motosport@vihurmoto.ee</p>
            </div>
          <H2 color={colors.blue} boxShadow={colors.red}>Vihurmoto OÜ</H2>
            <div
              css={`
                max-width: 22rem;
                text-align: center;
              `}
            >
              <p>Registri number:<br/> 12948879</p>
              <p>Juriidiline aadress: <br/>Sakala tn 12-11, Tallinn, 10141</p>
              <p>
                <a 
                  href="tel:+3725514404" 
                  target="_blank"
                  rel="noopener noreferrer"
                  css={`text-decoration: none; color: inherit;`}
                >
                  Tel: 5514404
                </a>| E-mail: info@vihurmoto.ee</p>
            </div>
        </section>
      </Layout>
    )
  }
}
