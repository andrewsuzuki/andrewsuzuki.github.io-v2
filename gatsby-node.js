const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const webpackLodashPlugin = require('lodash-webpack-plugin')


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve) => {
    const blogPost = path.resolve('src/templates/blog-post.js')
    const tagPages = path.resolve('src/templates/tag-page.js')

    graphql(`
      {
        allMarkdownRemark(
          limit: 1000,
          filter: { frontmatter: { draft: { ne: true } } },
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors)
        resolve()
      }

      // Create blog posts pages.
      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        createPage({
          path: edge.node.fields.slug, // required
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })

      // Tag pages.
      const tags = _.uniq(result.data.allMarkdownRemark.edges.reduce((acc, edge) => {
        const edgeTags = _.get(edge, 'node.frontmatter.tags')

        return edgeTags ? acc.concat(edgeTags) : acc
      }, []))

      tags.forEach((tag) => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`

        createPage({
          path: tagPath,
          component: tagPages,
          context: { tag },
        })
      })

      resolve()
    })
  })
}


// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`
    createNodeField({ node, name: 'slug', value: slug })
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug,
    })
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tags/${_.kebabCase(tag)}/`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }
  }
}


// Add Lodash plugin
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
}
