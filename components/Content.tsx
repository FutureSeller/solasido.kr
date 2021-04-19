import styles from './Content.module.scss'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Content({ children }: Props) {
  return (
    <div className={styles.Content}>{children}</div>
  )
}