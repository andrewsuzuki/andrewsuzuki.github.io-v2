import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'


export default class BlogIndexRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>
          {/* {this.props.data.site.siteMetadata.author}{' '}/{' '}
          {this.props.data.site.siteMetadata.homeCity}. */}
        </p>
        <ul>
          {posts.map(post =>
            <li key={post.node.fields.slug}>
              <Link to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </Link>
            </li>,
          )}
        </ul>
      </div>
    )
  }
}

BlogIndexRoute.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
    site: PropTypes.object,
  }),
}


export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        homeCity
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
