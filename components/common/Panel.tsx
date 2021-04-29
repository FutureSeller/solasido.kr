import styles from './Panel.module.scss'

import classNames from 'classnames'

import type { ReactNode } from 'react'

interface Props {
  className: string
  heading: ReactNode
  children: ReactNode
}

export default function Panel({ className, heading, children }: Props) {
  return (
    <section className={classNames(styles.Panel, className)}>
      {heading}
      <div className={styles.Panel__Content}>{children}</div>
    </section>
  )
}