import styles from './Project.module.scss'

import { useRef, useContext } from 'react'
import classNames from 'classnames'

import useOnScreen from '../hooks/useOnScreen'

import { DeivceTypeContext } from '../context/DeviceTypeContext'

import Panel from './common/Panel'
import WorkList from './project/WorkList'

import { DeviceType, isSmallThanTabletViewPort } from '../utils/responsive'

const thumbnails = Array(10).fill({
  src: "/images/thumbnail/hwayeon-thumbnail.jpeg",
  alt: "test",
  description: "고려대학교 세종캠퍼스 설립 40주년"
})

export default function Project() {
  const panelRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(panelRef)
  const deviceType = useContext(DeivceTypeContext) ?? DeviceType.XXL

  return (
    <Panel
      className={styles.Project}
      heading={
        <h2 ref={panelRef} className={classNames(styles.Project__title, {
          [styles['Project__title--insideOut']]: isIntersecting
        })}>Project</h2>
      }
    >
      <WorkList
        thumbnails={thumbnails}
        isTabletView={isSmallThanTabletViewPort(deviceType)}
      />
    </Panel>
  )
}
