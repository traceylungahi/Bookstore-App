function BookHolder({ book, onDeleteBook }) {
    const { id, name, image, price, description } = book;
  
    function handleDeleteClick() {
      fetch(`/books/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          onDeleteBook(id);
        }
      });
    }
  
    // function handleIsInStockClick() {
    //   fetch(`/books/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify
    //   })
    //     .then((response) => response.json())
    //     .then((updatedBook) => {
    //       onUpdateBook(updatedBook);
    //     });
    // }
  
    return (
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <h2>{description}</h2>
        <p>Price: {price}</p>
        {/* {isInStock ? (
          <button className="primary" onClick={handleIsInStockClick}>
            In Stock
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Stock</button>
        )} */}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default BookHolder;