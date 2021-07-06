import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

import { responsive } from '../../styles/responsive'
import type { LinkProps } from 'next/link'
interface Props {
  href: LinkProps['href'] | null
  src: string
  alt: string
  size: number
  handleClick?: () => void
}

export default function ImageLinkButton({ href, src, alt, size, handleClick }: Props) {
  return (
    <Wrapper size={size} onClick={handleClick}>
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