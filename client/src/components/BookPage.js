import React, { useEffect, useState } from "react";
import AddBook from './AddBook';
import BookList from './BookList';
// import LogIn from "./LogIn";
// import SignUp from "./SignUp";
// import Search from "./Search";

function BookPage() {
  const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/books")
      .then((response) => response.json())
      .then((booksArray) => {
        setBooks(booksArray);
        console.log(booksArray)
      });
  }, []);
  

  function handleAddBook(newBook) {
    const updatedBooksArray = [...books, newBook];
    setBooks(updatedBooksArray);
  }

  function handleDeleteBook(id) {
    const updatedBooksArray = books.filter((book) => book.id !== id);
    setBooks(updatedBooksArray);
  }

  function handleUpdateBook(updatedBook) {
    const updatedBooksArray = books.map((book) => {
      return book.id === updatedBook.id ? updatedBook : book;
    });
    setBooks(updatedBooksArray);
  }

//   const displayedBooks = books.filter((book) => {
//     return book.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

  return (
    <main>
      {/* <SignUp />
      <LogIn />  */}
      <AddBook onAddBook={handleAddBook} />
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onUpdateBook={handleUpdateBook}
      />
    </main>
  );
}

export default BookPage;