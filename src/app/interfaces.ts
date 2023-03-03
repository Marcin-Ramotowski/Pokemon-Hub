export interface Pokemon{
  id: number,
  name: string,
  base_experience: number,
  height: number,
  weight: number
}

export interface Result{
  name: string,
  url: string
}

export interface Results{
  results: Result[]
}
