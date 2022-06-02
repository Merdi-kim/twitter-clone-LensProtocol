import Link from 'next/link';
import styles from '../styles/SidebarOption.module.css'

function SidebarOption({active,text, Icon, link}) {

  return (
    <div className={`${styles.sidebarOption} ${active && styles.active}`}>
      <Link href={link} passHref className={styles.icon}>
        <Icon/>
      </Link>      
      <Link href={link} passHref>
        <h2>{text}</h2>
      </Link>
    </div>
  )
}

export default SidebarOption