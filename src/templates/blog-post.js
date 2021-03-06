import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
// eslint-disable-next-line
import styled, { css } from 'styled-components';
// components
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
// style utils
import colors from '../components/styled/colors'
import screen from '../components/styled/screen'

const BlogContent = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  ${screen.medium`grid-template-columns: 1fr 2fr 1fr;`}
  padding-top: 1rem;
  padding-bottom: 4rem;
`;

const TagLink = styled(Link)`
  display: block;
  font-weight: bold;
  padding: .5rem;
  border-radius: 1rem;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <BlogContent>
      {helmet || ''}
      <div></div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <PostContent content={content} />
        {tags && tags.length
          ? (
            <div css={`display: grid; grid-template-rows: 1fr 1fr 1fr;`}>
              <h4>Sildid</h4>
              <ul css={`list-style: none; margin: 0; padding: 0;`}>
                {tags.map(tag => (
                  <li key={tag + `tag`} css={`display: flex;`}>
                    <TagLink to={`/tags/${kebabCase(tag)}/`}>{tag}</TagLink>
                  </li>
                ))}
              </ul>
            </div>
          )
          : null
        }
        <div>
          <Link to="/blog" color={colors.blue}>
            <span role="img" aria-label="hand">👈</span> Tagasi blogisse
          </Link>
        </div>
      </div>
      <div></div>
    </BlogContent>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Uudised">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
