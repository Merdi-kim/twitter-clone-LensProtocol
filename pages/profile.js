import Router from 'next/router'
import { useState, useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { getProfiles } from '../lens/requests/profile'
import styles from '../styles/Profile.module.css'

function Profile() {

  const { data:userAddress } = useAccount()
    
  const { disconnect } = useDisconnect()

  const [user, setUser] = useState({
    profile:'',
    handle:'',
    stats:null
  })

  const checkProfile = async(address) => {
    const { data } = await getProfiles(address)
    const {handle, picture, stats} = data?.profiles?.items[0] 
    setUser({...user, handle, profile:picture?.original?.url, stats})
  }

  const disconnectAccount = () => {
    disconnect()
    Router.push('/')
  }

  useEffect(() => {

    if(userAddress?.address) {
      checkProfile()
    }

  }, [userAddress])

  if(userAddress?.address) {
    checkProfile()
  }

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <img className={styles.coverPicture} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='cover'/>
        <img className={styles.picture} src={user.profile} alt='profile'/>
        <div className={styles.info}>
          <h3>{user?.handle}</h3>
          <p>This is my bio I'm a very cool guy</p>
          <section className={styles.stats}>
            <span>{user.stats?.totalFollowers}{" "}Followers</span>
          </section>
        </div>
        <button className="disconnect" onClick={disconnectAccount}>Logout</button>
        
      </div>
    </div>
  )
}

export default Profile