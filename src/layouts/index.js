import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { OtepProvider } from 'otep'

import Wrapper from '../components/Wrapper'

import theme from '../theme'


export default class MainLayout extends React.Component {
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
      <OtepProvider theme={theme}>
        <div>
          <Helmet defaultTitle="Welcome" titleTemplate="Andrew Suzuki | %s" />
          <Wrapper>
            <div>
              {header}
            </div>
            {this.props.children()}
          </Wrapper>
        </div>
      </OtepProvider>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
