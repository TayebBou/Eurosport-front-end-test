import { FC } from 'react'
import { IPlayer } from '../../types/player.model'
import styles from '../../App.module.css'

const Player: FC<{ player: IPlayer }> = (props) => {
  const { player } = props

  return (
    <div className={styles.player} key={player.id}>
      <img
        className={styles['player-img']}
        src={player.picture.url}
        alt="player profil"
        key={'img-player' + player.id}
      />
      <div style={{ padding: '1em' }} key={'player-infos' + player.id}>
        <h1 className={styles['h1-player']} key={'name' + player.id}>
          {player.firstname + ' ' + player.lastname}
        </h1>
        <img
          className={styles['country-img']}
          src={player.country.picture.url}
          alt="country flag"
          key={'img-country' + player.id}
        />
        <h2 key={'code' + player.id} className={styles.h2}>
          {player.country.code}
        </h2>
        <div key={'stats' + player.id} className={styles.stats}>
          <h3 key={'rank' + player.id} className={styles.h3}>
            Rank : {player.stats.rank} #
          </h3>
          <h3 key={'height' + player.id} className={styles.h3}>
            Height : {player.stats.height / 100} m
          </h3>
          <h3 key={'weight' + player.id} className={styles.h3}>
            Weight : {player.stats.weight / 1000} kg
          </h3>
          <h3 key={'win/loss' + player.id}>
            wins : {player.wins} / loss : {player.loss}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Player
