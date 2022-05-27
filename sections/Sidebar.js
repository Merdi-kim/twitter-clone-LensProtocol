import SidebarOption from '../components/SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'
import { createProfile } from '../lens/queries/createProfile'
import styles from '../styles/Sidebar.module.css'

function Sidebar() {
    const connectWallet = async() => {
        const ff = await createProfile()
        console.log(ff)
    }
    return (
        <div className={styles.sidebar}>
            <TwitterIcon className={styles.twitterIcon}/>
            <SidebarOption active text='Home' Icon ={HomeIcon}/>
            <SidebarOption text='Explore' Icon = {TagIcon}/>
            <SidebarOption text='Communities' Icon ={PeopleAltIcon}/>
            <SidebarOption text='Notifications' Icon ={NotificationsNoneIcon}/>
            <SidebarOption text='Messages' Icon ={MailOutlineIcon}/>
            <SidebarOption text='Bookmarks' Icon = {BookmarkBorderIcon}/>
            <SidebarOption text='Profile' Icon ={PermIdentityIcon}/>
            <SidebarOption text='More' Icon={MoreHorizIcon}/>
            <Button variant='outlined' className={styles.tweet} fullWidth onClick={connectWallet}>Connect wallet</Button>

        </div>
    )
}

export default Sidebar