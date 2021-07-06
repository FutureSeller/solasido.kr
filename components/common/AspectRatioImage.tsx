import styled from '@emotion/styled'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface Props {
  src: string
  alt: string
  isLargeImage?: boolean
  objectFit?: ImageProps['objectFit']
  blurDataURL: string
}

export default function AspectRatioImage({ src, alt, isLargeImage, blurDataURL, objectFit = "cover" }: Props) {
  return (
    <ImageWrapper isLargeImage={isLargeImage}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div<{ isLargeImage?: boolean }>`
  position: relative;
  width: 100%;
  padding-top: ${({ isLargeImage }) => isLargeImage ? 'calc((401.95 / 562) * 100%)' : 'calc((166.94 / 273) * 100%)'}
`
