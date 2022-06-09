import { useState } from 'react'
import { searchForProfile } from '../lens/requests/profile'
import SearchIcon from '@mui/icons-material/Search'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import styles from '../styles/Widget.module.css'
import ProfileSearchCard from '../components/ProfileSearchCard'

function Widget() {

    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchProfile = async(e) => {
        e.preventDefault()
        if(!searchInput) return
        const { data } = await searchForProfile()
        setSearchResult(data.search.items)
    }
    return (
        <div className={styles.widget}>
            <form className={styles.input} onSubmit={searchProfile}>
                <SearchIcon className={styles.searchIcon}/>
                <input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder='Search twitter...' />
                <button type="submit" hidden></button>
            </form>

            <div className={styles.widgetContainer}>
                { searchResult?.map(({handle, picture, ownedBy}) => <ProfileSearchCard src={picture.original.url} handle={handle} ownedBy={ownedBy}/>) }  
            </div>

            

        </div>
    )
}

export default Widget