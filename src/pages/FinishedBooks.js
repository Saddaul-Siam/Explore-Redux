import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import Book from "../components/Book/Book";
import { useSelector } from "react-redux";

const FinishedBooks = () => {
  const books = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>
      {books.length === 0 && (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default FinishedBooks;
