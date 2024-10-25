import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    fontFamily:"coromorent",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#AB886D',
    width:"95%",
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
      <Link to={"/allbook"} style={linkStyle}>Allbook</Link>
      <Link to={"/addbook"} style={linkStyle}>AddBook</Link>
      <Link to={"/editbook"} style={linkStyle}>EditBook</Link>
    </div>
  )
}

export default Navbar
