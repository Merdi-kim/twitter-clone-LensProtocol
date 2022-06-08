import {useState, useEffect} from 'react'
import { useAccount } from 'wagmi'
import { explorePublications } from '../lens/requests/tweets'
import Tweet from '../components/Tweet'
import TweetModal from '../components/TweetModal'
import styles from '../styles/Feed.module.css'

function Feed() {

  const [posts, setPosts] = useState([])
  const { data } = useAccount()

  const getPosts = async() => {
    const explorePublicationQueryRequest = {
        sortCriteria: 'TOP_COMMENTED',
        publicationTypes: ['POST'],
        limit: 50
    }
    
    const data = await explorePublications()
    console.log(data)
  }
 
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className = {styles.feed}>
      <div className= {styles.header}>
        <h2>Home</h2>
      </div>
      <TweetModal/>
      <div>
        {posts?.map(post => <Tweet key={Math.random() ** Math.random()} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>)} 
      </div>
    </div>
  )
}

export default Feed