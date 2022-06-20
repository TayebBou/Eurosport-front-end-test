export const API_URL = "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/"

export const PLAYERS_QUERY = `
{
    players{
      id
    firstname
    lastname
    picture{url}
    country{picture{url}
    code}
    stats{rank
    points
    weight
    height
    age}
    }
  }`