import React, { useContext } from "react";
import styles from "./Modal.module.css";
import BookContext from "../../Context/BookContext";
import CloseSvg from "../../Assets/close.svg";

const Modal = () => {
  const { openModal, itemModal } = useContext(BookContext);

  return (
    <div className={styles.modalMain}>
      <div className={styles.modalCard}>
        <button className={styles.closeButton} onClick={(e) => openModal()}>
          <img alt="Close Button" src={CloseSvg} />
        </button>
        <div>{itemModal.volumeInfo.description}</div>
        <div>{itemModal.volumeInfo.publishedDate}</div>
        <div>{itemModal.volumeInfo.pageCount}</div>
      </div>
    </div>
  );
};

export default Modal;
