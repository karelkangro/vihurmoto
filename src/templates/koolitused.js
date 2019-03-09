import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import screen from '../components/styled/screen';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-items: flex-start;
  grid-gap: 1rem;
  justify-content: center;
  ${screen.medium`grid-template-columns: 768px;`};
`;


export const KoolitusedTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Grid>
      <PageContent content={content} />
    </Grid>
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
