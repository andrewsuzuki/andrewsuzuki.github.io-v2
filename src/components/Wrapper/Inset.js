import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'glamorous'
import { styled, breakpoint, loadKeyframes } from 'otep'


const Container = styled.div({
  position: 'relative',
  overflow: 'auto', // prevent margin collapse
})


const animatedgradient = loadKeyframes('animatedgradient', {
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})


const Background = withTheme(styled.div(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',

  zIndex: '-1',

  backgroundImage: theme.rel.backgroundGradient,
  backgroundSize: '400% 400%',
  animation: `${animatedgradient.name} 150s ease infinite`,
})))


const Inner = withTheme(styled.div(({ theme }) => ({
  background: theme.white,
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',

  ...breakpoint(theme, 'tablet', {
    margin: '2rem',
  }),
})))


const Inset = ({ children }) => (
  <Container>
    <Background />
    <Inner>
      {children}
    </Inner>
  </Container>
)

Inset.propTypes = {
  children: PropTypes.node,
}

export default Inset
