import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initalstate={
    title:"",
    price:0,
    author:"",
    year:"",
    image:""
  }
  

const BookEdit = () => {
    const {id}=useParams()

    const[formdata,setformdata]=useState(initalstate)
    const getBook=()=>{
      axios.get(`http://localhost:8080/Book/getonebook/${id}`)
        .then((res)=>{
            setformdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8080/Book/updatebook/${id}`, formdata)
       .then((res)=>{
        console.log(res)
        alert("updated")
        
       }).catch((err)=>{
        console.log(err)
       })
    }
    const {title,image,price,author,year}=formdata
    useEffect(()=>{
        getBook()
    },[])
  return (
    <div style={{width:"80vh"}} className='edit-data'>
           <form onSubmit={(e)=>handlesubmit(e)}>
          <input name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder="Image" /> <br />
          <input  name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder="title" /> <br />
          <input  name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder="Price" /> <br />
          <input name='author' value={author} onChange={(e)=>handlechange(e)} type="text" placeholder="author" /> <br />
          <input name='year' value={year} onChange={(e)=>handlechange(e)} type="text" placeholder="year" /> <br />
          <input type="submit" />
        </form>
    </div>
  )
}

export default  BookEdit
