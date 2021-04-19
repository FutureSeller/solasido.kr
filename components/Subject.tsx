import styles from './Subject.module.scss'

import classNames from 'classnames'

interface Props {
  className: string
}

export default function Subject({ className }: Props) {
  return (
    <div className={classNames(styles.Subject, className)}>
      <span className={styles.Subject__content}>BRANDING</span>
      <span className={styles.Subject__content}>IDENTITY DESIGN</span>
    </div>
  )
}