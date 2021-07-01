import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

import { responsive } from '../../styles/responsive'

interface Props {
  href: string | null
  src: string
  alt: string
  size: number
}

export default function ImageLinkButton({ href, src, alt, size }: Props) {
  return (
    <Wrapper size={size}>
      {href && (
        <Link href={href} passHref>
          <a>
            <Image
              src={src}
              alt={alt}
              layout="fill"
            />
          </a>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => size ? `${size}px` : '24px'};
  height: ${({ size }) => size ? `${size}px` : '24px'};

  ${responsive.smLte} {
    width: ${({ size }) => size ? `${size - 6}px` : '18px'};
    height: ${({ size }) => size ? `${size - 6}px` : '18px'};
  }
`