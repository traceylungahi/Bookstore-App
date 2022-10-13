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
        <button className="primary">Price: ${price}</button>
        {/* {isInStock ? (
          <button className="primary" onClick={handleIsInStockClick}>
            In Stock
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Stock</button>
        )} */}
        <button className="primary" onClick={handleDeleteClick}>Delete</button>
        <br />
      </li>
    );
  }
  
  export default BookHolder;