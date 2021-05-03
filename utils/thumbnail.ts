import { Thumbnail } from '../types/model'

const CHUNK_SIZE = 4

const isLargeImageIndicator = (index: number) => index % 10 === 0 || index % 10 === 9
const isFirstSmallImageIndicator = (index: number) => index % 10 === 1 || index % 10 === 5

export const getPartitionedThumbnails = (thumbnails: Thumbnail[]) => {
  const chunks = []

  let index = 0;

  while (index < thumbnails.length) {
    if (isLargeImageIndicator(index)) {
      chunks.push(thumbnails[index])
      index += 1
      continue
    }

    if (isFirstSmallImageIndicator(index)) {
      chunks.push(thumbnails.slice(index, index + CHUNK_SIZE))
      index += CHUNK_SIZE
      continue
    }
  }

  return chunks
}
