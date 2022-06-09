import { useState } from 'react'
import { searchForProfile } from '../lens/requests/profile'
import SearchIcon from '@mui/icons-material/Search'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import styles from '../styles/Widget.module.css'

function Widget() {

    const [searchInput, setSearchInput] = useState('')

    const searchProfile = async(e) => {
        e.preventDefault()
        if(!searchInput) return
        const data = await searchForProfile()
        console.log(data)
    }
    return (
        <div className={styles.widget}>
            <form className={styles.input} onSubmit={searchProfile}>
                <SearchIcon className={styles.searchIcon}/>
                <input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder='Search twitter...' />
                <button type="submit" hidden></button>
            </form>

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