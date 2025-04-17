import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css';
import { navigation } from '../../store/navigation/navigation';

const Header:React.FC = () => {
  return (
    <header className={styles.appHeader}>
        <nav  className={styles.nav}>
           {navigation.map((item) => (
            <Link className={styles.navItem} key={item.path} to={item.path}>
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
            </Link>
           ))}
        </nav>
    </header>
  )
}


export default Header