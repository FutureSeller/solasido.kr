import styles from './Main.module.scss'

import Content from './Content'
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
      <Content>
        <Subject className={styles.Main__subject} />
      </Content>
    </div>
  )
}