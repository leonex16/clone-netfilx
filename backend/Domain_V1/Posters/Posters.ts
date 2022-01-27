export interface Posters {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: string
  posters: Poster[]
  backdrops: Backdrop[]
  errorMessage: string
}

export interface Poster {
  id: string
  link: string
  aspectRatio: number
  language: string
  width: number
  height: number
}

export interface Backdrop {
  id: string
  link: string
  aspectRatio: number
  language: string
  width: number
  height: number
}