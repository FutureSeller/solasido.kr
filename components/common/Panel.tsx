import styles from './Panel.module.scss'

import type { ReactNode } from 'react'

interface Props {
  className: string
  heading: ReactNode
  children: ReactNode
}

export default function Panel({ className, heading, children }: Props) {
  return (
    <section className={className}>
      {heading}
      <div className={styles.Content}>{children}</div>
    </section>
  )
}