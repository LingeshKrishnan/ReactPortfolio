import React from 'react'
import logo from "../Images/hireme.png"
import '../Navbar/Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__Logo"
      src= { logo }
      alt=""
      />
      <div className="navbar__nav">
        <div className="navbar__Option">
          <span className="navbar_Option_lineOne">
            Home<span className="sr-only">(Current)</span>
          </span>
        </div>
        <div className="navbar__Option">
          <a href="#experience"><span className="navbar_Option_lineOne">
            About Me
          </span></a>
        </div>
        <div className="navbar__Option">
          <span className="navbar_Option_lineOne">
            Skills
          </span>
        </div>
        <div className="navbar__Option">
          <span className="navbar_Option_lineOne">
            Portfolio
          </span>
        </div>
        <div className="navbar__Option">
          <span className="navbar_Option_lineOne">
            Contact
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
