import { useState, useEffect } from "react";
import { explorePublications } from "../../lib/lens/requests/tweets";
import Tweet from "../Tweet";
import TweetModal from "../TweetModal";
import styles from "../../styles/Feed.module.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [refetchPosts, setRefetchPosts] = useState(false);

  const fetchPosts = async () => {
    const { data } = await explorePublications();
    setPosts(data.explorePublications.items);
  };

  useEffect(() => {
    fetchPosts();
  }, [refetchPosts]);

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <h2>Home</h2>
      </div>
      <TweetModal refetchPosts={setRefetchPosts} />
      <div>
        {posts?.map(({ profile, metadata, stats }) => (
          <Tweet
            key={metadata.content}
            displayName={profile.name}
            username={profile.handle}
            ownedBy={profile.ownedBy}
            text={metadata.content}
            avatar={profile.picture?.original.url}
            stats={stats}
          />
        ))}
        </div>
    </div>
  );
};

export default Feed;
