import React from 'react'
// import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import { H2WidthBoxShadow } from '../../components/styled/typography'
// eslint-disable-next-line
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
      </Layout>
    )
  }
}
