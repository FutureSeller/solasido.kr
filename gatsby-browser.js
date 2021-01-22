/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/styles/reset.css'
import './src/styles/global.css'

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.hash) {
    return true
  }

  return getSavedScrollPosition(location)
}