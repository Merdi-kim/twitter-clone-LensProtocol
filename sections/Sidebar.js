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
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Sidebar.module.css'

function Sidebar() {

    const { data:userAddress } = useAccount()

    return (
        <div className={styles.sidebar}>
            <TwitterIcon className={styles.twitterIcon} link={'/'}/>
            <SidebarOption active text='Home' Icon ={HomeIcon} link={'/'}/>
            <SidebarOption text='Explore' Icon = {TagIcon} link={'/search'}/>
            <SidebarOption text='Communities' Icon ={PeopleAltIcon} link={'/'}/>
            <SidebarOption text='Notifications' Icon ={NotificationsNoneIcon} link={'/'}/>
            <SidebarOption text='Messages' Icon ={MailOutlineIcon} link={'/'}/>
            <SidebarOption text='Bookmarks' Icon = {BookmarkBorderIcon} link={'/'}/>
            <SidebarOption text='Profile' Icon ={PermIdentityIcon} link={'/profile'}/>
            <SidebarOption text='More' Icon={MoreHorizIcon} link={'/'}/>
            <ConnectButton label='Signin here' showBalance={false} accountStatus={''}/>
        </div>
    )
}

export default Sidebar