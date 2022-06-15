import SidebarOption from "../SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.twitterIcon} />
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={TagIcon} />
      <SidebarOption
        text="Suggested"
        Icon={PeopleAltIcon}
        link={"/suggested"}
      />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} link={"/profile"} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <ConnectButton
        label="Signin here"
        showBalance={false}
        accountStatus={""}
      />
    </div>
  );
};

export default Sidebar;
