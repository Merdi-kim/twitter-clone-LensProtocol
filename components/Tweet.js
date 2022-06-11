import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'
import styles from '../styles/Tweet.module.css'
import { goToProfile} from '../lib/helpers/goToProfile'



const Tweet = ({displayName, username, stats, text, avatar, ownedBy, image}) => {

    return (
        <div className={styles.tweet}>
            <div className={styles.avatar} onClick={() => goToProfile(ownedBy) }>
                <Avatar src={avatar}/>
            </div>
           
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h3>
                            {displayName} {""} <span className={styles.headerSpecial}>@{username}</span> 
                        </h3>
                        <div className={styles.headerDescription}>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="tweet image" />
                <div className={styles.footer}>
                  <section><ChatBubbleOutlineIcon fontSize='small'/> <span>{stats.totalAmountOfComments}</span> </section>
                   <section><RepeatIcon fontSize='small'/> <span>{stats.totalAmountOfMirrors}</span></section>
                  <section><FavoriteBorderIcon fontSize='small'/> <span>{stats.totalAmountOfCollects}</span></section>
                  <section><PublishIcon fontSize='small'/></section>
               </div>
            </div>

            
            
        </div>
    )
}

export default Tweet