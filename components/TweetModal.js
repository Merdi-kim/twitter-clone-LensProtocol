import {useRef} from 'react'
import { Avatar, Button } from '@mui/material'
import styles from '../styles/TweetModal.module.css'


function TweetModal() {

  const text = useRef()
  const postUrl= useRef()

    
  const postPost = (e) => {

    e.preventDefault()
      /*const tweet = text.current.value
      const url = postUrl.current.value
      const post = {
          displayName:'Merkim dev',
          username:'KimMerdi',
          verified: false,
          text:tweet,
          avatar:'kim',
          image:url

      }

      db.collection('posts').add(post)

      text.current.value = ''
      postUrl.current.value = ''*/

  }

  return (
    <div className={styles.tweetModal}>
      <form onSubmit={postPost}>
        <div className={styles.input}>
          <Avatar/>
          <input type="text" ref ={text} placeholder="What's happening?" required />
        </div>

        <input 
          type="text" 
          className={styles.inputImage}
          ref={postUrl}
          placeholder='Optional: Enter image URL'
        />
        <Button className={styles.tweetButton} type='submit' >Tweet</Button>
      </form>
    </div>
  )
}

export default TweetModal