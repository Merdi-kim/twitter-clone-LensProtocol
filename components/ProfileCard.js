import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useDisconnect } from 'wagmi'
import { getProfiles } from '../lens/requests/profile'
import styles from '../styles/Profile.module.css'

function ProfileCard({ isMine, userAddress }) {

  const [user, setUser] = useState({
    profile:'',
    handle:'',
    stats:null
  })

  const checkProfile = async(userAddress) => {
    const { data } = await getProfiles(userAddress)
    const {handle, picture, stats} = data?.profiles?.items[0] 
    setUser({...user, handle, profile:picture?.original?.url, stats})
  }

  useEffect(() => {
    if(userAddress) {
      checkProfile()
    }
  }, [userAddress])

  const disconnectAccount = () => {
    useDisconnect().disconnect()
    Router.push('/')
  }

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <img className={styles.coverPicture} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='cover'/>
        <img className={styles.picture} src={user?.profile} alt='profile'/>
        <div className={styles.info}>
          <h3>{user?.handle}</h3>
          <div className={styles.stats}>
            <section className={styles.stat}>
              <span>{user?.stats?.totalFollowers}</span>
              <span>Followers</span>
            </section>
            <section className={styles.stat}>
              <span>{user?.stats?.totalFollowing}</span>
              <span>Following</span>
            </section>
            <section className={styles.stat}>
              <span>{user?.stats?.totalPublications}</span>
              <span>Publications</span>
            </section>
          </div>
        </div>
        { isMine && <button className="disconnect" onClick={disconnectAccount}>Logout</button> }
      </div>
    </div>
  )
}

export default ProfileCard