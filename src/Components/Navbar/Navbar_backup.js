import React from "react";
import logo from "../Images/hireme.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () =>  {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark transparent">
          <div className="container">
            <a className="navbar-brand" href="#Contact_Section"><img calssName="logo"src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Portfolio_Section">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact_Section">Contact</a>
                </li>
                
                
              </ul>
              </div>
            </div>
        </nav>
    )
}
export default Navbar