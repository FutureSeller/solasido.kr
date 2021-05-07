import styles from './Contact.module.scss'

import { useRef } from 'react'
import classNames from 'classnames'

import useOnScreen from '../hooks/useOnScreen'

import Panel from './common/Panel'

export default function Contact() {
  const panelRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(panelRef)

  return (
    <Panel
      className={styles.Contact}
      heading={
        <h2 ref={panelRef} className={classNames(styles.Contact__title, {
          [styles['Contact__title--insideOut']]: isIntersecting
        })}>Contact</h2>
      }
    >
      <div className={styles.Contact__about}>
        <div>
          <div className={styles.Contact__name}>정한솔</div>
          <div className={styles.Contact__position}>
            브랜드 아이덴티티,<br />
            그래픽 디자이너
          </div>
        </div>
        <div>
          <div className={styles.Contact__name}>HANSOL CHUNG</div>
          <div className={styles.Contact__position}>
            Brand Identity,<br />
            Graphic Designer
          </div>
        </div>
      </div>
      <div className={styles.Contact__information}>
        <div>
          <div className={styles.Contact__subtitle}>Mail me at</div>
          <div className={styles.Contact__value}>sol_asido_@naver.com</div>
        </div>
        <div>
          <div className={styles.Contact__subtitle}>About me</div>
          <div className={styles.Contact__value}>www.linkedin.com/in/solasido</div>
        </div>
        <div>
          <div className={styles.Contact__subtitle}>Resume</div>
          <div className={styles.Contact__value}>click here</div>
        </div>
      </div>
    </Panel>
  )
}