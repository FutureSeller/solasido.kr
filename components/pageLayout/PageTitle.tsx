import styled from '@emotion/styled'
import { Heading, Text } from '@chakra-ui/react'

import { responsive } from '../../styles/responsive'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <Heading as="h1">
      <Title>{children}</Title>
    </Heading>
  )
}

const Title = styled(Text)`
  margin-bottom: 50px;
  padding-top: 140px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 80px;
  font-family: ${({ theme }) => theme.fonts.neueDisplay};

  ${responsive.mdLte} {
    margin-bottom: 40px;
    padding-top: 100px;
    font-size: 60px;
  }

  ${responsive.smLte} {
    margin-bottom: 20px;
    padding-top: 90px;
    font-size: 40px;
  }
`
