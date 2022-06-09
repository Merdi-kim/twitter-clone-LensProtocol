import router from 'next/router'

function SuggestionCard({src, ownedBy}) {

  const style = {width:"300px", height:"300px", margin:"1rem", borderRadius:"12px", overflow:"hidden", border:"2px solid grey", flex:'none', cursor:"pointer"}

  const goToProfile = () => {
    router.push({
        pathname:`/profile/${ownedBy}`,
        query: {
            ownedBy
        }
    })
}

  return (
    <img src={src} alt="" style={style} onClick={goToProfile}/>
  )
}

export default SuggestionCard