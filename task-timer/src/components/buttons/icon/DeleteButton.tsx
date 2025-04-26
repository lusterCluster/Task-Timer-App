import React from "react";
import styles from "./Styles.module.css";
type Props = {
  onClick?: () => void;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick} type="button">
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
};

export default DeleteButton;
