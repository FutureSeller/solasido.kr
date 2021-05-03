import styles from './WorkList.module.scss'

import WorkItem from './WorkItem'

import { getPartitionedThumbnails } from '../../utils/thumbnail'
import { Thumbnail } from '../../types/model'

interface Props {
  thumbnails: Thumbnail[]
  isTabletView: boolean
}

export default function WorkList({ thumbnails, isTabletView }: Props) {
  return (
    <div className={styles.WorkList}>
      {isTabletView
        ? thumbnails.map(workList => (
          <WorkItem item={workList} />
        ))
        : getPartitionedThumbnails(thumbnails).map(workList => (
          Array.isArray(workList)) ? (
            <div className={styles.WorkList__sublist}>
              {workList.map(work => (
                <WorkItem item={work} hasSublistItem />
              ))}
            </div>
          ) : (
            <WorkItem item={workList} isLargeImage />
          )
        )
      }
    </div>
  )
}