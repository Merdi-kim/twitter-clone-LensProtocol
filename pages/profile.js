import styles from '../styles/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <img className={styles.coverPicture} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='cover'/>
        <img className={styles.picture} src='' alt='profile'/>
      </div>
    </div>
  )
}

export default Profile