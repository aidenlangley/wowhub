export interface Route {
  name: string
  path: string
  translation: string
}

export interface Member {
  name: string
  tags: string[]
  about: string[]
  frontline?: boolean
  imgSrc?: string
  tallImg?: boolean
}

export interface Seo {
  title: string
  description: string
  robots: string
}

export interface Form {
  title: string
  description: string
  url: string
}
