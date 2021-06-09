export type Image = {
  src: string
  alt: string
}

export type Thumbnail = Image & { description: string }

export type Scholar = {
  school: string[]
  major: string
  startDate: staring
  endDate: string
}

export type Person = {
  lang: string
  name: string
  position: string[]
  ma: Scholar
  ba: Scholar
  objectives: string[]
}

export type CareerItem = {
  date: string
  subTitle: string
  description: string[]
}

export type Career = {
  title: string
  items: CareerItem[]
}