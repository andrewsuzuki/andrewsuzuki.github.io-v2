import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { OtepProvider, themes } from 'otep'

import '../css/test.css'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}

export default class Wrapper extends React.Component {
  render() {
    let header
    // Check if the location is either the front page or a tags page.
    // If so, use a big header, otherwise use a smaller one.
    if (
      ['/', '/tags/'].indexOf(this.props.location.pathname) !== -1 ||
      this.props.location.pathname.indexOf('/tags/') !== -1
    ) {
      header = (
        <Link to="/">
          <h1>Andrew Suzuki</h1>
        </Link>
      )
    } else {
      header = (
        <Link to="/">
          <h1>Andrew Suzuki</h1>
        </Link>
      )
    }
    return (
      <OtepProvider theme={myTheme}>
        <div>
          <Helmet defaultTitle="Welcome" titleTemplate="Andrew Suzuki | %s" />
          <div>
            {header}
          </div>
          {this.props.children()}
        </div>
      </OtepProvider>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
