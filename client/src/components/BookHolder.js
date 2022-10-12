function BookHolder({ book, onDeleteBook, onUpdateBook }) {
    const { id, name, image, price } = book;
  
    function handleDeleteClick() {
      fetch(`/books/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteBook(id);
        }
      });
    }
  
    function handleIsInStockClick() {
      fetch(`/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_in_stock: !isInStock }),
      })
        .then((response) => response.json())
        .then((updatedBook) => {
          onUpdateBook(updatedBook);
        });
    }
  
    return (
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {isInStock ? (
          <button className="primary" onClick={handleIsInStockClick}>
            In Stock
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Stock</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default BookHolder;