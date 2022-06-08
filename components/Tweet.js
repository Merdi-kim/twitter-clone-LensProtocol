import React, {forwardRef} from 'react'
import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'
import styles from '../styles/Tweet.module.css'



const Tweet = forwardRef(({displayName,
    username,
    stats,
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
                            {displayName} {""} <span className={styles.headerSpecial}>@{username}</span> 
                        </h3>
                        <div className={styles.headerDescription}>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className={styles.footer}>
                  <section><ChatBubbleOutlineIcon fontSize='small'/> <span>{stats.totalAmountOfComments}</span> </section>
                   <section><RepeatIcon fontSize='small'/> <span>{stats.totalAmountOfMirrors}</span></section>
                  <section><FavoriteBorderIcon fontSize='small'/> <span>{stats.totalAmountOfCollects}</span></section>
                  <section><PublishIcon fontSize='small'/></section>
               </div>
            </div>

            
            
        </div>
    )
})

export default Tweet