import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { H3, H6 } from 'otep'


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
          <H6>Read this next:</H6>
          <H3>
            <Link to={nextPost.fields.slug}>
              {nextPost.frontmatter.title}
            </Link>
          </H3>
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
