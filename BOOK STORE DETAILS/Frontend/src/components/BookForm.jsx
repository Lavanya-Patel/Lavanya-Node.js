import axios from 'axios';
import React, { useState } from 'react';


const initialState = {
  title: "",
  price: "",
  author: "",
  image: "",
  year:"",
  description: "",
  ISBN:""

};

const BookForm= () => {
  const [formdata, setformdata] = useState(initialState);

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const { image, title, price, author, year,description,ISBN} = formdata;

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newProduct = {
      ...formdata,
    };

    axios.post("http://localhost:8080/Book/create", newProduct)
      .then((res) => {
        console.log(res);
        alert("Data Added");
        setformdata(initialState); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='image' value={image} onChange={handleChange} type="text" placeholder="Image" /> <br />
        <input name='title' value={title} onChange={handleChange} type="text" placeholder="Title" /> <br />
        <input name='price' value={price} onChange={handleChange} type="text" placeholder="Price" /> <br />
        <input name='author' value={author} onChange={handleChange} type="text" placeholder="author" /> <br />
        <input name='year' value={year} onChange={handleChange} type="text" placeholder="year" /> <br />
        <input name='description' value={description} onChange={handleChange} type="text" placeholder="description" /> <br />
        <input name='ISBN' value={ISBN} onChange={handleChange} type="text" placeholder="ISBN" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default BookForm;