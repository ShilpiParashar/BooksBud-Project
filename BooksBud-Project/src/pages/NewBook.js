import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import BookForm from "../components/books/BookForm";
import useHttp from "../hooks/use-http";
import { addBook } from "../lib/api";

const NewBook = () => {
  const { sendRequest, status } = useHttp(addBook);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/books");
    }
  }, [status, history]);

  const addBookHandler = (bookData) => {
    sendRequest(bookData);
  };

  return (
    <BookForm isLoading={status === "pending"} onAddBook={addBookHandler} />
  );
};
export default NewBook;
