import styles from '../styles/ProfileSearchCard.module.css'

function ProfileSearchCard({src, handle}) {
  return (
    <div className={styles.card}>
        <img src={src} alt={handle}/>
        <h3>{handle}</h3>
    </div>
  )
}

export default ProfileSearchCard