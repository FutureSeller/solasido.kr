import { css } from '@emotion/react'
import { customTheme } from '../../styles/theme'

import { breakpoints } from '../../styles/responsive'

export const titleFontStyle = css`
  font-family: ${customTheme.fonts.gorditaBold};
  font-weight: 700;
  font-size: 36px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 4vw;
  }
`

export const BOTTOM_POSITON = 50

export const STICKY_GUTTER = {
  mobile: 60,
  tablet: 80,
  desktop: 120,
}
