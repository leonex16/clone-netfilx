export interface FullCast {
  imDbId: string
  title: string
  fullTitle: string
  type: string
  year: string
  directors: Directors
  writers: Writers
  actors: Actor[]
  others: Other[]
  errorMessage: string
}

export interface Actor {
  id: string
  image: string
  name: string
  asCharacter: string
}

export interface Directors {
  job: string
  items: Item[]
}

export interface Other {
  job: string
  items: Item[]
}

export interface Writers {
  job: string
  items: Item[]
}

export interface Item {
  id: string
  name: string
  description: string
}