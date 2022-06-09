import React, { useState, useEffect } from 'react'
import SuggestionCard from '../components/SuggestionCard'
import { recommendedProfiles } from '../lens/requests/profile'

function Suggested() {

  const [recommendedUsers, setRecommendedUsers] = useState([])

  const fetcRecommendedProfiles = async() => {
    const { data } = await recommendedProfiles()
    console.log(data.recommendedProfiles)
    setRecommendedUsers(data.recommendedProfiles)
  }

  useEffect(() => {
    fetcRecommendedProfiles()
  }, [])

  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      { recommendedUsers?.map(({ ownedBy, picture}) => <SuggestionCard src={picture?.original.url} ownedBy={ownedBy} />) }
    </div>
  )
}

export default Suggested