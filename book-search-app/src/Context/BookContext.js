import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState();
  const [itemModal, setItemModal] = useState();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const getBook = async (title) => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}+terms`
      );
      setBookData(data.items);
    } catch {
      toast.error("Veri alinirken bir hata oluştu");
    }
  };

  const values = {
    setBookData,
    bookData,
    getBook,
    setItemModal,
    itemModal,
    setModal,
    modal,
    openModal,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
export default BookContext;
