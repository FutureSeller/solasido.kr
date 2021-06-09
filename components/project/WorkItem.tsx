import { css } from '@emotion/react'
import styled from '@emotion/styled'

import AspectRatioImage from '../AspectRatioImage'

import { responsive } from '../../styles/responsive'
import { notoSansKR } from '../../styles/typography'
import { Thumbnail } from '../../types/model'

interface Props {
  item: Thumbnail
  isLargeImage?: boolean
  isSublistItem?: boolean
}

export default function WorkItem({ item, isLargeImage = false, isSublistItem = false }: Props) {
  return (
    <Container isSublistItem={isSublistItem}>
      <AspectRatioImage
        src={item.src}
        alt={item.alt}
        isLargeImage={isLargeImage}
      />
      <ContentFont>
        <Description>{item.description}</Description>
      </ContentFont>
    </Container>
  )
}

const Container = styled.article<{ isSublistItem: boolean }>`
  width: calc(50% - 8px);

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  ${responsive.mdLte} {
    width: 100%;
  }

  ${({ isSublistItem }) => isSublistItem ? css`
    &:nth-type-of(2n) {
      padding-left: 16px;
    }
  ` : null}
`

const ContentFont = styled.div`
  ${notoSansKR}
  font-size: 16px;
  line-height: 1.25;

  ${responsive.xlLte} {
    font-size: 14px;
  }

  ${responsive.smLte} {
    font-size: 12px;
  }
`

const Description = styled.p`
  padding-top: 12px;
`