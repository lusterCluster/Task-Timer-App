import React from "react";
import styles from "./Styles.module.css";
type Props = {
  onClick?: () => void;
};

const EditButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick} type="button">
      <span className="material-symbols-outlined">edit</span>
    </button>
  );
};

export default EditButton;
