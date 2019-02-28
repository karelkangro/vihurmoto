import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { H2 } from '../components/styled/typography'
class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts && (posts
          .map(({ node: post }) => (
            <div
              key={post.id}
            >
            <article>
              <H2>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </H2>
              <p>{post.frontmatter.date}</p>
              {post.excerpt}
              <Link to={post.fields.slug}>
                Ava uudis <span role="img" aria-label="emoticon-hand">👆</span>
              </Link>
              </article>
            </div>
          )))
        }
      </div>
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
              date(formatString: "MMMM DD, YYYY")
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