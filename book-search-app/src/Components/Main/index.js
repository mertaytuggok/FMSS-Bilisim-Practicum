import React, { useContext } from "react";
import BookList from "./BookList";
import ListMain from "./ListMain";
import BookContext from "../../Context/BookContext";
import Modal from "../Modal";

const Main = () => {
  const { bookData, modal } = useContext(BookContext);
  return (
    <div>
      {modal && <Modal />}
      {bookData ? <BookList /> : <ListMain />}
    </div>
  );
};

export default Main;
