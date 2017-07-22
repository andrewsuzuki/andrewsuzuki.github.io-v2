import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import ReadNext from '../components/ReadNext'


// const query = `
// readNext___file {
//   children {
//     ... on MarkdownRemark {
//       fields { slug }
//       excerpt(pruneLength: 200)
//       frontmatter {
//         title
//       }
//     }
//   }
// }
// `


export default class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider =
          i < tagsArray.length - 1 &&
          <span>
            {' | '}
          </span>
        return (
          <span key={tag}>
            <Link to={tag}>
              {post.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <em>
          Tagged with {tags}
        </em>
      )
    }

    // eslint-disable-next-line react/no-danger
    const dangerDiv = <div dangerouslySetInnerHTML={{ __html: post.html }} />

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />
        <h1>
          {post.frontmatter.title}
        </h1>
        {dangerDiv}
        {tagsSection}
        <p>Posted {post.frontmatter.date}</p>
        <hr />
        <ReadNext nextPost={post.frontmatter.readNext} />
        <p>
          <strong>{this.props.data.site.siteMetadata.author}</strong> lives and
          works in {this.props.data.site.siteMetadata.homeCity}.
        </p>
      </div>
    )
  }
}

BlogPostRoute.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string,
        homeCity: PropTypes.string,
      }),
    }),
  }),
}


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
