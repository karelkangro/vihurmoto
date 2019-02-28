import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const KoolitusedTemplate = ({ title, content, contentComponent }) => {
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

KoolitusedTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Koolitused = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <KoolitusedTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

Koolitused.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Koolitused

export const KoolitusedQuery = graphql`
  query koolitused($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
