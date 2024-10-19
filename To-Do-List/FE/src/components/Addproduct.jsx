import axios from 'axios';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const initialState = {
  id: "",
  title: "",
  price: "",
  description: "",
  category: "",
  image: ""
};

const Addproduct = () => {
  const [formdata, setFormdata] = useState(initialState);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const { image, title, price, category, description } = formdata;

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newProduct = {
      ...formdata,
      id: uuidv4() 
    };

    axios.post("http://localhost:8080/addproduct", newProduct)
      .then((res) => {
        console.log(res);
        alert("Data Added");
        setFormdata(initialState); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input name='image' value={image} onChange={handleChange} type="text" placeholder="Image" /> <br />
        <input name='title' value={title} onChange={handleChange} type="text" placeholder="Title" /> <br />
        <select style={{ height: "40px" }} name='category' value={category} onChange={handleChange}>
          <option value={""}>Select Your Category</option>
          <option value={"men's clothing"}>Men's Clothing</option>
          <option value={"Wine"}>Wine</option>
          <option value={"jewelery"}>Jewelry</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"women's clothing"}>Women's Clothing</option>
        </select>
        <input name='price' value={price} onChange={handleChange} type="text" placeholder="Price" /> <br />
        <input name='description' value={description} onChange={handleChange} type="text" placeholder="Description" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addproduct;