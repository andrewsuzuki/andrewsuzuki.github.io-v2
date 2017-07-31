import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../Footer'


export default class Wrapper extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
