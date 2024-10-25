import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
  const descriptionstyle={
    display:"flex", 
      justifyContent:"center",
      textAlign:"center",
      marginTop:"10px"
  }
    const[Bookdetail,setBookdetail]=useState({})
    const params=useParams()

    const getonebookdetail=()=>{
 axios.get(`http://localhost:8080/Book/Singlebook/${params.id}`)
 .then((res)=>setBookdetail(res.data))
 .catch((err)=>console.log(err))
    }
    useEffect(()=>{
      getonebookdetail()
    },[])
  return (
    <div>
      <div style={descriptionstyle}>
        <div style={{width:"54%"  ,height:"450px"}}>
            <h1>{Bookdetail.id}</h1>
            <img src={Bookdetail.image} alt="" />
            <h3>{Bookdetail.title}</h3>
            <h4>{Bookdetail.description}</h4>
            <p>{Bookdetail.price}</p>
            <h4>{Bookdetail.author}</h4>
            <p>{Bookdetail.year}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
