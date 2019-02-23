import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

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
        <div
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
    >
  <div style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column' }}>
      <h1
        style={{
          boxShadow: 'rgb(136,0,0) 0.5rem 0px 0px, rgb(136,0,0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(136,0,0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {title}
      </h1>
      <h3
        style={{
          boxShadow: 'rgb(136,0,0) 0.5rem 0px 0px, rgb(136,0,0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(136,0,0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {subheading}
      </h3>
      </div>
    </div>
  <section>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h1>{mainpitch.title}</h1>
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
                <Link to="/products">
                  to="/products"
                </Link>
                </div>
              </div>
              <div>
                  <h3>
                    Loe blogist, mis teoksil <span role="img" aria-label="image">👇</span>
                  </h3>
                  <BlogRoll />
                  <div>
                  <Link to="/blog">
                    Blogi avalehele
                  </Link>
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
