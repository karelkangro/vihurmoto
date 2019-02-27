import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import styled from 'styled-components';

import { H1, H2 } from '../components/styled/typography'
import HeroImage from '../components/styled/HeroImage'

const ButtonLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  border: solid 10px palegoldenrod;
  padding: 1rem;
  border-radius: 50px;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
    <div>
      <HeroImage backgroundImage={`url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}>
        <H1>{ title }</H1>
        <h3>{ subheading }</h3>
      </HeroImage>
      <section>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <H2>{mainpitch.title}</H2>
                  </div>
                  <div>
                    <h3>{mainpitch.description}</h3>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div>
                <div>
                  <ButtonLink to="/products">
                    to="/products"
                  </ButtonLink>
                  </div>
                </div>
                <div>
                    <h3>
                      Loe blogist, mis teoksil <span role="img" aria-label="image">👇</span>
                    </h3>
                    <BlogRoll />
                    <div>
                    <ButtonLink to="/blog">
                      Blogi avalehele
                    </ButtonLink>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
