import { themes } from 'otep'


const standard = themes.standard


const theme = {
  ...standard,

  linkHoverDecoration: 'none',

  baseFontFamily: 'Inconsolata, "Courier New", Courier, sans-serif',
  baseFontSize: '18px',

  headingFontFamily: 'freight-neo-pro, Helvetica, sans-serif',
  h1FontWeight: 500,
  h2FontWeight: 500,
  h3FontWeight: 500,
  h4FontWeight: 500,
  h5FontWeight: 500,
  h6FontWeight: 500,

  rel: {
    backgroundGradient: 'linear-gradient(-45deg, hsl(14, 62%, 62%), hsl(336, 58%, 57%), hsl(195, 51%, 48%), hsl(165, 51%, 48%))',
  },
}

export default theme
