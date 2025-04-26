import React from "react";
import styles from "./Styles.module.css";
type Props = {
  onClick?: () => void;
};
const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick} type="button">
      <span className="material-symbols-outlined">add</span>
    </button>
  );
};

export default AddButton;
