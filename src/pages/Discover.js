import React, { useEffect } from "react";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Redux/Slices/BookSlices";
const Discover = () => {
  const books = useSelector((state) => state.books.discover);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  console.log(books);
  return (
    <PageLayout>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
