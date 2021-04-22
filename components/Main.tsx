import styles from './Main.module.scss'

import Subject from './common/Subject'
import Panel from './common/Panel'

export default function Main() {
  return (
    <Panel
      className={styles.Main}
      heading={(
        <>
          <div className={styles.Main__slogan}>
            <span>Better Design,</span>
            <br />
            <span>Better Life.</span>
          </div>
          <h1 className={styles.Main__portfolio}>Portfolio</h1>
        </>
      )}
    >
      <Subject className={styles.Main__subject} />
    </Panel>
  )
}