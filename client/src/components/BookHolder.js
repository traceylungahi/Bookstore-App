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
        <h2>{name}</h2>
        <h4>{description}</h4>
        <img src={image} alt={name} />
        <br /> 
        <button className="primary">Price: ${price}</button>
        <br /> 
        {/* {isInStock ? (
          <button className="primary" onClick={handleIsInStockClick}>
            In Stock
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Stock</button>
        )} */}
        <button className="primary" onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default BookHolder;