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
            <TwitterIcon className={styles.twitterIcon} link={''}/>
            <SidebarOption active text='Home' Icon ={HomeIcon} link={''}/>
            <SidebarOption text='Explore' Icon = {TagIcon} link={'/search'}/>
            <SidebarOption text='Communities' Icon ={PeopleAltIcon} link={''}/>
            <SidebarOption text='Notifications' Icon ={NotificationsNoneIcon} link={''}/>
            <SidebarOption text='Messages' Icon ={MailOutlineIcon} link={''}/>
            <SidebarOption text='Bookmarks' Icon = {BookmarkBorderIcon} link={''}/>
            <SidebarOption text='Profile' Icon ={PermIdentityIcon} link={'/profile/jj'}/>
            <SidebarOption text='More' Icon={MoreHorizIcon} link={''}/>
            <Button variant='outlined' className={styles.tweet} fullWidth onClick={connectWallet}>Connect wallet</Button>
        </div>
    )
}

export default Sidebar