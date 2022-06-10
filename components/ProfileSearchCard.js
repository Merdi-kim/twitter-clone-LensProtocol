import { goToProfile } from '../helpers/goToProfile'
import { Avatar } from '@mui/material'
import styles from '../styles/ProfileSearchCard.module.css'

function ProfileSearchCard({src, handle, ownedBy}) {
  return (
    <div className={styles.card} onClick={() => goToProfile(ownedBy)}>
      <Avatar src={src}/>
      <h3>{handle}</h3>
    </div>
  )
}

export default ProfileSearchCard