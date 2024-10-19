import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const divstyle={
    display: "grid",
     gridTemplateColumns: "repeat(3, 1fr)",
      gap: "5px" 
  }
  const productstyle ={
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }
  const divbuttonstyle ={
    display: "flex", 
    marginLeft: "30%"
      }
const buttonstyle1 ={
  width: "40px", 
  alignItems: "center",
   border: "1px solid black" 
}
const buutonstyle2 ={
   backgroundColor: "red",
    color: "white"
}

  const [product, setproduct] = useState([])

  const getdata = () => {
    axios.get(`http://localhost:8080/getproducts`)
      .then((res) => {
        setproduct(res.data)
      })
      .catch((err) => {
        console.log((err))
      })
  }
  const handledelete=(id)=>{
 axios.delete(`http://localhost:8080/delete/${id}`)
 .then((res)=>{
  alert("Deleted")
  getdata()
 })
 .catch((err)=>{
  console.log(err)
 })
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div >
 
      <div className='data' style={divstyle}>
        {product.map((el) => (
          <div key={el.id} style={productstyle}>
              <img src={el.image} alt="" height={200} width={200}/>
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <div className='product-btns' style={divbuttonstyle}>
              <button style={buttonstyle1}><Link to={`/edit/${el.id}`}>Edit</Link></button>
              <button style={buutonstyle2} onClick={() => handledelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  )
}


export default Product
