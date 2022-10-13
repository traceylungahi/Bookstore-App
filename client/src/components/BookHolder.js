function BookHolder({ book, onDeleteBook, onUpdateBook }) {
    const { id, name, image, price, description, available: available } = book;
  
    function handleDeleteClick() {
      fetch(`/books/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          onDeleteBook(id);
        }
      });
    }
  
    function handleAvailableClick() {
      fetch(`/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ available: !available }),
      })
        .then((response) => response.json())
        .then((updatedBook) => {
          onUpdateBook(updatedBook);
        });
    }
  
    return (
      <li className="card">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <img src={image} alt={name} />
        <br /> 
        <button className="primary">Price: ${price}</button>
        <br /> 
        {available ? (
          <button className="primary" onClick={handleAvailableClick}>
            Available
          </button>
        ) : (
          <button onClick={handleAvailableClick}>Unavailable</button>
        )}
        <button className="primary" onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default BookHolder;