import {useState, useEffect} from 'react'
import { useAccount } from 'wagmi'
import FlipMove from 'react-flip-move'
import Tweet from '../components/Tweet'
import TweetModal from '../components/TweetModal'
import styles from '../styles/Feed.module.css'

function Feed() {

  //const [posts, setPosts] = useState([])
  const { data } = useAccount()

  const posts = new Array(8).fill({
    displayName:"merkim.eth",
    username:"heyo",
    verified:true,
    text:"wagmi frens", 
    avatar:"vjfs" ,
    image:"baivboe"

  })

  useEffect(() => {
    //getPosts()
  }, [])

  return (
    <div className = {styles.feed}>
      <div className= {styles.header}>
        <h2>Home</h2>
      </div>
      <TweetModal/>
      <div>
        <FlipMove>
          {posts.map(post => <Tweet key={Math.random() ** Math.random()} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>)}
        </FlipMove>    
      </div>
    </div>
  )
}

export default Feed