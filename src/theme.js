import { themes } from 'otep'


const standard = themes.standard


const theme = {
  ...standard,

  baseFontFamily: 'stevie-sans, Helvetica, sans-serif',
  baseFontSize: '18px',

  rel: {
    backgroundGradient: 'linear-gradient(-45deg, hsl(14, 62%, 62%), hsl(336, 58%, 57%), hsl(195, 51%, 48%), hsl(165, 51%, 48%))',
  },
}

export default theme
