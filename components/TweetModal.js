import { useState } from 'react'
import { checkProfile } from '../lib/checkProfile'
import { useAccount , useSigner} from 'wagmi'
import { Web3Storage } from 'web3.storage'
import { Avatar, Button } from '@mui/material'
import { createPost } from '../lens/requests/tweet'
import { generateChallenge, authenticate } from '../lens/requests/profile'
import styles from '../styles/TweetModal.module.css'
import { useEffect } from 'react'

function TweetModal() {

  const [user, setUser] = useState({
    id:'',
    profile:''
  })
  const [tweetText, setTweetText] = useState('')
  const [tweetFile, setTweetFile] = useState(null)
  const { data:userAddress } = useAccount()
  const { data : signer, isError, isLoading } = useSigner()
  const apiKey = process.env.NEXT_PUBLIC_STORAGE_KEY
  const web3storage = new Web3Storage({token:apiKey})

  useEffect(() => {
    const fetchData = async() => {
      const {id, picture} = await checkProfile()
     setUser({...user, id, profile:picture?.original?.url})
    }
    fetchData()
  }, [userAddress?.address])

  const createTweet = async(e) => {
    e.preventDefault()
    if(!tweetText && tweetFile == null) {
      return console.log('no data')
    }

    const challengeResponse = await generateChallenge(userAddress?.address);
    const signature = await signer.signMessage(challengeResponse.data.challenge.text)
    const {data} = await authenticate(userAddress?.address, signature);
    const localStorage = window.localStorage
    localStorage.setItem('auth_token', data.authenticate.accessToken)
    const blob = new Blob([JSON.stringify({tweetText})], { type: 'application/json' })
    const files = tweetFile ? [tweetFile[0], new File([blob], 'metadata.json')] : [new File([blob], 'metadata.json')]
    const cid = await web3storage.put(files)
    console.log(`https://ipfs.io/ipfs/${cid}`)
    const createPostRequest = {
      profileId: user.id,
      contentURI: "https://ipfs.io/ipfs/bafybeic3kuubhsdycmkgrztdwnaxaw2pdkxti7u47ewhgfzcmd4vwbmkbi",
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
          onChange= {(e) => setTweetFile(e.target.files)}
        />
        <Button className={styles.tweetButton} type='submit' >Tweet</Button>
        </section>

      </form>
    </div>
  )
}

export default TweetModal