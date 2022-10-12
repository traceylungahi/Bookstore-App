import { useEffect, useState } from "react";
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Search from "./Search";

function BookPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/books")
      .then((response) => response.json())
      .then((booksArray) => {
        setBooks(booksArray);
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

  const displayedBooks = books.filter((book) => {
    return book.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <AddBook onAddBook={handleAddBook} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BookList
        books={displayedBooks}
        onDeleteBook={handleDeleteBook}
        onUpdateBook={handleUpdateBook}
      />
    </main>
  );
}

export default BookPage;