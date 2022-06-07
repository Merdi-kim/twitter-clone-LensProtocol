import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Web3Storage } from 'web3.storage'
import { Avatar, Button } from '@mui/material'
import { getProfiles } from '../lens/requests/profile'
import { createPost } from '../lens/requests/tweet'
import styles from '../styles/TweetModal.module.css'
import Router from 'next/router'


function TweetModal() {

  const [tweetText, setTweetText] = useState('')
  const [tweetFile, setTweetFile] = useState(null)
  const { data:userAddress } = useAccount()
  const apiKey = process.env.NEXT_PUBLIC_STORAGE_KEY
  const web3storage = new Web3Storage({token:apiKey})

  const [user, setUser] = useState({
    id:'',
    profile:'',
    handle:''
  })

  const checkProfile = async(address) => {
    const { data } = await getProfiles(address)
    if(data?.profiles?.items.length == 0) {
      return Router.push('/signin')
    }
    const {id, handle, picture} = data?.profiles?.items[0] 
    setUser({...user, id, handle, profile:picture?.original?.url})
  }

  if(userAddress?.address) {
    checkProfile()
  }

  const createTweet = async(e) => {
    e.preventDefault()
    /*let tweetFileLink
    if(!tweetText && tweetFile == null) {
      return console.log('helo')
    }
    if(tweetFile != null) {
      const blob = new Blob([JSON.stringify({tweetText})], { type: 'application/json' })
      const cid = await web3storage.put([file[0], new File([blob], 'metadata.json') ])
    }*/

    const createPostRequest = {
      profileId: user.id,
      contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json",
      collectModule: {
        freeCollectModule:  {
          followerOnly: true
        }
      },
      referenceModule: {
        followerOnlyReferenceModule: false
      }
    };

    const tx = await createPost(createPostRequest)
    console.log(tx)
    
  }

  return (
    <div className={styles.tweetModal}>
      <form onSubmit={createTweet}>
        <div className={styles.input}>
          <Avatar src={user.profile}/>
          <textarea placeholder="What's happening?" onChange= {(e) => setTweetText(e.target.value)}/>
        </div>

        <section className={styles.bottom}>
        <input 
          type="file" 
          className={styles.inputImage}
          onChange= {(e) => setTweetText(e.target.files)}
        />
        <Button className={styles.tweetButton} type='submit' >Tweet</Button>
        </section>

      </form>
    </div>
  )
}

export default TweetModal