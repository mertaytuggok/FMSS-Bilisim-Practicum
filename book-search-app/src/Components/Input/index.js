"use client";
import { useContext, useState } from "react";
import React from "react";
import styles from "./Input.module.css";
import SearchSvg from "../../Assets/inputlogo.svg";
import BookContext from "../../Context/BookContext";

const Input = () => {
  const { getBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    getBook(title);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formMain}>
      <input
        id="title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        placeholder="Book Title..."
      />
      <button className={styles.formButton}>
        <img className={styles.logo} alt="search" src={SearchSvg} />
      </button>
    </form>
  );
};

export default Input;
