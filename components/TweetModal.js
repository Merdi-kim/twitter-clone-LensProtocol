import {useEffect, useRef} from 'react'
import { useAccount } from 'wagmi'
import { getDefaultProfile } from '../lens/requests/profile'
import { Avatar, Button } from '@mui/material'
import styles from '../styles/TweetModal.module.css'


function TweetModal() {

  const text = useRef()
  const postUrl= useRef()
  const { data } = useAccount()

    
  const postPost = (e) => {
  }

  const getProfile = () => {
    //const data = getDefaultProfile()
    console.log('get profile')
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className={styles.tweetModal}>
      <form onSubmit={postPost}>
        <div className={styles.input}>
          <Avatar/>
          <textarea ref ={text} placeholder="What's happening?" required />
        </div>

        <section className={styles.bottom}>
        <input 
          type="file" 
          className={styles.inputImage}
          ref={postUrl}
        />
        <Button className={styles.tweetButton} type='submit' >Tweet</Button>
        </section>

      </form>
    </div>
  )
}

export default TweetModal