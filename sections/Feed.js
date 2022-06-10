import {useState, useEffect} from 'react'
import { explorePublications } from '../lens/requests/tweets'
import Tweet from '../components/Tweet'
import TweetModal from '../components/TweetModal'
import styles from '../styles/Feed.module.css'

function Feed() {

  const [posts, setPosts] = useState([])

  const fetchPosts = async() => {
    const {data} = await explorePublications()
    setPosts(data.explorePublications.items)
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className = {styles.feed}>
      <div className= {styles.header}>
        <h2>Home</h2>
      </div>
      <TweetModal/>
      <div>
        {posts?.map(({profile, metadata, stats}) => <Tweet key={metadata.content} displayName={profile.name} username={profile.handle} ownedBy={profile.ownedBy} text={metadata.content} avatar={profile.picture.original.url} stats={stats}/>)} 
      </div>
    </div>
  )
}

export default Feed