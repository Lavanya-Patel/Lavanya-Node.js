import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
  const divstyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "20px",
    gap: "25px",
    height: "840px"
  }
  const productstyle = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    border: "2px solid black",
  }
  const divbuttonstyle = {
    display: "flex",
    marginLeft: "30%"
  }
  const buttonstyle1 = {
    width: "40px",
    alignItems: "center",
    marginRight: "20px",
    color: "black",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid black"
  }
  const buttonstyle2 = {
    backgroundColor: "red",
    color: "white",
    height: "30px",
    borderRadius: "5px"
  }

  const [Book, setBook] = useState([])

  const getBook = () => {
    axios.get(`http://localhost:8080/Book/getbook`)
      .then((res) => {
        setBook(res.data)
      })
      .catch((err) => {
        console.log((err))
      })
  }
  const handledelete = (id) => {
    axios.delete(`http://localhost:8080/Book/delete/${id}`)
      .then((res) => {
        console.log(res)
        alert("Deleted")
        getBook()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getBook()
  }, [])
  return (
    <div >

      <div className='data' style={divstyle}>
        {Book.map((el) => (
          <div key={el.id} style={productstyle}>
            <Link to={`/bookdetail/${el._id}`}>
              <img src={el.image} alt="" height={170} width={170} style={{ paddingLeft: "90px", paddingTop: "5px" }} /></Link>
            <h3 style={{ textAlign: "center" }}>{el.title}</h3>
            <h3 style={{ textAlign: "center" }}>{el.price}</h3>
            <p style={{ textAlign: "center" }}>{el.author}</p>
            <p>{el.description}</p>
            <div className='product-btns' style={divbuttonstyle}>
              <button style={buttonstyle1}><Link to={`/editbook/${el._id}`}>Edit</Link></button>
              <button style={buttonstyle2} onClick={() => handledelete(el._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BookList
