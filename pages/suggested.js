import { useState, useEffect } from 'react'
import SuggestionCard from '../components/SuggestionCard'
import { recommendedProfiles } from '../lens/requests/profile'

function Suggested() {

  const [recommendedUsers, setRecommendedUsers] = useState([])

  const getRecommendedProfiles = async() => {
    const { data } = await recommendedProfiles()
    setRecommendedUsers(data.recommendedProfiles)
  }

  useEffect(() => {
    getRecommendedProfiles()
  }, [])

  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      { recommendedUsers?.map(({ ownedBy, picture}) => <SuggestionCard src={picture?.original.url} ownedBy={ownedBy} />) }
    </div>
  )
}

export default Suggested