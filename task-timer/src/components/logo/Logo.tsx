import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";
const Logo = () => {
  return <img className={styles.logo} src={logo} alt="Logo" />;
};

export default Logo;
