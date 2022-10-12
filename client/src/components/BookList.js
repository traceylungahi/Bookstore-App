import BookHolder from './BookHolder';

function BookList({ books, onDeleteBook, onUpdateBook }) {
  return (
    <ul className="cards">
      {books.map((book) => {
        return (
          <BookHolder
            key={book.id}
            book={book}
            onDeleteBook={onDeleteBook}
            onUpdateBook={onUpdateBook}
          />
        );
      })}
    </ul>
  );
}

export default BookList;