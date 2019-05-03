import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

//components
import Layout from '../components/Layout'
import SectionWithBackground from '../components/styled/SectionWithBackground'
import { H1WidthBackground } from '../components/styled/typography'
import { Grid } from '../components/styled/grid';

export const GaraazPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <SectionWithBackground
        backgroundImage={`url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}
        backgroundPosition={`right center`}
        backgroundPositionScreenSmall={`bottom center`}
      >
        <div css={`
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
          <H1WidthBackground>{title}</H1WidthBackground>
        </div>
      </SectionWithBackground>
      <Grid>
        <section css={`display: flex; flex-direction: column; justify-content: center; align-items: center; padding-bottom: 5rem;`}>
        <PageContent content={content} />
        </section>
      </Grid>
    </div>
  )
}

GaraazPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GaraazPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GaraazPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

GaraazPage.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default GaraazPage

export const garaazPageQuery = graphql`
  query GaraazPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
