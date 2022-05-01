import { css } from '@emotion/react'

export const outlineStyle = css`
  &:focus {
    border-radius: var(--chakra-radii-md);
    outline: none;
    box-shadow: var(--chakra-shadows-outline);
  }

  &:focus-visible {
    border-radius: var(--chakra-radii-md);
    outline: none;
    box-shadow: var(--chakra-shadows-outline);
  }

  &:focus:not(:focus-visible) {
    border-radius: var(--chakra-radii-md);
    outline: none;
    box-shadow: var(--chakra-shadows-outline);
  }
`
