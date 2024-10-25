import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import BookEdit from "../components/BookEdit"
import BookDetail from '../components/BookDetail'

const Allroutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/allbook' element={<BookList />}></Route>
        <Route path='/addbook' element={<BookForm />}></Route>
        <Route path='editbook/:id' element={<BookEdit />}></Route>
        <Route path='bookdetail/:id' element={<BookDetail />}></Route>
        </Routes> 
    </div>
  )
}

export default Allroutes
