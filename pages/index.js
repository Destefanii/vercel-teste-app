import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/spotify-logo.jpg" />
      </Head>
      
    </div>
  )
}
