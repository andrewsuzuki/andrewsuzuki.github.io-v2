import React from 'react'
import PropTypes from 'prop-types'
import { Container, Stickler, AtBottom } from 'otep'

import Footer from '../Footer'

import Inset from './Inset'

const sticklerMinHeightSpec = [
  {
    breakpoint: 'tablet',
    type: 'below',
    value: '100vh',
  },
  {
    breakpoint: 'tablet',
    type: 'above',
    value: 'calc(100vh - 4rem)',
  },
]

export default class Wrapper extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Inset>
        <Stickler minHeight={sticklerMinHeightSpec}>
          <Container>
            {children}
          </Container>
          <AtBottom>
            <Footer />
          </AtBottom>
        </Stickler>
      </Inset>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
