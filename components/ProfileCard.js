import { useState, useEffect } from "react";
import router from "next/router";
import { useDisconnect } from "wagmi";
import { Avatar } from "@mui/material";
import { getProfiles } from "../lib/lens/requests/profile";
import styles from "../styles/Profile.module.css";

const ProfileCard = ({ isMine, userAddress }) => {
  const [user, setUser] = useState({
    profile: "",
    handle: "",
    stats: null,
  });
  const { disconnect } = useDisconnect();

  const checkProfile = async (userAddress) => {
    const { data } = await getProfiles(userAddress);
    const { handle, picture, stats } = data?.profiles?.items[0];
    setUser({ ...user, handle, profile: picture?.original?.url, stats });
  };

  useEffect(() => {
    if (!userAddress) {
      router.push("/");
    }
    checkProfile(userAddress);
  }, [userAddress]);

  const disconnectAccount = () => {
    disconnect();
  };

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <img
          className={styles.coverPicture}
          src="https://static.vecteezy.com/system/resources/thumbnails/004/288/148/small/sale-banner-poster-flyer-design-with-pattern-on-dark-black-canvas-and-grunge-texture-background-modern-design-backdrop-template-for-advertisement-social-and-fashion-ads-free-vector.jpg"
          alt="cover"
        />
        <Avatar className={styles.picture} src={user?.profile} />
        <div className={styles.info}>
          <h3>{user?.handle}</h3>
          <div className={styles.stats}>
            <section className={styles.stat}>
              <span>{user?.stats?.totalFollowers}</span>
              <span>Followers</span>
            </section>
            <section className={styles.stat}>
              <span>{user?.stats?.totalFollowing}</span>
              <span>Following</span>
            </section>
            <section className={styles.stat}>
              <span>{user?.stats?.totalPublications}</span>
              <span>Publications</span>
            </section>
          </div>
        </div>
        {isMine && (
          <button className="disconnect" onClick={disconnectAccount}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
