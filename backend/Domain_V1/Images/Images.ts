export interface Images {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: string
  items: Item[]
  errorMessage: string
}

export interface Item {
  title: string
  image: string
}