export type Image = {
  src: string
  alt: string
  blurDataURL: string
}

export type Thumbnail = Image & {
  slug: string
  description: string
}

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

export type Project = {
  slug: string
  title: string
  category: string
  summary: string[]
  team: string
  client: string
  startDate: string
  endDate: string
  role: string[]
  description: string[]
}
