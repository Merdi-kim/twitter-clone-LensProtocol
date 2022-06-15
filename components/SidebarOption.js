import Link from "next/link";
import styles from "../styles/SidebarOption.module.css";

const SidebarOption = ({ active, text, Icon, link }) => {
  return (
    <div className={`${styles.sidebarOption} ${active && styles.active}`}>
      <Link href={link ? link : "/"} passHref>
        <Icon className={styles.icon} />
      </Link>
      <Link href={link ? link : "/"} passHref>
        <h2>{text}</h2>
      </Link>
    </div>
  );
};

export default SidebarOption;
