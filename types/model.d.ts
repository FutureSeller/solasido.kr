export type Image = {
  src: string
  alt: string
}

export type Thumbnail = Image & { description: string }