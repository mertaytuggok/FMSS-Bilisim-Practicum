import React from "react";
import styles from "./ListMain.module.css";
import SearchSvg from "../../../Assets/inputlogo.svg";

const ListMain = () => {
  return (
    <div className={styles.ListMain}>
      {" "}
      <img className={styles.logo} src={SearchSvg} alt="Search Logo" />
      <span className={styles.ListMainTitle}>
        Please search for the title of the book you want to search.
      </span>
    </div>
  );
};

export default ListMain;
