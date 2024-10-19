import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    fontFamily:"coromorent",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: '15px 30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px', 
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };
  return (
    <div style={navbarStyle}>
      <Link to={"/"} style={linkStyle}>Product</Link>
      <Link to={"/add"} style={linkStyle}>Addproduct</Link>
      <Link to={"/edit"} style={linkStyle}>Editproduct</Link>
    </div>
  )
}

export default Navbar

