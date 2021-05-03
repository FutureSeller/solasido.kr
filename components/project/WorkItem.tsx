import styles from './WorkItem.module.scss'

import classNames from 'classnames'

import AspectRatioImage from '../common/AspectRatioImage'

import { Thumbnail } from '../../types/model'

interface Props {
  item: Thumbnail
  isLargeImage?: boolean
  hasSublistItem?: boolean
}

export default function WorkItem({ item, isLargeImage, hasSublistItem }: Props) {
  return (
    <article className={classNames(styles.WorkItem, {
      [styles['WorkItem__sublistItem']]: hasSublistItem,
    })}>
      <AspectRatioImage
        src={item.src}
        alt={item.alt}
        isLargeImage={isLargeImage}
      />
      <p className={styles.WorkItem__description}>{item.description}</p>
    </article>
  )
}