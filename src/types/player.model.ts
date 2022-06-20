export interface IPlayer {
  id: string
  firstname: string
  lastname: string
  picture: {
    url: string
  }
  country: {
    picture: {
      url: string
    }
    code: string
  }
  stats: {
    rank: number
    points: number
    weight: number
    height: number
    age: number
  }
  wins: number
  loss: number
}
