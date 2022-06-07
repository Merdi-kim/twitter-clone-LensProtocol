import { useState,useRef} from 'react'
import { useAccount } from 'wagmi'
import { Avatar, Button } from '@mui/material'
import { getProfiles } from '../lens/requests/profile'
import styles from '../styles/TweetModal.module.css'


function TweetModal() {

  const text = useRef()
  const postUrl= useRef()
  const { data:userAddress } = useAccount()
    
  const postPost = (e) => {
  }

  const [user, setUser] = useState({
    profile:'',
    handle:''
  })

  const checkProfile = async(address) => {
    const { data } = await getProfiles()
    const {handle, picture} = data?.profiles?.items[0] 
    setUser({...user, handle, profile:picture?.original?.url})
  }

  if(userAddress?.address) {
    checkProfile()
  }

 

  return (
    <div className={styles.tweetModal}>
      <form onSubmit={postPost}>
        <div className={styles.input}>
          <Avatar src={`${user.profile}/delta.jpeg`}/>
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