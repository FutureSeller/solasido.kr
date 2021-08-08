import { extendTheme } from '@chakra-ui/react'

export const customTheme = {
  colors: {
    primary: '#fb2103',
    black: '#000',
    white: '#fff',
    gray: {
      light: '#f6f5f3',
      dark: '#b5b5b3',
    },
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    neueDisplay: 'Neue Display, sans-serif',
  },
  fontSizes: {
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    26: '26px',
    28: '28px',
    30: '30px',
    40: '40px',
    50: '50px',
    58: '58px',
    60: '60px',
    80: '80px',
    140: '140px',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    stickyTitle: 5,
    bloatTitle: 10,
    navigation: 20,
    header: 30,
    menuIcon: 40,
  },
  lineHeights: {
    base: 1.15,
  },
}

const theme = extendTheme(customTheme)
export type CustomTheme = typeof customTheme

export default theme
