import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GaraazPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h2>
        {title}
      </h2>
      <PageContent content={content} />
    </section>
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
      />
    </Layout>
  )
}

GaraazPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GaraazPage

export const garaazPageQuery = graphql`
  query GaraazPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
