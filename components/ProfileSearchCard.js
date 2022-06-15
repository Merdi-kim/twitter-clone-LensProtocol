import { Avatar } from "@mui/material";
import { goToProfile } from "../lib/helpers/goToProfile";

import styles from "../styles/ProfileSearchCard.module.css";

const ProfileSearchCard = ({ src, handle, ownedBy }) => {
  return (
    <div className={styles.card} onClick={() => goToProfile(ownedBy)}>
      <Avatar src={src} />
      <h3>{handle}</h3>
    </div>
  );
};

export default ProfileSearchCard;
