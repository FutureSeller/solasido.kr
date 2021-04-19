import styles from './Main.module.scss'

import Subject from './Subject'

export default function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.Main__slogan}>
        <span>Better Design,</span>
        <br />
        <span>Better Life.</span>
      </div>
      <h1 className={styles.Main__portfolio}>Portfolio</h1>
      <Subject className={styles.Main__subject} />
    </div>
  )
}