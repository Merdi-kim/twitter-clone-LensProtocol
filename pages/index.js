import Head from 'next/head'
import Feed from '../components/sections/Feed'
import Sidebar from '../components/sections/Sidebar'
import Widget from '../components/sections/Widget'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Twitter clone built on top of Lens Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  )
}

export default Home