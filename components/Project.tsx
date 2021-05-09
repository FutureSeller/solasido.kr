import styles from './Project.module.scss'

import { useRef, useContext } from 'react'
import classNames from 'classnames'

import useOnScreen from '../hooks/useOnScreen'

import { DeivceTypeContext } from '../context/DeviceTypeContext'

import Panel from './common/Panel'
import WorkList from './project/WorkList'

import { DeviceType, isSmallThanTabletViewPort } from '../utils/responsive'

// const thumbnails = Array(10).fill({
//   src: "/images/thumbnail/hwayeon-thumbnail.jpeg",
//   alt: "test",
//   description: "고려대학교 세종캠퍼스 설립 40주년"
// })

const thumbnails = [
  {
    src: "/images/thumbnail/01_lavida.jpg",
    alt: "lavida",
    description: "La vida"
  },
  {
    src: "/images/thumbnail/02_hwayeon.jpg",
    alt: "Hwayeon",
    description: "HWAYEON"
  },
  {
    src: "/images/thumbnail/03_korea-115.jpg",
    alt: "고려대학교 개교 115주년",
    description: "고려대학교 개교 115주년"
  },
  {
    src: "/images/thumbnail/04_korea-40.jpg",
    alt: "고려대학교 세종캠퍼스 설립 40주년",
    description: "고려대학교 세종캠퍼스 설립 40주년"
  },
  {
    src: "/images/thumbnail/05_korea-inno.jpg",
    alt: "고려대학교 대학혁신지원사업단",
    description: "고려대학교 대학혁신지원사업단"
  },
  {
    src: "/images/thumbnail/06_korea-farm.gif",
    alt: "고려대학교 덕소농장",
    description: "고려대학교 덕소농장"
  },
  {
    src: "/images/thumbnail/07_young.jpg",
    alt: "제9회 젊은 의사포럼",
    description: "제9회 젊은 의사포럼"
  },
  {
    src: "/images/thumbnail/08_chemstree.jpg",
    alt: "CHEMSTREE",
    description: "CHEMSTREE"
  },
  {
    src: "/images/thumbnail/09_ovis.jpg",
    alt: "OVIS",
    description: "OVIS"
  },
  {
    src: "/images/thumbnail/10_weli.gif",
    alt: "WELIVEARTH",
    description: "WELIVEARTH"
  },
  {
    src: "/images/thumbnail/11_korea-pattern.jpg",
    alt: "한국전통문양",
    description: "한국전통문양"
  },
  {
    src: "/images/thumbnail/12_ed.jpg",
    alt: "대한민국 대학생 교육기부단",
    description: "대한민국 대학생 교육기부단"
  },
  {
    src: "/images/thumbnail/13_korea-folk.gif",
    alt: "한국민속촌",
    description: "한국민속촌"
  },
]

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
