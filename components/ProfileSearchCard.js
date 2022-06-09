import { goToProfile } from '../helpers/goToProfile'
import styles from '../styles/ProfileSearchCard.module.css'

function ProfileSearchCard({src, handle, ownedBy}) {
  return (
    <div className={styles.card} onClick={() => goToProfile(ownedBy)}>
        <img src={src} alt={handle}/>
        <h3>{handle}</h3>
    </div>
  )
}

export default ProfileSearchCard