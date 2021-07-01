import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

import { responsive } from '../../styles/responsive'

interface Props {
  href: string | null
  src: string
  alt: string
}

export default function ImageLinkButton({ href, src, alt }: Props) {
  return (
    <Wrapper>
      {href && (
        <Link href={href} passHref>
          <a>
            <Image
              src={src}
              alt={alt}
              layout="fill" />
          </a>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 24px;

  ${responsive.smLte} {
    width: 18px;
  }
`