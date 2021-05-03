import styles from './AspectRatioImage.module.scss'

import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  isLargeImage?: boolean
}

export default function AspectRatioImage({ src, alt, isLargeImage }: Props) {
  return (
    <div className={classNames(styles.AspectRatioImage, {
      [styles['AspectRatioImage--large']]: isLargeImage
    })}>
      <Image
        className={styles.AspectRatioImage__image}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}