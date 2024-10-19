import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../components/Addproduct'
import Product from '../components/product'
import Edit from '../components/edit'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product />}></Route>
        <Route path='/add' element={<Addproduct />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
