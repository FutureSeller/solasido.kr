import styled from '@emotion/styled'

import WorkSublist from './WorkSublist'
import WorkItem from './WorkItem'

import useDeviceType from '../../hooks/useDeviceType'

import { responsive } from '../../styles/responsive'

import { getPartitionedThumbnails } from '../../utils/thumbnail'
import { DeviceType, isSmallThanTabletViewPort } from '../../utils/responsive'

import thumbnails from '../../public/data/thumbnails.json'

export default function WorkListContainer() {
  const deviceType = useDeviceType() ?? DeviceType.XXL

  return (
    <Container>
      {isSmallThanTabletViewPort(deviceType)
        ? thumbnails.map(thumbnail => <WorkItem key={thumbnail.src} item={thumbnail} />)
        : getPartitionedThumbnails(thumbnails).map(workList => {
          if (Array.isArray(workList)) {
            return (
              <WorkSublist
                key={workList.map(list => list.src).join(',')}
                thumbnails={workList}
              />
            )
          }
          return <WorkItem key={workList.src} item={workList} isLargeImage />
        })
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-top: 100px;

  ${responsive.mdLte} {
    padding-top: 70px;
  }

  ${responsive.smLte} {
    padding-top: 40px;
  }

  > * {
    margin-bottom: 60px;

    ${responsive.mdLte} {
      margin-bottom: 40px;
    }
  }
`
