import { css } from '@emotion/react'
import { breakpoints } from '../../styles/responsive'

export const titleFontStyle = css`
  font-size: 36px;
  padding: 0 24px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 4vw;
    padding: 0 10vw;
  }
`

export const BOTTOM_POSITON = 50

export const STICKY_GUTTER = {
  mobile: 60,
  tablet: 80,
  desktop: 120,
}
