import React, { useState } from "react";

function AddBook ({ onAddBook }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function handleClick(event) {
        event.preventDefault()
        const newBook = {
          name,
          image, 
          description,
          price,
        } 

        fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newBook),
        })
        .then((response) => response.json())
        .then((newBook) => onAddBook(newBook));
    }

    return (
        <div className="New-book">
            <h4>Add Book</h4>
            <form onClick={handleClick}>
                <input 
                  type="text"
                  name="name"
                  placeholder="Book name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Descriprion"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={price}
                  onChange={(event) => setPrice((event.target.value))}
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
 export default AddBook;