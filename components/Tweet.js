import React, {forwardRef} from 'react'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'
import styles from '../styles/Tweet.module.css'



const Tweet = forwardRef(({displayName,
    username,
    verified,
    text,
    avatar,
    image}, ref) => {
    return (
        <div className={styles.tweet} ref = {ref}>
            <div className={styles.avatar}>
                <Avatar src={avatar}/>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h3>
                            {displayName} {""} <span className={styles.headerSpecial}>{verified && <VerifiedUserIcon className={styles.badge}/>}@{username}</span> 
                        </h3>
                        <div className={styles.headerDescription}>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className={styles.footer}>
                 <ChatBubbleOutlineIcon fontSize='small'/>
                 <RepeatIcon fontSize='small'/>
                 <FavoriteBorderIcon fontSize='small'/>
                 <PublishIcon fontSize='small'/>
               </div>
            </div>

            
            
        </div>
    )
})

export default Tweet