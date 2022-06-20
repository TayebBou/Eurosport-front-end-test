import { FC, useState } from 'react';
import styles from './App.module.css';
import ball from './assets/tennis.png'

const App:FC =() => {

  const [players, setPlayers] = useState([])

  return (
    <>
    <div className={styles.wallpaper} >
    </div>
    <img className={styles.ball} src={ball} alt="tennis ball" />
    <h1 className={styles.h1}>Players Statistics</h1>
    {
    }
    </>
  );
}

export default App;
