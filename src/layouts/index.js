import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { OtepProvider, H1 } from 'otep'

import Wrapper from '../components/Wrapper'
import A from '../components/A'

import theme from '../theme'


export default class MainLayout extends React.Component {
  render() {
    return (
      <OtepProvider theme={theme}>
        <div>
          <Helmet defaultTitle="Welcome" titleTemplate="Andrew Suzuki | %s" />
          <Wrapper>
            <div>
              <Link to="/">
                <H1>as</H1>
              </Link>
              This is a <A href="#">test</A> of the hyperlink.
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
