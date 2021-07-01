import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import AspectRatioImage from '../common/AspectRatioImage'

import { responsive } from '../../styles/responsive'
import { notoSansKR } from '../../styles/typography'
import { Thumbnail } from '../../types/model'
import { colors } from '../../styles/colors'
import { zIndex } from '../../styles/zIndex'

interface Props {
  item: Thumbnail
  isLargeImage?: boolean
  isSublistItem?: boolean
}

export default function WorkItem({ item, isLargeImage = false, isSublistItem = false }: Props) {
  return (
    <Link href={`/projects/${item.slug}`} passHref>
      <Container isSublistItem={isSublistItem}>
        <StrikeThrough style={{ width: '100%', height: '100%', position: 'relative' }}>
          <AspectRatioImage
            src={item.src}
            alt={item.alt}
            isLargeImage={isLargeImage}
          />
        </StrikeThrough>
        <ContentFont>
          <Description>{item.description}</Description>
        </ContentFont>
      </Container>
    </Link>
  )
}

const Container = styled.article<{ isSublistItem: boolean }>`
  position: relative;
  width: calc(50% - 8px);

  &:hover, &:active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    cursor: pointer;
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

// TODO: animation component로 이사가도 될 듯합니다.
const mimicStrikeThrough = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const StrikeThrough = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover, &:active {
    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      content: '';
      transform: translateY(-50%);
      
      border-bottom: 15px solid ${colors.red};
      animation: ${mimicStrikeThrough} 0.5s forwards;
      animation-delay: 0.5s;
      z-index: ${zIndex.content};
    }
  }
`