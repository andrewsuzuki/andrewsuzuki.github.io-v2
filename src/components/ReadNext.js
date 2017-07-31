import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


export default class ReadNext extends React.Component {
  render() {
    let { nextPost } = this.props
    if (nextPost && nextPost.children && nextPost.children[0]) {
      nextPost = nextPost.children[0]
    }

    if (!nextPost) {
      return null
    } else {
      return (
        <div>
          <h6>Read this next:</h6>
          <h3>
            <Link to={nextPost.fields.slug}>
              {nextPost.frontmatter.title}
            </Link>
          </h3>
          <p>
            {nextPost.excerpt}
          </p>
          <hr />
        </div>
      )
    }
  }
}

ReadNext.propTypes = {
  nextPost: PropTypes.shape({
    children: PropTypes.array,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string,
  }),
}


export const query = graphql`
  fragment ReadNext on MarkdownRemark {
    fields {
      slug
    }
    excerpt(pruneLength: 200)
    frontmatter {
      title
    }
  }
`
