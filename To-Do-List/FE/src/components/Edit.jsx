import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const initalstate={
    title:"",
    price:0,
    description:"",
    category:"",
    image:""
  }
  

const Edit = () => {
    const {id}=useParams()
    const[formdata,setformdata]=useState(initalstate)
    const getdata=()=>{
      axios.get(`http://localhost:8080/getproducts/${id}`)
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
        axios.put(`http://localhost:8080/update/${id}`, formdata)
       .then((res)=>{
        console.log(res)
        alert("updated")
       }).catch((err)=>{
        console.log(err)
       })
    }
    const {title,image,price,category,description}=formdata
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div style={{width:"80vh"}} className='edit-data'>
           <form onSubmit={(e)=>handlesubmit(e)}>
          <input name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder="Image" /> <br />
          <input  name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder="title" /> <br />
          <select style={{height:"40px"}}  name='category' value={category} onChange={(e)=>handlechange(e)}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input  name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder="Price" /> <br />
          <input name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder="description" /> <br />
          <input type="submit" />
        </form>
    </div>
  )
}

export default Edit
