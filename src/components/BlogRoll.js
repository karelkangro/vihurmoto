import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import screen from '../components/styled/screen';
import colors from '../components/styled/colors';
import styled from 'styled-components'
import { sharedH2Styles } from '../components/styled/typography'

const BlogPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  align-items: flex-start;
  grid-gap: 1rem;
  ${screen.medium`grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));`};
`;

const BlogRollLink = styled(Link)`
  ${sharedH2Styles};
  padding: 0;
  line-height: 1.3;
  text-decoration: none;
  color: ${colors.blue};
  :hover {
    text-decoration: underline;
  }
`;

const BlogReadMoreLink = styled(Link)`
  margin-left: 1rem;
  color: ${colors.red};
  font-weight: 700;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section css={`
        margin-top: 2rem;
        margin-bottom: 4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        ${screen.medium`
          padding-left: 2rem;
          padding-right: 2rem;
        `}
      `}>
      <BlogPostGrid>
        {posts && (posts
          .map(({ node: post }) => (
            <article key={post.id} css={`margin-bottom: 1rem;`}>
              <BlogRollLink border={colors.transparent} to={post.fields.slug}>{post.frontmatter.title}</BlogRollLink>
              <p css={`color: ${colors.red}`}>{post.frontmatter.date}</p>
              {post.excerpt}
              <BlogReadMoreLink to={post.fields.slug}>
                Ava uudis <span role="img" aria-label="emoticon-hand">👆</span>
              </BlogReadMoreLink>
            </article>
          )))
        }
      </BlogPostGrid>
      </section>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "DD/MM, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)