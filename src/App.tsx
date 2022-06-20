import { FC, useEffect, useState } from 'react'
import styles from './App.module.css'
import ball from './assets/tennis.png'
import Player from './components/statelessComponents/Player'
import { getMatchs } from './services/getMatchs'
import { getPlayers } from './services/getPlayers'
import { IPlayer } from './types/player.model'

const App: FC = () => {
  const [players, setPlayers] = useState<IPlayer[]>([])

  useEffect(() => {
    getPlayers().then((res) => {
      res.data.data.players.sort((a: IPlayer,b: IPlayer) => a.stats.rank - b.stats.rank)
      setPlayers(res.data.data.players)
      getMatchs().then((res) => {
        setPlayers((pArray) => {
          pArray.forEach((p) => {
            p.wins = 0
            p.loss = 0
            res.data.data.matches.forEach((m: {winner:{id:string}}) => {
              if (m.winner.id === p.id) {
                p.wins = p.wins + 1
              } else {
                p.loss = p.loss + 1
              }
            })
          })
          return [...pArray]
        })
      })
    })
  }, [])

  return (
    <>
      <div className={styles.wallpaper}></div>
      <img className={styles.ball} src={ball} alt="tennis ball" />
      <h1 className={styles.h1}>Players Statistics</h1>
      {players.map((player: IPlayer) => (
        <Player player={player} key={'player' + player.id} />
      ))}
    </>
  )
}

export default App
