import styled from '@emotion/styled'

import WorkItem from './WorkItem'

import { Thumbnail } from '../../types/model'

interface Props {
  thumbnails: Thumbnail[]
}

export default function WorkSublist({ thumbnails }: Props) {
  return (
    <WorkListGroup>
      {thumbnails.map(thumbnail =>
        <WorkItem key={thumbnail.src} item={thumbnail} isSublistItem />
      )}
    </WorkListGroup>
  )
}

const WorkListGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(50% - 8px);
  align-content: space-between;
`
