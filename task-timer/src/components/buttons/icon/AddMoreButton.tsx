import React from "react";
import styles from "./Styles.module.css";
type Props = {
  onClick: (e: any) => void;
};

const AddMoreButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick} type="button">
      <span className="material-symbols-outlined">more_vert</span>
    </button>
  );
};

export default AddMoreButton;
