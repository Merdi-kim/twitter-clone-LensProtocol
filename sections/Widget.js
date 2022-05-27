import SearchIcon from '@mui/icons-material/Search'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import styles from '../styles/Widget.module.css'

function Widget() {
    return (
        <div className={styles.widget}>
            <div className={styles.input}>
                <SearchIcon className={styles.searchIcon}/>
                <input type="text" placeholder='Search twitter...' />
            </div>

            <div className={styles.widgetContainer}>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1424873444190081030"} />
                <TwitterTimelineEmbed
                 sourceType="profile"
                 screenName="KimMerdi"
                 options={{height: 400}}
                />
            </div>

            

        </div>
    )
}

export default Widget