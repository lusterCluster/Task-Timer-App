import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { navigation } from "../../store/navigation/navigation";
import { appBar } from "../../store/navigation/appBar";
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.appBar}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        {appBar.map((item) => (
          <Link className={styles.navItem} key={item.path} to={item.path}>
            <span className="material-symbols-outlined">{item.icon}</span>
          </Link>
        ))}
      </header>
      <nav className={styles.nav}>
        {navigation.map((item) => (
          <Link className={styles.navItem} key={item.path} to={item.path}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
