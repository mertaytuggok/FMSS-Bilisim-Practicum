import React, { useContext, useState } from "react";
import styles from "./BookList.module.css";
import BookContext from "../../../Context/BookContext";

const BookList = () => {
  const { bookData, modal, setItemModal, openModal } = useContext(BookContext);

  const detailItem = (item) => {
    setItemModal(item);
    openModal(!modal);
  };
  return (
    <div className={styles.mainCard}>
      {bookData.map((item) => (
        <div key={item.id} className={styles.Card}>
          {" "}
          <img
            className={styles.images}
            src={item.volumeInfo.imageLinks.thumbnail}
            alt="Book Images"
          />
          <div className={styles.button}>
            <a href={item.volumeInfo.infoLink} rel="noreferrer" target="_blank">
              PREVİEW
            </a>
            <span>|</span>
            <button className={styles.button} onClick={(e) => detailItem(item)}>
              DETAİLS
            </button>
          </div>
          <div className={styles.title}>{item.volumeInfo.title}</div>
          <div className={styles.authors}>{item.volumeInfo.authors}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
