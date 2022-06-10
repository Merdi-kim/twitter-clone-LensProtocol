import { useState, useEffect } from 'react'
import { searchForProfile } from '../lens/requests/profile'
import SearchIcon from '@mui/icons-material/Search'
import styles from '../styles/Widget.module.css'
import ProfileSearchCard from '../components/ProfileSearchCard'

function Widget() {

    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchProfile = async(e) => {
        e.preventDefault()
        if(!searchInput) return
        const { data } = await searchForProfile(searchInput)
        console.log(data.search.items)
        setSearchResult(data.search.items)
    }

    useEffect(() => {
        searchProfile('jo')
    }, [])
    return (
        <div className={styles.widget}>
            <form className={styles.input} onSubmit={searchProfile}>
                <SearchIcon className={styles.searchIcon}/>
                <input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder='Search twitter...' />
                <button type="submit" hidden></button>
            </form>

            <div className={styles.widgetContainer}>
                { searchResult.length !== 0 ? searchResult?.map(({handle, picture, ownedBy}) => <ProfileSearchCard src={picture?.original.url} handle={handle} ownedBy={ownedBy}/>) : <p>No match</p> }  
            </div>

            

        </div>
    )
}

export default Widget