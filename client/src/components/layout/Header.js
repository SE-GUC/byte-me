import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Partner</h1>
      <Link style={linkStyle} to="/SignUp">Sign up</Link> | <Link style={linkStyle} to="/Partner">View profile</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;


