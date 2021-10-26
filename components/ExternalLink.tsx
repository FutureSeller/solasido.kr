import { Box } from '@chakra-ui/react'

import type { ReactNode } from 'react'
import type { BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  href: string
  children: ReactNode
}

export default function ExternalLink({ href, children, ...restProps }: Props) {
  return (
    <Box as="a" href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </Box>
  )
}
