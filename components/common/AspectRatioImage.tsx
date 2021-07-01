import styled from '@emotion/styled'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface Props {
  src: string
  alt: string
  isLargeImage?: boolean
  objectFit?: ImageProps['objectFit']
}

export default function AspectRatioImage({ src, alt, isLargeImage, objectFit = "cover" }: Props) {
  return (
    <ImageWrapper isLargeImage={isLargeImage}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
      />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div<{ isLargeImage?: boolean }>`
  position: relative;
  width: 100%;
  padding-top: ${({ isLargeImage }) => isLargeImage ? 'calc((401.95 / 562) * 100%)' : 'calc((166.94 / 273) * 100%)'}
`
