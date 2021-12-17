import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/hireme.png"
import '../Navbar/Navbar.css'
import Portfolios from '../Portfolio/Portfolios/Portfolios'

function Navbar() {
  return (
    
    <div className="navbar">
      <img className="navbar__Logo"
        src={logo}
        alt=""
      />
      <div className="navbar__nav">
        <div className="navbar__Option">
          <a href='/'>
          <span className="navbar_Option_lineOne">
            Home<span className="sr-only">(Current)</span>
          </span>
          </a>
        </div>
        <div className="navbar__Option">
          <a href="#experience"><span className="navbar_Option_lineOne">
            About Me
          </span></a>
        </div>
        <div className="navbar__Option">
          <a href='#Documents'>
          <span className="navbar_Option_lineOne">
            Documents
          </span>
          </a>
        </div>
        <Link to="/portfolio">
        <div className="navbar__Option">
          <span className="navbar_Option_lineOne">
            Portfolio
          </span>
        </div>
        </Link>
        <div className="navbar__Option">
          <a href='#Contact_Section'>
          <span className="navbar_Option_lineOne">
            Contact
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
