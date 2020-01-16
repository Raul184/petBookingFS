import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss';


const Nav = () => {
  return (
    <ul>
      <Link to="/"><h1>Naptilus Tech Interview</h1></Link> 
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  )
}

export default Nav;