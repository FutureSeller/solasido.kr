/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const ImageWrapper = styled.div`
  width: 100%;
  :hover {
    box-shadow: 0 0.1rem 0.8rem ${color.solGrey};
  }
`

const ThumbnailWrapper = styled.div`
  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    display: none;
  }
`

const ThumbnailTitle = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.8rem;
`

const ThumbnailCategory = styled.h4`
  font-weight: 400;
  font-size: 1.4rem;
  maring-top: 0.4rem;
  color: ${color.solGrey};
`

export default function Thumbnail({ title, category, pathname, thumbnail }: {
  title?: string
  category?: string
  pathname?: string
  thumbnail?: FluidObject
}) {
  return (
    <div>
      <Link to={`/${pathname?.split('.')[0].replace('-thumbnail', '')}`}>
        <ImageWrapper>
          {thumbnail &&
            <Img
              fluid={thumbnail}
              imgStyle={{
                objectFit: 'cover',
                cursor: 'pointer'
              }}
            />
          }
        </ImageWrapper>
      </Link>
      <ThumbnailWrapper>
        <ThumbnailTitle>{title}</ThumbnailTitle>
        <ThumbnailCategory>{category}</ThumbnailCategory>
      </ThumbnailWrapper>
    </div>
  )
}