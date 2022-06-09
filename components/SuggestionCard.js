import { goToProfile } from '../helpers/goToProfile'
import styles from '../styles/SuggestionCard.module.css'

function SuggestionCard({src, ownedBy}) {

  return (
    <div className={styles.card}>
      <img src={src} alt=""  onClick={() => goToProfile(ownedBy) }/>
    </div>
    
  )
}

export default SuggestionCard