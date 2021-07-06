const breakpoints = {
  xxl: '1546px',
  xl: '1280px',
  lg: '1024px',
  md: '768px',
  sm: '480px',
  xs: '375px'
}

const xsOnly = `@media only screen and (max-width: ${breakpoints.xs})`
const smOnly = `@media only screen and (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm})`
const mdOnly = `@media only screen and (min-width: ${breakpoints.sm} and (max-width: ${breakpoints.md}))`
const lgOnly = `@media only screen and (min-width: ${breakpoints.md} and (max-width: ${breakpoints.lg}))`
const xlOnly = `@media only screen and (min-width: ${breakpoints.lg} and (max-width: ${breakpoints.xl}))`
const xxlOnly = `@media only screen and (min-width: ${breakpoints.xl} and (max-width: ${breakpoints.xxl}))`

const xsLte = `@media only screen and (max-width: ${breakpoints.xs})`
const smLte = `@media only screen and (max-width: ${breakpoints.sm})`
const mdLte = `@media only screen and (max-width: ${breakpoints.md})`
const lgLte = `@media only screen and (max-width: ${breakpoints.lg})`
const xlLte = `@media only screen and (max-width: ${breakpoints.xl})`
const xxlLte = `@media only screen and (max-width: ${breakpoints.xxl})`

export const responsive = {
  xsOnly,
  smOnly,
  mdOnly,
  lgOnly,
  xlOnly,
  xxlOnly,
  xsLte,
  smLte,
  mdLte,
  lgLte,
  xlLte,
  xxlLte,
}
