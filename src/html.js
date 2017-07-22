import React from 'react'
import PropTypes from 'prop-types'

import logo from './images/logo.png'


let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class Html extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      /* eslint-disable react/no-danger */
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
      /* eslint-enable react/no-danger */
    }

    /* eslint-disable react/no-danger */
    const bodyDiv = (
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
    )
    /* eslint-enable react/no-danger */

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="icon" type="image/png" sizes="1024x1024" href={logo} />
          {css}
        </head>
        <body>
          {bodyDiv}
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string.isRequired,
  headComponents: PropTypes.node, // NOTE i think?
  postBodyComponents: PropTypes.node, // NOTE i think?
}
